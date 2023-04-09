/**
 * Infinite Grid Pro PACKAGED v3.0
 * Main class.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){
	
	'use strict';

	var FWDIGP = function(props){
		
		var _s = this;
		
		// Initialize.
		_s.init = function(){
			
			FWDTweenLite.ticker.useRAF(true);
			_s.props = props;
			
			_s.listeners = {events_ar:[]};
			_s.fontIcon = props.fontIcon || "fwdigpicon";
			_s.mustHaveHolderDiv_bl = false;
			_s.instName = _s.props.instanceName;
			
			_s.displayType = props.displayType || FWDIGP.RESPONSIVE;
			_s.displayType = _s.displayType.toLowerCase();
			
			if(_s.displayType.toLowerCase() != FWDIGP.RESPONSIVE 
			   && _s.displayType.toLowerCase() != FWDIGP.FULL_SCREEN
			   && _s.displayType.toLowerCase() != FWDIGP.FLUID_WIDTH
			   && _s.displayType.toLowerCase() != FWDIGP.AFTER_PARENT
			   && _s.displayType.toLowerCase() != FWDIGP.FLUID_WIDTH_AND_HEIGHT){
				_s.displayType = FWDIGP.RESPONSIVE;
			}

			_s.mainFolderPath = _s.props.mainFolderPath;
			if(!_s.mainFolderPath){
				alert("The mainFolderPath property is not defined in the constructor function!");
				return;
			}
			
			if((_s.mainFolderPath.lastIndexOf("/") + 1) != _s.mainFolderPath.length){
				_s.mainFolderPath += "/";
			}
			
			_s.skinPath = _s.mainFolderPath + "skin/";
			_s.warningIconPath = _s.skinPath + "/warning.png"
			
			if(!_s.props.instanceName){
				alert("FWDIGP instance name is required please make sure that the instanceName parameter exsists and it's value is uinique.");
				return;
			}
			
			if(window[_s.instName]){
				alert("FWDIGP instance name " + _s.instName +  " is already defined and contains a different instance reference, set a different instance name.");
				return;
			}else{
				window[_s.instName] = _s;
			}
		
			if(!_s.props){
				alert("FWDIGP constructor properties object is not defined!");
				return;
			}
			
			if(_s.displayType != FWDIGP.FULL_SCREEN) _s.mustHaveHolderDiv_bl = true;
			
			if(!_s.props.parentId && _s.mustHaveHolderDiv_bl){		
				alert("Property parentId is not defined in the FWDIGP constructor, _s property represents the div id into which the megazoom is added as a child!");
				return;
			}
			
			if(_s.mustHaveHolderDiv_bl && !FWDIGPUtils.getChildById(_s.props.parentId)){
				alert("FWDIGP parent div is not found, please make sure that the div exsists and the id is correct! " + _s.props.parentId);
				return;
			}
		
			_s.body = document.getElementsByTagName("body")[0];
			_s.stageContainer = null;
			
			if(_s.displayType == FWDIGP.FULL_SCREEN){
				_s.stageContainer = _s.body;
			}else{	
				_s.stageContainer = FWDIGPUtils.getChildById(_s.props.parentId);
			}
			
			_s.refDiv = FWDIGPUtils.getChildById(_s.props.parentId);
			_s.backgroundColor = _s.props.backgroundColor || "transparent";
			_s.lightBoxBackgroundColor = _s.props.lightMainBoxBackgroundColor || "transparent";
			
			_s.initializeOnlyWhenVisible_bl = _s.props.initializeOnlyWhenVisible == "yes" ? true : false;
			_s.stageWidth = 0;
			_s.stageHeight = 0;
			_s.pageXOffset = window.pageXOffset;
			_s.pageYOffset = window.pageYOffset;
			_s.maxWidth = _s.props.maxWidth || 640;
			_s.maxHeight = _s.props.maxHeight || 380;
			_s.offsetWidth = _s.props.offsetWidth || 600;
			_s.minHeight = _s.props.minHeight || 400;
			_s.zIndex = _s.props.zIndex;
			_s.orintationChanceComplete_bl = true;
			_s.paralax_bl = _s.props.paralax == "yes" ? true : false;
			_s.autoScale_bl = _s.props.autoScale == "yes" ? true : false;
			_s.isMobile_bl = FWDIGPUtils.isMobile;
	    	_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;
	    	_s.isReady_bl = false;

	    	if(_s.initializeOnlyWhenVisible_bl){
	    		
				_s.startResizeHandler();
				_s.resizeHandler();
				window.addEventListener("scroll", _s.onInitlalizeScrollHandler);
				setTimeout(_s.onInitlalizeScrollHandler, 500);
			}else{
				_s.setupGrid();
			}
		};


		// Initialize when visible.
		_s.onInitlalizeScrollHandler = function(){

			var scrollOffsets = FWDIGPUtils.getScrollOffsets();
			_s.pageXOffset = scrollOffsets.x;
			_s.pageYOffset = scrollOffsets.y;
		
			if(_s.stageContainer.getBoundingClientRect().top <=_s.ws.h){
				window.removeEventListener("scroll", _s.onInitlalizeScrollHandler);
				_s.setupGrid();
			}
		};


		// Setup grid.
		_s.setupGrid = function(){
			if(_s.main_do) return;
			_s.setupMainDo();
			_s.setupInfo();
			_s.setupData();
			_s.startResizeHandler();
			_s.resizeHandler();
			_s.checkParalaxOnScroll();
		}
		

		// Paralax.
		_s.checkParalaxOnScroll = function(){
			if(_s.paralax_bl){
				window.addEventListener("scroll", _s.checkVisisbility);
				_s.checkVisisbility();
			}
		}

		_s.stopParalaxOnScroll = function(){
			if(_s.paralax_bl){
				window.removeEventListener("scroll", _s.checkVisisbility);
				_s.stopRAF();
			}
		}

		_s.checkVisisbility =  function(e){
			var so = FWDIGPUtils.getScrollOffsets();
			_s.pageXOffset = so.x;
			_s.pageYOffset = so.y;
			if((_s.main_do.getRect().top >= -_s.stageHeight && _s.main_do.getRect().top < _s.ws.h)){
				if(_s.paralax_bl){
					_s.startRAF();
					clearTimeout(_s.pr_to);
					_s.pr_to = setTimeout(function(){
						_s.stopRAF();
					}, 1000);
				}
				_s.isVisible_bl = true;
			}else{
				_s.isVisible_bl = false;
			}
		}

		_s.stopRAF = function(){
			cancelAnimationFrame(_s.myReq);
		}

		_s.startRAF = function(){
			function step() {
				var pos = _s.main_do.getRect().top/2;
				if(pos > 0){
					pos = 0;
				}
				pos *= -1;

				if(_s.thumbsManager_do){
					if(_s.main_do.getRect().top >= -_s.stageHeight && _s.main_do.getRect().top < _s.ws.h){
						if(FWDIGPUtils.hasTransform3d){
							_s.thumbsManager_do.screen.style.transform = 'translate3d(0, ' + pos + 'px' + ', 0)';
						}else{
							_s.thumbsManager_do.setY(pos);
						}

						_s.offsetParalaxPos = pos;

						_s.preloader_do.positionAndResize();
						
					}
				}
				_s.myReq = requestAnimationFrame(step);
			}
			
			cancelAnimationFrame(_s.myReq);
			_s.myReq = requestAnimationFrame(step);
		}

		
		// Setup main do.
		_s.setupMainDo = function(){
			_s.main_do = new FWDIGPDisplayObject("div", "relative");
			_s.main_do.screen.className = "fwdigp";
			_s.main_do.getStyle().msTouchAction = "none";
			_s.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)";
			_s.main_do.getStyle().webkitFocusRingColor = "rgba(0, 0, 0, 0)";
			_s.main_do.getStyle().width = "100%";
			_s.main_do.getStyle().height = "100%";
			_s.main_do.setBkColor(_s.backgroundColor);
			if(!FWDIGPUtils.isMobile || (FWDIGPUtils.isMobile && FWDIGPUtils.hasPointerEvent)) _s.main_do.setSelectable(false);

			_s.main_do.screen.className = "fwdigp";

			if(_s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){
				_s.main_do.screen.className = _s.main_do.screen.className + ' clear-padding';
			}
			
			_s.videoHolder_do = new FWDIGPDisplayObject("div");
			_s.main_do.addChild(_s.videoHolder_do);
			
			if(_s.displayType == FWDIGP.FULL_SCREEN || _s.displayType == FWDIGP.FLUID_WIDTH || _s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){	
				_s.main_do.getStyle().position = "absolute";
				document.documentElement.appendChild(_s.main_do.screen);

				if(_s.displayType == FWDIGP.FULL_SCREEN){
					_s.main_do.getStyle().zIndex = "9999999999998";
					_s.stageContainer.style.height = "500px";
				}
				if(_s.displayType == FWDIGP.FLUID_WIDTH ||  _s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){
					if(_s.zIndex) _s.main_do.getStyle().zIndex = _s.zIndex;
					_s.stageContainer.style.height = "500px";
				}
				_s.stageContainer.style.overflow = "hidden";
			}else{
				_s.stageContainer.appendChild(_s.main_do.screen);
			}	
		};
		
	
		// Setup info window.
		_s.setupInfo = function(){
			FWDIGPInfo.setPrototype();
			_s.info_do = new FWDIGPInfo(_s, _s.warningIconPath);
		};	
		
		
		// Resize handler.
		_s.startResizeHandler = function(){
			if(_s.setStartResizeHandler) return;
			_s.startResizeHandler2();
			
			_s.resizeHandlerId2_to = setTimeout(function(){_s.resizeHandler();}, 50);
			if(_s.displayType == FWDIGP.FLUID_WIDTH || _s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT) _s.resizeHandlerId1_to = setTimeout(function(){_s.resizeHandler(true);}, 800);

			if(_s.displayType == FWDIGP.FLUID_WIDTH || _s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){
				_s.countInterval = 0;
				_s.ctId_to = setInterval(function(){
					if(!_s) return false;
					_s.resizeHandler()
					if(_s.countInterval > 400) clearInterval(_s.ctId_to);
					_s.countInterval ++;
				});
			}
			_s.setStartResizeHandler = true;
		};


		_s.startResizeHandler2 = function(){
			window.addEventListener("resize", _s.onResizeHandler);
			window.addEventListener("scroll", _s.onScrollHandler);
		}

		_s.stopResizeHandler = function(){
			window.removeEventListener("resize", _s.onResizeHandler);
			window.removeEventListener("scroll", _s.onScrollHandler);
		}
		
		_s.onResizeHandler = function(e){
			if(_s.isMobile_bl){
				clearTimeout(_s.resizeHandlerId2_to);
				_s.resizeHandlerId2_to = setTimeout(function(){_s.resizeHandler();}, 200);
			}else{
				_s.resizeHandler();
			}	
		};
		
		_s.onScrollHandler = function(e){
			_s.scrollHandler();
		};
		
		
		// Resize and scroll handler.
		_s.scrollHandler = function(){
			if(!_s.orintationChanceComplete_bl) return;
			_s.scrollOffsets = FWDIGPUtils.getScrollOffsets();
		
			_s.pageXOffset = _s.scrollOffsets.x;
			_s.pageYOffset = _s.scrollOffsets.y;
			if(!_s.main_do) return;
			
			if(_s.isFullScreen_bl || _s.displayType == FWDIGP.FULL_SCREEN){	
				_s.main_do.setX(_s.pageXOffset);
				_s.main_do.setY(_s.pageYOffset);
			}else if(_s.displayType == FWDIGP.FLUID_WIDTH || _s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){	
				if(_s.isMobile_bl){
					clearTimeout(_s.scrollEndId_to);
					_s.scrollEndId_to = setTimeout(_s.resizeHandler, 200);		
				}else{
					_s.main_do.setX(_s.pageXOffset);
				}
				_s.main_do.setY(Math.round(_s.stageContainer.getBoundingClientRect().top + _s.pageYOffset));
			}
			_s.globalX = _s.main_do.getGlobalX();
			_s.globalY = _s.main_do.getGlobalY();
			if(_s.thumbsManager_do) _s.thumbsManager_do.setRect();
		};
		
		_s.resizeHandler = function(overwrite){
			if(!_s.orintationChanceComplete_bl) return;

			_s.scrollOffsets = FWDIGPUtils.getScrollOffsets();
			_s.ws = FWDIGPUtils.getViewportSize();
			var scale;
		
			_s.pageXOffset = _s.scrollOffsets.x;
			_s.pageYOffset = _s.scrollOffsets.y;
			if(!_s.main_do) return;
			if(_s.displayType == FWDIGP.FLUID_WIDTH){
				_s.stageWidth = _s.ws.w;
				_s.stageHeight = _s.ws.h;
				if (_s.autoScale_bl){
					scale = Math.min(_s.stageWidth/_s.offsetWidth, 1);
					_s.stageHeight = Math.min(parseInt(scale * _s.maxHeight), _s.maxHeight);
					if(_s.stageHeight < 300) _s.stageHeight = 300;
					_s.refDiv.style.height = _s.stageHeight + "px";
				}else{
					_s.stageHeight = _s.maxHeight;
					_s.refDiv.style.height = _s.stageHeight + "px";
				}
				if(_s.stageHeight < _s.minHeight) _s.stageHeight = _s.minHeight;
				if(_s.isMobile_bl && _s.ws.h < _s.minHeight) _s.stageHeight = _s.ws.h;
				_s.main_do.setX(_s.pageXOffset);
				_s.main_do.setY(Math.round(_s.stageContainer.getBoundingClientRect().top + _s.pageYOffset));
			}else if(_s.displayType == FWDIGP.RESPONSIVE){
				_s.stageContainer.style.width = "100%";

				if(_s.stageContainer.offsetWidth > _s.maxWidth){
					_s.stageContainer.style.width = _s.maxWidth + "px";
				}
				_s.stageWidth = _s.stageContainer.offsetWidth;
				if(_s.autoScale_bl){
					_s.stageHeight = parseInt(_s.maxHeight * Math.min(1, _s.stageWidth/_s.offsetWidth));
				}else{
					_s.stageHeight = _s.maxHeight;
				}
			
				_s.main_do.setX(0);
				_s.main_do.setY(0);

				if(_s.stageHeight < _s.minHeight) _s.stageHeight = _s.minHeight;
				if(_s.isMobile_bl && _s.ws.h < _s.minHeight) _s.stageHeight = _s.ws.h;
				_s.stageContainer.style.height = _s.stageHeight + "px";
			}else if(_s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){
				_s.stageWidth = _s.ws.w;
				_s.stageHeight = _s.ws.h;
				_s.stageContainer.style.height = _s.stageHeight + "px";
				_s.main_do.setX(_s.pageXOffset);
				_s.main_do.setY(Math.round(_s.stageContainer.getBoundingClientRect().top + _s.pageYOffset));
			}else if(_s.displayType == FWDIGP.AFTER_PARENT){
				_s.stageWidth = _s.stageContainer.offsetWidth;
				_s.stageHeight = _s.stageContainer.offsetHeight;
			}else if(_s.isFullScreen_bl || _s.displayType == FWDIGP.FULL_SCREEN){	
				_s.main_do.setX(_s.scrollOffsets.x);
				_s.main_do.setY(_s.scrollOffsets.y);
				_s.stageWidth = _s.ws.w;
				_s.stageHeight = _s.ws.h;
			}else{
				_s.main_do.setX(0);
				_s.main_do.setY(0);
				_s.stageWidth = _s.ws.w;
				_s.stageHeight = _s.ws.h;
			}

			if(_s.menu_do){
				if(_s.menu_do.isShowed_bl){
					_s.menu_do.resizeAndPosition(_s.stageWidth);
				}else{
					_s.menu_do.setHeight(0);
				}
			}
			
			_s.main_do.setWidth(_s.stageWidth);
			_s.main_do.setHeight(_s.stageHeight);
			
			
			_s.globalX = _s.main_do.getGlobalX();
			_s.globalY = _s.main_do.getGlobalY();
			
			_s.positionPreloader();
			if(_s.thumbsManager_do){
				_s.thumbsManager_do.resizeAndPosition();
				_s.thumbsManager_do.setRect();
			}
		};
		
		
		// Setup context menu.
		_s.setupContextMenu = function(){
			_s.customContextMenu_do = new FWDIGPContextMenu(_s.main_do, _s._d.rightClickContextMenu);
		};
		
		
		// Setup data.
		_s.setupData = function(){
			FWDIGPData.setPrototype();
			_s._d = new FWDIGPData(_s);
			_s._d.addListener(FWDIGPData.LOAD_ERROR, _s._dLoadError);
			_s._d.addListener(FWDIGPData.LOAD_DONE, _s._dLoadComplete);	
		};
		
		_s.onLightBoxCloseButtonLoadDone = function(){
			if(_s.displayType == FWDIGP.LIGHTBOX) _s.setupLighBoxCloseButton();
		};
		
		_s._dLoadError = function(e){
			_s.main_do.addChild(_s.info_do);
			_s.info_do.showText(e.text);
		};
		
		_s._dLoadComplete = function(e){
			_s.isReady_bl = true;
			_s.startAtGallery =  _s._d.startAtGallery;
			_s.categoryId = -1;
			_s.setupPreloader();
			_s.positionPreloader();
			if(_s.displayType == FWDIGP.FULL_SCREEN){
				if(!FWDIGPUtils.hasFullScreen) _s._d.showFullScreenButton_bl = false;
			}
		
			_s.main_do.addChild(_s.preloader_do);

			if(_s._d.useVideoInThumb_bl){
				_s.loadVideoPlayer();
				return;
			}else{
				_s.setupMainStuff();
			}
		};

		// Load video player.
		_s.loadVideoPlayer = function(){
	 		if(!window['FWDEVPlayer']){
		 		var script = document.createElement('script');
				script.src = _s._d.mainFolderPath + 'rl/content/evp/java/FWDEVPlayer.js?t=' + Math.random() * 99999999;
				document.head.appendChild(script);
				script.onload = _s.videoLoadDone;
				script.onerror = _s.onVidLoadError;
			}

			_s.evp_it = setInterval(function(){
				if(window['FWDEVPlayer']){
					_s.vidHld_do = new FWDIGPTransformDisplayObject("div");
					_s.vidHld_do.getStyle().beckgroundColor = "#000";
					_s.vidHld_do.setX(-5000);
					_s.vidHld_do.setWidth(10);
					_s.vidHld_do.setHeight(10);
					_s.vidHld_do.getStyle().transformOrigin = "top left";
					_s.vidHld_do.screen.className = "video-holder";
					_s.vidHld_do.screen.setAttribute('id', _s.instName + '_evp_div')
					_s.vidHld_do.setOverflow('visible');
					clearInterval(_s.evp_it);
					_s.main_do.addChild(_s.vidHld_do);
					_s.setupMainStuff();
					_s.updateEVP("");
				}
			}, 5);
	 	}


		// Setup main instances.
		_s.setupMainStuff = function(){
			_s.setupThumbsManager();
			if(_s._d.showGalleriesMenu) _s.setupComboBox();
			_s.setupLightBox();
			_s.updateCategory(_s.startAtGallery, true);

			_s.main_do.addChild(_s.preloader_do);
			if(!_s.isMobile_bl) _s.setupContextMenu();
			

			setTimeout(function(){
				_s.preloader_do.hide(true);
			}, 500);

			_s.dispatchEvent(FWDIGP.READY);
		}


		_s.updateEVP = function(src, subSrc, vastSrc, password, thumbPreview){

			_s.src = src;
			_s.subtitleSrc = subSrc;
			_s.vdVastSrc = vastSrc;
			_s.password = password;
			_s.thumbPreview = thumbPreview;

			if(!_s.evpInst){
				_s.isLoading = true;
				_s.evpInst = true;
				FWDEVPUtils.hasTransform3d = FWDIGPUtils.hasTransform3d;
				FWDEVPUtils.hasTransform2d = FWDIGPUtils.hasTransform2d;
			
				var isPrivate = password ? 'yes' : 'no';
				var showFSB_bl = _s._d.vdShowFullScreenButton ? 'yes' : 'no';

				var pushBtns = -1;
				var startSpaceBetweenButtons = 4;
				var showVolumeButton = _s._d.vdShowVolumeButton ? 'yes' : 'no';
				var showVolumeScrubber = _s._d.vdShowVolumeScrubber ? 'yes' : 'no';

				if(FWDIGPUtils.isIOS){
					showFSB_bl = "no";
					pushBtns = -2;
					startSpaceBetweenButtons = 6;
					showVolumeButton = "no";
					showVolumeScrubber = "no";
				}
				
				new FWDEVPlayer({		

					// Main settings.
					isRL:true,
					instanceName:_s.instName + '_evp',
					parentId:_s.instName + '_evp_div',
					fontIcon:_s.fontIcon,
					mainFolderPath:_s.mainFolderPath + "rl/content/evp/",
					cls:"rl",
					displayType:'afterparent',
					delayPoster:true,
					playsinline:'no',
					skinPath:"skin",
					useVectorIcons:"yes",
					privateVideoPassword:_s.password,
					preloaderBackgroundColor: _s._d.vdPreloaderBkColor,
					preloaderFillColor: _s._d.vdPreloaderFillColor,
					startAtVideoSource:0,
					videoSource:[{source:_s.src, label:"small version", isPrivate:isPrivate}],
					posterPath:"",
					showErrorInfo:'no',
					fillEntireVideoScreen: _s._d.vdFillEntireVideoScreen ? 'yes' : 'no',
					addKeyboardSupport:_s._d.vdUseKeyboard ? 'yes' : 'no',
					autoPlay:'no',
					autoPlayText:"",
					volume:_s._d.vdVolume,
					posterBackgroundColor:"#000000",
					backgroundColor:_s._d.vdBackgroundColor,
					// Logo.
					showLogo:_s._d.vdShowLogo ? 'yes' : 'no',
					logoPath:_s._d.vdLogoPath,
					hideLogoWithController:'yes',
					logoPosition:'topRight',
					logoLink:_s._d.vdLogoLink,
					logoMargins:5,
					// Controller.
					pushBtns:pushBtns,
					showControllerWhenVideoIsStopped:'no',
					showDefaultControllerForVimeo:_s._d.vdShowDefaultControllerForVimeo ? 'yes' : 'no',
					showScrubberWhenControllerIsHidden:_s._d.vdShowScrubberWhenControllerIsHidden ? 'yes' : 'no',
					showVolumeButton: showVolumeButton,
					showVolumeScrubber: showVolumeScrubber,
					showTime:_s._d.vdShowTime ? 'yes' : 'no',
					showRewindButton:_s._d.vdShowRewindButton ? 'yes' : 'no',
					showShareButton:"no",
					showEmbedButton:"no",
					showQualityButton:'no',
					showChromecastButton:'no',
					showFullScreenButton:showFSB_bl,
					showMainScrubberToolTipLabel:_s._d.vdShowScrubberToolTipLabel ? 'yes' : 'no',
					controllerHeight:42,
					controllerHideDelay:_s._d.vdButtonsHideDelay/1000,
					startSpaceBetweenButtons:startSpaceBetweenButtons,
					spaceBetweenButtons:5,
					mainScrubberOffestTop:13,
					scrubbersOffsetWidth:3,
					timeOffsetLeftWidth:9,
					timeOffsetRightWidth:6 ,
					volumeScrubberWidth:80,
					volumeScrubberOffsetRightWidth:0,
					timeColor:_s._d.vdTimeColor,
					youtubeQualityButtonNormalColor:"#FFF",
					youtubeQualityButtonSelectedColor:"#FFF",
					scrubbersToolTipLabelBackgroundColor:_s._d.vdScrubbersToolTipLabelBackgroundColor,
					scrubbersToolTipLabelFontColor:_s._d.vdScrubbersToolTipLabelFontColor,
					// Subtitles.
					showSubtitleButton:'no',
					startAtSubtitle:1,
					subtitlesSource:[{subtitlePath:_s.subtitleSrc, subtileLabel:"test"}],
					// Playback rate/speed.
					showPlaybackRateButton:_s._d.vdShowPlaybackRateButton ? 'yes' : 'no',
					defaultPlaybackRate:'1', //0.25, 0.5, 1, 1.25, 1.5, 2
					// Audio visualizer
					audioVisualizerLinesColor:_s._d.vdAudioVisualizerLinesColor,
					audioVisualizerCircleColor:_s._d.vdAudioVisualizerCircleColor,
					// Thumbnails preview.
					thumbnailsPreview:'auto',
					thumbnailsPreviewWidth:_s._d.vdThumbnailsPreviewWidth,
					thumbnailsPreviewBackgroundColor:_s._d.vdThumbnailsPreviewBackgroundColor,
					thumbnailsPreviewBorderColor:_s._d.vdThumbnailsPreviewBorderColor,
					thumbnailsPreviewLabelBackgroundColor:_s._d.vdThumbnailsPreviewLabelBackgroundColor,
					thumbnailsPreviewLabelFontColor:_s._d.vdThumbnailsPreviewLabelFontColor,
					// Ads.
					vastSource:_s.vdVastSrc,
					openNewPageAtTheEndOfTheAds:'no',
					adsButtonsPosition:'right',
					skipToVideoText:"",
					skipToVideoButtonText:"",
					adsTextNormalColor:'#B9B9B9',
					adsTextSelectedColor:'#FFFFFF',
					adsBorderNormalColor:'#2e2e2e',
					adsBorderSelectedColor:'#FFFFFF',
					// context menu
					contextMenuType:'disabled',
					// Password window.
					embedWindowCloseButtonMargins:15,
					borderColor:"#333333",
					mainLabelsColor:"#FFFFFF",
					secondaryLabelsColor:"#a1a1a1",
					shareAndEmbedTextColor:"#5a5a5a",
					inputBackgroundColor:"#000000",
					inputColor:"#FFFFFF"
				});
				
				// Register API.
				var api_it;
				registerAPI();
				function registerAPI(){
					clearTimeout(api_it);
					_s.evp = window[_s.instName + '_evp'];

					_s.evp.inIGPGrid = true;
					_s.evp.notShowLargePlayButton_bl = false;
					if(_s.evp){
						_s.evp.addListener(FWDEVPlayer.SHOW_CURSOR, _s.evpShowCursor);
						_s.evp.addListener(FWDEVPlayer.ERROR, _s.evpError);
						_s.evp.addListener(FWDEVPlayer.STOP, _s.evpStop);
						_s.evp.addListener(FWDEVPlayer.PAUSE, _s.evpPause);
						_s.evp.addListener(FWDEVPlayer.PLAY, _s.evpPlay);
						_s.evp.addListener(FWDEVPlayer.PLAY_START, _s.evpPlayStart);
						_s.evp.addListener(FWDEVPlayer.PLAY_COMPLETE, _s.evpPlayComplete);
						_s.evp.addListener(FWDEVPlayer.START_TO_SCRUB, _s.evpStartToSrub);
						_s.evp.addListener(FWDEVPlayer.STOP_TO_SCRUB, _s.evpStopToSrub);
						_s.evp.addListener(FWDEVPlayer.GO_FULLSCREEN, _s.evpFS);
						_s.evp.addListener(FWDEVPlayer.GO_NORMALSCREEN, _s.evpNS);
					}else{
						api_it = clearTimeout(api_it, 50);
					}
				};
			}else{
				//_s.evp.notShowPlayBtnExternal = false;
				var isPrivate = _s.password ? 'yes' : 'no';
				
		
				_s.evp.prevSrc = '';
				if(_s._d.vdUseKeyboard){
					_s.evp.addKeyboardSupport();
				}else{
					_s.evp.removeKeyboardSupport();
				}

				// Set subtitle.
				_s.evp._d.subtitles_ar[0]["source"] = _s.subtitleSrc;
				_s.evp._d.thumbnailsPreview = _s.thumbPreview;
		
				// Set source.
				_s.evp._d.privateVideoPassword_str = _s.password;
				if(_s.evp.passWindow_do) _s.evp.passWindow_do.hide(true)
				_s.evp.setVideoSource(_s.src, '', '','', _s.vdVastSrc, Boolean(_s.password));

				if(_s.nextVideoAutoPlay){
  					 _s.playAudio();
  					 if(_s.type != FWDU3DCar.AUDIO){
  					 	_s.slideshowButtonDO.pause();
  					 	_s.videoStarted = true;
  					 }
  				}
			}
		}

		_s.evpShowCursor = function(){
			if(_s._d.dragDirection != "none"){
				if(_s.evp.dClk_do){
					 _s.evp.dClk_do.style().cursor = 'url(' + _s._d.handIconPath + '), default';
					 if(_s.evp.isFullScreen_bl){
					 	_s.evp.dClk_do.style().cursor = 'auto';
					 }
				}
			}
		}

		_s.evpPause = function(){
			_s.dispatchEvent(FWDIGP.THUMB_VIDEO_PAUSE);
		}

		_s.evpError = function(e){
			_s._dLoadError(e)
		}
		
		_s._dLoadError = function(e){
			_s.main_do.addChild(_s.info_do);
			_s.info_do.showText(e.error);
			
			_s.videoStarted = false;
			if(_s.evp){
				_s.evp.goNormalScreen();
			}
			if(_s.thumbsManager_do){
				_s.thumbsManager_do.thumbWithVideo.showPlayButton();
				_s.thumbsManager_do.thumbWithVideo.removeVideo();
			}
			_s.dispatchEvent(FWDIGP.ERROR, {error:e.error});
		};

		_s.evpStop = function(){
			_s.videoStarted = false;
			_s.dispatchEvent(FWDIGP.THUMB_VIDEO_STOP);
		}

		_s.evpPlayStart = function(){
			_s.thumbsManager_do.setVisitedThumbnail(_s.evp.thumbSrc);
			_s.dispatchEvent(FWDIGP.THUMB_VIDEO_START);
		}

		_s.evpPlay = function(){
			_s.wasPlaying = true;
			_s.dispatchEvent(FWDIGP.THUMB_VIDEO_PLAY);
		};

		_s.evpPlayComplete = function(){
			if(!_s.evp) return;
			_s.videoStarted = false;
			_s.evp.goNormalScreen();
			_s.thumbsManager_do.thumbWithVideo.showPlayButton();
			_s.thumbsManager_do.thumbWithVideo.removeVideo();
			_s.thumbsManager_do.thumbWithVideo.hideCaption(true);

			if(_s.thumbsManager_do.thumbWithVideo.isHit && !_s.mobile_bl){
				_s.thumbsManager_do.thumbWithVideo.hideOverlay(false);
				_s.thumbsManager_do.thumbWithVideo.showOverlay(true);
				_s.thumbsManager_do.thumbWithVideo.showCaption();
				_s.thumbsManager_do.thumbWithVideo.isHit = false;
				_s.thumbsManager_do.thumbWithVideo.isCaptionHidden_bl = true;
			}else{
				_s.thumbsManager_do.thumbWithVideo.hideOverlay(false);
				_s.thumbsManager_do.thumbWithVideo.isCaptionHidden_bl = true;
			}
			_s.dispatchEvent(FWDIGP.THUMB_VIDEO_PLAY_COMPLETE);
		}

		_s.evpStartToSrub = function(){
			_s.thumbsManager_do.stopToLoop();
		}	

		_s.evpStopToSrub = function(){
			if(_s.evp.isFullScreen_bl) return;
			setTimeout(function(){
				_s.thumbsManager_do.startToLoop();
			}, 500);
		}

		_s.evpFS = function(){
			_s.isFullScreen_bl = true;
			if(_s.isMobile_bl){
				_s.thumbsManager_do.removeZoomDragAndSwipeForMobile();
			}else{
				_s.thumbsManager_do.removeDragAndScrollForDesktop();
				_s.thumbsManager_do.removeAutoScrollSupport(true);
				_s.thumbsManager_do.removeDesktopZoomSupport();
			}
			
			_s.evp.dClk_do.style().cursor = 'auto';
			_s.thumbsManager_do.stopToLoop();
			_s.stopResizeHandler();
			_s.dispatchEvent(FWDIGP.GO_FULLSCREEN);
		};

		_s.evpNS = function(e){
			_s.isFullScreen_bl = false;
			setTimeout(function(){
				if(_s.isMobile_bl){
					_s.thumbsManager_do.addZoomDragAndSwipeForMobile();
				}else{
					if(_s.thumbsManager_do.addDragAndSwipeSupport_bl) _s.thumbsManager_do.addDragAndScrollForDesktop();
					if(_s.thumbsManager_do.addZoomSupport_bl) _s.thumbsManager_do.addDesktopZoomSupport();
				}
				_s.thumbsManager_do.startToLoop();
				_s.startResizeHandler2();
			}, 50);
			_s.dispatchEvent(FWDIGP.GO_NORMALSCREEN);
		};


		// Setup preloader.
		_s.setupPreloader = function(){
			
			FWDIGPSP.setPrototype();
			_s.preloader_do = new FWDIGPSP(
				_s, 
				'center',
				_s._d.slideshowRadius, 
				_s._d.preloaderBackgroundColor, 
				_s._d.preloaderFillColor, 
				_s._d.slideshowStrokeSize, 
				1);
			_s.preloader_do.screen.className = 'none';
			_s.preloader_do.show(true);
			_s.preloader_do.startPreloader();
			
			_s.main_do.addChild(_s.preloader_do);
		};
		
		_s.positionPreloader = function(){
			if(_s.preloader_do){
				_s.preloader_do.positionAndResize();
			}
		};
		
		_s.onPreloaderHideCompleteHandler = function(){
			_s.main_do.removeChild(_s.preloader_do);
		};
		
		
		// Setup thumbs manager.
		_s.setupThumbsManager = function(id){	
			FWDIGPThumbsManager.setPrototype();
			_s.thumbsManager_do = new FWDIGPThumbsManager(_s._d, _s);
			_s.thumbsManager_do.addListener(FWDIGPThumb.MOUSE_UP, _s.onThumbMouseUpHandler);
			_s.thumbsManager_do.addListener(FWDIGPData.LOAD_ERROR, _s.onThumbsManagerLoadError);
			
			_s.main_do.addChild(_s.thumbsManager_do);
		};
		
		_s.onThumbsManagerLoadError = function(e){
			_s.main_do.addChild(_s.info_do);
			_s.info_do.showText(e.text);
		};
		
		_s.onThumbMouseUpHandler = function(e){
			if(!_s.rl) return;
			var rlObj = "fwdigp" + e.categoryId + '_';

			window[rlObj] = _s._d.lightboxAr[e.categoryId];
			_s.thumbsManager_do.stopToLoop();
			_s.rl.show(rlObj, e.id);
		};

		
		// Setup combobox.
		_s.setupComboBox = function(){
			FWDIGPComboBox.setPrototype();
			_s.comboBox_do = new FWDIGPComboBox(_s._d, _s);
			_s.comboBox_do.addListener(FWDIGPComboBox.MOUSE_UP, _s.onComboboxButtonPressedHandler);
			_s.main_do.addChild(_s.comboBox_do);
		};
		
		_s.onComboboxButtonPressedHandler = function(e){
			_s.updateCategory(e.id);
		};
		
	
		// Setup lightbox.
		_s.setupLightBox = function(){
			if(!_s._d.useLightbox_bl) return;

			var rlInst = FWDIGPUtils.getHashParam('rlinst');
			var isThisRL = rlInst ? rlInst.match(/fwdigp/) : false;
			if(rlInst) rlInst = rlInst.match(/\d+/g)[1];
			var guid = FWDIGPUtils.getHashParam('rlguid');
			var isThisGuid = guid ? guid.match(/fwdigp/) : false;
			if(!isThisGuid && _s._d.useDeepLinking) return;

			if(rlInst){
				if(guid && rlInst == _s.instCountId && isThisRL){
					_s.startAtGallery = guid.match(/\d+/g)[1];
					window["fwdigp" + _s.startAtGallery + '_'] = _s._d.lightboxAr[_s.startAtGallery];
					if(_s.comboBox_do) _s.comboBox_do.curId = _s.startAtGallery;
				}
			}else if(guid){
				if(isThisGuid){
					_s.startAtGallery = guid.match(/\d+/g)[0];
					window["fwdigp" + _s.startAtGallery + '_'] = _s._d.lightboxAr[_s.startAtGallery];
					if(_s.comboBox_do) _s.comboBox_do.curId = _s.startAtGallery;
				}
			}

			if(!FWDIGP.hasLoadRL && !window['FWDRL']){
				var script = document.createElement('script');
				script.src = _s._d.mainFolderPath + 'rl/java/FWDRL.js';
				document.head.appendChild(script);
				script.onerror = _s.rlLoadError;
				script.onload = _s.rlLoadDone;
			}

			_s.rl_it = setInterval(function(){
				if(FWDIGP.hasRL || window['FWDRL']){
					_s.initializeRL();
					clearInterval(_s.rl_it);
				}
			}, 5);

			FWDIGP.hasLoadRL = true;
		};

		_s.rlLoadDone = function(){
	 		FWDIGP.hasRL = true;
	 	}

	 	_s.initializeRL = function(){

	 		if(_s._d.useVideoInThumb_bl){
	 			FWDRL.hasLoadEVP = true;
	 		}
	 
	 		new FWDRL({	
				// General settings.
				instanceName:_s.instName + '_rl',
				mainFolderPath:_s.mainFolderPath + "/rl/content",
				cls:"rl",
				fontIcon:_s.fontIcon,
				rightClickContextMenu:_s._d.rightClickContextMenu,
				useDeepLinking:_s._d.rlUseDeepLinking,
				useVectorIcons:true,
				buttonsAlignment:_s._d.rlButtonsAlignment,
				mediaLazyLoading:_s._d.rlMediaLazyLoading,
				useDrag:_s._d.rlUseDrag,
				useAsModal:_s._d.rlUseAsModal,
				showSlideShowButton:_s._d.rlShowSlideShowButton,
				showSlideShowAnimation:_s._d.rlShowSlideShowAnimation,
				slideShowAutoPlay:_s._d.rlSlideShowAutoPlay,
				slideShowAutoStop:_s._d.rlSlideShowAutoStop,
				slideShowDelay:_s._d.rlSlideShowDelay,
				slideShowBkColor:_s._d.rlSlideShowBkColor,
				slideShowFillColor:_s._d.rlSlideShowFillColor,
				useKeyboard:_s._d.rlUseKeyboard,
				useDoubleClick:_s._d.rlUseDoubleClick,
				showCloseButton:_s._d.rlShowCloseButton,
				showFullscreenButton:_s._d.rlShowFullscreenButton,
				showZoomButton:_s._d.rlShowZoomButton,
				showCounter:_s._d.rlShowCounter,
				showNextAndPrevBtns:_s._d.rlShowNextAndPrevBtns,
				maxZoom:_s._d.rlMaxZoom,
				buttonsHideDelay:_s._d.rlButtonsHideDelay,
				defaultItemWidth:_s._d.rlDefaultItemWidth,
				defaultItemHeight:_s._d.rlDefaultItemHeight,
				itemOffsetHeight:_s._d.rlItemOffsetHeight,
				itemOffsetHeightButtonsTop:_s._d.rlItemOffsetHeightButtonsTop,
				spaceBetweenBtns:_s._d.rlSpaceBetweenBtns,
				buttonsOffsetIn:_s._d.rlButtonsOffsetIn,
				buttonsOffsetOut:_s._d.rlButtonsOffsetOut,
				itemBorderSize:_s._d.rlItemBorderSize,
				startSpaceBetweenButtons: 2,
				itemBackgroundColor:_s._d.rlItemBackgroundColor,
				itemBorderColor:_s._d.rlItemBorderColor,
				preloaderBkColor:_s._d.rlPreloaderBkColor,
				preloaderFillColor:_s._d.rlPreloaderFillColor,
				backgroundColor:_s._d.rlBackgroundColor,
				shareButtons:_s._d.rlShareButtons,
				shareText:_s._d.rlShareText,
				sharedURL:_s._d.rlSharedURL,
				shareMainBackgroundColor:_s._d.rlShareMainBackgroundColor,
				shareBackgroundColor:_s._d.rlShareBackgroundColor,
				showThumbnails:_s._d.rlShowThumbnails,
				showThumbnailsIcon:_s._d.rlShowThumbnailsIcon,
				thumbnailsHeight:_s._d.rlThumbnailsHeight,
				thumbnailsOverlayColor:_s._d.rlThumbnailsOverlayColor,
				thumbnailsBorderSize:_s._d.rlThumbnailsBorderSize,
				thumbnailsBorderColor:_s._d.rlThumbnailsBorderColor,
				spaceBetweenThumbnailsAndItem:_s._d.rlSpaceBetweenThumbnailsAndItem,
				thumbnailsOffsetBottom:_s._d.rlThumbnailsOffsetBottom,
				spaceBetweenThumbnails:_s._d.rlSpaceBetweenThumbnails,
				caption:_s._d.rlShowCaption,
				captionPosition:_s._d.rlCaptionPosition,
				showCaptionOnSmallScreens:_s._d.rlShowCaptionOnSmallScreens,
				captionAnimationType:_s._d.rlCaptionAnimationType,
				useVideo:_s._d.rlUseVideo,
				fillEntireScreenWithPoster:_s._d.rlFillEntireScreenWithPoster,
				fillEntireVideoScreen:_s._d.rlFillEntireVideoScreen,
				volume:_s._d.rlVolume,
				videoAutoPlay:_s._d.rlVideoAutoPlay,
				nextVideoAutoPlay:_s._d.rlNextVideoAutoPlay,
				videoAutoPlayText:_s._d.rlVideoAutoPlayText,
				showLogo:_s._d.rlShowLogo,
				logoPath:_s._d.rlLogoPath,
				logoLink:_s._d.rlLogoLink,
				showControllerWhenVideoIsStopped:_s._d.rlShowControllerWhenVideoIsStopped,
				showDefaultControllerForVimeo:_s._d.rlShowDefaultControllerForVimeo,
				showScrubberWhenControllerIsHidden:_s._d.rlShowScrubberWhenControllerIsHidden,
				showRewindButton:_s._d.rlShowRewindButton,
				showVolumeButton:_s._d.rlShowVolumeButton,
				showTime:_s._d.rlShowTime,
				timeColor:_s._d.rlTimeColor,
				showChromecastButton:_s._d.rlShowChromecastButton,
				showPlaybackRateButton:_s._d.rlShowPlaybackRateButton,
				showQualityButton:_s._d.rlShowQualityButton,
				showFullScreenButton:_s._d.rlVideoShowFullScreenButton_bl,
				showScrubberToolTipLabel:_s._d.rlShowScrubberToolTipLabel,
				youtubeQualityButtonNormalColor:_s._d.rlYoutubeQualityButtonNormalColor,
				youtubeQualityButtonSelectedColor:_s._d.rlYoutubeQualityButtonSelectedColor,
				scrubbersToolTipLabelBackgroundColor:_s._d.rlScrubbersToolTipLabelBackgroundColor,
				scrubbersToolTipLabelFontColor:_s._d.rlScrubbersToolTipLabelFontColor,
				audioVisualizerLinesColor:_s._d.rlAudioVisualizerLinesColor,
				audioVisualizerCircleColor:_s._d.rlAudioVisualizerCircleColor,
				thumbnailsPreviewWidth:_s._d.rlThumbnailsPreviewWidth,
				thumbnailsPreviewBackgroundColor:_s._d.rlThumbnailsPreviewBackgroundColor,
				thumbnailsPreviewBorderColor:_s._d.rlThumbnailsPreviewBorderColor,
				thumbnailsPreviewLabelBackgroundColor:_s._d.rlThumbnailsPreviewLabelBackgroundColor,
				thumbnailsPreviewLabelFontColor:_s._d.rlThumbnailsPreviewLabelFontColor,
				skipToVideoText:_s._d.rlSkipToVideoText,
				skipToVideoButtonText:_s._d.rlSkipToVideoButtonText
			});
			
	 		_s.rl = window[_s.instName + '_rl'];
	 		
	 		_s.rl.addListener(FWDRL.SHOW_START, function(){
	 			if(_s.evp){
	 				_s.isEvpPlaying = _s.evp.isPlaying_bl;
	 				_s.isEvpKeyboardSUpported_bl = _s.evp._d.addKeyboardSupport_bl;
	 				_s.evp._d.addKeyboardSupport_bl = false;
	 				_s.evp.pause();
	 			}

	 			FWDIGP.rlShowed = true;
	 			_s.dispatchEvent(FWDIGP.LIGHTBOX_SHOW_START);
	 			if(_s.evp) _s.evp.pause();
	 		});

	 		_s.rl.addListener(FWDRL.SHOW_COMPLETE, function(){
	 			_s.dispatchEvent(FWDIGP.LIGHTBOX_SHOW_COMPLETE);
	 		});

	 		_s.rl.addListener(FWDRL.HIDE_START, function(){
	 			_s.dispatchEvent(FWDIGP.LIGHTBOX_HIDE_START);
	 		});

	 		_s.rl.addListener(FWDRL.HIDE_COMPLETE, function(){
	 			FWDIGP.rlShowed = false;
	 			if(_s.evp){
	 				if(_s.isEvpPlaying){
	 					_s.evp.play();
	 				}
	 				_s.evp._d.addKeyboardSupport_bl = _s.isEvpKeyboardSUpported_bl;
	 			}
	 			_s.thumbsManager_do.startToLoop();
				_s.dispatchEvent(FWDIGP.LIGHTBOX_HIDE_COMPLETE);
	 		});

	 		_s.rl.addListener(FWDRL.UPDATE_ITEM, function(e){	
	 			_s.thumbsManager_do.setVisitedThumbnail(_s._d.lightboxAr[_s.categoryId].playlistItems[e.curId].thumbSrc);
	 		});
	 	}
				
		
		// API.
		_s.updateCategory = function(id, overwrite){
			
			if(!_s.isReady_bl || _s.thumbsManager_do.isCategoryChanging_bl || _s.categoryId == id) return;
				
			_s.categoryId = id;
			if(_s.categoryId >= _s._d.totalGalleries){
				_s.categoryId = _s._d.totalGalleries -1;
			}else if(_s.categoryId < 0){
				_s.categoryId = 0;
			}

			_s.isEvpPlaying = false;
			if(_s.comboBox_do) _s.comboBox_do.setButtons(_s.categoryId);
			
			_s.thumbsManager_do.updateCategory(_s._d.dataListAr[_s.categoryId]);

			setTimeout(function(){_s.dispatchEvent(FWDIGP.CATEGORY_UPDATE);}, 50);
		};
		
		_s.getCategoryId = function(){
			return _s.categoryId;
		};
		
		_s.getCategoryName = function(id){
			if(id === undefined) id = _s.categoryId;
			return _s._d.categoriesAr[id];
		};
	
		
		// Event dispatcher.
		_s.addListener = function (type, listener){
		    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = _s;
	        _s.listeners.events_ar.push(event);
	    };
		    
	    _s.dispatchEvent = function(type, props){
	    	if(_s.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s && _s.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		_s.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		_s.listeners.events_ar[i].listener.call(_s, _s.listeners.events_ar[i]);
	        	}
	        }
		    };
		    
		   _s.removeListener = function(type, listener){
		    	
		    	if(type == undefined) throw Error("type is required.");
		    	if(typeof type === "object") throw Error("type must be of type String.");
		    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
		    	
		        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
		        	if(_s.listeners.events_ar[i].target === _s 
		        			&& _s.listeners.events_ar[i].type === type
		        			&& _s.listeners.events_ar[i].listener ===  listener
		        	){
		        		_s.listeners.events_ar.splice(i,1);
		        		break;
		        	}
		        }  
		    };
		
		// Initialize.
		_s.init();
	};
	
	
	FWDIGP.THUMB_VIDEO_STOP ="thumbVideoStop";
	FWDIGP.THUMB_VIDEO_START ="thumbVideoStart";
	FWDIGP.THUMB_VIDEO_PAUSE ="thumbVideoPause";
	FWDIGP.THUMB_VIDEO_PLAY = "thumbVideoPlay";
	FWDIGP.THUMB_VIDEO_PLAY_COMPLETE = "thumbVideoPlayComplete";
	FWDIGP.GO_FULLSCREEN = "goFullScreen";
	FWDIGP.GO_NORMALSCREEN = "goNormalScreen";
	FWDIGP.ERROR = "error";
	FWDIGP.READY = "ready";
	FWDIGP.VIDEO_IN_THUMB = "videoInThumb";
	FWDIGP.LIGHTBOX_SHOW_START = "showStart";
	FWDIGP.LIGHTBOX_SHOW_COMPLETE = "showComplete";
	FWDIGP.LIGHTBOX_HIDE_START = "hideStart";
	FWDIGP.LIGHTBOX_HIDE_COMPLETE = "hideComplete";
	FWDIGP.CATEGORY_UPDATE = "categoryUpdate";
	FWDIGP.FULL_SCREEN = "fullscreen";
	FWDIGP.LIGHTBOX = "lightbox";
	FWDIGP.RESPONSIVE = "responsive";
	FWDIGP.FLUID_WIDTH = "fluidwidth";
	FWDIGP.FLUID_WIDTH_AND_HEIGHT = "fluidwidthandheight"
	FWDIGP.AFTER_PARENT = "afterparent";
	FWDIGP.IFRAME = "iframe";
	FWDIGP.IMAGE = "image";
	FWDIGP.FLASH = "flash";
	FWDIGP.AUDIO = "audio";
	FWDIGP.VIDEO = "video";
	FWDIGP.VIMEO = "vimeo";
	FWDIGP.YOUTUBE = "youtube";
	FWDIGP.MAPS = "maps";
	FWDIGP.LINK = "link";
	FWDIGP.NONE = "none";
	
	
	window.FWDIGP = FWDIGP;
	
}(window));