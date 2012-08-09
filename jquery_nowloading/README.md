#jQuery Nowloading Plugin

This is a jQuery plugin to show "now loading" indication over the HTML elements.

##Installation

Add script "after" the jQuery library.

    <script src="path/to/jquery.js" type="text/javascript"></script>
    <script src="/path/to/jquery.nowloading.js" type="text/javascript"></script>

##Dependencies
This plugin requires jQuery v1.4.2 (or higher).

##Usage

    $("#selctor").nowloading();

##Options
    $("#selector").nowloading({
        'bgColor': '#AAA',
        'bgOpacity': 0.70,
        'loadingImg': 'images/loading_img.gif',//relative path from this js file
        'zIndex': 1000,// bg z-index. image's z-index defined +1
        'imgAlign': 'center',// center, left, right
        'imgVAlign': 'center'// center, top, bottom
    });


##Methods

    $("#selector").nowloading("show");

    $("#selector").nowloading("hide");
    
    $("#selector").nowloading("destroy");

##Changelog

##Author
[taka3](https://github.com/taka3)