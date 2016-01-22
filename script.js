$(window).on('load', function () {
    var $preloader = $('#page_preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.delay(10000).fadeOut('slow');
    $preloader.delay(1000).fadeOut('slow');
});


var colorsArray = new Array('#ee07fc','#FFED75',
                              '#FF7E75','#02AADB');
var colorInd = 0;
var directionArray = new Array('x','y','z');
var directionInd = 0;

$('#logo').shiningImage({
    color: '#ee07fc',
    onLoopComplete: function()
    {
        colorInd++;
        if (colorInd == colorsArray.length) {colorInd = 0;}
        directionInd++;
        if (directionInd == directionArray.length) {
            directionInd = 0;
        }

        $('#logo').data('shiningImage').settings.color 
            = colorsArray[colorInd];
        $('#logo').data('shiningImage').settings.direction 
            = directionArray[directionInd];
    },
    opacity : 0.5
});
               

 document.getElementById("change_state_button").onclick = function () {
    var
    myaudio = document.getElementById("myaudio"),
    
    mybtn = document.getElementById("mybtn");
    if (myaudio.paused) {
      myaudio.play();
      mybtn.src = "img/1b.png";
      
    } else {
      myaudio.pause();
      mybtn.src = "img/2b.png";
      
    }
  };

  window.onload = function() { 

    var scrollUp = document.getElementById('scrollup'); 

    scrollUp.onmouseover = function() {
        scrollUp.style.opacity=0.3;
        scrollUp.style.filter  = 'alpha(opacity=30)';
    };

    scrollUp.onmouseout = function() {
        scrollUp.style.opacity = 0.5;
        scrollUp.style.filter  = 'alpha(opacity=50)';
    };

    scrollUp.onclick = function() { 
        window.scrollTo(0,0);
    };



    window.onscroll = function () { 
        if ( window.pageYOffset > 0 ) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    };
};



	
