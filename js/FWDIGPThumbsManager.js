/**
 * Infinite Grid Pro PACKAGED v3.0
 * Thumbnails manager.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPThumbsManager = function(_d, prt){
		
		var _s = this;
		var prototype = FWDIGPThumbsManager.prototype;
		
		_s._d = _d;
		_s.rect;
		_s.prt = prt;	
		_s.visitedThumbnailsPaths_ar = [];
		_s.poolThumbs_ar = [];
		_s.backgroundColor = _d.backgroundColor;
		_s.thumbnailBackgroundColor = _d.thumbnailBackgroundColor;
		_s.thumbOverlayBackgroundColor = _d.thumbOverlayBackgroundColor;
		_s.grabIconPath = _d.grabIconPath;
		_s.handIconPath = _d.handIconPath;
		_s.grabIconModernBrowsersPath = _d.grabIconModernBrowsersPath;
		_s.dragDirection = _d.dragDirection;
		_s.autoScrollDirection = _d.autoScrollDirection;
		_s.thumbnailTransitionType = _d.thumbnailTransitionType;
		_s.thumbnailMaxWidth = _d.thumbnailMaxWidth;
		_s.thumbnailMaxHeight = _d.thumbnailMaxHeight;
		_s.lastColRef = 1000;
		_s.lastRowRef = 1000;
		_s.friction = .9;
	    _s.vx = 0;
		_s.vy = 0;
		_s.scale = 1;
		_s.minScale = _d.minScale;
		_s.maxScale = _d.maxScale;
		_s.autoScrollSpeed = _d.autoScrollSpeed;
		_s.prevScale = 1;
		_s.thumbW = 0;
		_s.thumbH = 0;
		_s.totalThumbs;
		_s.curId = 0;
		_s.maxThumbs = 150;
		_s.keepThumbnailsOriginalSizeOnGridStart_bl =  _d.keepThumbnailsOriginalSizeOnGridStart_bl;
		_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;
		_s.enableVisitedThumbnails_bl = _d.enableVisitedThumbnails_bl;
		_s.autoScroll_bl = _d.autoScroll_bl;
		_s.isAutoScolling_bl = _s.autoScroll_bl;
		_s.isMobile_bl = FWDIGPUtils.isMobile;
		_s.addZoomSupport_bl = _d.addZoomSupport_bl;
		_s.addDragAndSwipeSupport_bl = _d.addDragAndSwipeSupport_bl;
		_s.disableThumbnailInteractivity_bl = _d.disableThumbnailInteractivity_bl;

		
		// Initialize.
		_s.init = function(){
			if(_s.isMobile_bl) _s.friction = .85;
			_s.setResizableSizeAfterParent();
			_s.initComponentId_to = setTimeout(_s.initializeComponent, 100);
		};
		
		
		// Initialize component.
		_s.initializeComponent = function(){
			if(_s.addDragAndSwipeSupport_bl) _s.getStyle().cursor = 'url(' + _s.handIconPath + '), default';
			
			_s.setupThumbsHolder();
			_s.setupPoolThumbs();
			_s.setupDisableDragScreen();
			_s.setRect();
			setTimeout(_s.initilizeAndStartGrid, 150);
		};
	

		// Resize handler.
		_s.resizeAndPosition = function(overwrite){
			
			_s.stageWidth = prt.stageWidth;
			_s.stageHeight = prt.stageHeight;		
			_s.setWidth(_s.stageWidth);
			_s.setHeight(_s.stageHeight);

			if(!_s.allowToSwtchCategory_bl){
				_s.dsb_do.setWidth(_s.stageWidth);
				_s.dsb_do.setHeight(_s.stageHeight);
			}
		
			if(_s.allowToResizeGrid_bl){
				_s.drawGrid();
				_s.removeThumbsIfNotOnScreen();
			}

			_s.setLookDoVertically();
		};
		
		_s.setRect = function(){
			_s.rect = _s.getRect();
		};
		
		
		// Set cur category.
		_s.updateCategory = function(curCat_ar){
			
			if(_s.allowToSwtchCategory_bl){
				FWDIGP.isCategoryChanging_bl = _s.isCategoryChanging_bl = true;
				FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = true;
				_s.allowToResizeGrid_bl = false;

				_s.showDsb();
				_s.stopToLoop();
				_s.removeDummyCheckSupport();
				if(_s.thumbWithVideo){
					 _s.thumbWithVideo.removeVideo();
				}

				if(_s.isMobile_bl){
					_s.removeZoomDragAndSwipeForMobile();
				}else{
					_s.removeDragAndScrollForDesktop();
					_s.removeAutoScrollSupport(true);
					_s.removeDesktopZoomSupport();
					_s.dsb_do.getStyle().cursor = 'default';
				}
				
				// Hide thumbnails.
				var thumb;
				for(var i = 0; i<_s.maxThumbs; i++){
					thumb = _s.poolThumbs_ar[i];
					if(!thumb.isAvailable_bl){
						thumb.isAvailable_bl = true;
						thumb.hide(true);
					} 
				}
				
				_s.checkThumbnailsOnHideId_int = setInterval(function(){
					for(var i = 0; i<_s.maxThumbs; i++){
						thumb = _s.poolThumbs_ar[i];
						if(thumb.isTweeninigOnHide_bl){
							return;
						} 
					}
					clearTimeout(_s.checkThumbnailsOnHideId_int);
					
					_s.initilizeAndStartGrid();
					return
				}, 16);
			}
			
			_s.gallery_ar = curCat_ar;
			_s.totalThumbs = _s.gallery_ar.length;
			_s.allowToSwtchCategory_bl = true;
			FWDIGP.isCategoryChanging_bl = _s.isCategoryChanging_bl = true;
		};


		// Add dummy mouse pos.
		_s.addDummyCheckSupport = function(){
			if(_d.openOnSingleTouch_bl) return;
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					window.addEventListener("MSPointerDown", _s.onDummyAction);
				}else{			
					window.addEventListener("touchstart", _s.onDummyAction, {passive:false});
				}
			}else if(window.removeEventListener){
				window.addEventListener("mousemove", _s.onDummyAction);
			}
		};

		_s.removeDummyCheckSupport = function(){
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					window.removeEventListener("MSPointerDown", _s.onDummyAction);
				}else{			
					window.removeEventListener("touchstart", _s.onDummyAction, {passive:false});
				}
			}else if(window.removeEventListener){
				window.removeEventListener("mousemove", _s.onDummyAction);
			}
		};
		
		_s.onDummyAction = function(e){
			var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
			_s.checkThumbX = vpc.screenX;
			_s.checkThumbY = vpc.screenY;
		}


		// Setup disable drag screen.
		_s.setupDisableDragScreen = function(){
			if(!_s.dsb_do){
				_s.dsb_do = new FWDIGPDisplayObject("div");
				if(FWDIGPUtils.isIE){
					_s.dsb_do.setBkColor("#FF0000");
					_s.dsb_do.setAlpha(.0001);
				}
				_s.addChild(_s.dsb_do);
			}
			if(_s.dragDirection != "none") _s.dsb_do.getStyle().cursor = 'url(' + _s.grabIconPath + '), default';
			
			_s.hideDsb();
		};
		
		_s.showDsb = function(){
			if(_s.isDsbShowed_bl) return;
			_s.isDsbShowed_bl = true;
			clearTimeout(_s.hDsbId_do);
			_s.dsb_do.setVisible(true);
			_s.dsb_do.setWidth(_s.stageWidth);
			_s.dsb_do.setHeight(_s.stageHeight);
			if(_s.lastHoveredThumb_do && !_s.isMobile_bl){
				_s.lastHoveredThumb_do.setNormalState(true);
				_s.lastHoveredThumb_do = null;
			}
			if(_s.dragDirection != "none") _s.dsb_do.getStyle().cursor = 'url(' + _s.grabIconPath + '), default';
		};
		
		_s.hideDsb = function(){
			if(!_s.isDsbShowed_bl) return;
				_s.hDsbId_do = setTimeout(function(){
				_s.isDsbShowed_bl = false;
				_s.dsb_do.setVisible(false);
				_s.dsb_do.setWidth(0);
				_s.dsb_do.setHeight(0);
				
			}, 300);
			if(_s.dragDirection != "none") _s.dsb_do.getStyle().cursor = 'url(' + _s.handIconPath + '), default';
		};
		
	
		// Setup hider.
		_s.addAutoScrollSupport = function(){
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					_s.screen.addEventListener("MSPointerDown", _s.onAutoScrollDisable);
				}else{
					_s.screen.addEventListener("touchstart", _s.onAutoScrollDisable, {passive:false});
				}
			}else if(window.addEventListener){
				_s.screen.addEventListener("mouseover", _s.onAutoScrollDisable);
			}
		};
		

		// Autoscroll.
		_s.removeAutoScrollSupport = function(removeAll){
			if(_s.autoScroll_bl) _s.isAutoScolling_bl = true;
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					window.removeEventListener("MSPointerDown", _s.onAutoScrollEnable);
					if(removeAll) window.removeEventListener("MSPointerDown", _s.onAutoScrollEnable);
				}else{
					window.removeEventListener("touchstart", _s.onAutoScrollEnable);
					if(removeAll) window.removeEventListener("touchstart", _s.onAutoScrollEnable, {passive:false});
				}
			}else if(window.removeEventListener){
				window.removeEventListener("mousemove", _s.onAutoScrollEnable);
				if(removeAll) window.removeEventListener("mousemove", _s.onAutoScrollEnable);
			}
		};
		
		_s.onAutoScrollDisable = function(){
			if(!_s.isAutoScolling_bl) return;
			if(!_s.addZoomSupport_bl && !_s.addDragAndSwipeSupport_bl) return;
			_s.isAutoScolling_bl = false;
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					window.addEventListener("MSPointerDown", _s.onAutoScrollEnable);
				}else{
					window.addEventListener("touchstart", _s.onAutoScrollEnable);
				}
			}else if(window.addEventListener){
				window.addEventListener("mousemove", _s.onAutoScrollEnable);
			}
		};
		
		_s.onAutoScrollEnable = function(e){
			if(!_s.rect) return
			var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
			var x = vpc.screenX;
			var y = vpc.screenY;
			
			if(!(x >= _s.rect.left && x <= _s.rect.left +(_s.rect.right - _s.rect.left) 
			  && y >= _s.rect.top && y <= _s.rect.top + (_s.rect.bottom - _s.rect.top))){
				_s.removeAutoScrollSupport();
			}
		};
		
		
		// Setup thumbnail holder.
		_s.setupThumbsHolder = function(){
			if(_s.thumbsHolder_do) return;
			_s.thumbsHolder_do = new FWDIGPTransformDisplayObject("div");
			_s.thumbsHolder_do.getStyle().overflow = "visible";
			_s.addChild(_s.thumbsHolder_do);
		};
		
		
		// Setup pooling thumbs and methods.
		_s.setupPoolThumbs = function(){
			if(_s.poolThumbs_ar.length > 0) return;
			var thumb;
			var iconType;
			var thumbOverlayColor;
			var totalPlayListEntry = _s.gallery_ar.length;
			
			if (_s.isMobile_bl) _s.maxThumbs = 100;

			for(var i = 0; i<_s.maxThumbs; i++){
				FWDIGPThumb.setPrototype();
				thumb = new FWDIGPThumb(
						_s,
						_s.thumbnailTransitionType,
						_s.thumbnailBackgroundColor, 
						_s.thumbOverlayBackgroundColor,
						_d.thumbnailOverlayOpacity, 
						_d.showThumbnailOverlay_bl, 
						_s.isMobile_bl,
						_d.showThumbnailIcon_bl,
						_d.openOnSingleTouch_bl,
						_s.disableThumbnailInteractivity_bl,
						_d.showCaption_bl,
						_d.showCaptionOnThumbVideo_bl,
						_d.visitedThumbnailsOverlayOpacity,
						_d.useVideoInThumb_bl,
						_d.preset);
				thumb.setVisible(false);
				thumb.totalWidth =  _s.thumbW;
				thumb.totalHeight = _s.thumbH;
		
				thumb.addListener(FWDIGPThumb.MOUSE_OVER, _s.onMouseOverHandler);
				thumb.addListener(FWDIGPThumb.MOUSE_UP, _s.onMouseUpHandler);
				_s.poolThumbs_ar[i] = thumb;
			}
		};
		
		_s.onMouseOverHandler = function(e){
			_s.lastHoveredThumb_do = _s.thumbs_ar[e.gridPosition];
		};
		
		_s.onMouseUpHandler = function(e){
			if(_s.disableOnDragOrSwipe_bl) return;
			_s.setVisitedThumbnail(_s.gallery_ar[e.id].thumbSrc);
			e._s.setNormalState(true);

			if(e._s.type == FWDIGP.VIDEO_IN_THUMB) return;
			_s.openThumb(e.id); 
		};

		_s.setNormalStateOnDragOnMobile = function(){
			for(var i=0; i<_s.poolThumbs_ar.length; i++){
				var thumb = _s.poolThumbs_ar[i];
				if(!thumb.isNormalState_bl){
					thumb.setNormalState(true, true);
				}
			}	
		}
		
		// Get the correct id.
		_s.getCorrectId = function(pId){
			
			var regularId = pId;
			var tempId = pId;
			
			var type = _s.gallery_ar[regularId].type;
			if(type != FWDIGP.LINK){
				for(var i=0; i<_s.totalThumbs; i++){
					if(i < pId  && (_s.gallery_ar[i].type == FWDIGP.LINK 
						|| _s.gallery_ar[i].type == FWDIGP.VIDEO_IN_THUMB
						|| _s.gallery_ar[i].type == FWDIGP.NONE)){
						regularId -= 1;
					}
				};
			}
			return {type:type, target:_s.gallery_ar[regularId].target, id:regularId};
		};

		_s.openThumb = function(id){
			var info = _s.getCorrectId(id);
			var type = info.type;
			var target = info.target;
			var correctId = info.id;

			if(type == FWDIGP.NONE){
				return;
			}
			
			if(type == "link"){
				if(_s.gallery_ar[correctId].target == "_self"){
					window.location.href = _s.gallery_ar[correctId].link;
				}else{
					window.open(_s.gallery_ar[correctId].link, _s.gallery_ar[correctId].target);
				}
			}else{
				_s.dispatchEvent(FWDIGPThumb.MOUSE_UP, {categoryId:prt.categoryId, id:correctId});
			}
		}
		
		
		// Get / add thumb back to pool array.
		_s.getThumb = function(id){
			var thumb;
			var thumbAvailable = false;
			var count = 0;
			
			while(!thumbAvailable){
				thumb = _s.poolThumbs_ar[count];
				if(!thumb) return;
				if(thumb.isAvailable_bl){
					thumb.setVisible(true);
					_s.thumbsHolder_do.addChild(thumb);
					thumb.isAvailable_bl = false;
					thumbAvailable = true;
					return thumb;
				}
				count++; 
			}
		};
		
		_s.addThumbBack = function(thumb){
			FWDAnimation.killTweensOf(thumb);
			thumb.isAvailable_bl = true;
			_s.thumbsHolder_do.removeChild(thumb);
			thumb.setVisible(false);
		};
		
		
		// Update visited thumbnails.
		_s.setVisitedThumbnail = function(path){
			if(!_s.enableVisitedThumbnails_bl) return;
		
			var found_bl = false;
			var thumb;
			
			for(var i=0; i<_s.visitedThumbnailsPaths_ar.length; i++){
				if(_s.visitedThumbnailsPaths_ar[i] == path){
					found_bl = true;
					break;
				}
			}
			
			if(!found_bl) _s.visitedThumbnailsPaths_ar.push(path);

			for(var i=0; i<_s.poolThumbs_ar.length; i++){
				thumb = _s.poolThumbs_ar[i];
				if(!thumb.isAvailable_bl){
					for(var j=0; j<_s.visitedThumbnailsPaths_ar.length; j++){
						 if(thumb.thumbSrc == _s.visitedThumbnailsPaths_ar[j]){
							 thumb.isVisited_bl = true;
							 thumb.setToIsVisited();
							 break;
						 }
					}
				}
			}
		};
		
		_s.getVisitedThumb = function(thumbSrc){
			if(!_s.enableVisitedThumbnails_bl) return;
			for(var i=0; i<_s.visitedThumbnailsPaths_ar.length; i++){
				if(thumbSrc == _s.visitedThumbnailsPaths_ar[i]) return true;
			}
			return false;
		};
		
		
		// Start loop.
		_s.startToLoop = function(){
			_s.stopToLoop();
			_s.loopId_int = window.requestAnimationFrame(_s.animLoop);
		};
		
		_s.stopToLoop = function(){
			cancelAnimationFrame(_s.loopId_int);
		};
			
		_s.animLoop = function(){
			if(prt.evp && prt.isFullscreen_bl) return;
			if(!_s.isZooming_bl){
				_s.scrollGrid();
				if(!_s.disableDrawGrid_bl){
					_s.drawGrid();
					_s.removeThumbsIfNotOnScreen();
				}
			}
			_s.loopId_int = window.requestAnimationFrame(_s.animLoop);
		};
		
		
		// Initialize and start grid.
		_s.initilizeAndStartGrid = function(){
			if(_s == null) return;
			_s.allowToShowCaption = _s.allowToShowPreset = false;
			setTimeout(function(){
				_s.allowToShowCaption = _s.allowToShowPreset = true;
			},1200);

			if(isNaN(prt.stageWidth)){
				clearTimeout(_s.initGridWhenStageIsAvailableId_to);
				_s.initGridWhenStageIsAvailableId_to = setTimeout(_s.initilizeAndStartGrid, 150);
				return;
			}
			
			FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = false;
			
			if(_s.thumbsHolder_do.hasTransform2d_bl && _s.thumbsHolder_do){
				_s.scale = _s.prevScale = 1;
				_s.thumbsHolder_do.setScale2(_s.scale);
			}
			
			_s.thumbs_ar = [];
			_s.grid_ar = [];
			_s.resizeAndPosition();
			_s.initGrid();
			_s.setupMouseWheelBlook();
			if(_s.autoScroll_bl) _s.addAutoScrollSupport();
			_s.addZoomSupport();
			_s.startToLoop();
			_s.addDummyCheckSupport();
			_s.hideDsb();
			_s.isGridInitialized_bl = true;
			_s.allowToResizeGrid_bl = true;
			FWDIGP.isCategoryChanging_bl = _s.isCategoryChanging_bl = false;
		};

		_s.addZoomSupport = function(overwrite){
			if(overwrite) _s.addDragAndSwipeSupport_bl = true
			if(_s.isMobile_bl && _s.addDragAndSwipeSupport_bl || overwrite){
				_s.addZoomDragAndSwipeForMobile();
				setTimeout(function(){
					_s.setLookDoVertically();
					_s.addSetLookDoVertically();
				}, 500);
				if(_d.showLookScrollButton_bl|| overwrite){
					_s.look_do.show(true, .5);
				}
			}

			if(!_s.isMobile_bl){
				if(_s.addDragAndSwipeSupport_bl || overwrite) _s.addDragAndScrollForDesktop();
				if(_s.addZoomSupport_bl || overwrite){

					_s.addDesktopZoomSupport();
					setTimeout(function(){
						_s.setLookDoVertically();
						_s.addSetLookDoVertically();
					}, 500);
					if(_d.showLookScrollButton_bl || overwrite){
						_s.look_do.show(true, .5);
					}
				} 
			}
			
		}

		_s.removeZoomSupport = function(overwrite){
			if(_s.isMobile_bl && _s.addDragAnd){
				_s.removeZoomDragAndSwipeForMobile();
				if(_s.look_do){
					_s.look_do.hide(true, .5);
				}
			}

			if(!_s.isMobile_bl){

				_s.removeDesktopZoomSupport();
				if(_s.addDragAndSwipeSupport_bl) _s.addDragAndScrollForDesktop();
				if(_s.look_do){
					_s.look_do.hide(true, .5);
				}
			}
			
		}


		// Setup mouse wheel block.
		_s.setupMouseWheelBlook = function(){
			if(_s.look_do) return;
			FWDIGPLockIcon.setPrototype();
			if(_s.isMobile_bl){
				_s.look_do = new FWDIGPLockIcon(
					_s,
					"look",
					"<span class='" +  prt.fontIcon + ' ' + prt.fontIcon + '-phone-blooked' + "'></span>",
					"<span class='" +  prt.fontIcon + ' ' + prt.fontIcon + '-phone-unblooked' + "'></span>",
					"look-background-normal-state",
					"look-background-selected-state",
					"look-fwdicon-normal-state",
					"look-fwdicon-selected-state"
				);
			}else{
				_s.look_do = new FWDIGPLockIcon(
					_s,
					"look",
					"<span class='" +  prt.fontIcon + ' ' + prt.fontIcon + '-wheel-blooked' + "'></span>",
					"<span class='" +  prt.fontIcon + ' ' + prt.fontIcon + '-wheel-unblooked' + "'></span>",
					"look-background-normal-state",
					"look-background-selected-state",
					"look-fwdicon-normal-state",
					"look-fwdicon-selected-state"
				);
			}

			_s.look_do.addListener(FWDIGPLockIcon.FIRST_BUTTON_CLICK, _s.lookFBtnClick);
			_s.look_do.addListener(FWDIGPLockIcon.SECOND_BUTTON_CLICK, _s.lookSBtnClick);
			_s.addChild(_s.look_do);	
		}

		_s.addSetLookDoVertically =  function(){
			window.addEventListener("scroll", _s.setLookDoVertically);
		}

		_s.removeSetLookDoVertically =  function(){
			window.removeEventListener("scroll", _s.setLookDoVertically);
		}

		_s.setLookDoVertically = function(e){
			if(!_s.look_do) return;
			prt.globalY = prt.main_do.getGlobalY()
			var y = 0;
			if(prt.stageWidth < 700) y = 0;
			if(prt.globalY < 0) y = Math.abs(prt.globalY);
			if(prt.stageWidth < 700){
				if(y > prt.stageHeight - _s.look_do.h - 25) y =  prt.stageHeight - _s.look_do.h - 25;
			}else{
				if(y > prt.stageHeight - _s.look_do.h - 40) y =  prt.stageHeight - _s.look_do.h - 40;

			}
			
			if(prt.paralax_bl){
				if(y > prt.stageHeight - _s.look_do.h - 100) y =  prt.stageHeight - _s.look_do.h - 100;
				if(prt.stageWidth < 700) y = y + 5;
				 y = Math.round(y/2);

			}
			_s.look_do.setY(y);
		}

		_s.lookFBtnClick = function(e){
			_s.addSetLookDoVertically();
			if(_s.isMobile_bl){
				_s.disableGridScrollOnMobile_bl = true
			}else{
				_s.disableMouseWheelScrool_bl = true;
				return;
			}
			window.addEventListener("scroll", _s.checkIfScroll);
			window.addEventListener("touchend", _s.checkIfScrollEnd, {passive:false});
		}

		_s.lookSBtnClick = function(e){
			if(_s.isMobile_bl){
				_s.disableGridScrollOnMobile_bl = false;
				_s.addZoomSupport(true);
			}else{
				_s.disableMouseWheelScrool_bl = false;
				_s.addZoomSupport(true);
				return;
			}
			window.removeEventListener("scroll", _s.checkIfScroll);
			window.removeEventListener("touchend", _s.checkIfScrollEnd, {passive:false});
			window.removeEventListener("scroll", _s.setLookDoVertically);
			_s.checkIfScrollEnd();
		}

		_s.setlookDefaultState = function(){
			_s.look_do.setState(1)
		}

		_s.checkIfScroll = function(e){
			FWDIGP.isMobileScrolling_bl = _s.isMobileScrolling_bl = true;
			_s.setNormalStateOnDragOnMobile();
		}

		_s.checkIfScrollEnd = function(){
			clearTimeout(_s.checkIfScrollId_to);
			_s.checkIfScrollId_to = setTimeout(function(){
				FWDIGP.isMobileScrolling_bl = _s.isMobileScrolling_bl = false;
			}, 200);
		}


		// Init grid.
		_s.initGrid = function(){
			
		    var stageW;
			var stageH;
			var maxRows;
			var maxColumns;
			var thumb;
			var matchId;
			var newId;
			var curPositionInGrid;
			var row;
			var col;	
			var nrImgH;
			var nrImgV;
			var count = 0;
			var curMatrixRow;
			var curMatrixCol;

			stageW = _s.stageWidth;
			stageH = _s.stageHeight;
			
			maxRows = Math.floor(stageH/_s.thumbnailMaxHeight);
			maxColumns =  Math.ceil(stageW/_s.thumbnailMaxWidth);
		
			_s.thumbW = Math.round(stageW/maxColumns);
			_s.thumbH = Math.round(stageH/maxRows);
		
			if(_s.thumbW > _s.thumbnailMaxWidth) maxColumns ++;
			if(_s.thumbH > _s.thumbnailMaxHeight) maxRows ++;
	
			_s.thumbW = Math.round(stageW/maxColumns);
			_s.thumbH = Math.round(stageH/maxRows);
			
			if(_s.keepThumbnailsOriginalSizeOnGridStart_bl){
				_s.thumbW = _s.thumbnailMaxWidth; 
				_s.thumbH = _s.thumbnailMaxHeight;
			}
			
			_s.posX = -_s.thumbW * FWDIGPThumbsManager.GRID_SIZE/2;
			_s.posY = -_s.thumbH * FWDIGPThumbsManager.GRID_SIZE/2;
			
			nrImgH = Math.ceil(stageW / _s.thumbW);
			nrImgV = Math.ceil(stageH / _s.thumbH);
			

			for (row=0; row < nrImgV; row++) {
				for (col=0; col<nrImgH; col++){
					
					curMatrixRow = FWDIGPThumbsManager.GRID_SIZE/2 + row;
					curMatrixCol = FWDIGPThumbsManager.GRID_SIZE/2 + col;
				
					curPositionInGrid = curMatrixRow * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol;
						
					newId = count % _s.totalThumbs;
					_s.curId = newId;

					_s.grid_ar[curPositionInGrid] = newId;

					thumb = _s.getThumb();
					thumb.id = newId;

					_s.thumbs_ar[curPositionInGrid] = thumb;
					thumb.gridPosition = curPositionInGrid;
					
					thumb.totalW = _s.thumbW;
					thumb.totalH = _s.thumbH;
					thumb.finalX = curMatrixCol * _s.thumbW;
					thumb.finalY = curMatrixRow * _s.thumbH;
					thumb.setX(thumb.finalX);
					thumb.setY(thumb.finalY);
					thumb.resizeThumb();
					thumb.isAvailable_bl = false;

					thumb.thumbVideoSrc = _s.gallery_ar[thumb.id].thumbVideoSrc;
					thumb.subtitleSrc = _s.gallery_ar[thumb.id].subtitleSrc;
					thumb.thumbVastSrc = _s.gallery_ar[thumb.id].thumbVastSrc;
					thumb.thumbPreview = _s.gallery_ar[thumb.id].thumbPreview;
					thumb.password = _s.gallery_ar[thumb.id].password;	
					thumb.caption = _s.gallery_ar[thumb.id].thumbCaption;		
					thumb.type = _s.gallery_ar[_s.curId].type;
					thumb.thumbOverlayColor = _s.gallery_ar[thumb.id].thumbOverlayColor || _s.thumbOverlayBackgroundColor;
					thumb.show(_s.gallery_ar[thumb.id].thumbSrc);
					thumb.setHTMLContent(_s.gallery_ar[thumb.id]);
					thumb.setCaption(_s.gallery_ar[thumb.id].thumbCaption);
					thumb.setupVideoPlayButton();
					if(_s.getVisitedThumb(_s.gallery_ar[thumb.id].thumbSrc)) thumb.isVisited_bl = true;
					count++;
				}
			}
			FWDAnimation.killTweensOf(_s.thumbsHolder_do);
			_s.thumbsHolder_do.setX(_s.posX);
			_s.thumbsHolder_do.setY(_s.posY);
		};
		
		
		// Draw grid.
		_s.drawGrid =  function(){
			
			var stageW;
			var stageH;
			var matchId;
			var newId;
			var curPositionInGrid;
			var row;
			var col;
			var curMatrixRow;
			var curMatrixCol;
			var nrImgH;
			var nrImgV;
			var rowRef;
			var colRef;
			
			stageW = _s.stageWidth;
			stageH = _s.stageHeight;
			
			var dx = Math.abs(_s.posX % (_s.thumbW * _s.scale));
			var dy = Math.abs(_s.posY % (_s.thumbH * _s.scale));
			
			nrImgH = Math.ceil(stageW / (_s.thumbW * _s.scale));
			nrImgV = Math.ceil(stageH / (_s.thumbH * _s.scale));
			
			
			if (dx > nrImgH * (_s.thumbW * _s.scale) - stageW){
				nrImgH++;
			}
			
			if (dy > nrImgV * (_s.thumbH * _s.scale) - stageH){
				nrImgV++;
			}
			
			rowRef = Math.floor(_s.posY/-(_s.thumbH * _s.scale));
			colRef = Math.floor(_s.posX/-(_s.thumbW * _s.scale));

			for (row=0; row < nrImgV; row++) {
				for (col=0; col < nrImgH; col++){
					
					curMatrixRow = rowRef + row;
					curMatrixCol = colRef + col;
					
					curPositionInGrid = curMatrixRow * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol;
				
					if (_s.thumbs_ar[curPositionInGrid] == undefined){
						if(_s.grid_ar[curPositionInGrid] == undefined){
							matchId = false;
							if(_d.thumbnailsOrder == 'random'){
								while(!matchId){
									matchId = true;
										
									newId = Math.floor(Math.random() * _s.totalThumbs);
									
									// Check left top.
									if (_s.grid_ar[((curMatrixRow - 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol - 1)] == newId){
										matchId = false;
									}
									
									// Check left.
									if (_s.grid_ar[curMatrixRow * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol - 1] == newId){
										matchId = false;
									}
									
									// Check left bottom.
									if (_s.grid_ar[((curMatrixRow + 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol - 1)] == newId){
										matchId = false;
									}
									
									// Check up.
									if (_s.grid_ar[((curMatrixRow - 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol)] == newId){
										matchId = false;
									}
									
									// Check down.
									if (_s.grid_ar[((curMatrixRow + 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol)] == newId){
										matchId = false;
									}
									
									// Check right top.
									if (_s.grid_ar[((curMatrixRow - 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol + 1)] == newId){
										matchId = false;
									}
									
									// Check right.
									if (_s.grid_ar[(curMatrixRow * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol + 1)] == newId){
										matchId = false;
									}
									
									// Check right down.
									if (_s.grid_ar[((curMatrixRow + 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol + 1)] == newId){
										matchId = false;
									}
								}
							}else{
								_s.curId ++;
								if(_s.curId >= _s.totalThumbs) _s.curId = 0;
								newId = _s.curId;
							}
						}else{
							newId = _s.grid_ar[curPositionInGrid];	
						}
					
						_s.grid_ar[curPositionInGrid] = newId;
						var thumb = _s.getThumb();
						thumb.id = newId;
						
						if(!thumb) return;
						
						_s.thumbs_ar[curPositionInGrid] = thumb;
						thumb.gridPosition = curPositionInGrid;
						
						thumb = _s.thumbs_ar[curPositionInGrid];
						thumb.totalW = _s.thumbW;
						thumb.totalH = _s.thumbH;
						thumb.finalX = curMatrixCol * _s.thumbW;
						thumb.finalY = curMatrixRow * _s.thumbH;
						thumb.setX(thumb.finalX);
						thumb.setY(thumb.finalY);
						thumb.resizeThumb();

						thumb.iconPath = _s.gallery_ar[thumb.id].thumbIconPath;
						thumb.thumbVideoSrc = _s.gallery_ar[thumb.id].thumbVideoSrc;
						thumb.subtitleSrc = _s.gallery_ar[thumb.id].subtitleSrc;
						thumb.thumbVastSrc = _s.gallery_ar[thumb.id].thumbVastSrc;
						thumb.thumbPreview = _s.gallery_ar[thumb.id].thumbPreview;
						thumb.password = _s.gallery_ar[thumb.id].password;
						thumb.type = _s.gallery_ar[thumb.id].type;
						
						thumb.thumbOverlayColor = _s.gallery_ar[thumb.id].thumbOverlayColor || _s.thumbOverlayBackgroundColor;
						thumb.show(_s.gallery_ar[thumb.id].thumbSrc, _s.setThumbsSizeOnceOnScroll);
						thumb.setHTMLContent(_s.gallery_ar[thumb.id]);
						thumb.setCaption(_s.gallery_ar[thumb.id].thumbCaption);
						thumb.setupVideoPlayButton();
						if(_s.getVisitedThumb(_s.gallery_ar[thumb.id].thumbSrc)) thumb.isVisited_bl = true;
					}
				}
			}

			_s.setThumbsSizeOnceOnScroll = false;
		};
		
		
		// Remove thumbs if they are not on screen.
		_s.removeThumbsIfNotOnScreen = function(){
			var thumb;
			var i;
			
			for(i=0; i<_s.maxThumbs; i++){
				thumb = _s.poolThumbs_ar[i];
					
				if(_s.posX + thumb.finalX * _s.scale < -_s.thumbW * _s.scale
					|| _s.posX + thumb.finalX * _s.scale > _s.stageWidth
					|| _s.posY + thumb.finalY * _s.scale < -_s.thumbH * _s.scale
					|| _s.posY + thumb.finalY * _s.scale > _s.stageHeight
				){
					if(!thumb.isAvailable_bl){
						thumb.removeImage();
						_s.addThumbBack(thumb);
						_s.thumbs_ar[thumb.gridPosition] = undefined;
					}

					if(_s.thumbWithVideo == thumb){
						 _s.thumbWithVideo.removeVideo();
					}
				}
			}
		};
		
		
		// Add mouse wheel support.
		_s.addDesktopZoomSupport = function(){
			if(window.addEventListener){
				_s.screen.addEventListener ("mousewheel", _s.mouseWheelHandler);
				_s.screen.addEventListener('DOMMouseScroll', _s.mouseWheelHandler);
			}
		};
		
		_s.removeDesktopZoomSupport = function(){
			if(window.removeEventListener){
				_s.screen.removeEventListener ("mousewheel", _s.mouseWheelHandler);
				_s.screen.addEventListener('DOMMouseScroll', _s.mouseWheelHandler);
			}
		};
		
		
		// Zoom function.
		_s.mouseWheelHandler = function(e, posX, posY){
			if(_s.disableMouseWheelScrool_bl) return;
			if(e){
				if(e.preventDefault){
					e.preventDefault();
				}else{
					return false;
				}
			}
			if(_s.isDragged_bl && !_s.isMobile_bl) return;
			
			var vmc;
			var so; 
			
			_s.vx = 0;
			_s.vy = 0;
			
			if(e){
				var dir = e.detail || e.wheelDelta;	
				if(e.wheelDelta) dir *= -1;
				
				if(dir > 0){
					if (_s.scale == _s.minScale) return;
					_s.scale -= .2;
					
					if (_s.scale < _s.minScale){
						_s.scale = _s.minScale;
					}
				}else if(dir < 0){
					if (_s.scale == _s.maxScale) return;
					_s.scale += .2;
					if (_s.scale > _s.maxScale){
						_s.scale = _s.maxScale;
					}
				}
			}
			
			var curXScaleDividedByPrevScale = _s.scale / _s.prevScale;
			var curYScaleDividedByPrevScale = _s.scale / _s.prevScale;
			
			if (!FWDAnimation.isTweening(_s)){
				_s.newPosX = _s.posX;
				_s.newPosY = _s.posY;
			}

			_s.newPosX *= curXScaleDividedByPrevScale;
			_s.newPosY *= curYScaleDividedByPrevScale;

			if(_s.isMobile_bl){
				_s.newPosX += posX - curXScaleDividedByPrevScale * posX;
				_s.newPosY += posY - curXScaleDividedByPrevScale * posY;
			}else{
				vmc = FWDIGPUtils.getViewportMouseCoordinates(e);
				_s.newPosX += (vmc.screenX - prt.globalX) - (curXScaleDividedByPrevScale * (vmc.screenX - prt.globalX));
				_s.newPosY += (vmc.screenY - prt.globalY) - (curXScaleDividedByPrevScale  * (vmc.screenY - prt.globalY));
			}


			_s.newPosX = Math.round(_s.newPosX);
			_s.newPosY = Math.round(_s.newPosY);
		
			FWDAnimation.killTweensOf(_s);
			FWDAnimation.killTweensOf(_s.thumbsHolder_do);

			if(String(_s.scale).indexOf("1.0000") != -1){
				_s.scale = 1;
			}
		
			if(_s.isMobile_bl){
				_s.tweenDuration = .2;
			}else{
				_s.tweenDuration = .6;
			}
			FWDAnimation.to(_s, _s.tweenDuration, {posX:_s.newPosX, posY:_s.newPosY, ease:Quint.easeOut});
			FWDAnimation.to(_s.thumbsHolder_do, _s.tweenDuration, {x:_s.newPosX, y:_s.newPosY, scale:_s.scale, onComplete:_s.zoomCompleteHandler,  ease:Quint.easeOut});

			if(_s.lastHoveredThumb_do && !_s.disableThumbnailInteractivity_bl) _s.lastHoveredThumb_do.scaleSmallIconOnTween();
		
			_s.prevScale = _s.scale;
			_s.isZooming_bl = true;
			_s.setThumbsSizeOnceOnScroll = true;

			clearTimeout(_s.scaleThumbVideoId_to);
			_s.scaleThumbVideoId_to = setTimeout(function(){
				_s.scaleThumbVideo();
			}, 10);

			clearTimeout(_s.scaleThumbCaptionId_to);
			_s.scaleThumbCaptionId_to = setTimeout(function(){
				_s.scaleThumbCaption();
			}, 10);
		};

		_s.setNormalStateOnZoom = function(){
			for(var i=0; i<_s.poolThumbs_ar.length; i++){
				var thumb = _s.poolThumbs_ar[i];
				if(!thumb.isNormalState_bl){
					thumb.setNormalState(true, true);
				}
			}	
		}
		
		_s.zoomCompleteHandler = function(){
			_s.isZooming_bl = false;
			_s.drawGrid();
			_s.removeThumbsIfNotOnScreen();
		};


		// Scale thumb video and thumb caption.
		_s.scaleThumbVideo = function(){
			for(var i=0; i<_s.thumbs_ar.length; i++){
				var thumb = _s.thumbs_ar[i];
				if(thumb && thumb.type == FWDIGP.VIDEO_IN_THUMB){
					thumb.scalePlayButton(true);
					thumb.resizeVideo(true);
				}
			}
		}

		_s.scaleThumbCaption = function(){
			for(var i=0; i<_s.thumbs_ar.length; i++){
				var thumb = _s.thumbs_ar[i];
				if(thumb && thumb.caption && thumb.captionShowed_bl){
					thumb.resizeCaption(true);
				}
			}
		}
	
		
		// Setup scrollbar for mobile.
		_s.addZoomDragAndSwipeForMobile = function(){
			if(_s.hasPointerEvent_bl){
				_s.screen.addEventListener("MSPointerDown", _s.onTouchStart);
			}else{
				_s.screen.addEventListener("touchstart", _s.onTouchStart, {passive:false});
			}
		};	
		
		_s.removeZoomDragAndSwipeForMobile = function(){
			if(_s.hasPointerEvent_bl){
				_s.screen.removeEventListener("MSPointerDown", _s.onTouchStart);
				window.removeEventListener("MSPointerUp", _s.windowOnTouchEnd);
				window.removeEventListener("MSPointerMove", _s.windowOnTouchMove);
			}else{
				_s.screen.removeEventListener("touchstart", _s.onTouchStart, {passive:false});
				window.removeEventListener("touchend", _s.windowOnTouchEnd, {passive:false});
				window.removeEventListener("touchmove", _s.windowOnTouchMove, {passive:false});
			}
		};	
		
		_s.onTouchStart = function(e){
			if(_s.disableGridScrollOnMobile_bl){
				return;
			}

			if(_s.isZooming_bl) return;

			// Check if hit pass.
			if(prt.evp && prt.evp.passWindow_do && prt.evp.passWindow_do.passInput_do){
				var vc = FWDIGPUtils.getViewportMouseCoordinates(e);	
				if(FWDIGPUtils.hitTest(prt.evp.passWindow_do.passInput_do.screen, vc.screenX, vc.screenY)
				|| FWDIGPUtils.hitTest(prt.evp.passWindow_do.passButton_do.screen, vc.screenX, vc.screenY)){
					return;
				}
			}

			if(e.preventDefault) e.preventDefault();
		
			_s.vx = 0;
			_s.vy = 0;
			
			if(e.touches){
				_s.lastMouseX = _s.firstTouchMouseX = _s.lastDragX =  e.touches[0].pageX - prt.globalX - prt.scrollOffsets.x;
				_s.lastMouseY = _s.firstTouchMouseY = _s.lastDragY = e.touches[0].pageY - prt.globalY - prt.scrollOffsets.y;
			}else{
				_s.lastMouseX = _s.firstTouchMouseX = e.pageX - prt.globalX - prt.scrollOffsets.x;
				_s.lastMouseY = _s.firstTouchMouseY = e.pageY - prt.globalY - prt.scrollOffsets.y;
			}
			
			if(e.touches && e.touches.length == 2 && _s.addZoomSupport_bl){
				FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = true;
				_s.lastMouseX2 = e.touches[1].pageX - prt.globalX - prt.scrollOffsets.x;
				_s.lastMouseY2 = e.touches[1].pageY - prt.globalY - prt.scrollOffsets.y;
			}else if(e.touches && e.touches.length > 2 && _s.addZoomSupport_bl){
				return;
			}
			
			if(_s.hasPointerEvent_bl){
				window.addEventListener("MSPointerUp", _s.windowOnTouchEnd);
				window.addEventListener("MSPointerMove", _s.windowOnTouchMove);
			}else{
				window.addEventListener("touchend", _s.windowOnTouchEnd, {passive:false});
				window.addEventListener("touchmove", _s.windowOnTouchMove, {passive:false});
			}
		};


		// Touch events for the grid.
		_s.windowOnTouchMove = function(e){
			if(e.preventDefault) e.preventDefault();
			
			var lcX;
			var lcY;
			var toAddX;
			var toAddY;
			var toAddY2;
			var posX1;
			var posY1;
			var posX2;
			var posY2;
			var pinchDist;
			var dx;
			var dy;
			var finalPosX;
			var finalPosY;

			if(e.touches){
				lcX = e.touches[0].pageX - prt.globalX - prt.scrollOffsets.x;
				lcY = e.touches[0].pageY - prt.globalY - prt.scrollOffsets.y;
			}else{
				lcX = e.pageX - prt.globalX - prt.scrollOffsets.x;
				lcY = e.pageY - prt.globalY - prt.scrollOffsets.y;
			}
			
			if(_s.firstTouchMouseX < lcX - 5 || _s.firstTouchMouseX > lcX + 5
			  || _s.firstTouchMouseY < lcY - 5 || _s.firstTouchMouseY > lcY + 5){

			  	_s.setNormalStateOnDragOnMobile();
			  
				FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = true;
			}
			
			if(_s.hasPointerEvent_bl){
				toAddX = e.pageX - prt.globalX - _s.lastMouseX - prt.scrollOffsets.x;
				toAddY = e.pageY - prt.globalY - _s.lastMouseY - prt.scrollOffsets.y;
				_s.lastMouseX = lcX;
				_s.lastMouseY = lcY;
				if(_s.dragDirection == "both"){
					_s.posX += toAddX;
					_s.posY += toAddY;
				}else if(_s.dragDirection == "horizontal"){
					_s.posX += toAddX;
				}else if(_s.dragDirection == "vertical"){
					_s.posY += toAddY;
				}
				
				if(Math.abs(_s.lastDragX - _s.lastMouseX) > 10 || Math.abs(_s.lastDragY - _s.lastMouseY) > 10){
					FWDIGP.isDragged_bl = _s.isDragged_bl = true;
				}

			}else if(e.touches && e.touches.length == 1 && _s.addDragAndSwipeSupport_bl){
				toAddX = e.touches[0].pageX - prt.globalX - _s.lastMouseX - prt.scrollOffsets.x;
				toAddY = e.touches[0].pageY - prt.globalY - _s.lastMouseY - prt.scrollOffsets.y;
				_s.lastMouseX = lcX;
				_s.lastMouseY = lcY;
				if(_s.dragDirection == "both"){
					_s.posX += toAddX;
					_s.posY += toAddY;
				}else if(_s.dragDirection == "horizontal"){
					_s.posX += toAddX;
				}else if(_s.dragDirection == "vertical"){
					_s.posY += toAddY;
				}
				if(Math.abs(_s.lastDragX - _s.lastMouseX) > 10 || Math.abs(_s.lastDragY - _s.lastMouseY) > 10){
					FWDIGP.isDragged_bl = _s.isDragged_bl = true;
				}
			}else if(e.touches && e.touches.length == 2 && _s.addZoomSupport_bl){
				posX1 = lcX;
				posY1 = lcY;
				posX2 = e.touches[1].pageX - prt.globalX - prt.scrollOffsets.x;
				posY2 = e.touches[1].pageY - prt.globalY - prt.scrollOffsets.y;
				finalPosX = (posX2 + posX1)/2;
				finalPosY = (posY2 + posY1)/2;
				
				dx = posX1 - posX2;
				dy = posY1 - posY2;
				pinchDist = Math.sqrt(dx * dx + dy * dy);
				
				if(parseInt(_s.pinchDist) != parseInt(pinchDist)){
					if(_s.pinchDist > pinchDist){
						_s.scale -= 0.04;
						if (_s.scale < .8){
							_s.scale = .8;
						}
					}else{
						_s.scale += 0.04;
						if (_s.scale > 1.6){
							_s.scale = 1.6;
						}
					}
				}
				
				_s.pinchDist = pinchDist;
				_s.mouseWheelHandler(null, finalPosX, finalPosY);

				FWDIGP.isZoomed = true;
				FWDIGP.isDragged_bl = _s.isDragged_bl = true;	
			}
		};
		
		_s.windowOnTouchEnd = function(e){

			if(e.preventDefault) e.preventDefault();
			if(_s.hasPointerEvent_bl){
				window.removeEventListener("MSPointerUp", _s.windowOnTouchEnd);
				window.removeEventListener("MSPointerMove", _s.windowOnTouchMove);
				clearTimeout(_s.disableOnDragOrSwipeId_to);
				_s.disableOnDragOrSwipeId_to = setTimeout(function(){
					FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = false;
				}, 200);
			}else{
				if(e.touches.length == 0){
					clearTimeout(_s.disableOnDragOrSwipeId_to);
					_s.disableOnDragOrSwipeId_to = setTimeout(function(){
						FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = false;
					}, 200);
					window.removeEventListener("touchend", _s.windowOnTouchEnd);
					window.removeEventListener("touchmove", _s.windowOnTouchMove);
				}
			}
			
			_s.chckZoomId_to = setTimeout(function(){
				FWDIGP.isZoomed = false;
			}, 500);
			FWDIGP.isDragged_bl = _s.isDragged_bl = false;
		};
		
		
		// Setup scrolling for pc.
		_s.addDragAndScrollForDesktop = function(){
			_s.screen.addEventListener("mousedown", _s.onMouseDown);
		};
		
		_s.removeDragAndScrollForDesktop = function(){
			_s.screen.removeEventListener("mousedown", _s.onMouseDown);
			window.removeEventListener("mouseup", _s.windowOnMoveUp);
			window.removeEventListener("mousemove", _s.windowOnMouseMove);
		};
		
		_s.onMouseDown = function(e){

			// Check if hit pass.
			if(prt.evp && prt.evp.passWindow_do && prt.evp.passWindow_do.passInput_do){
				var vc = FWDIGPUtils.getViewportMouseCoordinates(e);	
				if(FWDIGPUtils.hitTest(prt.evp.passWindow_do.passInput_do.screen, vc.screenX, vc.screenY)){
					return;
				}

				if(FWDIGPUtils.hitTest(prt.evp.passWindow_do.passButton_do.screen, vc.screenX, vc.screenY)){
					return;
				}
			}

			if(e.preventDefault) e.preventDefault();
			
			var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
			
			_s.vx = 0;
			_s.vy = 0;
			_s.lastMouseX = vpc.screenX;
			_s.lastMouseY = vpc.screenY;
						
			if(window.addEventListener){
				setTimeout(function(){
					if(_s == null) return;
					window.addEventListener("mouseup", _s.windowOnMoveUp);
					window.addEventListener("mousemove", _s.windowOnMouseMove);
				}, 10);
			}
		};
		
		_s.windowOnMouseMove = function(e){
			var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
			
			var toAddX = vpc.screenX - _s.lastMouseX;
			var toAddY = vpc.screenY - _s.lastMouseY;
			
			_s.disableOpenLighbox_bl = true;
			_s.showDsb();
			
			if(_s.dragDirection == "both"){
				_s.posX += toAddX;
				_s.posY += toAddY;
			}else if(_s.dragDirection == "horizontal"){
				_s.posX += toAddX;
			}else if(_s.dragDirection == "vertical"){
				_s.posY += toAddY;
			}
			
			_s.lastMouseX = vpc.screenX;
			_s.lastMouseY = vpc.screenY;
			FWDIGP.isDragged_bl = _s.isDragged_bl = true;
		};
		
		_s.windowOnMoveUp = function(){
			
			_s.hideDsb();
			
			window.removeEventListener("mouseup", _s.windowOnMoveUp);
			window.removeEventListener("mousemove", _s.windowOnMouseMove);
		
			clearTimeout(_s.disableOpenLighboxId_to);
			_s.disableOpenLighboxId_to = setTimeout(function(){_s.disableOpenLighbox_bl = false;}, 100);
		
			FWDIGP.isDragged_bl = _s.isDragged_bl = false;
		};
	

		// Scroll grid.
		_s.scrollGrid =  function(){
			
			if(_s.vx > 80){
				_s.vx = 80;
			}else if(_s.vx < -80){
				_s.vx = -80;
			}
			
			if(_s.vy > 80){
				_s.vy = 80;
			}else if(_s.vy < -80){
				_s.vy = -80;
			}
			
			if(Math.abs(_s.vx) < .01 && Math.abs(_s.vy) < .01 || _s.isZooming_bl){
				_s.disableDrawGrid_bl = true;
			}else{
				_s.disableDrawGrid_bl = false;
			}
			
			if(_s.isDragged_bl){
				_s.vx = _s.posX - _s.lastThumsbHolderX;
				_s.vy = _s.posY - _s.lastThumsbHolderY;
				_s.lastThumsbHolderX = _s.posX;	
				_s.lastThumsbHolderY = _s.posY;
			}else if(_s.isAutoScolling_bl){
				if(_s.autoScrollDirection == "down"){
					_s.vy = _s.autoScrollSpeed;
				}else if(_s.autoScrollDirection == "up"){
					_s.vy = -_s.autoScrollSpeed;
				}else if(_s.autoScrollDirection == "left"){
					_s.vx = -_s.autoScrollSpeed;
				}else if(_s.autoScrollDirection == "right"){
					_s.vx = _s.autoScrollSpeed;
				}
				
				_s.vx *= _s.friction;
				_s.vy *= _s.friction;
				_s.posX += Math.round(_s.vx);
				_s.posY += Math.round(_s.vy);
			}else{
				_s.vx *= _s.friction;
				_s.vy *= _s.friction;
				_s.posX += Math.round(_s.vx);
				_s.posY += Math.round(_s.vy);
			}
			
			if(!_s.disableDrawGrid_bl){
				if(_s.dragDirection == "both"){
					_s.thumbsHolder_do.setX(_s.posX);
					_s.thumbsHolder_do.setY(_s.posY);
				}else if(_s.dragDirection == "horizontal"){
					_s.thumbsHolder_do.setX(_s.posX);
				}else if(_s.dragDirection == "vertical"){
					_s.thumbsHolder_do.setY(_s.posY);
				}
			}
		};
		
		_s.init();
		
	};
	
	// Set prototype.
	FWDIGPThumbsManager.setPrototype = function(){
		FWDIGPThumbsManager.prototype = new FWDIGPDisplayObject("div");
	};
	
	FWDIGPThumbsManager.GRID_SIZE = 1000;
	FWDIGPThumbsManager.MOUSE_DONE = "onMouseDown";
	
	FWDIGPThumbsManager.prototype = null;
	window.FWDIGPThumbsManager = FWDIGPThumbsManager;
	
}(window));