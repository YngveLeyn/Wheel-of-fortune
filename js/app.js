//----------------------------------------- Wheel of fortune


//init
function wof_init(){
	//choose random number between 1 and 10
	var random_deg = Math.floor((Math.random() * 10000) + 1);
	console.log(random_deg);
    document.getElementById('wof__wheel').style.cssText = 'transform: rotate('+random_deg+'deg)';
};