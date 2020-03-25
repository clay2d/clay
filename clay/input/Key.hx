package clay.input;

import kha.input.KeyCode;

enum abstract Key(Int) to Int {
	var UNKNOWN = KeyCode.Unknown;
	var BACK = KeyCode.Back; // Android
	var CANCEL = KeyCode.Cancel;
	var HELP = KeyCode.Help;
	var BACKSPACE = KeyCode.Backspace;
	var TAB = KeyCode.Tab;
	var CLEAR = KeyCode.Clear;
	var RETURN = KeyCode.Return;
	var SHIFT = KeyCode.Shift;
	var CONTROL = KeyCode.Control;
	var ALT = KeyCode.Alt;
	var PAUSE = KeyCode.Pause;
	var CAPSLOCK = KeyCode.CapsLock;
	var KANA = KeyCode.Kana;
	var HANGUL = KeyCode.Hangul;
	var EISU = KeyCode.Eisu;
	var JUNJA = KeyCode.Junja;
	var FINAL = KeyCode.Final;
	var HANJA = KeyCode.Hanja;
	var KANJI = KeyCode.Kanji;
	var ESCAPE = KeyCode.Escape;
	var CONVERT = KeyCode.Convert;
	var NONCONVERT = KeyCode.NonConvert;
	var ACCEPT = KeyCode.Accept;
	var MODECHANGE = KeyCode.ModeChange;
	var SPACE = KeyCode.Space;
	var PAGEUP = KeyCode.PageUp;
	var PAGEDOWN = KeyCode.PageDown;
	var END = KeyCode.End;
	var HOME = KeyCode.Home;
	var LEFT = KeyCode.Left;
	var UP = KeyCode.Up;
	var RIGHT = KeyCode.Right;
	var DOWN = KeyCode.Down;
	var SELECT = KeyCode.Select;
	var PRINT = KeyCode.Print;
	var EXECUTE = KeyCode.Execute;
	var PRINTSCREEN = KeyCode.PrintScreen;
	var INSERT = KeyCode.Insert;
	var DELETE = KeyCode.Delete;
	var ZERO = KeyCode.Zero;
	var ONE = KeyCode.One;
	var TWO = KeyCode.Two;
	var THREE = KeyCode.Three;
	var FOUR = KeyCode.Four;
	var FIVE = KeyCode.Five;
	var SIX = KeyCode.Six;
	var SEVEN = KeyCode.Seven;
	var EIGHT = KeyCode.Eight;
	var NINE = KeyCode.Nine;
	var COLON = KeyCode.Colon;
	var SEMICOLON = KeyCode.Semicolon;
	var LESSTHAN = KeyCode.LessThan;
	var EQUALS = KeyCode.Equals;
	var GREATERTHAN = KeyCode.GreaterThan;
	var QUESTIONMARK = KeyCode.QuestionMark;
	var AT = KeyCode.At;
	var A = KeyCode.A;
	var B = KeyCode.B;
	var C = KeyCode.C;
	var D = KeyCode.D;
	var E = KeyCode.E;
	var F = KeyCode.F;
	var G = KeyCode.G;
	var H = KeyCode.H;
	var I = KeyCode.I;
	var J = KeyCode.J;
	var K = KeyCode.K;
	var L = KeyCode.L;
	var M = KeyCode.M;
	var N = KeyCode.N;
	var O = KeyCode.O;
	var P = KeyCode.P;
	var Q = KeyCode.Q;
	var R = KeyCode.R;
	var S = KeyCode.S;
	var T = KeyCode.T;
	var U = KeyCode.U;
	var V = KeyCode.V;
	var W = KeyCode.W;
	var X = KeyCode.X;
	var Y = KeyCode.Y;
	var Z = KeyCode.Z;
	var WIN = KeyCode.Win;
	var CONTEXTMENU = KeyCode.ContextMenu;
	var SLEEP = KeyCode.Sleep;
	var NUMPAD0 = KeyCode.Numpad0;
	var NUMPAD1 = KeyCode.Numpad1;
	var NUMPAD2 = KeyCode.Numpad2;
	var NUMPAD3 = KeyCode.Numpad3;
	var NUMPAD4 = KeyCode.Numpad4;
	var NUMPAD5 = KeyCode.Numpad5;
	var NUMPAD6 = KeyCode.Numpad6;
	var NUMPAD7 = KeyCode.Numpad7;
	var NUMPAD8 = KeyCode.Numpad8;
	var NUMPAD9 = KeyCode.Numpad9;
	var MULTIPLY = KeyCode.Multiply;
	var ADD = KeyCode.Add;
	var SEPARATOR = KeyCode.Separator;
	var SUBTRACT = KeyCode.Subtract;
	var DECIMAL = KeyCode.Decimal;
	var DIVIDE = KeyCode.Divide;
	var F1 = KeyCode.F1;
	var F2 = KeyCode.F2;
	var F3 = KeyCode.F3;
	var F4 = KeyCode.F4;
	var F5 = KeyCode.F5;
	var F6 = KeyCode.F6;
	var F7 = KeyCode.F7;
	var F8 = KeyCode.F8;
	var F9 = KeyCode.F9;
	var F10 = KeyCode.F10;
	var F11 = KeyCode.F11;
	var F12 = KeyCode.F12;
	var F13 = KeyCode.F13;
	var F14 = KeyCode.F14;
	var F15 = KeyCode.F15;
	var F16 = KeyCode.F16;
	var F17 = KeyCode.F17;
	var F18 = KeyCode.F18;
	var F19 = KeyCode.F19;
	var F20 = KeyCode.F20;
	var F21 = KeyCode.F21;
	var F22 = KeyCode.F22;
	var F23 = KeyCode.F23;
	var F24 = KeyCode.F24;
	var NUMLOCK = KeyCode.NumLock;
	var SCROLLLOCK = KeyCode.ScrollLock;
	var WINOEMFJJISHO = KeyCode.WinOemFjJisho;
	var WINOEMFJMASSHOU = KeyCode.WinOemFjMasshou;
	var WINOEMFJTOUROKU = KeyCode.WinOemFjTouroku;
	var WINOEMFJLOYA = KeyCode.WinOemFjLoya;
	var WINOEMFJROYA = KeyCode.WinOemFjRoya;
	var CIRCUMFLEX = KeyCode.Circumflex;
	var EXCLAMATION = KeyCode.Exclamation;
	var DOUBLEQUOTE = KeyCode.DoubleQuote;
	var HASH = KeyCode.Hash;
	var DOLLAR = KeyCode.Dollar;
	var PERCENT = KeyCode.Percent;
	var AMPERSAND = KeyCode.Ampersand;
	var UNDERSCORE = KeyCode.Underscore;
	var OPENPAREN = KeyCode.OpenParen;
	var CLOSEPAREN = KeyCode.CloseParen;
	var ASTERISK = KeyCode.Asterisk;
	var PLUS = KeyCode.Plus;
	var PIPE = KeyCode.Pipe;
	var HYPHENMINUS = KeyCode.HyphenMinus;
	var OPENCURLYBRACKET = KeyCode.OpenCurlyBracket;
	var CLOSECURLYBRACKET = KeyCode.CloseCurlyBracket;
	var TILDE = KeyCode.Tilde;
	var VOLUMEMUTE = KeyCode.VolumeMute;
	var VOLUMEDOWN = KeyCode.VolumeDown;
	var VOLUMEUP = KeyCode.VolumeUp;
	var COMMA = KeyCode.Comma;
	var PERIOD = KeyCode.Period;
	var SLASH = KeyCode.Slash;
	var BACKQUOTE = KeyCode.BackQuote;
	var OPENBRACKET = KeyCode.OpenBracket;
	var BACKSLASH = KeyCode.BackSlash;
	var CLOSEBRACKET = KeyCode.CloseBracket;
	var QUOTE = KeyCode.Quote;
	var META = KeyCode.Meta;
	var ALTGR = KeyCode.AltGr;
	var WINICOHELP = KeyCode.WinIcoHelp;
	var WINICO00 = KeyCode.WinIco00;
	var WINICOCLEAR = KeyCode.WinIcoClear;
	var WINOEMRESET = KeyCode.WinOemReset;
	var WINOEMJUMP = KeyCode.WinOemJump;
	var WINOEMPA1 = KeyCode.WinOemPA1;
	var WINOEMPA2 = KeyCode.WinOemPA2;
	var WINOEMPA3 = KeyCode.WinOemPA3;
	var WINOEMWSCTRL = KeyCode.WinOemWSCTRL;
	var WINOEMCUSEL = KeyCode.WinOemCUSEL;
	var WINOEMATTN = KeyCode.WinOemATTN;
	var WINOEMFINISH = KeyCode.WinOemFinish;
	var WINOEMCOPY = KeyCode.WinOemCopy;
	var WINOEMAUTO = KeyCode.WinOemAuto;
	var WINOEMENLW = KeyCode.WinOemENLW;
	var WINOEMBACKTAB = KeyCode.WinOemBackTab;
	var ATTN = KeyCode.ATTN;
	var CRSEL = KeyCode.CRSEL;
	var EXSEL = KeyCode.EXSEL;
	var EREOF = KeyCode.EREOF;
	var PLAY = KeyCode.Play;
	var ZOOM = KeyCode.Zoom;
	var PA1 = KeyCode.PA1;
	var WINOEMCLEAR = KeyCode.WinOemClear;
}
