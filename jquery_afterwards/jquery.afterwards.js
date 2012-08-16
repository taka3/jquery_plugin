/*!
* jQuery Afterwards -show messagebox at the bottom of the page-
* Version 1.0.0 Aug. 14, 2012
* Copyright (c) 2012 taka3 (http://taka3.info) All Rights Reserved.
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license.php
*-----------------------------------------------------------*/

/**
 * Plugin to show content-box when scrolled to the bottom of the page
*/
;(function($, undefined){

    function _getPercentage(e){
        return e * 100;
    }

    var methods = {
        init : function( options ) {
            return this.each(function(){

                //Default settings - changable
                var settings = $.extend({
                    'bgColor': '#DDD',
                    'bgOpacity': 0.80,
                    'borderWidth': 3,
                    'borderColor': '#999',
                    'boxShadow': '0 0 10px 0 rgba(0,0,0,1)',
                    'closeBtnImg': 'images/toggle_btn.png',
                    'zIndex': 10,
                    'slildeSpeed': 500,
                    'areaBeforeHeight': 30,
                    'areaBeforeWidth': 200,
                    'areaAfterHeight': 200,
                    'areaAfterWidth': 400,
                    'innerPadding': '5px 10px',
                    'areaPos':'right', //right or left
                    'displayHeader': 'header here...',
                    'headFont': '16px',
                    'displayContent': 'contents written here...',
                    'bodyFont': '12px',
                    'showHeightFromBottom': 100
                }, options);

                //Element Definition
                var $outerBox = $(this),
                $innerBox = $('<div id="afterwards_inner"></div>'),
                $contentHd = $('<h3></h3>'),
                $closeBtn = $('<div id="afterwards_tgl_btn"></div>'),
                $contentBd = $('<div></div>');

                //OuterBox Style
                $outerBox.css({
                    "background-color": settings.bgColor,
                    "opacity": settings.bgOpacity,
                    "-ms-filter": "alpha(opacity= " + _getPercentage(settings.bgOpacity) + " )",/*IE6*/
                    "position": 'fixed',
                    "bottom": 0,
                    "z-index": settings.zIndex,
                    "display": 'block',
                    "width": settings.areaBeforeWidth,
                    "height": settings.areaBeforeHeight,
                    "box-shadow": settings.boxShadow,
                    "border-top": "solid " + settings.borderWidth + "px " + settings.borderColor
                });
                //which to show the box, right or left
                if(settings.areaPos == "left"){
                    $outerBox.css({
                        "left": 0,
                        "border-right": "solid " + settings.borderWidth + "px " + settings.borderColor
                    });
                }else{
                    $outerBox.css({
                        "right": 0,
                        "border-left": "solid " + settings.borderWidth + "px " + settings.borderColor
                    });
                }
                //InnerBox Style
                $innerBox.css({
                    "padding": settings.innerPadding
                });
                //Header Contents and Style
                $contentHd.text(settings.displayHeader);
                $contentHd.css({
                    "margin": 0,
                    "font-size": settings.headFont
                });
                //ToggleButton Style
                $closeBtn.css({
                    "position": "absolute",
                    "right": "5px",
                    "top": "5px",
                    "width": "20px",
                    "height": "20px",
                    "cursor": "pointer",
                    "background": "url(" + settings.closeBtnImg + ")",
                    "background-repeat": "no-repeat"
                });
                //Body Contents and Style
                $contentBd.text(settings.displayContent);
                $contentBd.css({
                    "font-size": settings.bodyFont
                });

                //Merge all elements
                $innerBox.append($closeBtn).append($contentHd).append($contentBd);
                $outerBox.append($innerBox);

                $outerBox.height(settings.areaBeforeHeight);
                $outerBox.width(settings.areaBeforeWidth);

                //unite elements setting with DOM
                var aftBox = $.data(this, 'outBox', $outerBox);

                var btnOpenFlg = false,
                openFlg = false,
                resizeBox = function() {
                    if (openFlg === false) {
                        aftBox.stop().animate({
                            'width': settings.areaAfterWidth,
                            'height': settings.areaAfterHeight
                        }, settings.slideSpeed);
                    } else if (openFlg === true) {
                        aftBox.stop().animate({
                            'width': settings.areaBeforeWidth,
                            'height': settings.areaBeforeHeight
                        }, settings.slideSpeed);
                    }
                };
                //when toggle button clicked
                $('#afterwards_tgl_btn').click(function(){
                    resizeBox();
                    openFlg = !openFlg;
                    btnOpenFlg = true;
                });

                //Get Position from Bottom
                var bottomPos = $(document).height() - $(window).height() - settings.showHeightFromBottom;
                $(window).scroll(function () {
                    if (!btnOpenFlg) {
                        if ($(this).scrollTop() >= bottomPos) {
                            if (openFlg === false) {
                                resizeBox();
                                openFlg = true;
                            }
                        } else {
                            if (openFlg) {
                                resizeBox();
                                openFlg = false;
                            }
                        }
                    }
                });
            });
        },
        destroy : function( ) {
            return this.each(function(){
                $(this).remove();
            });
        }
    };

    $.fn.afterwards = function( method ){
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.afterwards' );
        }
    };

})(jQuery);
