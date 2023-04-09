/**
 * Infinite Grid Pro PACKAGED v3.0
 * Categories select box.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */ 
 
(function (window){

	'use strict';
	
	var FWDIGPComboBox = function(_d, prt){
		
		var _s = this;
		var prototype = FWDIGPComboBox.prototype;
		
		_s.categoriesAr = _d.categoriesAr;
		_s.buttons_ar = [];
		_s.buttonsOriginal_ar = [];
		_s.spacers_ar = [];
		_s.comboboxSelectorLabel = _d.galleriesMenuSelectLabel;
		_s.menuButtonsSpacersClassName = _d.menuButtonsSpacersClassName;
		_s.menuButtonSpacerHeight = _d.menuButtonSpacerHeight;
		_s.curId = _d.startAtGallery;
		_s.totalButtons = _s.categoriesAr.length;
		_s.selectorOriginalWidth = 0;
		_s.stageWidth = 0;
		_s.stageHeight = 0;
		_s.isComboboxShowed_bl = false;
		_s.showAllCategories2_bl = false;
		_s.showMenuButtonsSpacers_bl = _d.showMenuButtonsSpacers_bl;
		_s.isShowed_bl = _d.showGalleriesMenu;
		_s.isMobile_bl = FWDIGPUtils.isMobile;
		_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;
		

		// Intialize.
		_s.init = function(){
			_s.screen.className = 'p-selector';
			_s.setAlpha(0);
			_s.setY(100);
			FWDAnimation.to(_s, .8, {y:0, alpha:1, delay:.2, ease:Expo.easeInOut})
		
			_s.setupButtons();
			_s.setButtonsLabels();
			_s.setButtons(_s.curId);
			_s.setupSpacers();
			_s.setupCombobox();
			_s.updateMenuStyle();
			
			setTimeout(function(){
				_s.resizeAndPosition();
			}, 500);

			if(_s.categoriesAr.length <=1){
				_s.setX(-5000);
			} 

		};
		
		
		// Resize and position.
		_s.resizeAndPosition = function(){
			_s.stageWidth = prt.stageWidth;
			if(!_s.isShowed_bl || _s.stageWidth == 0) return;

			if(_s.isOpened_bl) return;
			_s.positionButtons();
		};
		
		
		// Setup combobox holders.
		_s.setupCombobox = function(){
			
			_s.mainButtonsHolder_do = new FWDIGPDisplayObject("div", 'relative');
			_s.bk_do = new FWDIGPDisplayObject("div");
			_s.bk_do.screen.className = 'p-buttons-background';
			_s.buttonsHolder_do = new FWDIGPDisplayObject("div");
			_s.buttonsHolder_do.setX(-10000);
			
			_s.arrow_do = new FWDIGPTransformDisplayObject("div");
			_s.arrow_do.setOverflow("visible");
			_s.arrow_do.setDisplay("inline-block");
			_s.arrow_do.getStyle().fontSmoothing = "antialiased";
			_s.arrow_do.getStyle().webkitFontSmoothing = "antialiased";
			_s.arrow_do.getStyle().textRendering = "optimizeLegibility";
			_s.arrow_do.getStyle().whiteSpace = "nowrap";
			_s.arrow_do.setBackfaceVisibility();
			_s.arrow_do.getStyle().padding = "";
			_s.arrow_do.getStyle().margin = "";
			_s.arrow_do.getStyle().borderRight = "2px solid";
			_s.arrow_do.getStyle().borderBottom = "2px solid";
			_s.arrow_do.getStyle().top = 0;
			_s.arrow_do.getStyle().left = 0;
			_s.arrow_do.setWidth(8);
			_s.arrow_do.setHeight(8);
			_s.arrow_do.screen.className = 'arrowNormal';
			
			FWDIGPComboBoxButton.setPrototype();
			_s.selector_do = new FWDIGPComboBoxButton(
				_s,
				"NOT DEFINED",
				10,
				'PGMenuSelectorTextNormal',
				'PGMenuSelectorTextSelected'
			);
			
			_s.selector_do.addListener(FWDIGPComboBoxButton.MOUSE_OVER, _s.selectorOverHandler);
			_s.selector_do.addListener(FWDIGPComboBoxButton.MOUSE_OUT, _s.selectorOutHandler);
			
			if(!FWDIGPUtils.isIEAndLessThen9) _s.selector_do.addChild(_s.arrow_do);
			_s.selector_do.addListener(FWDIGPComboBoxButton.MOUSE_UP, function(){
				if(_s.isComboboxShowed_bl){
					_s.closeComboBox();
				}else{
					_s.openCombobox();
				}
			});
			_s.selector_do.setLabel(_s.comboboxSelectorLabel);
			_s.selector_do.setSize();
			
			setTimeout(function(){
				_s.selector_do.getStyle().width = (_s.selector_do.getWidth() + 40) + "px";
				_s.selectorOriginalWidth = _s.selector_do.getWidth();
				
				_s.arrow_do.setRotation(45);
				_s.arrow_do.setY(Math.round(_s.selector_do.h - _s.arrow_do.h)/2 - 4);
				
			}, 60);

			_s.addChild(_s.mainButtonsHolder_do);
			_s.mainButtonsHolder_do.addChild(_s.bk_do);
			_s.mainButtonsHolder_do.addChild(_s.buttonsHolder_do);
			_s.mainButtonsHolder_do.addChild(_s.selector_do);
		};
		
		_s.selectorOverHandler = function(){
			FWDAnimation.to(_s.arrow_do.screen, .8, {className:'arrowSelected', ease:Expo.easeOut});
		};
		
		_s.selectorOutHandler = function(){
			FWDAnimation.to(_s.arrow_do.screen, .8, {className:'arrowNormal', ease:Expo.easeOut});
		};

		_s.resetButtons = function(id){
			for(var i=0; i<_s.buttons_ar.length; i++){
				var button = _s.buttons_ar[i];
				if(_s.curId != button.id){
					button.setNormalState(true);
				}
			}
		}
		
		_s.openCombobox = function(){
			if(_s.isComboboxShowed_bl) return
			_s.isComboboxShowed_bl = true;
			FWDAnimation.killTweensOf(_s.mainButtonsHolder_do);
			FWDAnimation.killTweensOf(_s.buttonsHolder_do);
			FWDAnimation.killTweensOf(_s.arrow_do);
		
			if(prt.zIndex == 0){
				_s.getStyle().zIndex = 1;
			}else{
				_s.getStyle().zIndex = prt.zIndex + 1;
			}
		
			_s.selector_do.isSelected_bl = _s.selector_do.isDisabled_bl = true;
			_s.selector_do.setSelectedState(true);
			_s.isOpened_bl = true;
			_s.buttonsHolder_do.setVisible(true);
			_s.buttonsHolder_do.setX(0);
			_s.mainButtonsHolder_do.setHeight(_s.buttonsHolder_do.h + _s.mainButtonsHolder_do.h);
			_s.selector_do.h = _s.selector_do.getHeight();
			if(!_s.buttonsHolder_do.y) _s.buttonsHolder_do.setY(-_s.buttonsHolder_do.h + _s.selector_do.h);
			FWDAnimation.to(_s.buttonsHolder_do, .8, {y:_s.selector_do.h, ease:Expo.easeInOut});
			FWDAnimation.to(_s.arrow_do, .8, {rotation:-135, y:Math.round(_s.selector_do.h - _s.arrow_do.h)/2 + 1, ease:Expo.easeInOut});
			
			_s.startToCheckMenuHit();
			_s.resetButtons();
			_s.setButtons(_s.curId);
		};
		
		_s.closeComboBox = function(e){
		
			if(!_s.isComboboxShowed_bl) return
			_s.isComboboxShowed_bl = false;
			FWDAnimation.killTweensOf(_s.buttonsHolder_do);
			FWDAnimation.killTweensOf(_s.arrow_do);
			_s.selector_do.isSelected_bl = _s.selector_do.isDisabled_bl = false;
			_s.isOpened_bl = false;

			FWDAnimation.to(_s.buttonsHolder_do, .8, {y:-_s.buttonsHolder_do.h + _s.selector_do.h - 5, ease:Expo.easeInOut});
			FWDAnimation.to(_s.mainButtonsHolder_do, .8, {h:_s.selector_do.h, ease:Expo.easeInOut, onComplete:function(){
				_s.isComboboxShowed_bl = false;
				_s.buttonsHolder_do.setVisible(false);

				if(!_s.menuHit_bl){
					if(!_s.isMobile_bl) _s.selector_do.setNormalState(true);
					FWDAnimation.to(_s.arrow_do.screen, .8, {className:'arrowNormal', ease:Expo.easeOut});
				} 
				if(_s.isMobile_bl) _s.selector_do.setNormalState(true);

			}});
			FWDAnimation.to(_s.arrow_do, .8, {rotation:45, y:Math.round(_s.selector_do.h - _s.arrow_do.h)/2 - 4, ease:Expo.easeInOut});
		};
		
		_s.startToCheckMenuHit = function(){
			if(_s.isCheckHitAdded_bl) return;
			_s.isCheckHitAdded_bl = true;
			
			if(_s.isMobile_bl){
				setTimeout(function(){
					_s.hitThhumbnailId_to = window.addEventListener("touchstart", _s.checkThumbnailHit);
				}, 50);
			}else{
				
				window.addEventListener("mousemove", _s.checkThumbnailHit);
				window.addEventListener("mousedown", _s.chechThumbnailsOnClick);
			}
		};
		
		_s.stopToCheckMenuHit = function(){
			if(!_s.isCheckHitAdded_bl) return;
			_s.isCheckHitAdded_bl = false;
		
			if(_s.isMobile_bl){
				_s.hitThhumbnailId_to = window.removeEventListener("touchstart", _s.checkThumbnailHit);
			}else{
				window.removeEventListener("mousemove", _s.checkThumbnailHit);
				window.removeEventListener("mousedown", _s.chechThumbnailsOnClick);
			}
			
			clearTimeout(_s.hitThhumbnailId_to);
		};
		
		_s.chechThumbnailsOnClick = function(e){
			var vc = FWDIGPUtils.getViewportMouseCoordinates(e);	
			_s.menuHit_bl = true;
			if(!FWDIGPUtils.hitTest(_s.mainButtonsHolder_do.screen, vc.screenX, vc.screenY)){
				_s.menuHit_bl = false;
				clearTimeout(_s.hideComoboboxWithDelayId_to);
				_s.stopToCheckMenuHit();
				_s.closeComboBox();	
			}
		};
		
		_s.checkThumbnailHit = function(e){
			var vc = FWDIGPUtils.getViewportMouseCoordinates(e);	
			if(FWDIGPUtils.hitTest(_s.mainButtonsHolder_do.screen, vc.screenX, vc.screenY)){
				_s.menuHit_bl = true;
				clearTimeout(_s.hideComoboboxWithDelayId_to);
			}else{
				_s.menuHit_bl = false;
				clearTimeout(_s.hideComoboboxWithDelayId_to);
				_s.hideComoboboxWithDelayId_to = setTimeout(function(){
					_s.stopToCheckMenuHit();
					_s.closeComboBox();	
				}, 200);
			}
		};
		
		
		// Setup buttons.
		_s.setupButtons = function(){
			var button;
			var label;

			for(var i=0; i<_s.totalButtons; i++){
			
				FWDIGPComboBoxButton.setPrototype();
				button = new FWDIGPComboBoxButton(
					_s,
					_s.categoriesAr[i],
					i
				);
				
				if(i == 0) _s.allCategoriesButton_do = button;
				
				button.addListener(FWDIGPComboBoxButton.MOUSE_UP, _s.buttonOnMouseUpHandler);

				_s.buttons_ar.push(button);
				_s.buttonsOriginal_ar.push(button);
			}
		};
		
		_s.buttonOnMouseUpHandler = function(e){
			if(prt.thumbsManager_do && prt.thumbsManager_do.isCategoryChanging_bl) return;
			if(e){
				_s.setButtons(e.id);
				_s.curId = e.id;
			}
			_s.closeComboBox();
			if(!_s.isComboboxShowed_bl){
				_s.dispatchEvent(FWDIGPComboBox.MOUSE_UP, {id:_s.curId});
			}
		};
	
		
		_s.setButtonsLabels = function(showTotalNumbersPerCategory_bl){
			var button;
			for(var i=0; i<_s.buttonsOriginal_ar.length; i++){
				button = _s.buttonsOriginal_ar[i];
				button.w = 0;
				button.getStyle().width = "auto";
				var label = _s.categoriesAr[i];
				if(_s.categoriesAr[i] != undefined) button.setLabel(label);
				button.setSize();
			}
		};
		
		_s.setButtons = function(id, state){
			var button;
			var countSelectedButtons = 0;
			button = _s.buttons_ar[id];
			var button;
			for (var i=0; i<_s.totalButtons; i++){	
				button = _s.buttons_ar[i];
				if(i == id){
					button.isSelectedFinal_bl = true;
					button.disable();
					button.setSelectedState(true);
				}else{
					button.isSelectedFinal_bl = false;
					button.enable();
					button.setNormalState(true);
				}
			}
		};
		

		// Update menu style.
		_s.updateMenuStyle = function(){
			var spacer;
			
			for(var i=0; i<_s.totalButtons; i++){
				var button = _s.buttons_ar[i];
				_s.buttonsHolder_do.addChild(button);
				spacer = _s.spacers_ar[i];
				spacer.setHeight(1);
				_s.buttonsHolder_do.addChild(spacer);
				if(i == _s.totalButtons - 1) spacer.setVisible(true);
			}
			_s.selector_do.setVisible(true);
			
			_s.positionButtons();
		};

	
		// Setup spacers.
		_s.setupSpacers = function(){
			var spacer;
			var offsetTotalButtons = 0;
			
			for(var i=0; i<_s.totalButtons; i++){
				spacer = new FWDIGPDisplayObject("div");
				_s.spacers_ar[i] = spacer;
				spacer.setHeight(_s.menuButtonSpacerHeight);
				spacer.screen.className = 'PGMenuButtonsSpacers';
	
				if(!_s.showMenuButtonsSpacers_bl) spacer.setVisible(false);
				_s.addChild(spacer);
			}
		};
	
		
		// Position buttons.
		_s.positionButtons = function(){
			if(_s.stageWidth == 0) return;
			
			var button;
			var prevButton;
			var rows_ar = [];
			var rowsWidth_ar = [];
			var stageWidth = _s.stageWidth;
			var tempX = 0;
			var tempY = 0;
			var maxY = 0;
			var totalRowWidth = 0;
			var rowsNr = 0;
			var spacerCount = 0;
			var startX = 0;
			var greaterButtonWidth = _s.selectorOriginalWidth;
			if(greaterButtonWidth == 0) return;
			
			var offsetButtonY = 0;

			maxY = 0;
			
			for (var i=0; i<_s.totalButtons; i++){	
				button = _s.buttons_ar[i];
				if(button.w >= greaterButtonWidth){
					greaterButtonWidth = button.w;
				}
			}
		
			for (var i=0; i<_s.totalButtons; i++){	
				
				button = _s.buttons_ar[i];
				if(_s.showMenuButtonsSpacers_bl){
					spacer = _s.spacers_ar[i];
					spacer.setX(0);
					spacer.setWidth(greaterButtonWidth);
					if(i == 0){
						spacer.setY(0);
						button.setY(spacer.h);
					}else{
						spacer.setY(_s.buttons_ar[i-1].y +  _s.buttons_ar[i -1].h);
						button.setY(spacer.y + spacer.h);
					}
					
					
				}else{
					button.setY(i * button.h);
				}
				
				button.setX(0);
			
				if(greaterButtonWidth > 35) button.setWidth(greaterButtonWidth );
			}
			
			if(_s.selectorOriginalWidth < greaterButtonWidth + 10){
				_s.selector_do.setWidth(greaterButtonWidth);
			}
			
			_s.buttonsHolder_do.setWidth(greaterButtonWidth);
			_s.buttonsHolder_do.setHeight(button.y + button.h);
			_s.mainButtonsHolder_do.setWidth(greaterButtonWidth);
			_s.mainButtonsHolder_do.setHeight(_s.selector_do.h);
			_s.arrow_do.setX(greaterButtonWidth - 29);
			_s.arrow_do.setY(parseInt(_s.selector_do.h - _s.arrow_do.h)/2  - 4);
		
			_s.stageHeight = maxY + _s.buttons_ar[0].h;

		};
		
		_s.init();
	};
	
	// Set prototype.
	FWDIGPComboBox.setPrototype = function(){
		FWDIGPComboBox.prototype = new FWDIGPDisplayObject("div", "absolute", "hidden");
	};
	
	FWDIGPComboBox.MOUSE_OVER = "onMouseOver";
	FWDIGPComboBox.MOUSE_OUT = "onMouseOut";
	FWDIGPComboBox.MOUSE_UP = "onMouseDown";
	FWDIGPComboBox.RIGHT = "right";
	FWDIGPComboBox.LEFT = "left";
	FWDIGPComboBox.BOTTOM = "bottom";
	FWDIGPComboBox.TOP = "top";
	
	FWDIGPComboBox.prototype = null;
	window.FWDIGPComboBox = FWDIGPComboBox;
}(window));