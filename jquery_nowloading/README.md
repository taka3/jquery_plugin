#jQuery Nowloading Plugin

This is a jQuery plugin to show "now loading" indication over the HTML elements.

##Installation

Add script "after" the jQuery library.

    <script src="path/to/jquery.js" type="text/javascript"></script>
    <script src="/path/to/jquery.nowloading.js" type="text/javascript"></script>

##Dependencies
This plugin requires jQuery v1.4.2 (or higher).

##Example Usage
    //Initial setting when DOM is ready
    $(function(){
        $("#selctor").nowloading();
    });

    $("#selector").nowloading("show");
    //
    //some functions taking time such as ajax methods
    //
    $("#selector").nowloading("hide");

##Options
Default values:

    $("#selector").nowloading({
        'bgColor': '#AAA',
        'bgOpacity': 0.70,    //1.0 = no opacity, 0 = completely transparent
        'loadingImg': 'images/loading_img.gif', //relative path from this js file
        'zIndex': 1000,       // bg z-index. image's z-index defined +1
        'imgAlign': 'center', //loading image holizontal position: center, left, right
        'imgVAlign': 'center' //loading image vertical position: center, top, bottom
    });


##Methods

    $("#selector").nowloading("show");

    $("#selector").nowloading("hide");

    $("#selector").nowloading("destroy");

##Changelog


##Author
[taka3](https://github.com/taka3)
web: [Octobersky](http://taka3.info)
