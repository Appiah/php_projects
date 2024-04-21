<div id='dsp_slide' onmouseover="end_actvt_all_ms_pawa();" onclick="fntChngSlide();">

<div id='cont_2_lhs'><img id='cont_2_lhs_img' src='images1/slice_1.png' border='0'></div>

<div id='cont_2_rhs'> <font color='#99ccee'>Enterprise / Personal</font> 
<br>


<?php

$prfix = "Get close to your ";

$keyDsp = array("customers",
				"groups",
				"friends",
				"employees",
				"contacts",
				"members",
				"supporters",
				"listeners");

$keyDspPos = 0;
				
?>

<script type="text/javascript">

var keyDsp = new Array("customers",
				"groups",
				"friends",
				"employees",
				"contacts",
				"members",
				"supporters",
				"listeners");

	var thisPic2 = 0;
				
function fntChngSlide(){

	//alert('Auto Slide show active');

		now = new Date;
		
		var keyDspSz = keyDsp.length;
		
		var onSec2 = now.getSeconds();
		
		setTimeout("fntChngSlide()", 3000);
		
			//alert('Inside slide program');
		
		if( onSec2%keyDsp.length !== 0){
						
			thisPic2++;
		
				if (thisPic2 == keyDsp.length) {
					thisPic2 = 0;
				}
				else if (thisPic2 == 0) {
					thisPic2 = keyDsp.length;
				}
			//alert('Change the word  CUSTOMER  NOW !!!!!');
			
			document.getElementById('cont_2rhs_sub_font').innerHTML = keyDsp[thisPic2];
			
		}

}

</script>

	<?php //echo cont_2_uspz('-17px', '0px', '0px', '360px', 'colleagues', '0.6em'); ?>
	<?php //echo cont_2_uspz('0px', '0px', '0px', '330px', 'employees', '0.8em'); ?>
	<?php //echo cont_2_uspz('20px', '0px', '0px', '300px', 'contacts', '1.0em'); ?>
	<?php //echo cont_2_uspz('40px', '0px', '0px', '270px', 'groups', '1.2em'); ?>
	
	<div id='cont_2_rhs_usp'><font id='cont_2rhs_font'><?php echo "$prfix<font id='cont_2rhs_sub_font'> $keyDsp[$keyDspPos]</font>"; ?></font></div>
	
	<?php //echo cont_2_uspz('-5px', '0', '0', '270px', 'friends', '1.2em'); ?>
	<?php //echo cont_2_uspz('22px', '0', '0', '300px', 'members', '1.0em'); ?>
	<?php //echo cont_2_uspz('45px', '0', '0', '330px', 'supporters', '0.8em'); ?>
	<?php //echo cont_2_uspz('65px', '0', '0', '370px', 'listeners', '0.6em'); ?>
	
	
		<div id='cont_2_rhs_sub' onclick="dsply_solns();">Checkout Our Solutions</div>

	
</div>

</div>