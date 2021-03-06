package clay.graphics;

import clay.math.Vector2;
import clay.math.FastMatrix3;
import clay.utils.Math;
import clay.graphics.Texture;

class Camera {

	public var x:Float = 0;
	public var y:Float = 0;

	public var width:Float = 0;
	public var height:Float = 0;

	public var rotation:Float = 0;

	public var originX:Float = 0;
	public var originY:Float = 0;

	public var offsetX:Float = 0;
	public var offsetY:Float = 0;

	public var scaleX:Float = 1;
	public var scaleY:Float = 1;

	public var zoom:Float = 1;

	public var projection:FastMatrix3 = new FastMatrix3();
	public var view:FastMatrix3 = new FastMatrix3();
	public var invProjectionView:FastMatrix3 = new FastMatrix3();

	public function new(x:Float = 0, y:Float = 0, width:Float = 0, height:Float = 0) {
		this.x = x;
		this.y = y;
		this.width = width > 0 ? width : Clay.window.width;
		this.height = height > 0 ? height : Clay.window.height;
		update();
	}

	public function update() {
		if (Texture.renderTargetsInvertedY) {
			projection.orto(0, width, 0, height);
		} else {
			projection.orto(0, width, height, 0);
		}

		view.setTransform(x+offsetX, y+offsetY, Math.radians(rotation), scaleX*zoom, scaleY*zoom, originX, originY, 0, 0);

		invProjectionView.copyFrom(view);
		invProjectionView.invert();

		projection.append(invProjectionView);
	}

	public function screenToWorld(v:Vector2, ?into:Vector2):Vector2 {
		if(into == null) into = new Vector2();
		into.set(view.getTransformX(v.x, v.y), view.getTransformY(v.x, v.y));
		return into;
	}

	public function worldToScreen(v:Vector2, ?into:Vector2):Vector2 {
		if(into == null) into = new Vector2();
		into.set(invProjectionView.getTransformX(v.x, v.y), invProjectionView.getTransformY(v.x, v.y));
		return into;
	}

	public function pointInside(px:Float, py:Float) {
		// convert world to screen coords
		var tmp:Float = px;
		px = view.getTransformX(px, py);
		py = view.getTransformY(tmp, py);

		if(px < 0 || px > width) return false;
		if(py < 0 || py > height) return false;

		return true;
	}
	
	public function rectangleInside(rx:Float, ry:Float, rw:Float, rh:Float) {
		// convert world to screen coords
		var minX = view.getTransformX(rx, ry);
		var minY = view.getTransformY(rx, ry);

		var maxX = view.getTransformX(rx+rw, ry+rh);
		var maxY = view.getTransformY(rx+rw, ry+rh);

		if (x + width < minX || x > maxX) return false;
		if (y + height < minY || y > maxY) return false;

		return true;
	}

	public function circleInside(cx:Float, cy:Float, cr:Float) {
		// convert world to screen coords
		cr = view.getTransformY(0, cr); // TODO: probably wrong
		var tmp:Float = cx;
		cx = view.getTransformX(cx, cy);
		cy = view.getTransformY(tmp, cy);

		var cpX:Float = cx;
		var cpY:Float = cy;

		if (cpX < x) cpX = x;
		if (cpX > x + width) cpX = x + width;
		if (cpY < y) cpY = y;
		if (cpY > y + height) cpY = y + height;

	    var diffX:Float = cx - cpX;
	    var diffY:Float = cy - cpY;

	    return (diffX * diffX + diffY * diffY < cr * cr);
	}

	
}