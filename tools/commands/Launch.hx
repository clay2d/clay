package commands;


import Config;
import sys.FileSystem;
import sys.io.File;
import haxe.io.Path;


class Launch extends Command {


	public function new() {

		super(
			'launch', 
			'launch project: launch <target>'
		);

	}

	override function execute(args:Array<String>) {

		if(args.length == 0) {
			CLI.error('Target not defined');
		}

		var target = args[0];
		if(CLI.targets.indexOf(target) == -1) {
			CLI.error('Unknown target, use: [${CLI.targets.join(",")}]');
		}

		launchProject(target);

	}

	function launchProject(target:String) {

		var config:ConfigData = Config.get();

		switch (target) {
			case 'html5' : {
				var port = 8080;
				if(config.html5 != null && config.html5.serverPort != null) {
					port = config.html5.serverPort;
				}
				var url = 'http://localhost:$port/';
				switch (Sys.systemName()) {
					case "Linux", "BSD": CLI.execute('xdg-open', ['$url']);
					case "Mac": CLI.execute('open', ['$url']);
					case "Windows": CLI.execute('start', ['$url']);
					default:
				}
			}
			case 'windows' : {
				var path = Path.join([CLI.userDir, 'build/windows/${config.project.title}.exe']);
				if(!FileSystem.exists(path)) {
					CLI.error('Can`t find app at: $path');
				}
				CLI.execute('start', ['cmd', "/c", '$path']); // todo: remove cmd ?
			}
			case 'windows-hl' : {
				var path = Path.join([CLI.userDir, 'build/windows-hl/${config.project.title}.exe']);
				if(!FileSystem.exists(path)) {
					CLI.error('Can`t find app at: $path');
				}
				CLI.execute('start', ['cmd', "/c", '$path']); // todo: remove cmd ?
			}
			case 'android-native-hl' : {
				var path = Path.join([CLI.userDir, 'build/android-native-hl-build/${config.project.title}/app/build/outputs/apk/debug/app-debug.apk']);
				if(!FileSystem.exists(path)) {
					CLI.error('Can`t find app at: $path');
				}
				var pkg = Reflect.field(config.android, 'package'); //TODO: check for null
				// CLI.execute('start', ['cmd', "/c", 'adb', 'uninstall', '$pkg']);
				CLI.execute('start', ['cmd', "/c", 'adb', 'install', '-r', '$path']);
				CLI.execute('start', ['cmd', "/c", 'adb', 'shell', 'am', 'start', '-n', '$pkg/tech.kode.kore.KoreActivity']);
				CLI.execute('start', ['cmd', "/c", 'adb', 'logcat', '-s', 'kore', 'DEBUG', 'AndroidRuntime']);
			}
			case 'linux': {
				var path = Path.join([CLI.userDir, 'build/linux/${config.project.title}']);
				if(!FileSystem.exists(path)) {
					CLI.error('Can`t find app at: $path');
				}
				CLI.execute('xdg-open', ['$path']);
			}
			case 'osx' : {
				var path = Path.join([CLI.userDir, 'build/osx/${config.project.title}']);
				if(!FileSystem.exists(path)) {
					CLI.error('Can`t find app at: $path');
				}
				CLI.execute('open', ['$path']);
			}
		}

	}


}