/**
 * Infinite Grid Pro PACKAGED v3.0
 * Scroll look icon.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (){
var FWDIGPLockIcon = function(
			prt,
			clsName,
			icon1_str, 
			icon2_str,
			bkNormCls,
			bkSelCls, 
			normCls,
			selCls
		){

		'use strict';
		
		var _s = this;
		var prototype = FWDIGPLockIcon.prototype;
		
		_s.clsName = clsName;
		_s.icon1_str = icon1_str;
		_s.icon2_str = icon2_str;
		_s.bkNormCls = bkNormCls;
		_s.bkSelCls = bkSelCls;
		_s.normCls = normCls;
		_s.selCls = selCls;
		_s.checkCount = 0;
		_s.currentState = 1;
		_s.isMobile_bl = FWDIGPUtils.isMobile;
		_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;
	

		// Initialize.
		_s.init = function(){
			_s.screen.className = clsName;
			_s.setButtonMode(true);
			_s.setWidth(2);
			_s.setHeight(2);
			_s.setupMainContainers();
			_s.secondBtn_do.setVisible(false);
			_s.setNormalState();
			if(_s.isMobile_bl) _s.setSelectedState();
			_s.setFinalSize();
			_s.hide();
		};
		

		// Setup main containers.
		_s.setupMainContainers = function(){
			_s.screen.style.transformOrigin = "50% 50%";
			_s.main_do = new FWDIGPDisplayObject("div");
			
			// First button.
			_s.firstBtn_do = new FWDIGPDisplayObject("div");
			_s.firstBtn_do.setOverflow("visible");
			_s.n1_do = new FWDIGPDisplayObject("div");	
			_s.n1_do.hasT3D = false;
			_s.n1_do.hasT2D = false;
			_s.n1_do.setInnerHTML(_s.icon1_str);
			_s.firstBtn_do.addChild(_s.n1_do);
			
			
			// Second button.
			_s.secondBtn_do = new FWDIGPDisplayObject("div");
			_s.secondBtn_do.setOverflow("visible");
			_s.n2_do = new FWDIGPDisplayObject("div");	
			_s.n2_do.hasT3D = false;
			_s.n2_do.hasT2D = false;
			_s.n2_do.setInnerHTML(_s.icon2_str);
			_s.secondBtn_do.addChild(_s.n2_do);

			_s.main_do.addChild(_s.secondBtn_do);
			_s.main_do.addChild(_s.firstBtn_do);
			_s.addChild(_s.main_do);
			
			if(_s.hasPointerEvent_bl){
				_s.screen.addEventListener("pointerup", _s.onMUP);
				_s.screen.addEventListener("pointerover", _s.onMOV);
				_s.screen.addEventListener("pointerout", _s.onMOU);
			}else if(_s.screen.addEventListener){	
				if(!_s.isMobile_bl){
					_s.screen.addEventListener("mouseover", _s.onMOV);
					_s.screen.addEventListener("mouseout", _s.onMOU);
					_s.screen.addEventListener("mouseup", _s.onMUP);
				}
				_s.screen.addEventListener("touchend", _s.onMUP);
			}
		};
		
		_s.onMOV = function(e, animate){
			if(_s.isDisabled_bl || _s.isSelectedState_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				_s.dispatchEvent(FWDIGPLockIcon.MOUSE_OVER, {e:e});;
				_s.setSelectedState(true);
			}
		};
			
		_s.onMOU = function(e){
			if(_s.isDisabled_bl || !_s.isSelectedState_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				_s.setNormalState(true);
				_s.dispatchEvent(FWDIGPLockIcon.MOUSE_OUT);
			}
		};
	
		_s.onMUP = function(e){
			if(_s.isDisabled_bl || e.button == 2) return;
			if(e.preventDefault) e.preventDefault();
			if(!_s.isMobile_bl) _s.onMOV(e, false);
			if(_s.disptachMainEvent_bl) _s.dispatchEvent(FWDIGPLockIcon.MOUSE_UP, {e:e});
			_s.toggleButton();
		};
		
		
		// Set final size.
		_s.setFinalSize = function(){
			
			clearInterval(_s.checkId_int);
			_s.lastWidth = _s.n1_do.screen.firstChild.offsetWidth;
			if(_s.checkCount > 10) return;
			_s.checkCount ++;
				
			_s.checkId_int = setInterval(function(){
				_s.setFinalSize();
			},100);
			
			if((_s.prevWidth == _s.lastWidth || _s.lastWidth == 0)) return;
			var maxWidth = Math.max(_s.n1_do.screen.firstChild.offsetWidth, _s.n2_do.screen.firstChild.offsetWidth); 
			var maxHeight = Math.max(_s.n1_do.screen.offsetHeight, _s.n2_do.screen.firstChild.offsetHeight); 
			_s.buttonWidth = maxWidth;
			_s.buttonHeight = maxHeight;
			
			_s.setWidth(maxWidth + 15);
			_s.setHeight(maxHeight + 15);
			_s.main_do.setWidth(maxWidth);
			_s.main_do.setHeight(maxHeight);
			
			_s.firstBtn_do.setWidth(_s.w);
			_s.firstBtn_do.setHeight(_s.h);
			_s.secondBtn_do.setWidth(_s.w);
			_s.secondBtn_do.setHeight(_s.h);

			_s.n1_do.setX(Math.round((maxWidth - _s.n1_do.getWidth())/2));
			_s.n1_do.setY(Math.round((maxHeight - _s.n1_do.getHeight())/2) + 1);
			_s.n2_do.setX(Math.round((maxWidth - _s.n2_do.getWidth())/2));
			_s.n2_do.setY(Math.round((maxHeight - _s.n2_do.getHeight())/2) + 1);
		
			_s.prevWidth = _s.lastWidth;
		}
		

		// Toggle button.
		_s.toggleButton = function(){
			if(prt.isCategoryChanging_bl) return;
			if(_s.currentState == 1){
				_s.firstBtn_do.setVisible(false);
				_s.secondBtn_do.setVisible(true);
				_s.currentState = 0;
				_s.dispatchEvent(FWDIGPLockIcon.FIRST_BUTTON_CLICK);
			}else{
				_s.firstBtn_do.setVisible(true);
				_s.secondBtn_do.setVisible(false);
				_s.currentState = 1;
				_s.dispatchEvent(FWDIGPLockIcon.SECOND_BUTTON_CLICK);
			}
		};
		

		// Set second buttons state.
		_s.setButtonState = function(state){
			if(state == 1){
				_s.firstBtn_do.setVisible(true);
				_s.secondBtn_do.setVisible(false);
				_s.currentState = 1; 
			}else{
				_s.firstBtn_do.setVisible(false);
				_s.secondBtn_do.setVisible(true);
				_s.currentState = 0; 
			}
		};
		
	
		// Set normal state.
		_s.setNormalState = function(animate){
			_s.isSelectedState_bl = false;
			
			FWDAnimation.killTweensOf(_s.main_do.screen);
			FWDAnimation.killTweensOf(_s.n1_do.screen);
			FWDAnimation.killTweensOf(_s.n2_do.screen);
				
			if(animate){
				FWDAnimation.to(_s.main_do.screen, .8, {className:_s.bkNormCls, ease:Expo.easeOut});
				FWDAnimation.to(_s.n1_do.screen, .8, {className:_s.normCls, ease:Expo.easeOut});	
				FWDAnimation.to(_s.n2_do.screen, .8, {className:_s.normCls, ease:Expo.easeOut});
			}else{
				_s.main_do.screen.className = _s.bkNormCls;
				_s.n1_do.screen.className = _s.normCls;
				_s.n2_do.screen.className = _s.normCls;
			}
		};
		
		_s.setSelectedState = function(animate){
			_s.isSelectedState_bl = true;
			
			FWDAnimation.killTweensOf(_s.n1_do.screen);
			FWDAnimation.killTweensOf(_s.n2_do.screen);
			if(animate){
				FWDAnimation.to(_s.main_do.screen, .8, {className:_s.bkSelCls, ease:Expo.easeOut});
				FWDAnimation.to(_s.n1_do.screen, .8, {className:_s.selCls, ease:Expo.easeOut});	
				FWDAnimation.to(_s.n2_do.screen, .8, {className:_s.selCls, ease:Expo.easeOut});	
			}else{
				_s.main_do.screen.className = _s.bkSelCls;
				_s.n1_do.screen.className = _s.selCls;
				_s.n2_do.screen.className = _s.selCls;
			}	
		};

		// Show / hide.
		_s.show = function(anim, dl){
			dl = dl || 0;
			FWDAnimation.killTweensOf(_s);
			if(anim){
				FWDAnimation.to(_s, .8, {scale:1, delay:dl, ease:Elastic.easeOut});
			}else{
				_s.setScale2(1);
			}
		}

		_s.hide = function(){
			FWDAnimation.killTweensOf(_s);
			_s.setScale2(0);
		}
		

		// Disable / enable.
		_s.disable = function(){
			if(_s.isDisabled_bl) return;
			_s.isDisabled_bl = true;
			_s.setButtonMode(false);
			FWDAnimation.killTweensOf(_s);
			FWDAnimation.to(_s, .6, {alpha:.4});
			_s.setNormalState();
		};
		
		_s.enable = function(){
			if(!_s.isDisabled_bl) return;
			_s.isDisabled_bl = false;
			_s.setButtonMode(true);
			FWDAnimation.killTweensOf(_s);
			FWDAnimation.to(_s, .6, {alpha:1});
		};
		
		_s.init();
	};
	
	
	// Set prototype.
	FWDIGPLockIcon.setPrototype = function(){
		FWDIGPLockIcon.prototype = new FWDIGPTransformDisplayObject("div");
	};
	
	FWDIGPLockIcon.FIRST_BUTTON_CLICK = "onFirstClick";
	FWDIGPLockIcon.SECOND_BUTTON_CLICK = "secondButtonOnClick";
	FWDIGPLockIcon.MOUSE_OVER = "onMOV";
	FWDIGPLockIcon.MOUSE_OUT = "onMOU";
	FWDIGPLockIcon.MOUSE_UP = "onMUP";
	FWDIGPLockIcon.CLICK = "onClick";
	
	FWDIGPLockIcon.prototype = null;
	window.FWDIGPLockIcon = FWDIGPLockIcon;
}(window));