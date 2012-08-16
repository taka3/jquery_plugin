#jQuery Afterwards Plugin

This is a jQuery plugin to show a message box at the bottom of the page,

could be used to suggest what to do "afterwards".

##Installation

Add script "after" the jQuery library.

    <script src="path/to/jquery.js" type="text/javascript"></script>
    <script src="/path/to/jquery.afterwards.js" type="text/javascript"></script>

##Dependencies
This plugin requires jQuery v1.4.2 (or higher).

##Example Usage
    //Initial setting when DOM is ready
    //with default option values
    $(function(){
        $("#selctor").afterwards({
            displayHeader: 'Alert!',
            displayContent: 'You can see expanded alert area when scrolled to the bottom.',
            areaAfterWidth: 500
        });
    });


##Options
Default values:

    $("#selector").afterwards({
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
    });


##Methods

    $("#selector").afterwards("destroy");// remove the div bound "afterwards".

##Changelog


##Author
[taka3](https://github.com/taka3)

web: [Octobersky](http://taka3.info)
