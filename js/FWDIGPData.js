/**
 * Infinite Grid Pro PACKAGED v3.0
 * Grid Data.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function(window){

	'use strict';

	var FWDIGPData = function(prt){
		
		var _s = this;
		var prototype = FWDIGPData.prototype;
	
		_s.props = prt.props;
		_s.rootElement_el = null;
		_s.graphicsPaths_ar = [];
		_s.skinPaths_ar = [];
		_s.playlist_ar = [];
		_s.imagesAr = [];
		_s.dataListAr = [];
		_s.categoriesAr = [];
		_s.lightboxAr = [];
		
		
		// Initialize.
		_s.init = function(){
			_s.parseDelayId_to = setTimeout(_s.parseProperties, 100);
		};

		
		// Parse properties.
		_s.parseProperties = function(){
			var errorMessage;
			var mediaKid;
			
			_s.isMobile_bl = FWDIGPUtils.isMobile;
			_s.mainFolderPath = prt.mainFolderPath;
			_s.skinPath = _s.mainFolderPath + "skin/";
			_s.warningIconPath = _s.skinPath + "/warning.png"
			_s.lightboxSkinPath = _s.skinPath;
		

			// Set main properties.
			_s.rightClickContextMenu = _s.props.rightClickContextMenu || "developer";
			var test = _s.rightClickContextMenu == "developer" 
				   || _s.rightClickContextMenu == "disabled"
				   || _s.rightClickContextMenu == "default";
			if(!test) _s.rightClickContextMenu = "developer";
			_s.handIconPath = _s.skinPath + "hand.cur";
			_s.grabIconPath = _s.skinPath + "grab.cur";
			
			_s.dragDirection = _s.props.dragDirection || "both";
			test = _s.dragDirection == "horizontal" 
				   || _s.dragDirection == "vertical"
				   || _s.dragDirection == "both"
				   || _s.dragDirection == "none";
			if(!test) _s.dragDirection = "both";
			
			_s.autoScrollDirection = _s.props.autoScrollDirection || "down";
			test = _s.autoScrollDirection.toLowerCase() == "down" 
				   || _s.autoScrollDirection.toLowerCase() == "up"
				   || _s.autoScrollDirection.toLowerCase() == "left"
				   || _s.autoScrollDirection.toLowerCase() == "right";
			if(!test) _s.dragDirection = "down";
			
			_s.menuPosition = _s.props.menuPosition || "topright";
			_s.menuPosition = _s.menuPosition.toLowerCase();
			test = _s.menuPosition.toLowerCase() == "topright" 
				   || _s.menuPosition.toLowerCase() == "topleft";
			if(!test) _s.menuPosition = "topright";
			
			_s.thumbnailTransitionType = _s.props.thumbnailTransitionType || "opacity";
			test = _s.thumbnailTransitionType.toLowerCase() == "opacity" 
				   || _s.thumbnailTransitionType.toLowerCase() == "motion";
			if(!test) _s.thumbnailTransitionType = "opacity";
		
			_s.galleriesMenuSelectLabel  = _s.props.galleriesMenuSelectLabel || "not defined!";
			_s.allGalleriesMenuLabel = _s.props.allGalleriesMenuLabel || "not defined";
			
			_s.buttonBackgroundNormalColor = _s.props.buttonBackgroundNormalColor;
			_s.buttonBackgroundSelectedColor = _s.props.buttonBackgroundSelectedColor;
			_s.buttonTextNormalColor = _s.props.buttonTextNormalColor;
			_s.buttonTextSelectedColor = _s.props.buttonTextSelectedColor;
			_s.comboBoxShadowColor = _s.props.comboBoxShadowColor || "#000000";

			_s.slideshowRadius = _s.props.slideshowRadius || 10;
			_s.slideshowBackgroundColor = _s.props.slideshowBackgroundColor || '#FF0000';
			_s.slideshowFillColor = _s.props.slideshowFillColor || '#FFFFFF';
			_s.slideshowStrokeSize = _s.props.slideshowStrokeSize || 4;

			_s.preloaderBackgroundColor = _s.props.preloaderBackgroundColor || '#2e2e2e';
			_s.preloaderFillColor = _s.props.preloaderFillColor || '#FFFFFF';
		
		
			_s.minScale = _s.props.minScale || 1;
			if(_s.minScale < .6) _s.minScale = .6;
			_s.maxScale = _s.props.maxScale || 1;
			if(_s.maxScale > 4) _s.maxScale = 4;
			_s.scaleIncrement = _s.props.scaleIncrement || .1;
			_s.thumbnailMaxWidth = _s.props.thumbnailMaxWidth || 280;
			if(_s.thumbnailMaxWidth < 20) _s.thumbnailMaxWidth = 20;
			_s.thumbnailMaxHeight = _s.props.thumbnailMaxHeight || 240;
			if(_s.thumbnailMaxHeight < 20) _s.thumbnailMaxHeight = 20;
			_s.backgroundColor = _s.props.backgroundColor || "transparent";
			_s.thumbnailBackgroundColor = _s.props.thumbnailBackgroundColor || "transparent";
			_s.thumbOverlayBackgroundColor = _s.props.thumbnailOverlayColor || "transparent";
			_s.thumbnailOverlayOpacity = _s.props.thumbnailOverlayOpacity ;
			if(_s.thumbnailOverlayOpacity === undefined) _s.thumbnailOverlayOpacity = .4;
			_s.lightBoxInfoWindowBackgroundColor =  _s.props.lightBoxInfoWindowBackgroundColor || "transparent";
			_s.lightBoxBackgroundColor = _s.props.lightBoxBackgroundColor || "transparent";
			_s.lightBoxInfoWindowBackgroundOpacity =  _s.props.lightBoxInfoWindowBackgroundOpacity || 1;
			_s.lightBoxBackgroundOpacity = _s.props.lightBoxInfoWindowBackgroundOpacity || 1;
			_s.lightBoxMainBackgroundOpacity = _s.props.lightBoxMainBackgroundOpacity || 1;
			_s.lightBoxItemBorderColor = _s.props.lightBoxItemBorderColor || "transparent";
			_s.lightBoxItemBackgroundColor = _s.props.lightBoxItemBackgroundColor || "transparent";
			_s.lightBoxBorderSize = _s.props.lightBoxBorderSize || 0;
			_s.lightBoxSlideShowDelay = _s.props.lightBoxSlideShowDelay * 1000 || 3000;
			_s.menuCornerRadius = _s.props.menuCornerRadius || 0;
			_s.menuVerticalMargins = _s.props.menuVerticalMargins || 0;
			_s.comboBoxCornerRadius = _s.props.comboBoxCornerRadius || 0;
			_s.startSpaceBetweenButtons = _s.props.startSpaceBetweenButtons || 7;
			_s.videoSpaceBetweenButtons = _s.props.videoSpaceBetweenButtons || 9;
			_s.startAtGallery = parseInt(_s.props.startAtGallery);
			_s.buttonsHideDelay = _s.props.buttonsHideDelay;
			_s.slideShowDelay = _s.props.slideShowDelay;
			_s.defaultItemWidth = _s.props.defaultItemWidth;
			_s.defaultItemHeight = _s.props.defaultItemHeight;
			_s.itemOffsetHeight = _s.props.itemOffsetHeight;
			_s.spaceBetweenButtons = _s.props.spaceBetweenButtons;
			_s.buttonsOffsetIn = _s.props.buttonsOffsetIn;
			_s.buttonsOffsetOut = _s.props.buttonsOffsetOut;
			_s.itemBorderSize = _s.props.itemBorderSize;
			_s.itemBorderRadius = _s.props.itemBorderRadius;
			_s.backgroundOpacity = _s.props.backgroundOpacity;
			_s.autoScrollSpeed = _s.props.autoScrollSpeed || 1;
			_s.videoControllerHeight = _s.props.videoControllerHeight || 50;
			_s.preset = _s.props.preset;
			_s.hT = _s.props.helpScreenCloseButtonText || 'Got it!';
		
			_s.addZoomSupport_bl = _s.props.addZoomSupport;
			_s.addZoomSupport_bl = _s.addZoomSupport_bl == "yes" ? true : false;

			_s.useLightbox_bl = _s.props.useLightbox;
			_s.useLightbox_bl = _s.useLightbox_bl == "yes" ? true : false;
			
			_s.addDragAndSwipeSupport_bl = _s.props.addDragAndSwipeSupport;
			_s.addDragAndSwipeSupport_bl = _s.addDragAndSwipeSupport_bl == "yes" ? true : false;
			
			_s.disableThumbnailsInteractivity_bl = _s.props.disableThumbnailsInteractivity;
			_s.disableThumbnailsInteractivity_bl = _s.disableThumbnailsInteractivity_bl == "yes" ? true : false;
	
			_s.showThumbnailOverlay_bl = _s.props.showThumbnailOverlay; 
			_s.showThumbnailOverlay_bl = _s.showThumbnailOverlay_bl == "no" ? false : true;
			
			_s.showThumbnailIcon_bl = _s.props.showThumbnailIcon; 
			_s.showThumbnailIcon_bl = _s.showThumbnailIcon_bl == "no" ? false : true;

			_s.openOnSingleTouch_bl = _s.props.openOnSingleTouch; 
			_s.openOnSingleTouch_bl = _s.openOnSingleTouch_bl == "no" ? false : true;
			if(!_s.isMobile_bl) _s.openOnSingleTouch_bl = false;

			_s.showHelpScreen_bl = _s.props.showHelpScreen; 
			_s.showHelpScreen_bl = _s.showHelpScreen_bl == "no" ? false : true;
			
			_s.addLightBoxKeyboardSupport_bl = _s.props.addLightBoxKeyboardSupport; 
			_s.addLightBoxKeyboardSupport_bl = _s.addLightBoxKeyboardSupport_bl == "no" ? false : true;
			
			_s.showLighBoxNextAndPrevButtons_bl = _s.props.showLightBoxNextAndPrevButtons; 
			_s.showLighBoxNextAndPrevButtons_bl = _s.showLighBoxNextAndPrevButtons_bl == "no" ? false : true;
			
			_s.showLightBoxZoomButton_bl = _s.props.showLightBoxZoomButton; 
			_s.showLightBoxZoomButton_bl = _s.showLightBoxZoomButton_bl == "no" ? false : true;
			
			_s.showLightBoxInfoButton_bl = _s.props.showLightBoxInfoButton;
			_s.showLightBoxInfoButton_bl = _s.showLightBoxInfoButton_bl == "no" ? false : true;
			
			_s.showLighBoxSlideShowButton_bl =  _s.props.showLighBoxSlideShowButton;
			_s.showLighBoxSlideShowButton_bl =  _s.showLighBoxSlideShowButton_bl == "no" ? false : true;
		
			_s.disableThumbnailInteractivity_bl = _s.props.disableThumbnailInteractivity;
			_s.disableThumbnailInteractivity_bl = _s.disableThumbnailInteractivity_bl == "yes" ? true : false;
			
			_s.autoScroll_bl = _s.props.autoScroll;
			_s.autoScroll_bl = _s.autoScroll_bl == "yes" ? true : false;
			
			_s.showAllGalleries = _s.props.showAllGalleries;
			_s.showAllGalleries = _s.showAllGalleries == "yes" ? true : false;
			
			_s.keepThumbnailsOriginalSizeOnGridStart_bl = _s.props.keepThumbnailsOriginalSizeOnGridStart;
			_s.keepThumbnailsOriginalSizeOnGridStart_bl = _s.keepThumbnailsOriginalSizeOnGridStart_bl == "yes" ? true : false;

			_s.showLookScrollButton_bl = _s.props.showLookScrollButton;
			_s.showLookScrollButton_bl = _s.showLookScrollButton_bl == "yes" ? true : false;

			if(!_s.addZoomSupport_bl && !_s.addDragAndSwipeSupport_bl){
				_s.showLookScrollButton_bl = false;
			}
			
			
			_s.enableVisitedThumbnails_bl = _s.props.enableVisitedThumbnails;
			_s.enableVisitedThumbnails_bl = _s.enableVisitedThumbnails_bl == "yes" ? true : false;  

			if(_s.enableVisitedThumbnails_bl) _s.showThumbnailOverlay_bl = true;

			_s.visitedThumbnailsOverlayOpacity = _s.props.visitedThumbnailsOverlayOpacity || .3;
			
			if(_s.addZoomSupport_bl && _s.addDragAndSwipeSupport_bl && !FWDIGPUtils.isIEAndLessThen9 && _s.showHelpScreen_bl){
				
				_s.helpScreenPath = "move-zoom.png";
				
			}else if(_s.addZoomSupport_bl && !FWDIGPUtils.isIEAndLessThen9 && _s.showHelpScreen_bl){
				if(_s.isMobile_bl){
					_s.helpScreenPath = "zoom-mobile.png";
				}else{
					_s.helpScreenPath = "zoom.png";
				}
			}else if(_s.addDragAndSwipeSupport_bl && _s.showHelpScreen_bl){
				_s.helpScreenPath = "move.png";
			}else{
				_s.showHelpScreen_bl = false;
			}
			
			_s.randomizeCategories_bl = _s.props.randomizeGalleries;
			_s.randomizeCategories_bl = _s.randomizeCategories_bl == "yes" ? true : false;
			
			_s.showGalleriesMenu = _s.props.showGalleriesMenu;
			_s.showGalleriesMenu = _s.showGalleriesMenu == "yes" ? true : false;

			_s.showCaption_bl = _s.props.showCaption;
			_s.showCaption_bl =_s.showCaption_bl == "yes" ? true : false;

			_s.showCaptionOnThumbVideo_bl = _s.props.showCaptionOnThumbVideo;
			_s.showCaptionOnThumbVideo_bl = _s.showCaptionOnThumbVideo_bl == "yes" ? true : false;


			// Thumbnail video player.
			_s.vdPreloaderBkColor = _s.props.vdPreloaderBkColor || '#2e2e2e';
			_s.vdPreloaderFillColor = _s.props.vdPreloaderFillColor || '#FFFFFF';
			_s.vdFillEntireVideoScreen = _s.props.vdFillEntireVideoScreen == "yes" ? true : false;
			_s.vdUseKeyboard = _s.props.vdUseKeyboard == "yes" ? true : false;
			_s.props.vdVideoAutoPlay == "yes" ? true : false;
			_s.vdVolume = _s.props.vdVolume;
			if(_s.vdVolume === undefined) _s.vdVolume = 1;
			_s.vdBackgroundColor = _s.props.vdBackgroundColor || '#000000';
			_s.vdShowLogo = _s.props.vdShowLogo == "yes" ? true : false;
			_s.vdLogoPath = _s.props.vdLogoPath || "";
			_s.vdLogoLink = _s.props.vdLogoLink || '';
			_s.vdAddKeyboardSupport = _s.props.vdAddKeyboardSupport == "yes" ? true : false;
			
			_s.vdShowScrubberWhenControllerIsHidden = _s.props.vdShowScrubberWhenControllerIsHidden == "yes" ? true : false;
			_s.vdShowVolumeButton = _s.props.vdShowVolumeButton == "yes" ? true : false;
			_s.vdShowVolumeScrubber = _s.props.vdShowVolumeScrubber == "yes" ? true : false;
			_s.vdShowTime = _s.props.vdShowTime == "yes" ? true : false;
			_s.vdShowRewindButton = _s.props.vdShowRewindButton == "yes" ? true : false;
			_s.vdShowChromecastButton = _s.props.vdShowChromecastButton == "yes" ? true : false;
			_s.vdShowFullScreenButton = _s.props.vdShowFullScreenButton == "yes" ? true : false;
			_s.vdShowScrubberToolTipLabel = _s.props.vdShowScrubberToolTipLabel == "yes" ? true : false;
			_s.rlVideoShowFullScreenButton_bl = _s.props.rlVideoShowFullScreenButton == "yes" ? true : false;

			_s.vdTimeColor = _s.props.vdTimeColor || '#B9B9B9';
			_s.vdScrubbersToolTipLabelBackgroundColor = _s.props.vdScrubbersToolTipLabelBackgroundColor || '#FFFFFF';
			_s.vdScrubbersToolTipLabelFontColor = _s.props.vdScrubbersToolTipLabelFontColor || '#5a5a5a';
			_s.vdButtonsHideDelay = _s.props.vdButtonsHideDelay || 5;
			_s.vdButtonsHideDelay = _s.vdButtonsHideDelay * 1000;
			_s.vdShowPlaybackRateButton = _s.props.vdShowPlaybackRateButton == "yes" ? true : false;
			_s.vdAudioVisualizerLinesColor = _s.props.vdAudioVisualizerLinesColor || '#570AB8';
			_s.vdAudioVisualizerCircleColor = _s.props.vdAudioVisualizerCircleColor || '#b9b9b9';
			_s.vdThumbnailsPreviewLabelBackgroundColor = _s.props.vdThumbnailsPreviewLabelBackgroundColor || "#414141";
			_s.vdThumbnailsPreviewWidth = _s.props.vdThumbnailsPreviewWidth || 196;
			_s.vdThumbnailsPreviewBackgroundColor = _s.props.vdThumbnailsPreviewBackgroundColor || "#2e2e2e";
			_s.vdThumbnailsPreviewBorderColor = _s.props.vdThumbnailsPreviewBorderColor || "#414141";
			_s.vdThumbnailsPreviewLabelFontColor = _s.props.vdThumbnailsPreviewLabelFontColor || "#CCCCCC";

			// Lightbox.
			_s.rlUseDeepLinking = _s.props.rlUseDeepLinking == "yes" ? true : false;
			_s.rlButtonsAlignment = _s.props.rlButtonsAlignment;
			_s.rlMediaLazyLoading = _s.props.rlMediaLazyLoading == "yes" ? true : false;
			_s.rlUseDrag = _s.props.rlUseDrag == "yes" ? true : false;
			_s.rlUseAsModal = _s.props.rlUseAsModal == "yes" ? true : false;
			_s.rlShowSlideShowButton = _s.props.rlShowSlideShowButton == "yes" ? true : false;
			_s.rlShowSlideShowAnimation = _s.props.rlShowSlideShowAnimation == "yes" ? true : false;
			_s.rlSlideShowAutoPlay = _s.props.rlSlideShowAutoPlay == "yes" ? true : false;
			_s.rlSlideShowAutoStop = _s.props.rlSlideShowAutoStop == "yes" ? true : false;
			_s.rlSlideShowDelay = _s.props.rlSlideShowDelay || 6;
			_s.rlSlideShowBkColor = _s.props.rlSlideShowBkColor || '#2e2e2e';
			_s.rlSlideShowFillColor = _s.props.rlSlideShowFillColor || '#FFFFFF';
			_s.rlUseKeyboard = _s.props.rlUseKeyboard == "yes" ? true : false;
			_s.rlUseDoubleClick = _s.props.rlUseDoubleClick == "yes" ? true : false;
			_s.rlShowCloseButton = _s.props.rlShowCloseButton == "yes" ? true : false;
			_s.rlShowFullscreenButton = _s.props.rlShowFullscreenButton == "yes" ? true : false;
			_s.rlShowZoomButton = _s.props.rlShowZoomButton == "yes" ? true : false;
			_s.rlShowCounter = _s.props.rlShowCounter == "yes" ? true : false;
			_s.rlShowNextAndPrevBtns = _s.props.rlShowNextAndPrevBtns == "yes" ? true : false;
			_s.rlMaxZoom = _s.props.rlMaxZoom || 6;
			_s.rlButtonsHideDelay = _s.props.rlButtonsHideDelay || 5;
			_s.rlDefaultItemWidth = _s.props.rlDefaultItemWidth || 1527;
			_s.rlDefaultItemHeight = _s.props.rlDefaultItemHeight || 859;
			_s.rlItemOffsetHeight = _s.props.rlItemOffsetHeight || 37;
			_s.rlItemOffsetHeightButtonsTop = _s.props.rlItemOffsetHeightButtonsTop || 47;
			_s.rlSpaceBetweenBtns = _s.props.rlSpaceBetweenBtns || 8;
			_s.rlButtonsOffsetIn = _s.props.rlButtonsOffsetIn || 10;
			_s.rlButtonsOffsetOut = _s.props.rlButtonsOffsetOut || 10;
			_s.rlItemBorderSize = _s.props.rlItemBorderSize || 0;
			_s.rlItemBackgroundColor = _s.props.rlItemBackgroundColor || '#212121';
			_s.rlItemBorderColor = _s.props.rlItemBorderColor || '#FFFFFF';
			_s.rlPreloaderBkColor = _s.props.rlPreloaderBkColor || '#2e2e2e';
			_s.rlPreloaderFillColor = _s.props.rlPreloaderFillColor || '#FFFFFF';
			_s.rlBackgroundColor = _s.props.rlBackgroundColor || 'rgba(0,0,0,.99)';
			_s.rlShareButtons = _s.props.rlShareButtons || ['facebook', 'twitter', 'linkedin', 'tumblr', 'pinterest', 'reddit', 'buffer', 'digg','blogger'];
			_s.rlShareText = _s.props.rlShareText || 'Share on';
			_s.rlSharedURL = _s.props.rlSharedURL || 'deeplink';
			_s.rlShareMainBackgroundColor = _s.props.rlShareMainBackgroundColor || 'rgba(0,0,0,.4)';
			_s.rlShareBackgroundColor = _s.props.rlShareBackgroundColor || '#FFFFFF';
			_s.rlShowThumbnails = _s.props.rlShowThumbnails == "yes" ? true : false;
			_s.rlShowThumbnailsIcon = _s.props.rlShowThumbnailsIcon == "yes" ? true : false;
			_s.rlThumbnailsHeight = _s.props.rlThumbnailsHeight || 80;
			_s.rlThumbnailsOverlayColor = _s.props.rlThumbnailsOverlayColor || 'rgba(0,0,0,.4)';
			_s.rlThumbnailsBorderSize = _s.props.rlThumbnailsBorderSize;
			if(_s.rlThumbnailsBorderSize ==  undefined) _s.rlThumbnailsBorderSize = 2;
			_s.rlThumbnailsBorderColor = _s.props.rlThumbnailsBorderColor || '#FFFFFF';
			_s.rlSpaceBetweenThumbnailsAndItem = _s.props.rlSpaceBetweenThumbnailsAndItem;
			if(_s.rlSpaceBetweenThumbnailsAndItem ==  undefined) _s.rlSpaceBetweenThumbnailsAndItem = 10;
			_s.rlThumbnailsOffsetBottom = _s.props.rlThumbnailsOffsetBottom;
			if(_s.rlThumbnailsOffsetBottom ==  undefined) _s.rlThumbnailsOffsetBottom = 10;
			_s.rlSpaceBetweenThumbnails = _s.props.rlSpaceBetweenThumbnails;
			if(_s.rlSpaceBetweenThumbnails ==  undefined) _s.rlSpaceBetweenThumbnails = 5;
			_s.rlShowCaption = _s.props.rlShowCaption == "yes" ? true : false;
			_s.rlCaptionPosition = _s.props.rlCaptionPosition || 'bottomout';
			_s.rlShowCaptionOnSmallScreens = _s.props.rlShowCaptionOnSmallScreens == "yes" ? true : false;
			_s.rlCaptionAnimationType = _s.props.rlCaptionAnimationType || 'motion';
			_s.rlUseVideo = _s.props.rlUseVideo == "yes" ? true : false;
			_s.rlFillEntireVideoScreen = _s.props.rlFillEntireVideoScreen == "yes" ? true : false;
			_s.rlFillEntireScreenWithPoster = _s.props.rlFillEntireScreenWithPoster == "yes" ? true : false;
			_s.rlVolume = _s.props.rlVolume;
			if(_s.rlVolume === undefined) _s.rlVolume = 1;
			_s.rlVideoAutoPlay = _s.props.rlVideoAutoPlay == "yes" ? true : false;
			_s.rlNextVideoAutoPlay = _s.props.rlNextVideoAutoPlay == "yes" ? true : false;
			_s.rlVideoAutoPlayText = _s.props.rlVideoAutoPlayText || 'Click to unmute';
			_s.rlShowLogo = _s.props.rlShowLogo == "yes" ? true : false;
			_s.rlLogoPath = _s.props.rlLogoPath || "content/rl/content/evp/skin/logo.png";
			_s.rlLogoLink = _s.props.rlLogoLink || '';
			_s.rlShowControllerWhenVideoIsStopped = _s.props.rlShowControllerWhenVideoIsStopped == "yes" ? true : false;
			_s.rlShowRewindButton = _s.props.rlShowRewindButton == "yes" ? true : false;
			_s.rlShowVolumeButton = _s.props.rlShowVolumeButton == "yes" ? true : false;
			_s.rlShowTime = _s.props.rlShowTime == "yes" ? true : false;
			_s.timeColor = _s.props.timeColor || '#B9B9B9';
			_s.rlShowChromecastButton = _s.props.rlShowChromecastButton == "yes" ? true : false;
			_s.rlShowPlaybackRateButton = _s.props.rlShowPlaybackRateButton == "yes" ? true : false;
			_s.rlShowQualityButton = _s.props.rlShowQualityButton == "yes" ? true : false;
			_s.rlShowFullScreenButton = _s.props.rlShowFullScreenButton == "yes" ? true : false;
			_s.rlShowScrubberToolTipLabel = _s.props.rlShowScrubberToolTipLabel == "yes" ? true : false;
			_s.rlTimeColor = _s.props.rlTimeColor || '#B9B9B9';
			_s.rlScrubbersToolTipLabelBackgroundColor = _s.props.rlScrubbersToolTipLabelBackgroundColor || '#FFFFFF';
			_s.rlScrubbersToolTipLabelFontColor = _s.props.rlScrubbersToolTipLabelFontColor || '#5a5a5a';
			_s.rlAudioVisualizerLinesColor = _s.props.rlAudioVisualizerLinesColor || '#570AB8';
			_s.rlThumbnailsPreviewWidth = _s.props.rlThumbnailsPreviewWidth || 196;
			_s.rlShowDefaultControllerForVimeo = _s.props.rlShowDefaultControllerForVimeo == "yes" ? true : false;
			_s.rlShowScrubberWhenControllerIsHidden = _s.props.rlShowScrubberWhenControllerIsHidden == "yes" ? true : false;
			_s.rlThumbnailsPreviewBackgroundColor = _s.props.rlThumbnailsPreviewBackgroundColor || "#2e2e2e";
			_s.rlThumbnailsPreviewBorderColor = _s.props.rlThumbnailsPreviewBorderColor || "#414141";
			_s.rlAudioVisualizerLinesColor = _s.props.rlAudioVisualizerLinesColor || '#570AB8';
			_s.rlAudioVisualizerCircleColor = _s.props.rlAudioVisualizerCircleColor || '#b9b9b9';
			_s.rlThumbnailsPreviewLabelBackgroundColor = _s.props.rlThumbnailsPreviewLabelBackgroundColor || "#414141";
			_s.rlThumbnailsPreviewLabelFontColor = _s.props.rlThumbnailsPreviewLabelFontColor || "#CCCCCC";
			_s.rlSkipToVideoText = _s.props.rlSkipToVideoText || "You can skip to video in: ",
			_s.rlSkipToVideoButtonText = _s.props.rlSkipToVideoButtonText || "Skip Ad";
			_s.rlYoutubeQualityButtonSelectedClr = _s.props.rlYoutubeQualityButtonSelectedColor || '#FFFFFF';
			_s.rlYoutubeQualityButtonNormalClr = _s.props.rlYoutubeQualityButtonNormalColor || '#B9B9B9';

			// Thumbs video player.
			_s.useVideoInThumb_bl = _s.props.useVideoInThumb == "yes" ? true : false;
			
			// Create galleries.
			var dataListAr = FWDIGPUtils.getChildById(_s.props.galleryId);
			if(!dataListAr){
				errorMessage = "Gallery data div with the id - <font color='#FF0000'>" + _s.props.galleryId + "</font> doesn't exists.";
				_s.dispatchEvent(FWDIGPData.LOAD_ERROR, {error:errorMessage});
				return;
			}

			dataListAr = FWDIGPUtils.getChildren(dataListAr);

			_s.totalDataLists = dataListAr.length;
			var allCatAr = [];
			var allMediaAr = [];
			var allLightboxAr = [];
			var mediaAr;
			var dataAr;
			var childKidsAr;
			var curUlElem;
			var totalChildren;
			var totalInnerChildren;
			var dataListChildrenAr;
			var mediaKid;
			var attributeMissing;
			var dataListPositionError;
			var positionError;
			var errorMsg;
			var dataAll_ar = [];

			for (var i=0; i<_s.totalDataLists; i++){

				var lightboxParsedPlaylist_ar = [];
				curUlElem = dataListAr[i];
				dataAr = [];
				mediaAr = [];
				dataListChildrenAr = FWDIGPUtils.getChildren(curUlElem);

				
				if(_s.randomizeCategories_bl){
					dataListChildrenAr = FWDIGPUtils.randomizeArray(dataListChildrenAr);
				}
				totalChildren = dataListChildrenAr.length;
				
				if(totalChildren < 9){
					errorMsg = "A minimum of <font color='#FF0000'>9</font> images are required in the gallery nr: <font color='#FF0000'>" + (i + 1) + "</font>";
					_s.dispatchEvent(FWDIGPData.LOAD_ERROR, {error:errorMsg});
					return;
				}

			
				for (var j=0; j<totalChildren; j++){
					var obj = {};
					var child = dataListChildrenAr[j];
					var childKidsAr = FWDIGPUtils.getChildren(child);
				
					var galleryError = i + 1;
					var positionError = j + 1;
					totalInnerChildren = childKidsAr.length;
			
					// Check for data-thumb-src attribute.
					var hasError = true;
					for(var k=0; k<totalInnerChildren; k++){
						attributeMissing = "data-thumb-src";
					
						if (FWDIGPUtils.hasAttribute(childKidsAr[k], "data-thumb-src")){
							hasError = false;
							obj.thumbSrc = FWDIGPUtils.trim(FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-src"));
							break;
						}
					}
				
					if(hasError){
						errorMsg = "Please add the <font color='#FF0000'>data-thumb-src</font> attribute the gallery nr: <font color='#FF0000'>" + galleryError + "</font> at position <font color='#FF0000'>" + positionError +  "</font>";
						_s.dispatchEvent(FWDIGPData.LOAD_ERROR, {error:errorMsg});
						return;
					}

					obj.type = "none";
					obj.thumbVideoSrc = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-video-src");
					obj.password = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-password");
					obj.subtitleSrc = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-subtitle-src");
					obj.thumbVastSrc = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-vast-src");
					obj.thumbPreview = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-preview");
					obj.thumbOverlayColor = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-overlay-color");
					obj.link = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-link");

					var soTarget = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-target");
					if(soTarget){
						 obj.target = soTarget;
					}else{
						 obj.target = '_blank';
					}

					if(_s.showCaption_bl || _s.showCaptionOnThumbVideo_bl){
						for (var k=0; k<totalInnerChildren; k++){
							if (FWDIGPUtils.hasAttribute(childKidsAr[k], "data-thumb-caption")){
								obj.thumbCaption = childKidsAr[k].innerHTML;
								mediaKid = childKidsAr[k];
								break;
							}
						}
						
						obj.captionOffset = 0;
						if(mediaKid){
							if(FWDIGPUtils.getAttributeValue(mediaKid, "data-thumb-caption-offset")){
								obj.captionOffset = parseInt(FWDIGPUtils.trim(FWDIGPUtils.getAttributeValue(mediaKid, "data-thumb-caption-offset")));
							}
						}
					}

					// Portfolio.
					obj.cats = [];
					var contentCh = FWDIGPUtils.getChildren(child);

					for(var u=0; u<contentCh.length; u++){
						var ch2 = contentCh[u];

						if(FWDIGPUtils.hasAttribute(ch2, 'data-category')){
							var categories = FWDIGPUtils.getChildren(ch2);
							for(var x=0; x<categories.length; x++ ){
								obj.cats.push(categories[x].innerText);
							}
						}

						if(FWDIGPUtils.hasAttribute(ch2, "data-title")){
							obj.title = ch2.innerHTML;
						}


						if(FWDIGPUtils.hasAttribute(ch2, "data-client")){
							obj.client = ch2.innerHTML;
						}

						if(FWDIGPUtils.hasAttribute(ch2, "data-likes")){
							obj.likes = ch2.innerHTML;
						}

						if(FWDIGPUtils.hasAttribute(ch2, "data-thumbnail-extra-content")){
							obj.htmlExtraContent_str = ch2.innerHTML;
							_s.hasExtraText_bl = true;
						}
					}

				

					obj.type = "none";

					// Set arrays for lightbox.
					var rlKid;
					for (var k=0; k<totalInnerChildren; k++){
						rlKid = undefined;
						if (FWDIGPUtils.hasAttribute(childKidsAr[k], "data-rl-src")){
							rlKid = childKidsAr[k];
							break;
						}
					}

					var secondObj = undefined;
					if(rlKid){
						secondObj = {};
						secondObj.type = 'none';
						
						secondObj.src = String(FWDIGPUtils.getAttributeValue(rlKid, "data-rl-src"));
						secondObj.thumbSrc = obj.thumbSrc;
					
						var soPosterSrc = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-poster-src");
						if(soPosterSrc) secondObj.posterSrc = soPosterSrc;

						var soPassword = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-password");
						if(soPassword) secondObj.password = soPassword;

						var soSubtitleSrc = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-subtitle-src");
						if(soSubtitleSrc) secondObj.subtitleSrc = soSubtitleSrc;

						var soThumbnailsPreviewSrc = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-preview-src");
						if(soThumbnailsPreviewSrc) secondObj.thumbnailsPreviewSrc = soThumbnailsPreviewSrc;

						var soVastSrc = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-vast-src");
						if(soVastSrc) secondObj.vastSrc = soVastSrc

						var soWidth = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-width");
						if(soWidth) secondObj.width = soWidth

						var soHeight = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-height");
						if(soHeight) secondObj.height = soHeight
						
						// Check for rl caption.
						for (var k=0; k<totalInnerChildren; k++){
							if(FWDIGPUtils.hasAttribute(childKidsAr[k], "data-rl-caption")){
								secondObj.caption = childKidsAr[k].innerHTML;
								break;
							}
						}

						obj.secondObj = secondObj;

						_s.setItemType(secondObj, secondObj.src);

						_s.setItemType(obj, secondObj.src);
						
					}

					if(obj.thumbVideoSrc){
						obj.type = FWDIGP.VIDEO_IN_THUMB;
					}

					if(obj.link){
						obj.type = FWDIGP.LINK;
					}

					if(secondObj && secondObj.type != "link" && secondObj.type != "none" && obj.type != FWDIGP.VIDEO_IN_THUMB){
						lightboxParsedPlaylist_ar.push(secondObj);
						allLightboxAr.push(secondObj);
					}

					dataAr[j] = obj;
					allCatAr.push(obj);
					dataAll_ar.push({firstObj:obj, secondObj:secondObj})
				}

				_s.categoriesAr[i] = FWDIGPUtils.getAttributeValue(curUlElem, "data-cat") || "not defined!";
				_s.dataListAr[i] = dataAr;
				_s.lightboxAr[i] = {playlistItems:lightboxParsedPlaylist_ar};
			}


			if(_s.categoriesAr.length <= 1){
				_s.showAllGalleries = false;
			}

			if (_s.showAllGalleries){
				var tempDataAr = [];
				var tempLightboxAr = [];

				_s.categoriesAr.unshift(_s.allGalleriesMenuLabel);

				if(_s.randomizeCategories_bl){
					dataAll_ar = FWDIGPUtils.randomizeArray(dataAll_ar);
				}

				for(var i=0; i<dataAll_ar.length; i++){
				
					var fObj = dataAll_ar[i].firstObj;
					var scObj = dataAll_ar[i].secondObj;

					if(fObj){
						tempDataAr.push(fObj);
					}
					
					if(scObj){
						tempLightboxAr.push(scObj);
					}
				}
			
				_s.dataListAr.unshift(tempDataAr);
				_s.lightboxAr.unshift({playlistItems:tempLightboxAr});
			}


			
			if(_s.dataListAr.length <= 1){
				_s.showAllGalleries = false;
			}
			
			_s.totalGalleries = _s.categoriesAr.length;

			if(_s.totalGalleries <=1 ){
				_s.startAtGallery = 0;
				_s.showGalleriesMenu = false;
			}
			
			_s.dispatchEvent(FWDIGPData.LOAD_DONE);
		};


		// Set item type.
		_s.setItemType = function(obj, str){
			if(/\.jpg|\.jpeg|\.webp|\.png|\.bmp|\.gif|\.tif|\.tiff|\.jfi|\.jfif|\.exif|\.svg/i.test(str)){
				obj.type = FWDIGP.IMAGE;
			}else if(/\.mp4|\.m3u8|\.mpd/i.test(str)){
				obj.type = FWDIGP.VIDEO;
			}else if(/youtube\./i.test(str)){
				obj.type = FWDIGP.YOUTUBE;
			}else if(/vimeo\./i.test(str)){
				obj.type = FWDIGP.VIMEO;
			}else if(/\.mp3/i.test(str)){
				obj.type = FWDIGP.AUDIO;
			}else if(/https:|http:|\.pdf/i.test(str)){
				obj.type = FWDIGP.IFRAME;
			}
		}
	
		
		// Initialize.
		_s.init();
	};
	
	
	// Set prototype.
	FWDIGPData.setPrototype = function(){
		FWDIGPData.prototype = new FWDIGPEventDispatcher();
	};
	
	FWDIGPData.prototype = null;
	FWDIGPData.PRELOADER_LOAD_DONE = "onPreloaderLoadDone";
	FWDIGPData.LOAD_DONE = "onLoadDone";
	FWDIGPData.LOAD_ERROR = "onLoadError";
	FWDIGPData.LIGHBOX_CLOSE_BUTTON_LOADED = "onLightBoxCloseButtonLoadDone";
	
	window.FWDIGPData = FWDIGPData;
}(window));