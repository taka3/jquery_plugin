/*!
* jQuery Now Loading Indicator Plugin
* Version 1.0.0 Aug. 09, 2012
* Copyright (c) 2012 Takahiro Murayama
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license.php
* @author Takahiro Murayama
*-----------------------------------------------------------*/

/**
 * Plugin to show "now loading" indication over the HTML elements
 */
;(function($, undefined){

//private methods-----------------------------------------------
    function _getBgHeight(e){
        return $(e).height();
    }
    function _getBgWidth(e){
        return $(e).width();
    }
    function _getPercentage(e){
        return e * 100;
    }

    var methods = {
        init : function( options ) {
            return this.each(function(){

                var $loadingBox = $('<div></div>'),
                    $loadingImg = $('<div></div>');

                var settings = $.extend({
                    'bgColor': '#AAA',
                    'bgOpacity': 0.70,
                    'loadingImg': 'images/loading_img.gif',
                    'zIndex': 1000,
                    'imgAlign': 'center',
                    'imgVAlign': 'center'
                }, options);

                $loadingBox.css({
                    "background-color": settings.bgColor,
                    "opacity": settings.bgOpacity,
                    "position": 'absolute',
                    "z-index": settings.zIndex,
                    "display": 'block',
                    "-ms-filter": "alpha(opacity= " + _getPercentage(settings.bgOpacity) + " )"/*IE6*/
                });
                $loadingImg.css({
                    "background-color": "transparent",
                    "background-image": "url(" + settings.loadingImg + ")",
                    "background-position": settings.imgAlign + " " + settings.imgVAlign,
                    "background-repeat": "no-repeat",
                    "position": 'absolute',
                    "z-index": settings.zIndex + 1,
                    "display": 'block'
                });
                $.data(this, 'ldBox', $loadingBox);
                $.data(this, 'ldImg', $loadingImg);
            });
        },
        destroy : function( ) {
            return this.each(function(){
                $(this).unbind('click.nowloading');
            });
        },
        show : function( ) {
            return this.each(function(){
            $.data(this,'ldBox').css({
                left: $(this).position().left,
                top: $(this).position().top,
                width: _getBgWidth(this),
                height: _getBgHeight(this)
            }).appendTo('body');
            $.data(this,'ldImg').css({
                left: $(this).position().left,
                top: $(this).position().top,
                width: _getBgWidth(this),
                height: _getBgHeight(this)
            }).appendTo('body');
//
            });
        },
        hide : function( ) {
            return this.each(function(){
                $.data(this, 'ldBox').remove();
                $.data(this, 'ldImg').remove();
            });
        }
// TODO change option values after definition
//        option: function( optKey, optVal ) {
//            alert(optKey + " and " + optVal);
//            $.data(this, 'ldBox').css({
//                optKey: optVal
//            });
//        },
    };

    $.fn.nowloading = function( method ){
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.nowloading' );
        }
    };

})(jQuery);
