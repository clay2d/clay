package clay.events;



@:allow(clay.input.Mouse)
class MouseEvent implements IEvent {


	public static inline var MOUSE_UP:EventType<MouseEvent>;
	public static inline var MOUSE_DOWN:EventType<MouseEvent>;
	public static inline var MOUSE_MOVE:EventType<MouseEvent>;
	public static inline var MOUSE_WHEEL:EventType<MouseEvent>;


	public var x(default, null):Int = 0;
	public var y(default, null):Int = 0;
	public var xrel(default, null):Int = 0;
	public var yrel(default, null):Int = 0;
	public var wheel(default, null):Int = 0;

	public var button(default, null):MouseButton = MouseButton.none;
	public var state(default, null):EventType<MouseEvent> = MouseEvent.MOUSE_UP;

	
	function new() {}

	inline function set(x:Int, y:Int, xrel:Int, yrel:Int, wheel:Int, state:EventType<MouseEvent>, button:MouseButton) {
		
		this.x = x;
		this.y = y;
		this.xrel = xrel;
		this.yrel = yrel;
		this.wheel = wheel;
		this.state = state;
		this.button = button;

	}

}

@:enum abstract MouseButton(Int) from Int to Int {

    var none   	= -1;
    var left   	= 0;
    var right  	= 1;
    var middle 	= 2;
    var extra1 	= 3;
    var extra2 	= 4;
    var extra3 	= 5;
    var extra4 	= 6;

}
