<div id='dsp_2' onmouseover="end_actvt_all_ms_pawa();" onclick="end_actvt_all_ms_pawa();">

<div id='dsp_2_th' onclick="dsply_solns();"><b>Solutions</b></div>

<div id='dsp_2_th_rhs1' onclick="signup_nw();"><?php echo "$signupnw"; ?></div>

<p>

<div id='dsp_2_sub'>


<?php

	function sub_Solnz($dsp_2_sub_ID, $X, $Y){

	include("solutions_array.php");
	
		$output = "<noscript><a href='ms_solutions_live.php'></noscript><div id='$dsp_2_sub_ID' onclick=\"dsply_solns();\">";
		$output .= "<img id='solutionz_imgz' src='images1/$hdN_imgz[$X]'>";//The image is before the phrase
		$output .= "<div id='sub_sol_font'>$hdNz[$Y]</div>";//The title of the solution
		$output .= "</div><noscript></a></noscript>";
		
		return $output;
	}

		 echo sub_Solnz("dsp_2_sub_1A", "0", "0"); 
		 echo sub_Solnz("dsp_2_sub_1B", "1", "1"); 
		 echo sub_Solnz("dsp_2_sub_2A", "2", "2"); 
		 echo sub_Solnz("dsp_2_sub_2B", "3", "3"); 
		 echo sub_Solnz("dsp_2_sub_3A", "4", "4"); 
		 echo sub_Solnz("dsp_2_sub_3B", "5", "5"); 
 
 ?>



</div>

</div>