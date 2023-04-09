/**
 * Infinite Grid Pro PACKAGED v3.0
 * Combobox button.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPComboBoxButton = function(
			prt,
			text,
			id,
			normalClass,
			selectedClass
	   ){
		
		var _s = this;
		var prototype = FWDIGPComboBoxButton.prototype;
		
		_s.text = text;
		_s.id = id;
		_s.isDisabled_bl = true;
		_s.isSelected_bl = false;
		_s.isMobile_bl = FWDIGPUtils.isMobile;
		_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;

		
		// Initialize.
		_s.init = function(){
			_s.setOverflow("visible");
			_s.getStyle().border = "";
			_s.getStyle().backgroundColor = "";
			_s.setupDos();
			_s.setNormalState(false);
			_s.enable();
			_s.addEvents();
			_s.dumy_do.setVisible(false);
		};
		
	
		// Setup screens.
		_s.setupDos = function(){
			if(_s.id == 100){
				_s.text_do = new FWDIGPDisplayObject("input", "relative");
			}else{
				_s.text_do = new FWDIGPDisplayObject("div", "relative");
			}
			
			_s.text_do.setOverflow("visible");
			_s.text_do.setDisplay("inline-block");
			_s.text_do.getStyle().fontSmoothing = "antialiased";
			_s.text_do.getStyle().webkitFontSmoothing = "antialiased";
			_s.text_do.getStyle().textRendering = "optimizeLegibility";
			_s.text_do.getStyle().whiteSpace = "nowrap";
			_s.text_do.setBackfaceVisibility();
			_s.text_do.getStyle().padding = "";
			_s.text_do.getStyle().margin = "";
			_s.text_do.hasTransform3d_bl =  false;
			_s.text_do.hasTransform2d_bl =  false;
		
			_s.dumy_do = new FWDIGPDisplayObject("div");
			_s.dumy_do.getStyle().width = "100%";
			_s.dumy_do.getStyle().height = "100%";
			if(FWDIGPUtils.isIE){
				_s.dumy_do.setBkColor("#00FF00");
				_s.dumy_do.setAlpha(0);
			}
			_s.addChild(_s.text_do);
		    _s.addChild(_s.dumy_do);
		    _s.setSize();
		};
		
		
		// Add events.
		_s.addEvents = function(){
			if(_s.id == 100){
				_s.text_do.screen.addEventListener("focus", _s.inputFocusInHandler);
				_s.text_do.screen.addEventListener("blur", _s.inputFocusOutHandler);
				_s.text_do.screen.addEventListener("keyup", _s.keyUpHandler);
			}else{
				if(_s.isMobile_bl){
					if(_s.hasPointerEvent_bl){
						_s.screen.addEventListener("pointerup", _s.onMouseUp);
						_s.screen.addEventListener("pointerover", _s.onMouseOver);
						_s.screen.addEventListener("pointerout", _s.onMouseOut);
					}else{
						_s.screen.addEventListener("click", _s.onMouseUp);
					}
				}else if(_s.screen.addEventListener){	
					_s.screen.addEventListener("mouseover", _s.onMouseOver);
					_s.screen.addEventListener("mouseout", _s.onMouseOut);
					_s.screen.addEventListener("mouseup", _s.onMouseUp);
				}
			}
		};
		
		_s.onMouseOver = function(e){
			if(!e.pointerType || e.pointerType == "mouse" ){
				if(_s.isDisabled_bl || _s.isSelectedFinal_bl) return;
				_s.dispatchEvent(FWDIGPComboBoxButton.MOUSE_OVER, {e:e});
				prt.resetButtons();
				_s.setSelectedState(true);
			}
		};
			
		_s.onMouseOut = function(e){
			if((!e.pointerType || e.pointerType == "mouse") && !FWDAnimation.isTweening(prt.buttonsHolder_do)){
				if(_s.isDisabled_bl || _s.isSelectedFinal_bl) return;
				_s.dispatchEvent(FWDIGPComboBoxButton.MOUSE_OUT, {e:e});
				_s.setNormalState(true);
			}
		};
		
		_s.onMouseUp = function(e){
			if(e.button == 2) return;
			_s.dispatchEvent(FWDIGPComboBoxButton.MOUSE_UP, {id:_s.id});
		};
		
		
		_s.inputFocusInHandler = function(){
			if(_s.hasInputFocus_bl) return;
			_s.hasInputFocus_bl = true;
			
			if(_s.text_do.screen.value == _s.text){
				_s.text_do.screen.value = "";
			}
		};
		
		_s.inputFocusOutHandler = function(e){
			if(!_s.hasInputFocus_bl) return;
			var vc = FWDIGPUtils.getViewportMouseCoordinates(e);	
			if(!FWDIGPUtils.hitTest(_s.text_do.screen, vc.screenX, vc.screenY)){
				_s.hasInputFocus_bl = false;
				if(_s.text_do.screen.value == ""){
					_s.text_do.screen.value = _s.text;
				}
				return;
			}
		};
		
		_s.keyUpHandler = function(e){
			if(e.stopPropagation) e.stopPropagation();
			var inputValue;
			if (_s.prevInputValue != _s.text_do.screen.value){
				
				inputValue = _s.text_do.screen.value.toLowerCase();
				
				if (inputValue != _s.text){
					_s.searchValue = inputValue;
					clearTimeout(_s.updateSearch_to);
					_s.updateSearch_to = setTimeout(function(){
						_s.dispatchEvent(FWDIGPComboBox.SEARCH, {param:_s.searchValue});
					}, 200);
				}
			}
			
			_s.prevInputValue = _s.text_do.screen.value;
		};
		
		
		// Set normal / selected state.
		_s.setNormalState = function(animate){
			_s.isSelected_bl = true;

			var nC = 'PGMenuButtonTextNormal';
			if(selectedClass){
				nC = normalClass;
			}
			
			FWDAnimation.killTweensOf(_s.screen);
			FWDAnimation.killTweensOf(_s.text_do.screen);
			if(_s.id == 100){
				_s.text_do.screen.className = "PGMenuButtonTextNormal";
			}else{
				if(animate){
					FWDAnimation.to(_s.screen, .6, {className:"PGMenuButtonBackgroundNormal"});
					FWDAnimation.to(_s.text_do.screen, .6, {className:nC, ease:Expo.easeOut});
				}else{
					_s.screen.className = "PGMenuButtonBackgroundNormal";
					_s.text_do.screen.className = nC;
				}
			}
		};
		
		_s.setSelectedState = function(animate){
			if(!_s.isSelected_bl) return;
			_s.isSelected_bl = false;

			var sC = 'PGMenuButtonTextSelected';
			if(selectedClass){
				sC = selectedClass;
			}
		
			FWDAnimation.killTweensOf(_s.screen);
			FWDAnimation.killTweensOf(_s.text_do.screen);
			if(animate){
				FWDAnimation.to(_s.screen, .6, {className:"PGMenuButtonBackgroundSelected"});
				FWDAnimation.to(_s.text_do.screen, .6, {className:sC, ease:Expo.easeOut});
			}else{
				_s.screen.className = "PGMenuButtonBackgroundSelected";
				_s.text_do.screen.className = sC;
			}
		};
		
		
		// Set selected / unselected.
		_s.setSelected = function(){
			if(_s.isSelectedFinal_bl) return;
			_s.isSelectedFinal_bl = true;
			_s.setSelectedState(true);
		};
		
		_s.setUnselected = function(){
			if(!_s.isSelectedFinal_bl) return;
			_s.isSelectedFinal_bl = false;
			_s.setNormalState(true);
		};
		
		
		// Disable / enable.
		_s.disable = function(){
			if(_s.id == 100) return
			_s.isDisabled_bl = true;
			_s.setButtonMode(true);
			_s.dumy_do.setButtonMode(true);
			_s.setSelectedState(true);
		};
		
		_s.enable = function(){
			if(_s.id == 100) return
			_s.isDisabled_bl = false;
			_s.setButtonMode(true);
			_s.dumy_do.setButtonMode(true);
			_s.setNormalState(true);
		};
		
		
		// Set label.
		_s.setLabel = function(label){
			_s.text = label;
			if(_s.id == 100){
				_s.text_do.screen.value = _s.text;
			}else{
				_s.text_do.setInnerHTML(_s.text);
			}
		};
		
		
		// Set size.
		_s.setSize = function(){
			setTimeout(function(){
		    	_s.w = _s.getWidth();
		    	_s.h = _s.getHeight();
		    }, 69);
		};
		
		_s.init();
	};
	
	
	// Set prototype.
	FWDIGPComboBoxButton.setPrototype = function(){
		FWDIGPComboBoxButton.prototype = new FWDIGPDisplayObject("div");
	};
	
	FWDIGPComboBox.SEARCH = "search";
	FWDIGPComboBoxButton.MOUSE_OVER = "onMouseOver";
	FWDIGPComboBoxButton.MOUSE_OUT = "onMouseOut";
	FWDIGPComboBoxButton.MOUSE_UP = "onMouseDown";
	
	
	FWDIGPComboBoxButton.prototype = null;
	window.FWDIGPComboBoxButton = FWDIGPComboBoxButton;
}(window));