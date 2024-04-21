<?php

$back_On = "<img src='images1/prev.png' width='15px' height='15px' border='0'>";

function dsply_thru_frm($COLOR_of_FRAME_TITLE, $FRAME_TITLE, $SWTCH_to_TITLE_on_hover, $SWTCH_lnk, $SWTCH_to_wat, $FRAME_dsply_lnk){
	
	$output = "<div id='cont_1'><div id='big_div_th_lhs_1' onmouseover=\"end_actvt_all_ms_pawa();\">";
	
	/*$output .= "<div id='frame_slct_Lang'><div id=\"google_translate_element\"></div><script type=\"text/javascript\">
	function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true, gaId: 'UA-23527560-1'}, 'google_translate_element');
}
</script><script type=\"text/javascript\" src=\"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit\"></script>
Translator here....</div>";*/
	
	$output .= "<font color='$COLOR_of_FRAME_TITLE'>$FRAME_TITLE</font>";//This is the title of the page and it appears at the left side of the page
	
	$output .= "</div><div id='big_div_th_rhs_1' align='right'><font color='blue'><font size='-1' title='$SWTCH_to_TITLE_on_hover'><i></i></font><a href='$SWTCH_lnk'><font size='-1'>$SWTCH_to_wat</font></a></div></div>";

	$output .= "<div id='cont_1b'></div><div id='cont_2b'></div><div id='cont_2'><div id='big_div_1' onmouseover=\"end_actvt_all_ms_pawa();\"><iframe id='sms_frame_1' src='$FRAME_dsply_lnk' onmouseover=\"end_actvt_all_ms_pawa();\"></iframe></div></div><div id='cont_3'></div>";
	
	return $output;
}


function dsply_dirct($COLOR_of_DIRCT_TITLE, $DIRCT_TITLE, $SWTCH_to_TITLE_on_hover, $SWTCH_lnk, $SWTCH_to_wat, $DIRCT_dsply_lnk){
	
	$output = "<div id='cont_1'><div id='big_div_th_lhs_1' onmouseover=\"end_actvt_all_ms_pawa();\">";
	
	$output .= "<font color='$COLOR_of_DIRCT_TITLE'>$DIRCT_TITLE</font>";//This is the title of the page and it appears at the left side of the page
	
	$output .= "</div><div id='big_div_th_rhs_1' align='right'><font color='blue'><font size='-1' title='$SWTCH_to_TITLE_on_hover'></font><a href='$SWTCH_lnk'><font size='-1'>$SWTCH_to_wat</font></a><a href='index.php'><img src='images1/home_icon.png' width='30px' height='30px' align='right' border='0'/></a></div></div>";

	$output .= "<div id='cont_1b'></div><div id='cont_2b'></div><div id='cont_2'><div id='big_div_1' onmouseover=\"end_actvt_all_ms_pawa();\">";
		
	$output .= "<iframe id='sms_frame_1' name='topframe' src='$DIRCT_dsply_lnk'/>";
	
	$output .= "</div></div><div id='cont_3'></div>";
	
	return $output;
	
}

/*
include("pymnt_accz.php");

for($ba=0; $ba<3; $ba++){
	//$output = "<div id='cont_2'>";
	$output = "<div id='paymnt_sub_div'>";
	$output .= "<h3>$bank_nm[$ba]</h3>";
	$output .= "<p>Account name : <b>$bank_acc_nm[$ba]</b>";
	$output .= "<br>Account number : <b>$bank_acc_numb[$ba]</b>";
	$output .= "<br>Account branch : <i>Ghana - </i><b>$bank_acc_brnch[$ba]</b>";
	$output .= "</div>";
	//$output .= "</div>";
	
	echo $output;
}
	
*/


function sub_Solnz_On($dsp_2_sub_ID, $X, $Y, $margin_top){

	include("solutions_array.php");
	
	$back_On = "<img src='images1/prev.png' width='15px' height='15px' border='0'>";
	
		$output = "<div style=\"margin-top: $margin_top;\">";
		$output .= "<div id='$dsp_2_sub_ID'>";
		$output .= "<img id='solutionz_imgz' src='images1/$hdN_imgz[$X]'>";//The image is before the phrase
		$output .= "<div id='sub_sol_font'>$hdNz[$Y]</div>";//The title of the solution
		$output .= "</div>";
		$output .= "<br><div align='justify' style=\"font-family: arial, calibri, tahoma; font-size: 14px; color: #336699; margin-left: 200px;\">$soln_full_pitch[$Y]<br><a href='ms_solutions_contents.php'><p><font size='-2'>$back_On</font></a></div>";
		
		$output .= "</div>";
		
		return $output;
	}
	
	
function sub_faqz_On($dsp_2_sub_ID, $X, $Y, $margin_top){

	include("faqz_array.php");
	
	$back_On = "<img src='images1/prev.png' width='15px' height='15px' border='0'>";
	
		$output = "<div style=\"margin-top: $margin_top;\">";
		
		$output .= "<div id='$dsp_2_sub_ID'>";
		$output .= "<img id='solutionz_imgz' src='images1/$quesn_imgz[$X]'>";//The image is before the phrase
		$output .= "<div id='sub_sol_font'>$quesn[$Y]</div>";//The title of the solution
		$output .= "</div>";
		$output .= "<br><div align='justify' style=\"font-family: arial, calibri, tahoma; font-size: 14px; color: #336699; margin-left: 200px;\">$faqz_full_pitch[$Y]<br><a href='ms_faqz_contents.php'><p><font size='-2'>$back_On</font></a></div>";
		
		$output .= "</div>";
		
		return $output;
	}

	
function cont_2_uspz($mt, $mr, $mb, $ml, $fnt_cntnt, $fnt_syz){

	$output = "<style type=\"text/css\">
			#$fnt_cntnt{
			width: 120px;
			height: 20px;
			color: #ffffff;
			font-size:$fnt_syz;
			font-family: \"maiandra GD\", arial, tahoma, trebuchet, calibri, verdana;
			margin-top: $mt;
			margin-right: $mr;
			margin-bottom: $mb;
			margin-left: $ml;
			position: absolute;
			cursor: pointer;
			}
			</style>";
	
	$output .= "<div id='$fnt_cntnt' title='Get started now, Get close to your $fnt_cntnt'>$fnt_cntnt</div>";
	
	return $output;
	
}
	
?>