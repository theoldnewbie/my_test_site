var accordionCont1 = document.getElementById('accordion_content');
var accordionCont2 = document.getElementById('accordion1_content');
var accordionCont3 = document.getElementById('accordion2_content');
var $accorHead1 = $('#accordion_header');
var $accorHead2 = $('#accordion1_header');
var $accorHead3 = $('#accordion2_header');


accordionCont2.setAttribute('hidden',true);
accordionCont3.setAttribute('hidden',true);

var show = function show(event) {
	var id = event.toElement.id;
	if (id == 'accordion_header') {
		accordionCont1.removeAttribute('hidden');
		accordionCont2.setAttribute('hidden',true);
		accordionCont3.setAttribute('hidden',true);
	} else if(id == 'accordion1_header'){
		accordionCont2.removeAttribute('hidden');
		accordionCont1.setAttribute('hidden',true);
		accordionCont3.setAttribute('hidden',true);
	} else if(id == 'accordion2_header'){
		accordionCont3.removeAttribute('hidden');
		accordionCont1.setAttribute('hidden',true);
		accordionCont2.setAttribute('hidden',true);
	}
};

var howerSlideSpeed = 2000;
var howerTimeOut = 5000;
var howerNeedLinks = true;

$(document).ready(function(e){
	$('.slide').css(
	{
		"position" : "absolute",
        "top":'0', "left": '0'
	}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	var slideCount = $('#slider .slide').size();

	var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(howerSlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
            }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum=slideCount-1;}
            else{slideNum-=1}
        }
        else{
            slideNum = arrow;
            }
        $('.slide').eq(slideNum).fadeIn(howerSlideSpeed, rotator);
    }

    if(howerNeedLinks){
var $linkArrow = $('<a id="prewbutton"></a><a id="nextbutton">&gt;</a>')
    .prependTo('#slider');      
    $('#nextbutton').click(function(){
        animSlide("next");
 		return false;
        })
    $('#prewbutton').click(function(){
        animSlide("prew");
        return false;
        })
}
    var pause = false;
    var rotator = function(){
    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, howerTimeOut);}
            }
    $('#slider-wrap').hover(    
        function(){clearTimeout(slideTime); pause = true;},
        function(){pause = false; rotator();
        });
    rotator();
});

$accorHead1.on('click', show);
$accorHead2.on('click', show);
$accorHead3.on('click', show);


