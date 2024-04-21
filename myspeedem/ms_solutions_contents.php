<?php include("ms_constants.php"); ?>
<?php include("ms_functions.php"); ?>

<div id='dirct_dsply' onmouseover="end_actvt_all_ms_pawa();">

<?php

	function sub_Solnz($dsp_2_sub_ID, $X, $Y, $margin_top){

	include("solutions_array.php");
		
	$info_On = "<img src='images1/info.png' width='15px' height='15px' border='0'>";
		
		$output = "<div style=\"margin-top: $margin_top;\">";
		
		$output .= "<a href='$soln_lnkz[$Y]'><div id='$dsp_2_sub_ID'>";
		$output .= "<img id='solutionz_imgz' src='images1/$hdN_imgz[$X]'>";//The image is before the phrase
		$output .= "<div id='sub_sol_font'>$hdNz[$Y]</div>";//The title of the solution
		$output .= "</div></a>";
		$output .= "<br><div style=\"width: 500px; color: #336699; margin-left: 200px;\">$soln_pitch[$Y] . . .<br><a href='$soln_lnkz[$Y]'><font size='-2' title='Click to read more'>$info_On</font></a></div>";
		
		$output .= "</div>";
		
		return $output;
	}

		 echo sub_Solnz("dsp_2_sub_static", "0", "0", "-50px");
			
		 echo sub_Solnz("dsp_2_sub_static", "1", "1", "20px"); 
		 echo sub_Solnz("dsp_2_sub_static", "2", "2", "20px"); 
		 echo sub_Solnz("dsp_2_sub_static", "3", "3", "20px"); 
		 echo sub_Solnz("dsp_2_sub_static", "4", "4", "20px"); 
		 echo sub_Solnz("dsp_2_sub_static", "5", "5", "20px"); 
 
 ?>
 
 </div>