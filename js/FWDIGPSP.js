/**
 * Infinite Grid Pro PACKAGED v3.0
 * Preloader.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPSP = function(prt, preloaderPostion, radius, backgroundColor, fillColor, strokeSize, animDuration){
		
		var _s  = this;
		var prototype = FWDIGPSP.prototype;
		_s.preloaderPostion = preloaderPostion;
		_s.backgroundColor = backgroundColor;
		_s.fillColor = fillColor;
		_s.radius = radius;
		_s.strokeSize = strokeSize;
		_s.animDuration = animDuration || 300;
		_s.strtAngle = 270;
		_s.countAnimation = 0;
		_s.isShowed_bl = true;
		_s.slideshowAngle = {n:0};
		
		
		// Intialize.
		_s.init = function(){
			_s.main_do = new FWDIGPDisplayObject("div");
			_s.main_do.setOverflow("visible");
			_s.main_do.setWidth(_s.radius * 2 + _s.strokeSize);
			_s.main_do.setHeight(_s.radius * 2 + _s.strokeSize);
			_s.addChild(_s.main_do);
			_s.setOverflow('visible');
			_s.setWidth((_s.radius * 2) + _s.strokeSize);
			_s.setHeight((_s.radius * 2) + _s.strokeSize);
			_s.bkCanvas =  new FWDIGPDisplayObject("canvas");
			_s.bkCanvasContext = _s.bkCanvas.screen.getContext('2d');
			_s.fillCircleCanvas = new FWDIGPDisplayObject("canvas");
			_s.fillCircleCanvasContext = _s.fillCircleCanvas.screen.getContext('2d');

			_s.bkCanvas.screen.className = 'canvas-background';
			_s.fillCircleCanvas.screen.className = 'canvas-fill';

			_s.main_do.screen.style.transformOrigin ="50% 50%";
		
			_s.main_do.addChild(_s.bkCanvas);
			_s.main_do.addChild(_s.fillCircleCanvas);
			_s.drawBackground();
			_s.drawFill();
			_s.hide();
		};

		
		// Postion.
		_s.positionAndResize = function(){

			var paralax_bl = prt && prt.paralax_bl;
			var offsetY = (paralax_bl ? prt.pageYOffset/2 : 0);
			
			if(_s.preloaderPostion == 'bottomleft'){
				_s.setX(prt.offsetPreloader);
				_s.setY(prt.stageHeight - _s.h - prt.offsetPreloader + Math.round(offsetY));
			}else if(_s.preloaderPostion == 'bottomright'){
				_s.setX(prt.stageWidth - _s.w - prt.offsetPreloader);
				_s.setY(prt.stageHeight - _s.h - prt.offsetPreloader + Math.round(offsetY));
			}else if(_s.preloaderPostion == 'topright'){
				_s.setX(prt.stageWidth - _s.w - prt.offsetPreloader + Math.round(offsetY));
				_s.setY(prt.offsetPreloader);
			}else if(_s.preloaderPostion == 'topleft'){
				_s.setX(prt.offsetPreloader);
				_s.setY(prt.offsetPreloader + Math.round(offsetY)) ;
			}else if(_s.preloaderPostion == 'center'){
				_s.setX(Math.round(prt.stageWidth - _s.w)/2);
				_s.setY(Math.round(prt.stageHeight - _s.h)/2 + Math.round(offsetY));
			}
		}	


		// Draw background.
		_s.drawBackground = function(){
			_s.bkCanvas.screen.width = (_s.radius * 2) + _s.strokeSize * 2;
			_s.bkCanvas.screen.height = (_s.radius * 2) + _s.strokeSize * 2;
			_s.bkCanvasContext.lineWidth = _s.thicknessSize;
			_s.bkCanvasContext.translate(_s.strokeSize/2, _s.strokeSize/2);
			_s.bkCanvasContext.shadowColor = '#333333';
		    _s.bkCanvasContext.shadowBlur = 1;
		   
			_s.bkCanvasContext.lineWidth=_s.strokeSize;
			_s.bkCanvasContext.strokeStyle = _s.backgroundColor;
			_s.bkCanvasContext.beginPath();
			_s.bkCanvasContext.arc(_s.radius, _s.radius,  _s.radius, (Math.PI/180) * 0, (Math.PI/180) * 360, false);
			_s.bkCanvasContext.stroke();
			_s.bkCanvasContext.closePath();
		};
		

		// Draw fill.
		_s.drawFill = function(){	
			_s.fillCircleCanvas.screen.width = (_s.radius * 2) + _s.strokeSize * 2;
			_s.fillCircleCanvas.screen.height = (_s.radius * 2) + _s.strokeSize * 2;
			_s.fillCircleCanvasContext.lineWidth = _s.thicknessSize;
			_s.fillCircleCanvasContext.translate(_s.strokeSize/2, _s.strokeSize/2);
			_s.fillCircleCanvasContext.lineWidth=_s.strokeSize;
			_s.fillCircleCanvasContext.strokeStyle = _s.fillColor;
			_s.fillCircleCanvasContext.beginPath();
			_s.fillCircleCanvasContext.arc(_s.radius, _s.radius,  _s.radius, (Math.PI/180) * _s.strtAngle, (Math.PI/180) * (_s.strtAngle +  _s.slideshowAngle.n), false);
			_s.fillCircleCanvasContext.stroke();
			_s.fillCircleCanvasContext.closePath()
		};
		
		
		// Start / stop preloader animation.
		_s.startSlideshow = function(){
			if(_s == null) return;
			FWDAnimation.killTweensOf(_s.slideshowAngle);
			FWDAnimation.to(_s.slideshowAngle, _s.animDuration, {n:360, onUpdate:_s.drawFill, onComplete:_s.stopSlideshow});
		};
		
		_s.stopSlideshow = function(){
			FWDAnimation.killTweensOf(_s.slideshowAngle);
			FWDAnimation.to(_s.slideshowAngle, .8, {n:0, onupdate:_s.drawFill, onUpdate:_s.drawFill, ease:Expo.easiInOut});
		};
		
		_s.startPreloader = function(){
			if(FWDAnimation.isTweening(_s.main_do.screen)) return;
			_s.slideshowAngle = {n:0};
			FWDAnimation.killTweensOf(_s.slideshowAngle);
			FWDAnimation.to(_s.slideshowAngle, _s.animDuration, {n:360, onUpdate:_s.drawFill, repeat:100, yoyo:true, ease:Expo.easInOut});
			FWDAnimation.to(_s.main_do.screen, _s.animDuration, {rotation:360, repeat:100});
		}
		
		_s.stopPreloader = function(){
			FWDAnimation.killTweensOf(_s.slideshowAngle);
			FWDAnimation.killTweensOf(_s.main_do.screen);
		}
		
		
		// Show / hide preloader animation.
		_s.show = function(){
			if(_s.isShowed_bl) return;
			_s.setVisible(true);
			FWDAnimation.killTweensOf(_s);
			FWDAnimation.to(_s, 1, {alpha:1, delay:.2});
			_s.isShowed_bl = true;
		};
		
		_s.hide = function(animate){
			if(!_s.isShowed_bl) return;
			FWDAnimation.killTweensOf(_s);
			if(animate){
				FWDAnimation.to(_s, 1, {alpha:0, onComplete:_s.onHideComplete});
			}else{
				_s.setVisible(false);
				_s.setAlpha(0);
			}
			_s.isShowed_bl = false;
		};
		
		_s.onHideComplete = function(){
			_s.setVisible(false);
			_s.stopPreloader();
			_s.dispatchEvent(FWDIGPSP.HIDE_COMPLETE);
		};
		
		_s.init();
	};
	

	// Set prototype.
    FWDIGPSP.setPrototype = function(){
    	FWDIGPSP.prototype = new FWDIGPDisplayObject("div");
    };
    
    FWDIGPSP.HIDE_COMPLETE = "hideComplete";
    
    FWDIGPSP.prototype = null;
	window.FWDIGPSP = FWDIGPSP;
}(window));