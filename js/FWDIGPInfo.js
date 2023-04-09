/**
 * Infinite Grid Pro PACKAGED v3.0
 * Info screen.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPInfo = function(parent, warningIconPath){
		
		var _s = this;
		var prototype = FWDIGPInfo.prototype;
	
		_s.textHolder_do = null;
		_s.img_do;
		
		_s.warningIconPath = warningIconPath;
		
		_s.show_to = null;
		_s.isShowed_bl = false;
		_s.isShowedOnce_bl = false;
		_s.allowToRemove_bl = true;
		
		
		// Initialize.
		_s.init = function(){
			_s.setResizableSizeAfterParent();
		
			_s.getStyle().width = "80%";
		
			_s.textHolder_do = new FWDIGPDisplayObject("div");
			if(!FWDIGPUtils.isIEAndLessThen9) _s.textHolder_do.getStyle().font = "Arial";
			_s.textHolder_do.getStyle().wordWrap = "break-word";
			_s.textHolder_do.getStyle().padding = "10px";
			_s.textHolder_do.getStyle().paddingLeft = "42px";
			_s.textHolder_do.getStyle().lineHeight = "18px";
			_s.textHolder_do.setBkColor("#EEEEEE");
			
			var img_img = new Image();
			img_img.src = _s.warningIconPath;
			_s.img_do = new FWDIGPDisplayObject("img");
			_s.img_do.setScreen(img_img);
			_s.img_do.setWidth(28);
			_s.img_do.setHeight(28);
			
			
			_s.addChild(_s.textHolder_do);
			_s.addChild(_s.img_do);
		};
		
		_s.showText = function(txt){
			
			clearTimeout(_s.checkId_to);
			_s.checkId_to = setTimeout(function(){
				window.removeEventListener("click", _s.closeWindow);
				window.addEventListener("click", _s.closeWindow);
				_s.isShowedOnce_bl = true;
			}, 50);
				
			_s.textHolder_do.setInnerHTML(txt);
			clearTimeout(_s.show_to);
			_s.show();
		};
		
		_s.show = function(){
			_s.isShowed_bl = true;
			_s.setVisible(true);
			setTimeout(function(){
				_s.positionAndResize();
			}, 60);
		};
		
		_s.positionAndResize = function(){		
			_s.setHeight(_s.textHolder_do.getHeight());
			_s.img_do.setX(6);
			_s.img_do.setY(parseInt((_s.h - _s.img_do.h)/2));
	
		};
		
		_s.closeWindow = function(){
			if(!_s.allowToRemove_bl) return;
			clearTimeout(_s.checkId_to);
			window.removeEventListener("click", _s.closeWindow);
			_s.isShowed_bl = false;
			clearTimeout(_s.show_to);
			try{parent.main_do.removeChild(_s);}catch(e){}
		};
		
		_s.init();
	};
		
	// Set prototype.
	FWDIGPInfo.setPrototype = function(){
		FWDIGPInfo.prototype = new FWDIGPDisplayObject("div", "relative");
	};
	
	FWDIGPInfo.prototype = null;
	window.FWDIGPInfo = FWDIGPInfo;
}(window));