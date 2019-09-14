package clay.resources;


import haxe.io.Bytes;
import kha.arrays.Float32Array;
import clay.system.ResourceManager;


class AudioResource extends Resource {


	public var sound:kha.Sound;

	public var duration(get, never):Float;
	public var channels(get, never):Int;

	public var compressedData(get, set):Bytes;
	public var uncompressedData(get, set):kha.arrays.Float32Array;


	public function new(?_sound:kha.Sound) {

		if(_sound == null) {
			_sound = new kha.Sound();
		}

		sound = _sound;

		resourceType = ResourceType.audio;
		
	}

	override function unload() {

		sound.unload();
		
	}

	override function memoryUse() {
		
        return sound.uncompressedData.length * sound.channels;
        
	}

	inline function get_duration() return sound.length;
	inline function get_channels() return sound.channels;

	inline function get_compressedData() return sound.compressedData;
	inline function set_compressedData(v:Bytes) return sound.compressedData = v;

	inline function get_uncompressedData() return sound.uncompressedData;
	inline function set_uncompressedData(v:Float32Array) return sound.uncompressedData = v;


}
