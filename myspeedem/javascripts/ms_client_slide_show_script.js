	window.onload = autoSlide;

	var thisPic = 0;
	
	//setTimeout("autoSlide()", 3000); ---- After this line is commented out, the slide works better and more systematically
		
function processPrevious(){
	
	if (thisPic == 0) {
		thisPic = clyntimg.length;
	}
	
	thisPic--;

	document.getElementById('clynt_slyd_img').src = "images1/clientz/"+clyntimg[thisPic];
	document.getElementById('dsp_3_sub_2A').innerHTML = clyntnm[thisPic];
	document.getElementById('clynt_slyd_img').title = clyntnm[thisPic];
		
}
	
function processNext(){

	thisPic++;
			
	if (thisPic == clyntimg.length) {
		thisPic = 0;
	}
	document.getElementById('clynt_slyd_img').src = "images1/clientz/"+clyntimg[thisPic];
	document.getElementById('dsp_3_sub_2A').innerHTML = clyntnm[thisPic];
	document.getElementById('clynt_slyd_img').title = clyntnm[thisPic];
		
}

function autoSlide(){

	fntChngSlide();

	//alert('Auto Slide show active');

		now = new Date;
		
		var csize = clyntimg.length;
		
		var onSec = now.getSeconds();
		
		setTimeout("autoSlide()", 3000);
		
		if( onSec%csize !== 0){
			
			thisPic++;
		
				if (thisPic == csize) {
					thisPic = 0;
				}
				else if (thisPic == 0) {
					thisPic = csize;
				}
			//alert('Auto Slide show IMAGES NOW !!!!!');
			document.getElementById('clynt_slyd_img').src = "images1/clientz/"+clyntimg[thisPic];
			document.getElementById('dsp_3_sub_2A').innerHTML = clyntnm[thisPic];
			document.getElementById('dsp_3_sub_2A').title = clientimonial[thisPic];
			
		}

}

	