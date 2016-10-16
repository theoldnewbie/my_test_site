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

$accorHead1.on('click', show);
$accorHead2.on('click', show);
$accorHead3.on('click', show);