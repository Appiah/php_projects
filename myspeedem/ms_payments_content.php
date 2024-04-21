<?php include("ms_constants.php"); ?>
<?php include("ms_functions.php"); ?>

<font face='arial' style="font-size: 12px; color: #777777; position: fixed; margin: -22px 0px 0px 0px; border-style: none; background-color: #ffffff; border-radius: 0.3em;">You can directly recharger your SMS account via >> </font>


<?php 


for($ba=0; $ba<7; $ba++){

require_once("ms_arr_pymnt_accz.php");
	
	
	$output = "<div id='paymnt_sub_div'>";
	$output .= "<table><tr>";
	$output .= "<td valign='top'><img id='acc_iconz' src='images1/acc_iconz/$acc_iconz[$ba]'></td>";
	$output .= "<td width='200px' height='90px'><h2>$bank_nm[$ba]</h2><br><a href='$acc_nrst_brnch[$ba]'><font size='-2'><i>$fnd_nrst_brnch[$ba]</i></font></a></td>";
	$output .= "<td width='300px' align='right' valign='top' style=\"color: #333333;\"><div style=\" margin: 10px 0px 0px 0px;\"> <b>$bank_acc_nm[$ba]</b>";
	$output .= "<br> <b>$bank_acc_numb[$ba]</b>";
	$output .= "<br><i>$bank_acc_brnch[$ba]</i></div></td>";
	$output .= "</tr></table>";
	$output .= "</div>";
	
	
	echo $output."<br>";
}

?>

