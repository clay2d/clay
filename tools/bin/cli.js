// Generated by Haxe 3.4.7
// if (process.version < "v4.0.0") console.warn("Module " + (typeof(module) == "undefined" ? "" : module.filename) + " requires node.js version 4.0.0 or higher");
(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var CLI = function() { };
CLI.__name__ = true;
CLI.main = function() {
	var args = process.argv.slice(2);
	CLI.user_dir = process.cwd();
	CLI.engine_dir = js_node_Path.resolve(__dirname,"../../");
	CLI.init();
	if(args.length == 0) {
		var _this = CLI.command_map;
		var c = new haxe_ds__$StringMap_StringMapIterator(_this,_this.arrayKeys());
		while(c.hasNext()) {
			var c1 = c.next();
			CLI.print("" + c1.name + "\t " + c1.usage);
		}
		return;
	}
	CLI.process_args(args);
};
CLI.print = function(msg) {
	console.log(msg);
};
CLI.error = function(msg) {
	console.log(msg);
	process.exit(1);
};
CLI.process_args = function(args) {
	var cname = args.shift();
	CLI.run_command(cname,args);
};
CLI.run_command = function(cname,args) {
	var _this = CLI.command_map;
	var cmd = __map_reserved[cname] != null ? _this.getReserved(cname) : _this.h[cname];
	if(cmd == null) {
		CLI.print("Unknown command");
		return;
	}
	cmd.execute(args);
};
CLI.init = function() {
	CLI.command_map = new haxe_ds_StringMap();
	var this1 = CLI.command_map;
	var value = new commands_Init();
	var _this = this1;
	if(__map_reserved["init"] != null) {
		_this.setReserved("init",value);
	} else {
		_this.h["init"] = value;
	}
	var this2 = CLI.command_map;
	var value1 = new commands_Help();
	var _this1 = this2;
	if(__map_reserved["help"] != null) {
		_this1.setReserved("help",value1);
	} else {
		_this1.h["help"] = value1;
	}
	var this3 = CLI.command_map;
	var value2 = new commands_Build();
	var _this2 = this3;
	if(__map_reserved["build"] != null) {
		_this2.setReserved("build",value2);
	} else {
		_this2.h["build"] = value2;
	}
	var this4 = CLI.command_map;
	var value3 = new commands_Run();
	var _this3 = this4;
	if(__map_reserved["run"] != null) {
		_this3.setReserved("run",value3);
	} else {
		_this3.h["run"] = value3;
	}
	var this5 = CLI.command_map;
	var value4 = new commands_Launch();
	var _this4 = this5;
	if(__map_reserved["launch"] != null) {
		_this4.setReserved("launch",value4);
	} else {
		_this4.h["launch"] = value4;
	}
	var this6 = CLI.command_map;
	var value5 = new commands_Server();
	var _this5 = this6;
	if(__map_reserved["server"] != null) {
		_this5.setReserved("server",value5);
	} else {
		_this5.h["server"] = value5;
	}
	var this7 = CLI.command_map;
	var value6 = new commands_Clear();
	var _this6 = this7;
	if(__map_reserved["clear"] != null) {
		_this6.setReserved("clear",value6);
	} else {
		_this6.h["clear"] = value6;
	}
};
var Command = function(_name,_usage) {
	this.name = _name;
	this.usage = _usage;
};
Command.__name__ = true;
Command.prototype = {
	execute: function(args) {
	}
};
var Config = function() { };
Config.__name__ = true;
Config.create_khafile = function(config) {
	var project = config.project;
	var compiler = config.compiler;
	var kfile = "let p = new Project(\"" + project.title + "\");\n";
	var _g = 0;
	var _g1 = project.sources;
	while(_g < _g1.length) {
		var s = _g1[_g];
		++_g;
		kfile += "p.addSources(\"" + s + "\");\n";
	}
	kfile += "p.addLibrary(\"" + CLI.engine_name + "\");\n";
	var _g2 = 0;
	var _g11 = project.libraries;
	while(_g2 < _g11.length) {
		var s1 = _g11[_g2];
		++_g2;
		kfile += "p.addLibrary(\"" + s1 + "\");\n";
	}
	var _g3 = 0;
	var _g12 = project.shaders;
	while(_g3 < _g12.length) {
		var s2 = _g12[_g3];
		++_g3;
		kfile += "p.addShaders(\"" + s2 + "\");\n";
	}
	kfile += "p.addShaders(\"" + haxe_io_Path.join([CLI.engine_dir,"assets/shaders"]) + "\");\n";
	if(config.input != null) {
		if(config.input.mouse) {
			kfile += "p.addDefine(\"use_mouse_input\");\n";
		}
		if(config.input.keyboard) {
			kfile += "p.addDefine(\"use_keyboard_input\");\n";
		}
		if(config.input.gamepad) {
			kfile += "p.addDefine(\"use_gamepad_input\");\n";
		}
		if(config.input.touch) {
			kfile += "p.addDefine(\"use_touch_input\");\n";
		}
		if(config.input.pen) {
			kfile += "p.addDefine(\"use_pen_input\");\n";
		}
	} else {
		kfile += "p.addDefine(\"use_mouse_input\");\n";
		kfile += "p.addDefine(\"use_keyboard_input\");\n";
		kfile += "p.addDefine(\"use_gamepad_input\");\n";
		kfile += "p.addDefine(\"use_touch_input\");\n";
	}
	var _g4 = 0;
	var _g13 = project.defines;
	while(_g4 < _g13.length) {
		var s3 = _g13[_g4];
		++_g4;
		kfile += "p.addDefine(\"" + s3 + "\");\n";
	}
	var _g5 = 0;
	var _g14 = compiler.parameters;
	while(_g5 < _g14.length) {
		var s4 = _g14[_g5];
		++_g5;
		kfile += "p.addParameter(\"" + s4 + "\");\n";
	}	
	var fp = haxe_io_Path.join([CLI.engine_dir,"assets/fonts"]);
	kfile += "p.addAssets(\"" + fp + "\", {destination: \"assets/{name}\", noprocessing: true, notinlist: true});\n";
	var _g6 = 0;
	var _g15 = project.assets;
	while(_g6 < _g15.length) {
		var s5 = _g15[_g6];
		++_g6;
		kfile += "p.addAssets(\"" + s5 + "/**\", {nameBaseDir: \"" + s5 + "\", destination: \"" + s5 + "/{dir}/{name}\", name: \"{dir}/{name}\", noprocessing: true, notinlist: true});\n";
	}
	if(config.html5 != null) {
		kfile += "p.targetOptions.html5.canvasId = \"" + config.html5.canvas + "\";\n";
		kfile += "p.targetOptions.html5.scriptName = \"" + config.html5.script + "\";\n";
		kfile += "p.targetOptions.html5.webgl = " + Std.string(config.html5.webgl) + ";\n";
	}
	kfile += "resolve(p);";
	return kfile;
};
Config.get = function() {
	var config_path = haxe_io_Path.join([CLI.user_dir,"project.yml"]);
	if(!sys_FileSystem.exists(config_path)) {
		CLI.error("Cant find project.yml in: " + CLI.user_dir);
	}
	var data = js_node_Fs.readFileSync(config_path,{ encoding : "utf8"});
	var config = Yaml.safeLoad(data);
	return config;
};
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = true;
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var Sys = function() { };
Sys.__name__ = true;
Sys.systemName = function() {
	var _g = process.platform;
	switch(_g) {
	case "darwin":
		return "Mac";
	case "freebsd":
		return "BSD";
	case "linux":
		return "Linux";
	case "win32":
		return "Windows";
	default:
		var other = _g;
		return other;
	}
};
var Yaml = require("js-yaml");
var commands_Build = function() {
	this.audio = ["wasapi","directsound"];
	this.linux_graphics = ["vulkan","opengl"];
	this.uwp_graphics = ["direct3d11","direct3d12"];
	this.windows_graphics = ["direct3d9","direct3d11","direct3d12","vulkan","opengl"];
	Command.call(this,"build","build current project: build <target> [--debug]");
};
commands_Build.__name__ = true;
commands_Build.__super__ = Command;
commands_Build.prototype = $extend(Command.prototype,{
	execute: function(args) {
		if(args.length == 0) {
			CLI.error("Target not defined");
		}
		var config = Config.get();
		config.target = args[0];
		if(config.target != "all" && CLI.targets.indexOf(config.target) == -1) {
			CLI.error("Unknown target, use: [all," + CLI.targets.join(",") + "]");
		}
		config.debug = false;
		config.onlydata = false;
		var _g = 0;
		while(_g < args.length) {
			var a = args[_g];
			++_g;
			switch(a) {
			case "--debug":
				config.debug = true;
				break;
			case "--onlydata":
				config.onlydata = true;
				break;
			}
		}
		var build_path = haxe_io_Path.join([CLI.user_dir,"build"]);
		if(!sys_FileSystem.exists(build_path)) {
			sys_FileSystem.createDirectory(build_path);
		}
		var khafile = Config.create_khafile(config);
		js_node_Fs.writeFileSync(haxe_io_Path.join([CLI.user_dir,"khafile.js"]),khafile);
		if(config.target != "html5" && config.app.icon != null && config.app.icon != "") {
			var icon_path = haxe_io_Path.join([CLI.user_dir,config.app.icon]);
			var dest_path = haxe_io_Path.join([CLI.user_dir,"icon.png"]);
			if(sys_FileSystem.exists(icon_path)) {
				sys_io_File.copy(icon_path,dest_path);
				CLI.print("Copy icon from: " + icon_path);
			} else {
				CLI.print("Can`t find icon at: " + icon_path);
			}
		}
		if(config.target == "all") {
			var _g1 = 0;
			var _g11 = CLI.targets;
			while(_g1 < _g11.length) {
				var t = _g11[_g1];
				++_g1;
				if(Object.prototype.hasOwnProperty.call(config,t)) {
					config.target = t;
					this.build_project(config);
				}
			}
		} else {
			this.build_project(config);
		}
	}
	,build_project: function(config) {
		var khamake_path = haxe_io_Path.join([CLI.engine_dir,CLI.backend_path,CLI.kha_path,"Tools/khamake/khamake.js"]);
		var args = [];
		args.push(khamake_path);
		args.push("--target");
		args.push(config.target);
		if(config.debug) {
			args.push("--debug");
		}
		var _g = 0;
		var _g1 = config.compiler.options;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			args.push(o);
		}
		var _g2 = config.target;
		switch(_g2) {
		case "linux":
			if(config.linux != null) {
				if(config.linux.graphics != null) {
					if(this.linux_graphics.indexOf(config.linux.graphics) == -1) {
						CLI.error("Unknown graphics target, use: [" + this.linux_graphics.join(",") + "]");
					}
					args.push("--graphics");
					args.push(config.linux.graphics);
				}
			}
			break;
		case "uwp":
			if(config.uwp != null) {
				if(config.uwp.graphics != null) {
					if(this.uwp_graphics.indexOf(config.uwp.graphics) == -1) {
						CLI.error("Unknown graphics target, use: [" + this.uwp_graphics.join(",") + "]");
					}
					args.push("--graphics");
					args.push(config.uwp.graphics);
				}
			}
			break;
		case "windows":
			if(config.windows != null) {
				if(config.windows.graphics != null) {
					if(this.windows_graphics.indexOf(config.windows.graphics) == -1) {
						CLI.error("Unknown graphics target, use: [" + this.windows_graphics.join(",") + "]");
					}
					args.push("--graphics");
					args.push(config.windows.graphics);
				}
				if(config.windows.audio != null) {
					if(this.audio.indexOf(config.windows.audio) == -1) {
						CLI.error("Unknown audio target, use: [" + this.audio.join(",") + "]");
					}
					args.push("--audio");
					args.push(config.windows.audio);
				}
			}
			break;
		}
		var compiler = config.compiler;
		if(compiler != null) {
			if(compiler.haxe != null && compiler.haxe != "") {
				args.push("--haxe");
				args.push(compiler.haxe);
			}
			if(compiler.kha != null && compiler.kha != "") {
				args.push("--kha");
				args.push(compiler.kha);
			}
			if(compiler.ffmpeg != null && compiler.ffmpeg != "") {
				args.push("--ffmpeg");
				args.push(compiler.ffmpeg);
			}
		}
		if(config.onlydata) {
			args.push("--onlydata");
		} else {
			args.push("--compile");
		}
		CLI.print("Run build command: " + args.join(" "));
		var res = args == null ? js_node_ChildProcess.spawnSync("node",{ stdio : "inherit"}).status : js_node_ChildProcess.spawnSync("node",args,{ stdio : "inherit"}).status;
		if(res != 0) {
			CLI.error("Build failed");
		}
		if(config.target == "html5") {
			this.postbuild_html5(config);
		}
		CLI.print("Build " + config.target + " complete.");
	}
	,postbuild_html5: function(config) {
		if(config.html5 != null) {
			if(config.html5.favicon != null && config.html5.favicon != "") {
				var icon_path = haxe_io_Path.join([CLI.user_dir,config.html5.favicon]);
				var dest_path = haxe_io_Path.join([CLI.user_dir,"build/html5/favicon.png"]);
				if(sys_FileSystem.exists(icon_path)) {
					sys_io_File.copy(icon_path,dest_path);
					CLI.print("Copy favicon from: " + icon_path);
				} else {
					CLI.print("Can`t find favicon at: " + icon_path);
				}
			}
			var html_path;
			if(config.html5.html_file != null && config.html5.html_file != "") {
				html_path = haxe_io_Path.join([CLI.user_dir,config.html5.html_file]);
			} else {
				html_path = haxe_io_Path.join([CLI.engine_dir,"assets/html/index.html"]);
			}
			if(sys_FileSystem.exists(html_path)) {
				var dest_path1 = haxe_io_Path.join([CLI.user_dir,"build/html5/index.html"]);
				var html_file = js_node_Fs.readFileSync(html_path,{ encoding : "utf8"});
				var canvas_width = 800;
				var canvas_height = 600;
				var r = new EReg("\\{name\\}","g");
				html_file = html_file.replace(r.r,config.project.title);
				r = new EReg("\\{script_name\\}","g");
				html_file = html_file.replace(r.r,config.html5.script);
				r = new EReg("\\{canvas_id\\}","g");
				html_file = html_file.replace(r.r,config.html5.canvas);
				if(config.html5.width != null) {
					r = new EReg("\\{canvas_width\\}","g");
					html_file = html_file.replace(r.r,"" + config.html5.width);
					r = new EReg("\\{canvas_half_width\\}","g");
					html_file = html_file.replace(r.r,"" + config.html5.width / 2);
				}
				if(config.html5.height != null) {
					r = new EReg("\\{canvas_height\\}","g");
					html_file = html_file.replace(r.r,"" + config.html5.height);
				}
				js_node_Fs.writeFileSync(dest_path1,html_file);
				CLI.print("Copy html from: " + html_path);
			} else {
				CLI.print("Can`t find html at: " + html_path);
			}
			if(!config.debug) {
				var script;
				if(config.html5.minify) {
					CLI.print("Minifying javascript...");
					var min = js_node_ChildProcess.execSync("node " + CLI.engine_dir + "/tools/node_modules/uglify-js/bin/uglifyjs " + CLI.user_dir + "/build/html5/" + config.html5.script + ".js --compress --mangle",{ encoding : "UTF-8"});
					js_node_Fs.writeFileSync("" + CLI.user_dir + "/build/html5/" + config.html5.script + ".js",min);
				}
			}
		}
	}
});
var commands_Clear = function() {
	this.dirs_removed = 0;
	this.files_removed = 0;
	Command.call(this,"clear","remove project build files: clear <target>");
};
commands_Clear.__name__ = true;
commands_Clear.__super__ = Command;
commands_Clear.prototype = $extend(Command.prototype,{
	execute: function(args) {
		if(args.length == 0) {
			CLI.error("Target not defined");
		}
		var target = args[0];
		if(target != "all" && CLI.targets.indexOf(target) == -1) {
			CLI.error("Unknown target, use: [all," + CLI.targets.join(",") + "]");
		}
		var config = Config.get();
		var to_remove = [];
		var project_title = config.project.title;
		if(target == "all") {
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build"]));
		} else {
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/" + target]));
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/" + target + "-resources"]));
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/" + target + "-build"]));
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/" + project_title + "-" + target + "-intellij"]));
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/" + project_title + "-" + target + ".hxproj"]));
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/" + project_title + "-" + target + ".hxml"]));
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/project-" + target + ".hxml"]));
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/temp"]));
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/khafile.js"]));
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/korefile.js"]));
			to_remove.push(haxe_io_Path.join([CLI.user_dir,"build/icon.png"]));
		}
		this.dirs_removed = 0;
		this.files_removed = 0;
		var _g = 0;
		while(_g < to_remove.length) {
			var s = to_remove[_g];
			++_g;
			if(sys_FileSystem.exists(s)) {
				if(js_node_Fs.statSync(s).isDirectory()) {
					this.delete_dir(s);
					js_node_Fs.rmdirSync(s);
					this.dirs_removed++;
				} else {
					js_node_Fs.unlinkSync(s);
					this.files_removed++;
				}
			}
		}
		CLI.print("Done: " + this.dirs_removed + " directories with " + this.files_removed + " files was removed");
	}
	,delete_dir: function(path) {
		if(sys_FileSystem.exists(path) && js_node_Fs.statSync(path).isDirectory()) {
			var entries = js_node_Fs.readdirSync(path);
			var _g = 0;
			while(_g < entries.length) {
				var entry = entries[_g];
				++_g;
				if(js_node_Fs.statSync(path + "/" + entry).isDirectory()) {
					this.delete_dir(path + "/" + entry);
					js_node_Fs.rmdirSync(path + "/" + entry);
					this.dirs_removed++;
				} else {
					js_node_Fs.unlinkSync(path + "/" + entry);
					this.files_removed++;
				}
			}
		}
	}
});
var commands_Help = function() {
	Command.call(this,"help","print command list");
};
commands_Help.__name__ = true;
commands_Help.__super__ = Command;
commands_Help.prototype = $extend(Command.prototype,{
});
var commands_Init = function() {
	Command.call(this,"init","initialize a new project: init [-t template]");
};
commands_Init.__name__ = true;
commands_Init.__super__ = Command;
commands_Init.prototype = $extend(Command.prototype,{
	execute: function(args) {
		var template_name = "empty";
		if(args.length > 0) {
			if(args[0] == "-t" && args[1] != null) {
				template_name = args[1];
			}
		}
		this.create_project(template_name);
	}
	,create_project: function(template) {
		var template_path = haxe_io_Path.join([CLI.engine_dir,CLI.templates_path,template]);
		if(!sys_FileSystem.exists(template_path)) {
			CLI.error("Cant find " + template + " template");
		}
		var dir = js_node_Fs.readdirSync(CLI.user_dir);
		if(dir.length > 0) {
			CLI.error("" + CLI.user_dir + " folder is not empty");
		}
		this.copy_dir(template_path,CLI.user_dir);
		CLI.print("New " + CLI.engine_name + " project is created in " + CLI.user_dir);
	}
	,copy_dir: function(src_dir,dst_dir) {
		if(!sys_FileSystem.exists(dst_dir)) {
			sys_FileSystem.createDirectory(dst_dir);
		}
		var _g = 0;
		var _g1 = js_node_Fs.readdirSync(src_dir);
		while(_g < _g1.length) {
			var name = _g1[_g];
			++_g;
			var src_path = haxe_io_Path.join([src_dir,name]);
			var dst_path = haxe_io_Path.join([dst_dir,name]);
			if(js_node_Fs.statSync(src_path).isDirectory()) {
				this.copy_dir(src_path,dst_path);
			} else {
				sys_io_File.copy(src_path,dst_path);
			}
		}
	}
});
var commands_Launch = function() {
	Command.call(this,"launch","launch project: launch <target>");
};
commands_Launch.__name__ = true;
commands_Launch.__super__ = Command;
commands_Launch.prototype = $extend(Command.prototype,{
	execute: function(args) {
		if(args.length == 0) {
			CLI.error("Target not defined");
		}
		var target = args[0];
		if(CLI.targets.indexOf(target) == -1) {
			CLI.error("Unknown target, use: [" + CLI.targets.join(",") + "]");
		}
		this.launch_project(target);
	}
	,launch_project: function(target) {
		var config = Config.get();
		switch(target) {
		case "html5":
			var port = 8080;
			if(config.html5 != null && config.html5.server_port != null) {
				port = config.html5.server_port;
			}
			var url = "http://localhost:" + port + "/";
			var _g = Sys.systemName();
			switch(_g) {
			case "BSD":case "Linux":
				js_node_ChildProcess.execSync("xdg-open " + url);
				break;
			case "Mac":
				js_node_ChildProcess.execSync("open " + url);
				break;
			case "Windows":
				js_node_ChildProcess.execSync("start " + url);
				break;
			default:
			}
			break;
		case "linux":
			var path = haxe_io_Path.join([CLI.user_dir,"build/linux/" + config.project.title]);
			if(!sys_FileSystem.exists(path)) {
				CLI.error("Can`t find app at: " + path);
			}
			js_node_ChildProcess.execSync("xdg-open " + path);
			break;
		case "osx":
			var path1 = haxe_io_Path.join([CLI.user_dir,"build/osx/" + config.project.title]);
			if(!sys_FileSystem.exists(path1)) {
				CLI.error("Can`t find app at: " + path1);
			}
			js_node_ChildProcess.execSync("open " + path1);
			break;
		case "windows":
			var path2 = haxe_io_Path.join([CLI.user_dir,"build/windows/" + config.project.title]);
			if(!sys_FileSystem.exists(path2)) {
				CLI.error("Can`t find app at: " + path2);
			}
			js_node_ChildProcess.execSync("start cmd /c " + path2);
			break;
		}
	}
});
var commands_Run = function() {
	Command.call(this,"run","build and run current project: run <target> [--debug]");
};
commands_Run.__name__ = true;
commands_Run.__super__ = Command;
commands_Run.prototype = $extend(Command.prototype,{
	execute: function(args) {
		if(args.length == 0) {
			CLI.error("Target not defined");
		}
		var target = args[0];
		if(CLI.targets.indexOf(target) == -1) {
			CLI.error("Unknown target, use: [" + CLI.targets.join(",") + "]");
		}
		var _this = CLI.command_map;
		var build_command = __map_reserved["build"] != null ? _this.getReserved("build") : _this.h["build"];
		var _this1 = CLI.command_map;
		var launch_command = __map_reserved["launch"] != null ? _this1.getReserved("launch") : _this1.h["launch"];
		build_command.execute(args);
		launch_command.execute(args);
	}
});
var commands_Server = function() {
	Command.call(this,"server","launch server for html5 build");
};
commands_Server.__name__ = true;
commands_Server.__super__ = Command;
commands_Server.prototype = $extend(Command.prototype,{
	execute: function(args) {
		var config = Config.get();
		var khamake_path = haxe_io_Path.join([CLI.engine_dir,CLI.backend_path,CLI.kha_path,"Tools/khamake/khamake.js"]);
		var port = 8080;
		if(config.html5 != null && config.html5.server_port != null) {
			port = config.html5.server_port;
		}
		js_node_ChildProcess.execSync("start cmd /c node " + khamake_path + " --server --port " + port);
	}
});
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
haxe_ds__$StringMap_StringMapIterator.__name__ = true;
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		var _this = this.map;
		var key = this.keys[this.index++];
		if(__map_reserved[key] != null) {
			return _this.getReserved(key);
		} else {
			return _this.h[key];
		}
	}
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	setReserved: function(key,value) {
		if(this.rh == null) {
			this.rh = { };
		}
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) {
			return null;
		} else {
			return this.rh["$" + key];
		}
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) {
			out.push(key);
		}
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) {
				out.push(key.substr(1));
			}
			}
		}
		return out;
	}
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = true;
var haxe_io_Path = function() { };
haxe_io_Path.__name__ = true;
haxe_io_Path.join = function(paths) {
	var paths1 = paths.filter(function(s) {
		if(s != null) {
			return s != "";
		} else {
			return false;
		}
	});
	if(paths1.length == 0) {
		return "";
	}
	var path = paths1[0];
	var _g1 = 1;
	var _g = paths1.length;
	while(_g1 < _g) {
		var i = _g1++;
		path = haxe_io_Path.addTrailingSlash(path);
		path += paths1[i];
	}
	return haxe_io_Path.normalize(path);
};
haxe_io_Path.normalize = function(path) {
	var slash = "/";
	path = path.split("\\").join(slash);
	if(path == slash) {
		return slash;
	}
	var target = [];
	var _g = 0;
	var _g1 = path.split(slash);
	while(_g < _g1.length) {
		var token = _g1[_g];
		++_g;
		if(token == ".." && target.length > 0 && target[target.length - 1] != "..") {
			target.pop();
		} else if(token != ".") {
			target.push(token);
		}
	}
	var tmp = target.join(slash);
	var regex_r = new RegExp("([^:])/+","g".split("u").join(""));
	var result = tmp.replace(regex_r,"$1" + slash);
	var acc_b = "";
	var colon = false;
	var slashes = false;
	var _g11 = 0;
	var _g2 = tmp.length;
	while(_g11 < _g2) {
		var i = _g11++;
		var _g21 = tmp.charCodeAt(i);
		switch(_g21) {
		case 47:
			if(!colon) {
				slashes = true;
			} else {
				var i1 = _g21;
				colon = false;
				if(slashes) {
					acc_b += "/";
					slashes = false;
				}
				acc_b += String.fromCharCode(i1);
			}
			break;
		case 58:
			acc_b += ":";
			colon = true;
			break;
		default:
			var i2 = _g21;
			colon = false;
			if(slashes) {
				acc_b += "/";
				slashes = false;
			}
			acc_b += String.fromCharCode(i2);
		}
	}
	return acc_b;
};
haxe_io_Path.addTrailingSlash = function(path) {
	if(path.length == 0) {
		return "/";
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		if(c2 != path.length - 1) {
			return path + "\\";
		} else {
			return path;
		}
	} else if(c1 != path.length - 1) {
		return path + "/";
	} else {
		return path;
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_node_ChildProcess = require("child_process");
var js_node_Fs = require("fs");
var js_node_Path = require("path");
var js_node_buffer_Buffer = require("buffer").Buffer;
var sys_FileSystem = function() { };
sys_FileSystem.__name__ = true;
sys_FileSystem.exists = function(path) {
	try {
		js_node_Fs.accessSync(path);
		return true;
	} catch( _ ) {
		return false;
	}
};
sys_FileSystem.createDirectory = function(path) {
	try {
		js_node_Fs.mkdirSync(path);
	} catch( e ) {
		if(e.code == "ENOENT") {
			sys_FileSystem.createDirectory(js_node_Path.dirname(path));
			js_node_Fs.mkdirSync(path);
		} else {
			var stat;
			try {
				stat = js_node_Fs.statSync(path);
			} catch( _ ) {
				throw e;
			}
			if(!stat.isDirectory()) {
				throw e;
			}
		}
	}
};
var sys_io_File = function() { };
sys_io_File.__name__ = true;
sys_io_File.copy = function(srcPath,dstPath) {
	var src = js_node_Fs.openSync(srcPath,"r");
	var stat = js_node_Fs.fstatSync(src);
	var dst = js_node_Fs.openSync(dstPath,"w",stat.mode);
	var bytesRead;
	var pos = 0;
	while(true) {
		bytesRead = js_node_Fs.readSync(src,sys_io_File.copyBuf,0,65536,pos);
		if(!(bytesRead > 0)) {
			break;
		}
		js_node_Fs.writeSync(dst,sys_io_File.copyBuf,0,bytesRead);
		pos += bytesRead;
	}
	js_node_Fs.closeSync(src);
	js_node_Fs.closeSync(dst);
};
String.__name__ = true;
Array.__name__ = true;
var __map_reserved = {};
CLI.engine_name = "clay2d";
CLI.templates_path = "templates";
CLI.backend_path = "backend";
CLI.kha_path = "Kha";
CLI.targets = ["html5","windows","osx","linux","android","ios","uwp"];
sys_io_File.copyBuf = new js_node_buffer_Buffer.alloc(65536);
CLI.main();
})();
