<?php include("ms_constants.php"); ?>
<?php include("ms_functions.php"); ?>

<div id='sms_frame_1' onmouseover="end_actvt_all_ms_pawa();">

<?php


	for($X=0; $X<10; $X++){
	
	include("faqz_array.php");
		
		//$output = "<div style=\"margin-top: 0px;\">";
		
		$output = "<a href='$faqz_lnkz[$X]'><div id='faqz_sub_static'>";
		$output .= "<img id='solutionz_imgz' src='images1/$quesn_imgz[$X]'>";//The image is before the phrase
		$output .= "<div id='sub_faq_font'>$quesn[$X]</div>";//The title of the solution
		$output .= "</div></a>";
		$output .= "<br><div align='justify' style=\"width: 500px; color: #000000; margin-left: 200px;\">$faqz_pitch[$X] . . . <br><a href='$faqz_lnkz[$X]'><font size='-2' title='Click to read more'>$info_On</font></a></div>";
		
		//$output .= "</div>";
		
		echo $output;
		
	}	
		
 ?>
 
 </div>