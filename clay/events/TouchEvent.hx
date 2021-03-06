package clay.events;

import clay.utils.EventType;

@:allow(clay.input.Touch)
class TouchEvent implements IEvent{

	static public inline var TOUCH_UP:EventType<TouchEvent>;
	static public inline var TOUCH_DOWN:EventType<TouchEvent>;
	static public inline var TOUCH_MOVE:EventType<TouchEvent>;

	public var id(default, null):Int = 0;

	public var x(default, null):Int = 0;
	public var y(default, null):Int = 0;
	public var dx(default, null):Int = 0;
	public var dy(default, null):Int = 0;

	public var state(default, null):EventType<TouchEvent> = TouchEvent.TOUCH_UP;

	public function new(id:Int) {
		this.id = id;
	}

	inline function set(x:Int, y:Int, dx:Int, dy:Int, state:EventType<TouchEvent>) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.state = state;
	}

}
