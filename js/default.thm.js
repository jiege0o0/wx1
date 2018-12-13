var egret = window.egret;
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/game_skin/commont/btns/Btn1Skin.exml'] = window.Btn1Skin = (function (_super) {
	__extends(Btn1Skin, _super);
	function Btn1Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(22,15,42,5);
		t.source = "bg_1_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.lineSpacing = 5;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn1Skin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/btns/Btn2Skin.exml'] = window.Btn2Skin = (function (_super) {
	__extends(Btn2Skin, _super);
	function Btn2Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,4);
		t.source = "bg_2_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn2Skin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/btns/Btn3Skin.exml'] = window.Btn3Skin = (function (_super) {
	__extends(Btn3Skin, _super);
	function Btn3Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn3Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,4);
		t.source = "bg_3_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn3Skin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/btns/Btn4Skin.exml'] = window.Btn4Skin = (function (_super) {
	__extends(Btn4Skin, _super);
	function Btn4Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn4Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,4);
		t.source = "bg_4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn4Skin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/btns/Btn5Skin.exml'] = window.Btn5Skin = (function (_super) {
	__extends(Btn5Skin, _super);
	function Btn5Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn5Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(36,35,122,9);
		t.source = "btn5_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 30;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn5Skin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/btns/Btn6Skin.exml'] = window.Btn6Skin = (function (_super) {
	__extends(Btn6Skin, _super);
	function Btn6Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn6Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "btn6_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.size = 36;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn6Skin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/btns/Btn7Skin.exml'] = window.Btn7Skin = (function (_super) {
	__extends(Btn7Skin, _super);
	function Btn7Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn7Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "btn7_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 30;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn7Skin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/btns/Btn8Skin.exml'] = window.Btn8Skin = (function (_super) {
	__extends(Btn8Skin, _super);
	function Btn8Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn8Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,18);
		t.source = "btn8_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.lineSpacing = 5;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn8Skin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/btns/Btn9Skin.exml'] = window.Btn9Skin = (function (_super) {
	__extends(Btn9Skin, _super);
	function Btn9Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay"];
		
		this.height = 60;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 100;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = Btn9Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(16,15,18,18);
		t.source = "btn9_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.lineSpacing = 5;
		t.size = 24;
		t.stroke = 2;
		t.text = "123";
		t.textColor = 0xffffff;
		return t;
	};
	return Btn9Skin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/skin/BasePanelSkin.exml'] = window.BasePanelSkin = (function (_super) {
	__extends(BasePanelSkin, _super);
	function BasePanelSkin() {
		_super.call(this);
		this.skinParts = ["bottomGroup","nameText"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.bottomGroup_i(),this.nameText_i()];
	}
	var _proto = BasePanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(68,128,187,230);
		t.source = "window2_png";
		t.top = 0;
		t.y = 10;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.bottom = 25;
		t.height = 90;
		t.left = 28;
		t.right = 28;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0x160D06;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x3d3d3d;
		t.height = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameText_i = function () {
		var t = new eui.Label();
		this.nameText = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.stroke = 2;
		t.text = "领取补助";
		t.textColor = 0xD0C7AD;
		t.y = 33;
		return t;
	};
	return BasePanelSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/skin/BookBGSkin.exml'] = window.BookBGSkin = (function (_super) {
	__extends(BookBGSkin, _super);
	function BookBGSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 100;
		this.width = 640;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = BookBGSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 50;
		t.scale9Grid = new egret.Rectangle(40,19,240,324);
		t.source = "book_bg1_jpg";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 50;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(40,24,240,319);
		t.scaleX = -1;
		t.source = "book_bg1_jpg";
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 50;
		t.scale9Grid = new egret.Rectangle(40,12,240,323);
		t.source = "book_bg2_jpg";
		t.x = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 50;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(40,10,240,318);
		t.scaleX = -1;
		t.source = "book_bg2_jpg";
		return t;
	};
	return BookBGSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/skin/MyCheckBoxSkin.exml'] = window.MyCheckBoxSkin = (function (_super) {
	__extends(MyCheckBoxSkin, _super);
	function MyCheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group2_i()];
		this._Image1_i();
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","strokeColor",0xf2a221),
					new eui.SetProperty("_Rect1","strokeWeight",2)
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image1","_Group1",1,"")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image1","_Group1",1,"")
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = MyCheckBoxSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.height = 35;
		t.width = 35;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0x000000;
		t.height = 35;
		t.strokeColor = 0xF1BB64;
		t.strokeWeight = 1;
		t.top = 0;
		t.width = 35;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.fillMode = "scale";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_right_png";
		t.x = -2;
		t.y = -8;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 24;
		t.stroke = 2;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xffeabc;
		t.verticalAlign = "middle";
		t.y = 5;
		return t;
	};
	return MyCheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/skin/MyHSliderSkin.exml'] = window.MyHSliderSkin = (function (_super) {
	__extends(MyHSliderSkin, _super);
	function MyHSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 600;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = MyHSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Rect();
		this.track = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xDBDBB3;
		t.height = 6;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "point2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.width = 60;
		t.x = -15;
		t.y = 0;
		return t;
	};
	return MyHSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/skin/MyRadioButtonSkin.exml'] = window.MyRadioButtonSkin = (function (_super) {
	__extends(MyRadioButtonSkin, _super);
	function MyRadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radio_btn1_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radio_btn1_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radio_btn1_png")
				])
		];
	}
	var _proto = MyRadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radio_btn2_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 24;
		t.text = "123";
		t.textAlign = "center";
		t.textColor = 0xCCB48E;
		t.verticalAlign = "middle";
		return t;
	};
	return MyRadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/skin/MyTabItemSkin.exml'] = window.MyTabItemSkin = (function (_super) {
	__extends(MyTabItemSkin, _super);
	function MyTabItemSkin() {
		_super.call(this);
		this.skinParts = ["label","redMC"];
		
		this.currentState = "up";
		this.height = 53;
		this.elementsContent = [this._Image1_i(),this.label_i(),this.redMC_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","tab1_png"),
					new eui.SetProperty("_Image1","top",5),
					new eui.SetProperty("_Image1","bottom",0),
					new eui.SetProperty("label","textColor",0xedd580),
					new eui.SetProperty("label","left",15),
					new eui.SetProperty("label","right",15),
					new eui.SetProperty("label","verticalCenter",6.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("label","stroke",2),
					new eui.SetProperty("label","textColor",0xf6c922)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.label"],[0],this.label,"text");
	}
	var _proto = MyTabItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,18,10,21);
		t.source = "tab2_png";
		t.top = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.left = 15;
		t.right = 15;
		t.size = 22;
		t.stroke = 2;
		t.textAlign = "center";
		t.textColor = 0xf6c922;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 3.5;
		return t;
	};
	_proto.redMC_i = function () {
		var t = new eui.Image();
		this.redMC = t;
		t.right = -5;
		t.source = "red_mc_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	return MyTabItemSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/skin/MyTabItemSkin2.exml'] = window.MyTabItemSkin2 = (function (_super) {
	__extends(MyTabItemSkin2, _super);
	function MyTabItemSkin2() {
		_super.call(this);
		this.skinParts = ["label"];
		
		this.currentState = "up";
		this.width = 160;
		this.elementsContent = [this.label_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image2","",2,"label"),
					new eui.SetProperty("_Image2","left",-3),
					new eui.SetProperty("_Image2","source","btn_b2_png")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",2,"label")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image2","",2,"label"),
					new eui.SetProperty("label","strokeColor",0x025CB5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("label","textColor",0xCCB48E)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("label","textColor",0xCCB48E)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("label","textColor",0xCCB48E)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.label"],[0],this.label,"text");
	}
	var _proto = MyTabItemSkin2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scale9Grid = new egret.Rectangle(31,17,98,24);
		t.source = "btn_r2__png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.left = -5;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(31,17,98,24);
		t.source = "btn_b2_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Label();
		this.label = t;
		t.height = 26;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xAFAFAF;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.y = 14;
		return t;
	};
	return MyTabItemSkin2;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/skin/MyTextInputSkin.exml'] = window.MyTextInputSkin = (function (_super) {
	__extends(MyTextInputSkin, _super);
	function MyTextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.height = 50;
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.SetProperty("textDisplay","verticalAlign","middle"),
					new eui.SetProperty("textDisplay","textColor",0xC1A77C)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0x563F18)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = MyTextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(8,8,14,14);
		t.source = "bg3_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 34;
		t.left = "15";
		t.right = "15";
		t.size = 28;
		t.text = "123456";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 34;
		t.left = 10;
		t.right = 10;
		t.size = 26;
		t.textAlign = "left";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return MyTextInputSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/AlertSkin.exml'] = window.AlertSkin = (function (_super) {
	__extends(AlertSkin, _super);
	function AlertSkin() {
		_super.call(this);
		this.skinParts = ["cancelBtn","okBtn","text","closeBtn"];
		
		this.width = 540;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.text_i(),this.closeBtn_i()];
	}
	var _proto = AlertSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(33,31,4,6);
		t.source = "bg14_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 30;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.cancelBtn_i(),this.okBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.label = "按钮";
		t.skinName = "Btn2Skin";
		t.width = 150;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Button();
		this.okBtn = t;
		t.label = "按钮";
		t.skinName = "Btn1Skin";
		t.width = 150;
		t.x = 198;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.bottom = 140;
		t.horizontalCenter = 0;
		t.lineSpacing = 15;
		t.maxWidth = 440;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "标签标签标签标签";
		t.textAlign = "left";
		t.textColor = 0xffeba3;
		t.top = 66;
		t.verticalAlign = "top";
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.right = -10;
		t.source = "icon_error_png";
		t.y = -10;
		return t;
	};
	return AlertSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/BottomUISkin.exml'] = window.BottomUISkin = (function (_super) {
	__extends(BottomUISkin, _super);
	function BottomUISkin() {
		_super.call(this);
		this.skinParts = ["closeBtn"];
		
		this.height = 100;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i()];
	}
	var _proto = BottomUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.source = "title_bg4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = -3;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.height = 90;
		t.source = "back_btn_png";
		t.x = 10;
		t.y = 4;
		return t;
	};
	return BottomUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/CommonNumInputSkin.exml'] = window.CommonNumInputSkin = (function (_super) {
	__extends(CommonNumInputSkin, _super);
	function CommonNumInputSkin() {
		_super.call(this);
		this.skinParts = ["input","addBtn","reduceBtn"];
		
		this.width = 300;
		this.elementsContent = [this._Rect1_i(),this.input_i(),this.addBtn_i(),this.reduceBtn_i()];
	}
	var _proto = CommonNumInputSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 3;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x180802;
		t.left = 55;
		t.right = 55;
		t.strokeColor = 0xA38D6A;
		t.strokeWeight = 2;
		t.top = 3;
		return t;
	};
	_proto.input_i = function () {
		var t = new eui.EditableText();
		this.input = t;
		t.height = 27;
		t.left = "35";
		t.maxChars = 3;
		t.restrict = "0-9";
		t.right = "35";
		t.size = 24;
		t.text = "标签";
		t.textAlign = "center";
		t.textColor = 0xedd6b4;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		return t;
	};
	_proto.addBtn_i = function () {
		var t = new eui.Group();
		this.addBtn = t;
		t.right = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(19,19,12,9);
		t.source = "bg16_png";
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "icon_add4_png";
		t.verticalCenter = -1;
		return t;
	};
	_proto.reduceBtn_i = function () {
		var t = new eui.Group();
		this.reduceBtn = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scale9Grid = new egret.Rectangle(19,19,12,9);
		t.source = "bg16_png";
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "icon_dec_png";
		t.verticalCenter = -1;
		return t;
	};
	return CommonNumInputSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/DebugUISkin.exml'] = window.DebugUISkin = (function (_super) {
	__extends(DebugUISkin, _super);
	function DebugUISkin() {
		_super.call(this);
		this.skinParts = ["backBtn","con"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.backBtn_i(),this.con_i()];
	}
	var _proto = DebugUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "back";
		t.skinName = "Btn1Skin";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.con_i = function () {
		var t = new eui.Group();
		this.con = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 100;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	return DebugUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/DownListItemSkin.exml'] = window.DownListItemSkin = (function (_super) {
	__extends(DownListItemSkin, _super);
	function DownListItemSkin() {
		_super.call(this);
		this.skinParts = ["img","text","con"];
		
		this.height = 50;
		this.elementsContent = [this._Group1_i(),this._Rect1_i(),this.con_i()];
	}
	var _proto = DownListItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x38230f;
		t.height = 1;
		t.left = 5;
		t.right = 5;
		return t;
	};
	_proto.con_i = function () {
		var t = new eui.Group();
		this.con = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.img_i(),this.text_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.paddingRight = 3;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 30;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.size = 25;
		t.stroke = 2;
		t.text = "Label";
		t.x = 6;
		t.y = 0;
		return t;
	};
	return DownListItemSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/DownListSkin.exml'] = window.DownListSkin = (function (_super) {
	__extends(DownListSkin, _super);
	function DownListSkin() {
		_super.call(this);
		this.skinParts = ["img","titleText","btn","list","scroller","listCon"];
		
		this.width = 152;
		this.elementsContent = [this.btn_i(),this.listCon_i()];
	}
	var _proto = DownListSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Group();
		this.btn = t;
		t.height = 53;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(20,21,9,5);
		t.source = "btn4_png";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.img_i(),this.titleText_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 40;
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleText_i = function () {
		var t = new eui.Label();
		this.titleText = t;
		t.size = 25;
		t.stroke = 2;
		t.text = "Label";
		t.x = 45;
		t.y = 14.5;
		return t;
	};
	_proto.listCon_i = function () {
		var t = new eui.Group();
		this.listCon = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 60;
		t.elementsContent = [this._Image2_i(),this.scroller_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(9,9,11,10);
		t.source = "bg2_png";
		t.top = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 44;
		t.y = -2;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingBottom = -1;
		return t;
	};
	return DownListSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/LeftListSkin.exml'] = window.LeftListSkin = (function (_super) {
	__extends(LeftListSkin, _super);
	function LeftListSkin() {
		_super.call(this);
		this.skinParts = ["img","btn","list","scroller","listCon"];
		
		this.height = 53;
		this.width = 80;
		this.elementsContent = [this.btn_i(),this.listCon_i()];
	}
	var _proto = LeftListSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Group();
		this.btn = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(20,21,9,5);
		t.source = "btn4_png";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.img_i(),this._Image2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 40;
		t.width = 40;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.rotation = 270;
		t.source = "arrow3_png";
		t.x = 13;
		t.y = 9;
		return t;
	};
	_proto.listCon_i = function () {
		var t = new eui.Group();
		this.listCon = t;
		t.bottom = 0;
		t.right = -190;
		t.width = 180;
		t.elementsContent = [this._Image3_i(),this.scroller_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(9,9,11,10);
		t.source = "bg2_png";
		t.top = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 44;
		t.y = -2;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingBottom = -1;
		return t;
	};
	return LeftListSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/TipsUISkin.exml'] = window.TipsUISkin = (function (_super) {
	__extends(TipsUISkin, _super);
	function TipsUISkin() {
		_super.call(this);
		this.skinParts = ["text"];
		
		this.elementsContent = [this._Image1_i(),this.text_i()];
	}
	var _proto = TipsUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.maxWidth = 560;
		t.minWidth = 300;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(41,24,9,9);
		t.source = "black_bg_png";
		t.top = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.bottom = 20;
		t.left = 30;
		t.right = 30;
		t.size = 26;
		t.stroke = 5;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.top = 20;
		t.verticalAlign = "middle";
		return t;
	};
	return TipsUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/TopUISkin.exml'] = window.TopUISkin = (function (_super) {
	__extends(TopUISkin, _super);
	function TopUISkin() {
		_super.call(this);
		this.skinParts = ["titleText","helpBtn"];
		
		this.height = 50;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.titleText_i(),this.helpBtn_i()];
	}
	var _proto = TopUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.source = "title_bg4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = -63;
		return t;
	};
	_proto.titleText_i = function () {
		var t = new eui.Label();
		this.titleText = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x110900;
		t.text = "标签";
		t.textColor = 0xef9f32;
		t.y = 15;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Group();
		this.helpBtn = t;
		t.height = 60;
		t.right = 0;
		t.width = 60;
		t.y = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "icon_help_png";
		t.x = 10.6;
		t.y = 1.51;
		return t;
	};
	return TopUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/TouchTipsSkin.exml'] = window.TouchTipsSkin = (function (_super) {
	__extends(TouchTipsSkin, _super);
	function TouchTipsSkin() {
		_super.call(this);
		this.skinParts = ["text"];
		
		this.elementsContent = [this._Image1_i(),this.text_i()];
	}
	var _proto = TouchTipsSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,16,41,27);
		t.source = "border4_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.text_i = function () {
		var t = new eui.Label();
		this.text = t;
		t.bottom = 20;
		t.left = 20;
		t.lineSpacing = 5;
		t.maxWidth = 320;
		t.right = 20;
		t.size = 26;
		t.text = "标签标签标签标签";
		t.textAlign = "left";
		t.textColor = 0xCCB48E;
		t.top = 20;
		t.verticalAlign = "middle";
		t.x = 10;
		t.y = 10;
		return t;
	};
	return TouchTipsSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/commont/ui/UpListSkin.exml'] = window.UpListSkin = (function (_super) {
	__extends(UpListSkin, _super);
	function UpListSkin() {
		_super.call(this);
		this.skinParts = ["titleText","btn","list","scroller","listCon"];
		
		this.height = 53;
		this.width = 152;
		this.elementsContent = [this.btn_i(),this.listCon_i()];
	}
	var _proto = UpListSkin.prototype;

	_proto.btn_i = function () {
		var t = new eui.Group();
		this.btn = t;
		t.height = 53;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.titleText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(20,21,9,5);
		t.source = "btn4_png";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleText_i = function () {
		var t = new eui.Label();
		this.titleText = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.stroke = 2;
		t.text = "Label";
		t.verticalCenter = 0;
		return t;
	};
	_proto.listCon_i = function () {
		var t = new eui.Group();
		this.listCon = t;
		t.bottom = 50;
		t.height = 30;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image2_i(),this.scroller_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(9,9,11,10);
		t.source = "bg2_png";
		t.top = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 44;
		t.y = -2;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "justify";
		t.paddingBottom = -1;
		return t;
	};
	return UpListSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/GameUISkin.exml'] = window.GameUISkin = (function (_super) {
	__extends(GameUISkin, _super);
	function GameUISkin() {
		_super.call(this);
		this.skinParts = ["bg","errorMC","line2","line1","treeGroup","titleMC","startBtn","rankBtn","levelBtn","skinBtn","settingBtn","bottomGroup","levelText","levelGroup","slowBtn","speedBtn","debugBtn","readyText","speedText","needle","rateMC2","limitGroup","meterGroup","gameLevelText","exitBtn","failMC"];
		
		this.height = 1360;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._Rect1_i(),this.errorMC_i(),this.line2_i(),this.line1_i(),this._Rect3_i(),this.treeGroup_i(),this.titleMC_i(),this.startBtn_i(),this.bottomGroup_i(),this.levelGroup_i(),this._Image2_i(),this.slowBtn_i(),this.speedBtn_i()];
		this.debugBtn_i();
		
		this.readyText_i();
		
		this.limitGroup_i();
		
		this.meterGroup_i();
		
		this.exitBtn_i();
		
		this.failMC_i();
		
		this.states = [
			new eui.State ("main",
				[
					new eui.AddItems("debugBtn","",1,""),
					new eui.SetProperty("_Rect3","top",0),
					new eui.SetProperty("_Rect3","bottom",0),
					new eui.SetProperty("slowBtn","visible",false),
					new eui.SetProperty("speedBtn","visible",false)
				])
			,
			new eui.State ("game",
				[
					new eui.AddItems("readyText","",1,""),
					new eui.AddItems("limitGroup","meterGroup",1,""),
					new eui.AddItems("meterGroup","",1,""),
					new eui.AddItems("exitBtn","",1,""),
					new eui.AddItems("failMC","",1,""),
					new eui.SetProperty("errorMC","height",5),
					new eui.SetProperty("_Rect3","top",0),
					new eui.SetProperty("_Rect3","bottom",0),
					new eui.SetProperty("titleMC","visible",false),
					new eui.SetProperty("startBtn","visible",false),
					new eui.SetProperty("bottomGroup","visible",false),
					new eui.SetProperty("levelGroup","visible",false)
				])
		];
	}
	var _proto = GameUISkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.fillMode = "repeat";
		t.height = 1600;
		t.left = 0;
		t.right = 0;
		t.source = "bg_jpg";
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x424242;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 600;
		return t;
	};
	_proto.errorMC_i = function () {
		var t = new eui.Group();
		this.errorMC = t;
		t.height = 10;
		t.width = 600;
		t.x = 20;
		t.y = 0;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xff0000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.line2_i = function () {
		var t = new eui.Image();
		this.line2 = t;
		t.fillMode = "repeat";
		t.height = 1600;
		t.horizontalCenter = 150;
		t.source = "road_png";
		t.y = 0;
		return t;
	};
	_proto.line1_i = function () {
		var t = new eui.Image();
		this.line1 = t;
		t.fillMode = "repeat";
		t.height = 1600;
		t.horizontalCenter = -150;
		t.source = "road_png";
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		this._Rect3 = t;
		t.fillColor = 0xffffff;
		t.height = 1136;
		t.horizontalCenter = 0;
		t.width = 15;
		t.y = 0;
		return t;
	};
	_proto.treeGroup_i = function () {
		var t = new eui.Group();
		this.treeGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.titleMC_i = function () {
		var t = new eui.Image();
		this.titleMC = t;
		t.horizontalCenter = 0;
		t.source = "title_png";
		t.y = 120;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Image();
		this.startBtn = t;
		t.bottom = 160;
		t.horizontalCenter = 0;
		t.source = "btn_start_png";
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.rankBtn_i(),this.levelBtn_i(),this.skinBtn_i(),this.settingBtn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 45;
		return t;
	};
	_proto.rankBtn_i = function () {
		var t = new eui.Image();
		this.rankBtn = t;
		t.source = "rank_btn_png";
		t.x = 216;
		t.y = 200;
		return t;
	};
	_proto.levelBtn_i = function () {
		var t = new eui.Image();
		this.levelBtn = t;
		t.source = "level_btn_png";
		t.x = 0;
		t.y = 350;
		return t;
	};
	_proto.skinBtn_i = function () {
		var t = new eui.Image();
		this.skinBtn = t;
		t.source = "skin_btn_png";
		t.x = 1116;
		t.y = 0;
		return t;
	};
	_proto.settingBtn_i = function () {
		var t = new eui.Image();
		this.settingBtn = t;
		t.source = "sound_on_btn_png";
		t.x = 700;
		t.y = 183;
		return t;
	};
	_proto.levelGroup_i = function () {
		var t = new eui.Group();
		this.levelGroup = t;
		t.bottom = 280;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.levelText_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(36,7,16,42);
		t.source = "black_bg_png";
		t.top = 0;
		return t;
	};
	_proto.levelText_i = function () {
		var t = new eui.Label();
		this.levelText = t;
		t.bottom = 5;
		t.left = 30;
		t.right = 30;
		t.stroke = 3;
		t.text = "挑点关卡：16";
		t.textAlign = "center";
		t.top = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 400;
		t.horizontalCenter = 230;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "car_temp_png";
		t.visible = false;
		return t;
	};
	_proto.slowBtn_i = function () {
		var t = new eui.Image();
		this.slowBtn = t;
		t.bottom = 80;
		t.horizontalCenter = -230;
		t.source = "tap_png";
		t.visible = false;
		return t;
	};
	_proto.speedBtn_i = function () {
		var t = new eui.Image();
		this.speedBtn = t;
		t.bottom = 80;
		t.horizontalCenter = 230;
		t.source = "tap_png";
		t.visible = false;
		return t;
	};
	_proto.debugBtn_i = function () {
		var t = new eui.Button();
		this.debugBtn = t;
		t.label = "debug";
		t.skinName = "Btn1Skin";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.readyText_i = function () {
		var t = new eui.Label();
		this.readyText = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 150;
		t.stroke = 5;
		t.text = "3";
		t.textColor = 0xfcd550;
		t.verticalCenter = -100;
		return t;
	};
	_proto.meterGroup_i = function () {
		var t = new eui.Group();
		this.meterGroup = t;
		t.bottom = -2;
		t.height = 200;
		t.width = 304;
		t.x = 170;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Group1_i(),this.needle_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "clock_bg_png";
		t.y = -2;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "car_clock_png";
		t.x = 1;
		t.y = 1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 90;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.speedText_i(),this._Label1_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.speedText_i = function () {
		var t = new eui.Label();
		this.speedText = t;
		t.size = 30;
		t.stroke = 2;
		t.text = "300";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 22;
		t.size = 20;
		t.stroke = 2;
		t.text = "km/h";
		t.textColor = 0xffffff;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.needle_i = function () {
		var t = new eui.Image();
		this.needle = t;
		t.anchorOffsetX = 8;
		t.anchorOffsetY = 8;
		t.rotation = 0;
		t.source = "car_clock_line_png";
		t.x = 152;
		t.y = 155;
		return t;
	};
	_proto.limitGroup_i = function () {
		var t = new eui.Group();
		this.limitGroup = t;
		t.horizontalCenter = 0;
		t.width = 204;
		t.y = 175;
		t.elementsContent = [this._Rect4_i(),this.rateMC2_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x282828;
		t.height = 12;
		t.width = 204;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rateMC2_i = function () {
		var t = new eui.Rect();
		this.rateMC2 = t;
		t.fillColor = 0xff0000;
		t.height = 8;
		t.width = 100;
		t.x = 2;
		t.y = 2;
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Group();
		this.exitBtn = t;
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this._Image5_i(),this._Group2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(18,22,114,54);
		t.source = "game_top_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = -3;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Image6_i(),this.gameLevelText_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "gaming_back_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameLevelText_i = function () {
		var t = new eui.Label();
		this.gameLevelText = t;
		t.bold = true;
		t.height = 35;
		t.text = "LV.50";
		t.verticalAlign = "bottom";
		t.x = 32;
		t.y = 5;
		return t;
	};
	_proto.failMC_i = function () {
		var t = new eui.Rect();
		this.failMC = t;
		t.bottom = 0;
		t.fillAlpha = 0.1;
		t.fillColor = 0xff0000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	return GameUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/LevelItemSkin.exml'] = window.LevelItemSkin = (function (_super) {
	__extends(LevelItemSkin, _super);
	function LevelItemSkin() {
		_super.call(this);
		this.skinParts = ["indexText","s0","s1","s2"];
		
		this.height = 145;
		this.width = 127;
		this.elementsContent = [this._Image1_i()];
		this.indexText_i();
		
		this.s0_i();
		
		this.s1_i();
		
		this.s2_i();
		
		this._Group1_i();
		
		this.states = [
			new eui.State ("lock",
				[
				])
			,
			new eui.State ("current",
				[
					new eui.AddItems("indexText","",1,""),
					new eui.AddItems("s0","_Group1",0,""),
					new eui.AddItems("s1","_Group1",1,""),
					new eui.AddItems("s2","_Group1",1,""),
					new eui.AddItems("_Group1","",1,""),
					new eui.SetProperty("_Image1","source","chapter_item2_png")
				])
		];
	}
	var _proto = LevelItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "chapter_item1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.indexText_i = function () {
		var t = new eui.Label();
		this.indexText = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 60;
		t.text = "20";
		t.verticalCenter = -15.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.y = 95;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = -4;
		return t;
	};
	_proto.s0_i = function () {
		var t = new eui.Image();
		this.s0 = t;
		t.source = "chapter_star4_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.s1_i = function () {
		var t = new eui.Image();
		this.s1 = t;
		t.source = "chapter_star4_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.s2_i = function () {
		var t = new eui.Image();
		this.s2 = t;
		t.source = "chapter_star4_png";
		t.x = 20;
		t.y = 20;
		return t;
	};
	return LevelItemSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/LevelUISkin.exml'] = window.LevelUISkin = (function (_super) {
	__extends(LevelUISkin, _super);
	function LevelUISkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","list","scroller"];
		
		this.height = 840;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Label1_i(),this.scroller_i()];
	}
	var _proto = LevelUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(81,149,230,153);
		t.source = "window_bg_png";
		t.top = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Group();
		this.closeBtn = t;
		t.height = 100;
		t.right = 0;
		t.width = 100;
		t.y = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "close_btn_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.text = "选择关卡";
		t.y = 35;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.top = 115;
		t.width = 553;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = LevelItemSkin;
		t.x = 0;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 15;
		t.requestedColumnCount = 4;
		t.verticalGap = 15;
		return t;
	};
	return LevelUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/RankUISkin.exml'] = window.RankUISkin = (function (_super) {
	__extends(RankUISkin, _super);
	function RankUISkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","list","scroller"];
		
		this.height = 840;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Label1_i(),this.scroller_i()];
	}
	var _proto = RankUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(81,149,230,153);
		t.source = "window_bg_png";
		t.top = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Group();
		this.closeBtn = t;
		t.height = 100;
		t.right = 0;
		t.width = 100;
		t.y = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "close_btn_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "好友排行";
		t.y = 35;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.top = 115;
		t.width = 560;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.requestedColumnCount = 3;
		t.verticalGap = 15;
		return t;
	};
	return RankUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/ResultFailUISkin.exml'] = window.ResultFailUISkin = (function (_super) {
	__extends(ResultFailUISkin, _super);
	function ResultFailUISkin() {
		_super.call(this);
		this.skinParts = ["rateText","timesText","retryBtn","backBtn"];
		
		this.height = 380;
		this.width = 400;
		this.elementsContent = [this.rateText_i(),this._Label1_i(),this.timesText_i(),this.retryBtn_i(),this.backBtn_i()];
	}
	var _proto = ResultFailUISkin.prototype;

	_proto.rateText_i = function () {
		var t = new eui.Label();
		this.rateText = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 60;
		t.text = "14%";
		t.textColor = 0xffffff;
		t.y = 60;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "当前进度";
		t.textColor = 0xcbcaca;
		t.y = 0;
		return t;
	};
	_proto.timesText_i = function () {
		var t = new eui.Label();
		this.timesText = t;
		t.horizontalCenter = 1;
		t.size = 24;
		t.text = "当前进度";
		t.textColor = 0xCBCACA;
		t.y = 150;
		return t;
	};
	_proto.retryBtn_i = function () {
		var t = new eui.Button();
		this.retryBtn = t;
		t.horizontalCenter = 0;
		t.label = "再试一次";
		t.skinName = "Btn4Skin";
		t.width = 160;
		t.y = 220;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.horizontalCenter = 0;
		t.label = "返回首页";
		t.skinName = "Btn1Skin";
		t.width = 160;
		t.y = 300;
		return t;
	};
	return ResultFailUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/ResultUISkin.exml'] = window.ResultUISkin = (function (_super) {
	__extends(ResultUISkin, _super);
	function ResultUISkin() {
		_super.call(this);
		this.skinParts = ["s0","s1","s2","timeText","nextText","shartBtn","nextBtn","backBtn"];
		
		this.height = 600;
		this.width = 400;
		this.elementsContent = [this._Group1_i(),this.timeText_i(),this._Label1_i(),this.nextText_i(),this.shartBtn_i(),this.nextBtn_i(),this.backBtn_i()];
	}
	var _proto = ResultUISkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.s0_i(),this.s1_i(),this.s2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto.s0_i = function () {
		var t = new eui.Image();
		this.s0 = t;
		t.source = "chapter_star1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.s1_i = function () {
		var t = new eui.Image();
		this.s1 = t;
		t.source = "chapter_star1_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.s2_i = function () {
		var t = new eui.Image();
		this.s2 = t;
		t.source = "chapter_star1_png";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.timeText_i = function () {
		var t = new eui.Label();
		this.timeText = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 60;
		t.text = "14%";
		t.textColor = 0xFFFFFF;
		t.y = 205;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 1;
		t.size = 24;
		t.text = "当前用时";
		t.textColor = 0xCBCACA;
		t.y = 164;
		return t;
	};
	_proto.nextText_i = function () {
		var t = new eui.Label();
		this.nextText = t;
		t.horizontalCenter = 1;
		t.size = 24;
		t.text = "下一关已解锁";
		t.textColor = 0x96fffb;
		t.y = 280;
		return t;
	};
	_proto.shartBtn_i = function () {
		var t = new eui.Button();
		this.shartBtn = t;
		t.bottom = 135;
		t.horizontalCenter = 0;
		t.label = "炫耀一下";
		t.skinName = "Btn4Skin";
		t.width = 160;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.bottom = 60;
		t.horizontalCenter = 0;
		t.label = "下一关";
		t.skinName = "Btn2Skin";
		t.width = 160;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Group();
		this.backBtn = t;
		t.horizontalCenter = 0;
		t.y = 556;
		t.elementsContent = [this._Label2_i(),this._Rect1_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "返回首页";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 2;
		t.left = 0;
		t.right = 0;
		t.y = 30;
		return t;
	};
	return ResultUISkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/SkinItemSkin.exml'] = window.SkinItemSkin = (function (_super) {
	__extends(SkinItemSkin, _super);
	function SkinItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","desText","rateText","barMC","btn"];
		
		this.height = 260;
		this.width = 180;
		this.elementsContent = [this.bg_i(),this._Image1_i()];
		this._Image2_i();
		
		this._Label1_i();
		
		this.desText_i();
		
		this.rateText_i();
		
		this.barMC_i();
		
		this._Group1_i();
		
		this.btn_i();
		
		this.states = [
			new eui.State ("lock",
				[
					new eui.AddItems("rateText","",1,""),
					new eui.AddItems("barMC","_Group1",1,""),
					new eui.AddItems("_Group1","",1,""),
					new eui.AddItems("btn","",1,"")
				])
			,
			new eui.State ("normal",
				[
					new eui.AddItems("desText","",1,""),
					new eui.AddItems("barMC","_Group1",1,"")
				])
			,
			new eui.State ("lock2",
				[
					new eui.AddItems("_Image2","",1,""),
					new eui.AddItems("_Label1","",1,"")
				])
		];
	}
	var _proto = SkinItemSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(17,21,103,130);
		t.source = "skin_item_png";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "car_temp_png";
		t.visible = false;
		t.y = 5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0.5;
		t.source = "skin_unlock_png";
		t.verticalCenter = -40;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "待解锁";
		t.y = 186;
		return t;
	};
	_proto.desText_i = function () {
		var t = new eui.Label();
		this.desText = t;
		t.bottom = 10;
		t.lineSpacing = 10;
		t.size = 20;
		t.text = "时速:150KM\n加速:15KM/秒\n制动:30KM/秒";
		t.x = 20;
		return t;
	};
	_proto.rateText_i = function () {
		var t = new eui.Label();
		this.rateText = t;
		t.bottom = 80;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "Label";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.bottom = 65;
		t.height = 18;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 30;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "progress_img_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.barMC_i = function () {
		var t = new eui.Image();
		this.barMC = t;
		t.scale9Grid = new egret.Rectangle(10,2,219,14);
		t.source = "progress_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Button();
		this.btn = t;
		t.bottom = 10;
		t.height = 45;
		t.label = "获取";
		t.skinName = "Btn4Skin";
		t.width = 120;
		t.x = 30;
		return t;
	};
	return SkinItemSkin;
})(eui.Skin);generateEUI.paths['resource/game_skin/SkinUISkin.exml'] = window.SkinUISkin = (function (_super) {
	__extends(SkinUISkin, _super);
	function SkinUISkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","list","scroller"];
		
		this.height = 840;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Label1_i(),this.scroller_i()];
	}
	var _proto = SkinUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(81,149,230,153);
		t.source = "window_bg_png";
		t.top = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Group();
		this.closeBtn = t;
		t.height = 100;
		t.right = 0;
		t.width = 100;
		t.y = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "close_btn_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.text = "我的车库";
		t.y = 35;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.top = 115;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.bottom = 0;
		t.itemRendererSkinName = SkinItemSkin;
		t.top = 0;
		t.x = 0;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 10;
		t.requestedColumnCount = 3;
		t.verticalGap = 15;
		return t;
	};
	return SkinUISkin;
})(eui.Skin);