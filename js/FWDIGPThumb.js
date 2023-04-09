/**
 * Infinite Grid Pro PACKAGED v3.0
 * Thumbnail.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPThumb = function(
			prt,
			transitionType,
			backgroundColor, 
			thumbnailOverlayBackgroundColor,
			thumbnailOverlayOpacity, 
			hasOverlay_bl, 
			isMobile_bl,
			hasIcon_bl,
			openOnSingleTouch_bl,
			disableThumbnailInteractivity_bl,
			showCaption_bl,
			showCaptionOnThumbVideo_bl,
			visitedThumbnailsOverlayOpacity,
			useVideoInThumb_bl,
			preset){
		
		var _s = this;
		var prototype = FWDIGPThumb.prototype;
		
		_s.prt = prt;
		_s.transitionType = transitionType;
		_s.backgroundColor = backgroundColor;
		_s.thumbnailOverlayBackgroundColor = thumbnailOverlayBackgroundColor;
		_s.openOnSingleTouch_bl = openOnSingleTouch_bl;
		_s.visitedThumbnailsOverlayOpacity = visitedThumbnailsOverlayOpacity;
		_s.totalW = 0;
		_s.totalH = 0;
		_s.imageFinalWidth = 0;
		_s.imageFinalHeight = 0;
		_s.imageFinalX = 0;
		_s.imageFinalY = 0;
		_s.smallImageOriginalW = 0;
		_s.smallImageOriginalH = 0;
		_s.iconW = 37;
		_s.iconH = 32;
		_s.overlayOpacity = thumbnailOverlayOpacity;
		_s.isVisited_bl = false;
		_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;
		_s.hasOverlay_bl = hasOverlay_bl;
		_s.hasIcon_bl = hasIcon_bl;
		_s.isAvailable_bl = true;
		_s.isNormalState_bl = true;
		_s.showCaption_bl = showCaption_bl;
		_s.showCaptionOnThumbVideo_bl = showCaptionOnThumbVideo_bl;
		_s.useVideoInThumb_bl = useVideoInThumb_bl;
		_s.preset = preset;
		_s.isMobile_bl = FWDIGPUtils.isMobile;
		_s.disableThumbnailInteractivity_bl = disableThumbnailInteractivity_bl;

	
		// Initialize.
		_s.init = function(){
			_s.screen.className = 'main';
			if(_s.disableThumbnailInteractivity_bl){
				_s.hasOverlay_bl = false;
				_s.hasIcon_bl = false;
			}
			
			_s.smallImage_img = new Image();
			if(_s.hasIcon_bl) _s.icon_img = new Image();;
			_s.setupOverlay();
			_s.addEvents();
			if(_s.preset){
				_s.setupPresetContent();
			}
			if(FWDIGPUtils.isAndroid) _s.setBackfaceVisibility();
		};
	

		// Setup background.
		_s.setupOverlay = function(){
			_s.setBkColor(_s.backgroundColor);
			
			_s.smallImage_do = new FWDIGPDisplayObject("img");
			
			if(_s.hasOverlay_bl){ 
				_s.overlay_do = new FWDIGPDisplayObject("div", "absolute", "hidden", "block", true);
				_s.overlay_do.setBkColor(_s.thumbnailOverlayBackgroundColor);
				_s.overlay_do.setAlpha(0);
				_s.overlay_do.setVisible(false);
				_s.overlay_do.screen.className = "PGThumbnailOverlay";
				_s.addChild(_s.overlay_do);
			}
		};
		

		// Setup video icon and functionality.
		_s.setupVideoPlayButton = function(){
			if(!_s.useVideoInThumb_bl || _s.preset) return;
			_s.hidePlayButton();
			if(_s.type != FWDIGP.VIDEO_IN_THUMB){
				if(_s.play_do){
					FWDAnimation.killTweensOf(_s.play_do);
					_s.play_do.hide();
				}
			}
			
			if(!_s.play_do){
				var ic = prt.prt.fontIcon + ' ' + prt.prt.fontIcon + '-play';
				FWDEVPSimpleButton.setTransformPrototype();
				_s.play_do = new FWDEVPSimpleButton(
						undefined, 0, 0, true, 0, 0, 0,
						"<div class='table-fwdevp-button'><span class='table-cell-fwdevp-button " + ic + "'></span></div>",
						undefined,
						"EVPLargePlayButtonNormalState",
						"EVPLargePlayButtonSelectedState"
				);
				_s.play_do.setOverflow("visible");
				_s.play_do.removeListener(FWDEVPSimpleButton.MOUSE_UP, _s.playUpHandler);
				_s.play_do.addListener(FWDEVPSimpleButton.MOUSE_UP, _s.playUpHandler)
			}

			if(!_s.contains(_s.play_do)) _s.addChild(_s.play_do);
			
			if(!prt.playBtnW){
				setTimeout(function(){
					prt.playBtnW = _s.play_do.getWidth();
					prt.playBtnH = _s.play_do.getHeight();
					_s.positionPlayBtn();
					_s.scalePlayButton();
					_s.resizeVideo()
			
				}, 300);
			}

			_s.playBtnHidden = false;
			_s.positionPlayBtn();
			_s.scalePlayButton(false);
			_s.resizeVideo()
			_s.play_do.hide();
		}

		_s.showPlayButton = function(){
			if(!_s.useVideoInThumb_bl || _s.preset) return;
			_s.play_do.show(true);
		}

		_s.positionPlayBtn = function(){
			_s.play_do.setX(Math.round(_s.totalW - prt.playBtnW)/2);
			_s.play_do.setY(Math.round(_s.totalH - prt.playBtnH)/2);
		}
		
		_s.playUpHandler = function(){
			if(prt.isCategoryChanging_bl || prt.disableOnDragOrSwipe_bl || prt.isMobileScrolling_bl) return;
			try{
				prt.thumbWithVideo.showPlayButton();
			}catch(e){};

			try{
				_s.removeChild(prt.prt.vidHld_do);
			}catch(e){};
			_s.play_do.hide();
			_s.addChild(prt.prt.vidHld_do);
			
			_s.vidHld_do = prt.prt.vidHld_do;
			_s.evp = prt.prt.evp;

			_s.resizeVideo();
			_s.setNormalState();
			_s.vidHld_do.setX(0);
			prt.prt.updateEVP(_s.thumbVideoSrc, _s.subtitleSrc, _s.thumbVastSrc, _s.password, _s.thumbPreview);
			_s.evp.thumbSrc = _s.thumbSrc;
			_s.evp.play();	
			prt.thumbWithVideo = _s;
		};
	
		_s.resizeVideo = function(){
			if(_s.contains(prt.prt.vidHld_do)){
				var w = Math.round(_s.totalW * _s.prt.scale);
				var h = Math.round(_s.totalH * _s.prt.scale);
				_s.vidHld_do.setWidth(w);
				_s.vidHld_do.setHeight(h);
				_s.vidHld_do.setScale2(1/_s.prt.scale);
				_s.evp.resizeHandler()
			}
		}

		_s.scalePlayButton = function(animate){
			if(animate){
				FWDAnimation.to(_s.play_do, prt.tweenDuration, { scale: 1/_s.prt.scale, ease:Quint.easeOut});
			}else{
				FWDAnimation.killTweensOf(_s.play_do);
				_s.play_do.setScale2(1/_s.prt.scale);
			}
		}

		_s.hidePlayButton = function(anim){
			clearTimeout(_s.showPlayBtnId_to)

			if(_s.play_do && !_s.playBtnHidden){
				FWDAnimation.killTweensOf(_s.play_do);
				if(anim){
					_s.play_do.hide(true);
				}else{
					_s.play_do.setX(-50000);
				}
				
				_s.playBtnHidden = true;
			}
		}

		_s.removeVideo = function(){
			if(prt.prt.vidHld_do && prt.prt.vidHld_do.x != -5000){
				prt.prt.main_do.addChild(prt.prt.vidHld_do);
				prt.prt.vidHld_do.setX(-5000);
				try{
					prt.prt.evp.pause();
				}catch(e){}
			}
		}

	
		// Aadd interaction events.
		_s.addEvents = function(){
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					_s.screen.addEventListener("MSPointerUp", _s.onMouseClickHandler);
				}
				_s.screen.addEventListener("touchend", _s.onMouseClickHandler, {passive:false});
			}else if(_s.screen.addEventListener){
				_s.screen.addEventListener("mouseover", _s.onMouseOverHandler);
				_s.screen.addEventListener("click", _s.onMouseClickHandler);
			}
		};
		
		_s.onMouseOverHandler = function(e){
			if(prt.isMobileScrolling_bl) return;
			
			if(!prt.allowToShowPreset){
				_s.screen.addEventListener('mousemove', _s.onMouseOverHandler);
				return;
			}

			if(!_s.isNormalState_bl || !_s.isImageShowed_bl) return;
			_s.screen.removeEventListener('mousemove', _s.onMouseOverHandler);

			_s.setSelectedState();
			_s.dispatchEvent(FWDIGPThumb.MOUSE_OVER, {gridPosition:_s.gridPosition, _s:_s});
			
		};
		
		_s.onMouseClickHandler = function(e){
			if(prt.isMobileScrolling_bl) return;
			if(_s.type == FWDIGP.VIDEO_IN_THUMB && !_s.showCaptionOnThumbVideo_bl) return;
			if(_s.disableThumbnailInteractivity_bl 
			   || _s.smallImage_do.x != _s.imageFinalX
			   || _s.smallImage_do.y != _s.imageFinalY) return;

			// Check for a inside title.
			if(_s.caption_do){
				var vmc = FWDIGPUtils.getViewportMouseCoordinates(e);
				_s.vmcX = vmc.screenX;
				_s.vmcY = vmc.screenY;


				// Check if it hits a tags.
				var aaAr = [];
				if(_s.caption_do.screen.querySelectorAll('.title')){
					aaAr.push(_s.caption_do.screen.querySelectorAll('.title')[0]);
				}

				if(_s.caption_do.screen.querySelectorAll('.desc')){
					aaAr.push(_s.caption_do.screen.querySelectorAll('.desc')[0]);
				}

				try{
					if(aaAr.length){
						for(var i=0; i<aaAr.length; i++){
							var children = aaAr[i].children;
							for(var j=0; j<children.length; j++){
								var chl = children[j];
								if(chl.tagName == 'A'){
									if(FWDIGPUtils.hitTest(chl, _s.vmcX, _s.vmcY)){
										return;
									}
								}
							}
						}
					}
				}catch(e){}
			}

			if(_s.openOnSingleTouch_bl){
				if(_s.type != FWDIGP.VIDEO_IN_THUMB && _s.isMobile_bl){
					_s.dispatchEvent(FWDIGPThumb.MOUSE_UP, {id:_s.id, _s:_s});
				}
				return;
			}
			
			if(!_s.isContentShowed_bl && _s.isMobile_bl && !prt.disableOnDragOrSwipe_bl){
				if(_s.isMobile_bl){
					_s.onMouseOverHandler();
					return;
				}

				if(_s.type != FWDIGP.VIDEO_IN_THUMB && !_s.isMobile_bl){
					_s.onMouseOverHandler();
					return;
				}	
			}
			

			if(_s.type != FWDIGP.VIDEO_IN_THUMB){			
				_s.dispatchEvent(FWDIGPThumb.MOUSE_UP, {id:_s.id, _s:_s});
			}
		};
	
	
		// Resize thumb / image.
		_s.resizeThumb = function(animate){
			_s.setWidth(_s.totalW);
			_s.setHeight(_s.totalH);
			if(_s.background_do){
				_s.background_do.setX(-1);
				_s.background_do.setHeight(-1);
				_s.background_do.setWidth(_s.totalW + 2);
				_s.background_do.setHeight(_s.totalH + 2);
			}

			if(_s.overlay_do){
				_s.overlay_do.setX(-2);
				_s.overlay_do.setY(-2);
				_s.overlay_do.setWidth(_s.totalW + 4);
				_s.overlay_do.setHeight(_s.totalH + 4);
			}
		};
		
		_s.resizeImage = function(){
			var scaleX = _s.totalW/_s.smallImageOriginalW;
			var scaleY = _s.totalH/_s.smallImageOriginalH;
			var totalScale = 0;
			
			if(scaleX >= scaleY){
				totalScale = scaleX;
			}else if(scaleX <= scaleY){
				totalScale = scaleY;
			}
				
			_s.imageFinalWidth = Math.round((_s.smallImageOriginalW * totalScale) + 2);
			_s.imageFinalHeight = Math.round((_s.smallImageOriginalH * totalScale) + 2);
			_s.imageFinalX = Math.round((_s.totalW -  _s.imageFinalWidth)/2);
			_s.imageFinalY = Math.round((_s.totalH -  _s.imageFinalHeight)/2);
		
			_s.smallImage_do.setX(_s.imageFinalX);
			_s.smallImage_do.setY(_s.imageFinalY);
			_s.smallImage_do.setWidth(_s.imageFinalWidth);
			_s.smallImage_do.setHeight(_s.imageFinalHeight);
		};
		
		
		// Add image.
		_s.show = function(gallery_ar, addDelay){	
			
			_s.isNormalState_bl = true;
			_s.gallery_ar = gallery_ar;
			_s.thumbSrc = gallery_ar;
			_s.addDelay_bl = !addDelay;

			if(!prt.addDragAndSwipeSupport_bl && _s.type != FWDIGP.VIDEO_IN_THUMB){
				_s.setButtonMode(true);
			}

			FWDAnimation.killTweensOf(_s);
			_s.setAlpha(0);
			clearTimeout(_s.loadTimeOutId_to);
			if(_s.addDelay_bl){
				_s.loadTimeOutId_to = setTimeout(_s.startToLoadSmallImage,.5 + Math.random() * 400);
			}else{
				_s.loadTimeOutId_to = setTimeout(_s.startToLoadSmallImage, Math.random() * 400);
			}
		
			if(_s.hasOverlay_bl){
				_s.overlay_do.setBkColor(_s.thumbOverlayColor);
			}
			
			if(_s.hasIcon_bl){
			
				if(!_s.icon_do){
					_s.icon_do = new FWDIGPTransformDisplayObject("div");
				}

				_s.icon_do.setOverflow('visible');
				_s.icon_do.setVisible(false);
				_s.icon_do.setAlpha(0);
				if(!_s.contains(_s.icon_do)) _s.addChild(_s.icon_do);
			}

			if(_s.icon_do){
				
				if(_s.type == "image"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-image"></span>');
				}else if(_s.type == "link"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-link"></span>');
				}else if(_s.type == "iframe"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-iframe"></span>');
				}else if(_s.type == "youtube"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-youtube"></span>');
				}else if(_s.type == "vimeo"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-vimeo"></span>');
				}else if(_s.type == "video" || _s.type == "audio"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-play"></span>');
				} 
			}

		};
		
		_s.startToLoadSmallImage = function(){
			_s.smallImage_img.style.width = 'auto';
			_s.smallImage_img.style.height = 'auto';
			_s.smallImage_img.onload = _s.onSmallImageLoad;
			_s.smallImage_img.src = _s.gallery_ar;
		};
		
		_s.onSmallImageLoad = function(){
			var dl = _s.addDelay_bl == true ? .2 : 0;
			var alpha = _s.isVisited_bl == true ? .3 : 1;
			_s.smallImageOriginalW = _s.smallImage_img.width;
			_s.smallImageOriginalH = _s.smallImage_img.height;

			_s.smallImage_do.setScreen(_s.smallImage_img);
			_s.resizeImage();
			
			FWDAnimation.to(_s, .3, {alpha:1, delay:dl +  Math.random() * .6});
			_s.smallImage_do.setAlpha(0);
		
			if(_s.transitionType == "motion"){
				var dir = Math.round(Math.random() * 3);
				if(dir == 0){
					_s.smallImage_do.setX(-_s.imageFinalWidth);
					FWDAnimation.to(_s.smallImage_do, .8, {x:_s.imageFinalX, alpha:alpha, delay:dl +  Math.random() * .5, onComplete:_s.showImageComplete, ease:Expo.easeInOut});
				}else if(dir == 1){
					_s.smallImage_do.setX(_s.imageFinalWidth);
					FWDAnimation.to(_s.smallImage_do, .8, {x:_s.imageFinalX, alpha:alpha, delay:dl +  Math.random()  * .5, onComplete:_s.showImageComplete, ease:Expo.easeInOut});
				}else if(dir == 2){
					_s.smallImage_do.setY(_s.imageFinalHeight);
					FWDAnimation.to(_s.smallImage_do, .8, {y:_s.imageFinalY, alpha:alpha, delay:dl +  Math.random()  * .5,onComplete:_s.showImageComplete,  ease:Expo.easeInOut});
				}else if(dir == 3){
					_s.smallImage_do.setY(-_s.imageFinalHeight);
					FWDAnimation.to(_s.smallImage_do, .8, {y:_s.imageFinalY, alpha:alpha, delay:dl +  Math.random()  * .5,onComplete:_s.showImageComplete, ease:Expo.easeInOut});
				}
			}else{
				FWDAnimation.to(_s.smallImage_do, .5, {alpha:alpha, delay:Math.random(), onComplete:_s.showImageComplete});
			}
		
			if(!_s.contains(_s.smallImage_do)){
				_s.addChildAt(_s.smallImage_do, 0);
			}

			if(_s.type == FWDIGP.VIDEO_IN_THUMB){
				_s.showPlayBtnId_to = setTimeout(function(){
					_s.showPlayButton();
				}, 800);
			}
		};

		_s.showImageComplete = function(){
			_s.isImageShowed_bl = true;
			if(FWDIGPUtils.hitTest(_s.screen, prt.checkThumbX, prt.checkThumbY) && !_s.isMobile_bl){
				_s.isHitAllThumbs_bl = true; 
				_s.setSelectedState();
			}else{
				_s.isHitAllThumbs_bl = false; 
			}

			if(_s.isVisited_bl){
				_s.setToIsVisited(_s.isHitAllThumbs_bl);
			}
		}


		// Hide.
		_s.hide = function(animBtn){
			_s.hidePlayButton(animBtn);
			_s.isTweeninigOnHide_bl = true;

			_s.screen.removeEventListener('mousemove', _s.onMouseOverHandler);
			
			clearTimeout(_s.loadTimeOutId_to);
			_s.smallImage_img.onload = null;
			FWDAnimation.killTweensOf(_s);
			FWDAnimation.killTweensOf(_s.smallImage_do);
			
			if(_s.transitionType == "motion"){
				var dir = Math.round(Math.random() * 3);
				if(dir == 0){
					FWDAnimation.to(_s.smallImage_do, .8, {x:-_s.imageFinalWidth, delay:Math.random(), ease:Expo.easeInOut});
					FWDAnimation.to(_s, .6, {alpha:0, delay:.3 + Math.random() * .4, onComplete:_s.hideComplete});
				}else if(dir == 1){
					FWDAnimation.to(_s.smallImage_do, .8, {x:_s.imageFinalWidth, delay:Math.random(), ease:Expo.easeInOut});
					FWDAnimation.to(_s, .6, {alpha:0, delay:.3 + Math.random() * .4, onComplete:_s.hideComplete});
				}else if(dir == 2){
					FWDAnimation.to(_s.smallImage_do, .8, {y:-_s.imageFinalHeight, delay:Math.random(), ease:Expo.easeInOut});
					FWDAnimation.to(_s, .6, {alpha:0, delay:.3 + Math.random() * .4, onComplete:_s.hideComplete});
				}else if(dir == 3){
					FWDAnimation.to(_s.smallImage_do, .8, {y:_s.imageFinalHeight, delay:Math.random(), ease:Expo.easeInOut});
					FWDAnimation.to(_s, .6, {alpha:0, delay:.3 + Math.random() * .4, onComplete:_s.hideComplete});
				}
			}else{
				FWDAnimation.to(_s.smallImage_do, .6, {alpha:0, delay:Math.random() * .4});
				FWDAnimation.to(_s, .6, {alpha:0, delay:.3 + Math.random() * .4, onComplete:_s.hideComplete});
			}
		};
		
		_s.hideComplete = function(){
			_s.removeImage();
			_s.isTweeninigOnHide_bl = false;
		};
		
		_s.setToIsVisited = function(hit){
			var dl = Math.random();
			if(_s.transitionType == "motion") dl = 0;
			if(_s.transitionType != "motion") FWDAnimation.killTweensOf(_s.smallImage_do);
			FWDAnimation.to(_s.overlay_do, .3, {alpha: 0})
			if(hit){
				FWDAnimation.to(_s.smallImage_do, .5, {alpha:1, delay:dl});
			}else{
				FWDAnimation.to(_s.smallImage_do, .5, {alpha:_s.visitedThumbnailsOverlayOpacity, delay:dl});
			}
			
		};
		
		
		// Remove image.
		_s.removeImage = function(){	
			clearTimeout(_s.loadTimeOutId_to);
			_s.hidePlayButton();
			

			if(_s.smallImage_img){
				_s.smallImage_img.removeAttribute("width");
				_s.smallImage_img.removeAttribute("height");
				_s.smallImage_img.onload = null;
				try{
					FWDAnimation.killTweensOf(_s.smallImage_do);
					_s.smallImage_do.screen.src = "";
					_s.smallImage_do.set(-500);
					_s.removeChild(_s.smallImage_do);
				}catch(e){}
				
			}

			
			_s.isImageShowed_bl = false;
			_s.isVisited_bl = false;
			_s.isNormalState_bl = true;
			_s.captionShowed_bl = false;
			_s.caption = undefined;
			_s.setNormalState(false);
		};
		

		// Set normal / selected state.
		_s.setNormalState = function(animate, overwrite){
			if(_s.isNormalState_bl && !overwrite) return;
			_s.isNormalState_bl = true;
			_s.removeMouseMoveAnimCheck();
			_s.hideOverlay(animate);
			_s.hideSmallIcon(animate);
			_s.hidePresetContent();
			_s.hideCaption();
			_s.isCaptionHidden_bl = _s.isContentShowed_bl = false;
		};
		
		_s.setSelectedState = function(e){
			if(!_s.isNormalState_bl || _s.disableThumbnailInteractivity_bl) return;
			
			_s.isNormalState_bl = false;
			_s.showOverlay();
			_s.showSmallIcon();
			_s.showPresetContent();
			_s.showCaption();
			if(!_s.disableThumbnailInteractivity_bl){
				_s.addMouseMoveAnimCheck();
			}
			_s.isCaptionHidden_bl = _s.isContentShowed_bl = true;
		};
		
		_s.addMouseMoveAnimCheck = function(){
			if(_s.isMobile_bl){
				setTimeout(function(){
					 window.addEventListener("touchstart", _s.checkThumbnailHitStart);
					 window.addEventListener("touchend", _s.checkThumbnailHit);
				}, 50);
			}else{
				if(window.addEventListener){
					window.addEventListener("mousemove", _s.checkThumbnailHit);
				}
			}
		};
		
		_s.removeMouseMoveAnimCheck = function(){
			if(_s.isMobile_bl){
				window.removeEventListener("touchstart", _s.checkThumbnailHitStart);
				window.removeEventListener("touchend", _s.checkThumbnailHit);
			}else{
				if(window.removeEventListener){
					window.removeEventListener("mousemove", _s.checkThumbnailHit);
				}
			}
		};

		_s.checkThumbnailHitStart = function(e){
			var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
			_s.globalX = vpc.screenX;
			_s.globalY = vpc.screenY;
		}
		
		_s.checkThumbnailHit = function(e){
			if(e.type != "touchend"){
				var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
				_s.globalX = vpc.screenX;
				_s.globalY = vpc.screenY;
			}

			if(prt.thumbWithVideo){
				if(FWDIGPUtils.hitTest(prt.thumbWithVideo.screen, _s.globalX, _s.globalY)){
					prt.thumbWithVideo.isHit = true;
				}else{
					prt.thumbWithVideo.isHit = false;
				}
			}
	
			if(!FWDIGPUtils.hitTest(_s.screen, _s.globalX, _s.globalY)
				|| (_s.prt.prt.comboBox_do && FWDIGPUtils.hitTest(_s.prt.prt.comboBox_do.selector_do.screen, _s.globalX, _s.globalY))
				|| (_s.prt.prt.comboBox_do && FWDIGPUtils.hitTest(_s.prt.prt.comboBox_do.buttonsHolder_do.screen, _s.globalX, _s.globalY))
				|| (_s.prt.look_do && FWDIGPUtils.hitTest(_s.prt.look_do.screen, _s.globalX, _s.globalY))
			){
				_s.setNormalState(true);
				_s.removeMouseMoveAnimCheck();
			}
		};
		
		
		// Show / hide overlay.
		_s.showOverlay = function(e){
			if(!_s.hasOverlay_bl) return;


			if(!_s.hasOverlay_bl) return;
			_s.overlay_do.setVisible(true);
			FWDAnimation.killTweensOf(_s.overlay_do);
			if(_s.overlay_do){						
				FWDAnimation.to(_s.overlay_do, .8, {alpha:_s.overlayOpacity, ease:Expo.easeOut});
			}

			if(_s.isVisited_bl){
				FWDAnimation.killTweensOf(_s.smallImage_do);
				FWDAnimation.to(_s.smallImage_do, .8, {alpha:1, ease:Expo.easeOut});
			}
		};
		
		_s.hideOverlay = function(animate){
	
			if(!_s.hasOverlay_bl) return;

			FWDAnimation.killTweensOf(_s.overlay_do);
			if(_s.overlay_do && animate){
				FWDAnimation.to(_s.overlay_do, .8, {alpha:0, onComplete:_s.overlayHideComplete, ease:Expo.easeOut});
			}else if(_s.overlay_do){
				_s.overlay_do.setAlpha(0);
				_s.overlayHideComplete();
			}
			
			if(_s.isVisited_bl){
				FWDAnimation.killTweensOf(_s.smallImage_do);
				FWDAnimation.to(_s.smallImage_do, .8, {alpha:.3, ease:Expo.easeOut});
			}
		};
		
		_s.overlayHideComplete = function(){
			_s.overlay_do.setVisible(false);
		};


		// Set captions.
		_s.setCaption = function(caption){
			if(_s.preset) return;
			_s.isCaptionHidden_bl = true;
			_s.allowToShowCaption = false;
			_s.caption = caption;

			if(!_s.contentHolder_do){
				_s.contentHolder_do = new FWDIGPTransformDisplayObject("div");
				_s.contentHolder_do.getStyle().transformOrigin = "top left";
				_s.contentHolder_do.screen.className = 'caption';
				_s.addChild(_s.contentHolder_do);
				_s.caption_do = new FWDIGPTransformDisplayObject("div");	
				_s.caption_do.getStyle().transformOrigin = "bottom left";
				_s.contentHolder_do.addChild(_s.caption_do);
				_s.caption_do.screen.className = "caption-in";
			}

			setTimeout(function(){
				_s.allowToShowCaption = true;
			}, 200);

			_s.caption_do.setInnerHTML(caption);
			_s.contentHolder_do.setVisible(false);
			_s.resizeCaption();
		}

		_s.resizeCaption = function(){
			if(_s.preset) return;
			if(FWDAnimation.isTweening(_s.caption_do) && _s.isCaptionHiding_bl) return;
			var w = Math.round(_s.totalW * _s.prt.scale);
			var h = Math.round(_s.totalH * _s.prt.scale);
			_s.contentHolder_do.setWidth(w);
			_s.contentHolder_do.setHeight(h);
			_s.contentHolder_do.setScale2(1/_s.prt.scale);

			if(_s.prt.scale < 1){
				_s.caption_do.setScale2(_s.prt.scale);
				_s.caption_do.setWidth(_s.totalW);
			}else{
				_s.caption_do.setWidth(_s.totalW * _s.prt.scale);
				_s.caption_do.setScale2(1);
			}
		};

	
		_s.showCaption = function(){
			if(!_s.showCaption_bl || !_s.caption || !prt.allowToShowCaption || _s.preset){
				return;
			}
			
			if((_s.type == FWDIGP.VIDEO_IN_THUMB && !_s.showCaptionOnThumbVideo_bl)){
				return;
			}
			
			var mainTransitionDuration = .8;
			_s.captionShowed_bl = true;
			_s.isCaptionHiding_bl = false;
			
			_s.contentHolder_do.setVisible(true);
			_s.resizeCaption();

			if(_s.isCaptionHidden_bl){
				_s.caption_do.setY(_s.caption_do.getHeight());
			}
			
			_s.isCaptionHidden_bl = false;
			
			FWDAnimation.killTweensOf(_s.caption_do);	
			FWDAnimation.to(_s.caption_do, mainTransitionDuration, {y:0, ease:Expo.easeInOut});
			
			_s.isContentShowed_bl = true;
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
			_s.contentShowCompleteId_to = setTimeout(_s.showCaptionComplete, mainTransitionDuration);
		}

		_s.showCaptionComplete = function(){
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
		};

		_s.hideCaption = function(anim){
			if(!_s.isCaptionHidden_bl || !_s.showCaption_bl || !_s.caption || _s.preset) return;

			if((_s.type == FWDIGP.VIDEO_IN_THUMB && !_s.showCaptionOnThumbVideo_bl)){
				return;
			}

			var mainTransitionDuration = .8;
			_s.isCaptionHiding_bl = true;
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);

			var h = Math.min(_s.prt.scale * _s.caption_do.getHeight(), _s.caption_do.getHeight());
			//var h =  _s.caption_do.getHeight();

			FWDAnimation.killTweensOf(_s.caption_do);

			if(!anim){				
				FWDAnimation.to(_s.caption_do, mainTransitionDuration, {y:h, ease:Expo.easeInOut});
				_s.contentHideCompleteId_to = setTimeout(_s.hideCaptionComplete, mainTransitionDuration * 1000);
			}else{
				_s.caption_do.setY(h)
				_s.hideCaptionComplete();
				clearTimeout(_s.contentShowCompleteId_to);
				clearTimeout(_s.contentHideCompleteId_to);
			}
		}
		
		_s.hideCaptionComplete = function(){
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
			_s.contentHolder_do.setVisible(false);
			_s.isCaptionHidden_bl = true;
			_s.captionShowed_bl = false;
		}


		// Setup preset content.
		_s.setupPresetContent = function(){
			_s.contentHolder_do = new FWDIGPDisplayObject("div");
			_s.contentHolder_do.screen.className = 'main-holder';
		}

		_s.setHTMLContent = function(data){
			if(!_s.preset) return;
			_s.isContentHidden_bl = true;
			_s.allowToShowPreset = false;
			setTimeout(function(){
				_s.allowToShowPreset = true;
			}, 200);

			_s.addChild(_s.contentHolder_do);
			_s.contentHolder_do.removeAllChilds();
			_s.contentHolder_do.setVisible(false);

			_s.overlay_do = new FWDIGPDisplayObject("div", "absolute", "hidden", "block", true);

			_s.overlay_do.setBkColor(_s.thumbnailOverlayBackgroundColor);
			_s.overlay_do.getStyle().width = "100%";
			_s.overlay_do.getStyle().height = "100%";
			_s.overlay_do.setAlpha(_s.overlayOpacity);
			_s.overlay_do.screen.className = "PGThumbnailOverlay";
			_s.contentHolder_do.addChild(_s.overlay_do);
		
			if(_s.preset == 'portfolio'){
				_s.contentHolder_do.setOverflow('visible');
				_s.arrow_do = new FWDIGPDisplayObject("div");
				_s.arrow_do.screen.className = 'default-arrow-main';
				_s.arrow_do.setInnerHTML('<span class="default-arrow fwdicon-right-arrow-thin"></span>');
				_s.contentHolder_do.addChild(_s.arrow_do);

				if(data.cats.length){
					_s.cats_do = new FWDIGPDisplayObject("div");	
					_s.cats_do.screen.className = 'default-categories-main';
					_s.cats = '<div class="categories"><span class="fwdicon fwdicon-categories"></span>';
					for(var i= 0; i<data.cats.length; i++){
						if(i < data.cats.length -1){
							_s.cats += '<span class="category">' + data.cats[i] + "</span><span class='separator'>/</span>";
						}else{
							_s.cats += '<span class="category">' + data.cats[i];
						}
						
					}
					_s.cats += "</div>";
					_s.cats_do.setInnerHTML(_s.cats);
					if(data.cats.length == 0) _s.cats_do.setVisible(false);
					_s.contentHolder_do.addChild(_s.cats_do);
				}

				_s.title_do = new FWDIGPDisplayObject("div");	
				_s.title_do.getStyle().position = 'relative'; 	
				_s.title_do.setInnerHTML('<div class="in">' + data.title + "</div>");
				_s.title_do.screen.className = "title-default";
				_s.contentHolder_do.addChild(_s.title_do);


				if(data.client){
					_s.client_do = new FWDIGPDisplayObject("div");	
					_s.client_do.screen.className = 'default-client-main';
					_s.client_do.setInnerHTML(data.client);
					_s.contentHolder_do.addChild(_s.client_do);	
				}
				
				if(data.likes){
					_s.likes_do = new FWDIGPDisplayObject("div");
					_s.likes_do.screen.className = 'default-likes-main';
					_s.likes_do.setInnerHTML(data.likes);
					_s.contentHolder_do.addChild(_s.likes_do);
				}
			}
		}

		_s.resizeContent = function(){
			_s.contentHolder_do.setWidth(_s.totalW)
			_s.contentHolder_do.getStyle().height = 'auto';
			_s.overlay_do.setHeight(_s.totalH + 20);
			_s.overlay_do.setY(-(_s.totalH + 10 - _s.contentHolder_do.getHeight()));
			clearTimeout(_s.resizeTextContent1Id_to);
		};

		_s.showPresetContent = function(){
			if(_s.isContentShowed_bl || !_s.preset || !_s.allowToShowPreset || !prt.allowToShowPreset) return;
			var mainTransitionDuration;
			
			_s.contentHolder_do.setVisible(true);
			if(_s.preset == "portfolio"){
				mainTransitionDuration = .6;
				var dl = 0;
				var showArrow = true;
				var overlayOpacity = _s.overlayOpacity;
				
				_s.resizeContent();

				if(_s.isContentHidden_bl){
					_s.overlay_do.setAlpha(0);
					_s.contentHolder_do.setX(0);
					_s.contentHolder_do.setY(0);
					
					_s.arrow_do.screen.firstChild.style.left = '-20px';
					_s.arrow_do.screen.firstChild.style.opacity = '0';
					_s.title_do.screen.firstChild.style.top = '20px';
					_s.title_do.screen.firstChild.style.opacity = 0;

					if(_s.contentHolder_do.getHeight() >= _s.finalH - 5) showArrow = false;

					if(_s.cats_do){
						_s.cats_do.screen.firstChild.style.top = '20px';
						_s.cats_do.screen.firstChild.style.opacity = 0;
					}

					if(_s.client_do){
						_s.client_do.screen.firstChild.style.top = '20px';
						_s.client_do.screen.firstChild.style.opacity = 0;
					}

					if(_s.likes_do){
						_s.likes_do.screen.firstChild.style.top = '20px';
						_s.likes_do.screen.firstChild.style.opacity = 0;
					}
				}
				
				_s.isContentHidden_bl = false;
				FWDAnimation.killTweensOf(_s.overlay_do);	
				FWDAnimation.to(_s.overlay_do, .4, {alpha:overlayOpacity});
				
				if(_s.cats_do){
					FWDAnimation.killTweensOf(_s.cats_do.screen.firstChild);	
					FWDAnimation.to(_s.cats_do.screen.firstChild, .6, {css:{top:'0', alpha:1}, delay:dl, ease:Expo.easeInOut});
				}

				dl += .1;
				FWDAnimation.killTweensOf(_s.title_do.screen.firstChild);	
				FWDAnimation.to(_s.title_do.screen.firstChild, .6, {css:{top:'0', alpha:1}, delay:dl, ease:Expo.easeInOut});

				if(_s.client_do){
					dl += .1;
					FWDAnimation.killTweensOf(_s.client_do.screen.firstChild);	
					FWDAnimation.to(_s.client_do.screen.firstChild, .6, {css:{top:'0', alpha:1}, delay:dl, ease:Expo.easeInOut});
				}

				if(_s.likes_do){
					dl += .1;
					FWDAnimation.killTweensOf(_s.likes_do.screen.firstChild);	
					FWDAnimation.to(_s.likes_do.screen.firstChild, .6, {css:{top:'0', alpha:1}, delay:dl, ease:Expo.easeInOut});
				}
				
				if(_s.contentHolder_do.getGlobalY() - 20 > _s.getGlobalY()){
					dl += .1;
					FWDAnimation.killTweensOf(_s.arrow_do.screen.firstChild);	
					FWDAnimation.to(_s.arrow_do.screen.firstChild, .6, {css:{left:'0', alpha:1}, delay:dl, ease:Expo.easeInOut});
				}
			}

			_s.isContentShowed_bl = true;
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
			_s.contentShowCompleteId_to = setTimeout(_s.showContentComplete, mainTransitionDuration * 1000);

		}

		_s.showContentComplete = function(){
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
		};

		_s.hidePresetContent = function(){
			if(!_s.isContentShowed_bl || !_s.preset) return;

			var mainTransitionDuration;

			if(_s.preset == "portfolio"){

				mainTransitionDuration = .6;
				
				FWDAnimation.killTweensOf(_s.overlay_do);	
				FWDAnimation.to(_s.overlay_do, .6, {alpha:0});

				FWDAnimation.killTweensOf(_s.arrow_do.screen.firstChild);	
				FWDAnimation.to(_s.arrow_do.screen.firstChild, .6, {css:{left:'-20px', alpha:0}, ease:Expo.easeInOut});

				if(_s.cats_do){
					FWDAnimation.killTweensOf(_s.cats_do.screen.firstChild);	
					FWDAnimation.to(_s.cats_do.screen.firstChild, .6, {css:{top:'20px', alpha:0}, ease:Expo.easeInOut});
				}

				FWDAnimation.killTweensOf(_s.title_do.screen.firstChild);	
				FWDAnimation.to(_s.title_do.screen.firstChild, .6, {css:{top:'20px', alpha:0}, ease:Expo.easeInOut});
			
				if(_s.client_do){
					FWDAnimation.killTweensOf(_s.client_do.screen.firstChild);	
					FWDAnimation.to(_s.client_do.screen.firstChild, .6, {css:{top:'20px', alpha:0}, ease:Expo.easeInOut});
				}

				if(_s.likes_do){
					FWDAnimation.killTweensOf(_s.likes_do.screen.firstChild);	
					FWDAnimation.to(_s.likes_do.screen.firstChild, .6, {css:{top:'20px', alpha:0},  ease:Expo.easeInOut});
				}
			}

			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
			_s.contentHideCompleteId_to = setTimeout(_s.hideContentComplete, mainTransitionDuration * 1000);
		}
		

		_s.hideContentComplete = function(){
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
			_s.contentHolder_do.setVisible(false);
			_s.isContentHidden_bl = true;
		};
			
		
		// Add / remove icon image.
		_s.showSmallIcon = function(){
			if(!_s.hasIcon_bl || _s.type == FWDIGP.VIDEO_IN_THUMB || _s.type == "none") return;
			_s.icon_do.setVisible(true);
			_s.icon_do.setAlpha(0);
			
			if(_s.icon_do.hasTransform2d_bl){
				_s.icon_do.setScale2();
			}
			
			_s.icon_do.setScale2(2);
			_s.icon_do.setX(parseInt((_s.totalW - _s.iconW)/2));
			_s.icon_do.setY(parseInt((_s.totalH - _s.iconH)/2));

			
			FWDAnimation.killTweensOf(_s.icon_do);
			FWDAnimation.to(_s.icon_do, .5, {alpha:1, 
				scale: 1/_s.prt.scale,
				delay:.1, ease:Expo.easeInOut});
			
			_s.hasIconAdded_bl = true;
		};
		
		_s.hideSmallIcon = function(animate){
			if(!_s.hasIcon_bl || _s.type == FWDIGP.VIDEO_IN_THUMB) return;
			if(!_s.hasIconAdded_bl) return;
			FWDAnimation.killTweensOf(_s.icon_img);
			FWDAnimation.killTweensOf(_s.icon_do);
			if(animate){
				FWDAnimation.to(_s.icon_do, .4, {alpha:0, onComplete:function(){_s.icon_do.setVisible(false);}});
			}else{
				_s.icon_do.setAlpha(0);
			}
			
			_s.hasIconAdded_bl = false;
		};
		
		_s.scaleSmallIconOnTween = function(){
			if(_s.icon_do) FWDAnimation.to(_s.icon_do, .6, {scale:1/_s.prt.scale, ease:Quint.easeOut});

		};
		
	
		// Clean main events.
		_s.cleanMainEvents = function(){
			clearTimeout(_s.loadTimeOutId_to);
			clearInterval(_s.checkHitId_int);
			
		};
		
	
		// Destroy.
		_s.destroy = function(){
			
			_s.cleanMainEvents();
			
			if(_s.background_do){
				FWDAnimation.killTweensOf(_s.background_do);
				_s.background_do.destroy();
			}
			
			if(_s.smallImage_do){
				FWDAnimation.killTweensOf(_s.smallImage_do);
				_s.smallImage_do.disposeImage();
				_s.smallImage_do.destroy();	
			}
			
			if(_s.overlay_do){
				FWDAnimation.killTweensOf(_s.overlay_do);
				_s.overlay_do.destroy();
			}
			
			if(_s.smallImage_img){
				_s.smallImage_img.onload = null;
			}
			
			if(_s.icon_img){
				FWDAnimation.killTweensOf(_s.icon_img);
				_s.icon_img.src = null;
			}
			
			_s.prt = null;
			_s.smallImage_img = null;
			_s.icon_img = null;
			_s.background_do = null;
			_s.smallImage_do = null;
			_s.overlay_do = null;
			
			_s.backgroundColor = null;
			_s.gallery_ar = null;
			
			prt = null;
			
			_s.setInnerHTML("");
			prototype.destroy();
			_s = null;
			FWDIGPThumb.prototype = null;
		};
		
		_s.init();
	};
	
	
	// Set prototype.
	FWDIGPThumb.setPrototype = function(){
		FWDIGPThumb.prototype = new FWDIGPDisplayObject("div");
	};
	
	FWDIGPThumb.MOUSE_OVER = "onMouseOver";
	FWDIGPThumb.MOUSE_OUT = "onMouseOut";
	FWDIGPThumb.MOUSE_UP = "onMouseDown";
	FWDIGPThumb.RIGHT = "right";
	FWDIGPThumb.LEFT = "left";
	FWDIGPThumb.BOTTOM = "bottom";
	FWDIGPThumb.TOP = "top";
	
	FWDIGPThumb.prototype = null;
	window.FWDIGPThumb = FWDIGPThumb;
}(window));