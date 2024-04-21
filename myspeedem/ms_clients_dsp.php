<?php include("ms_constants.php"); ?>
<?php include("ms_functions.php"); ?>

<!--<font face='arial' style="font-size: 12px; color: #777777; position: fixed; margin: -22px 0px 0px 0px; border-style: none; background-color: #ffffff; border-radius: 0.3em;">You can directly recharger your SMS account via >> </font>-->


<?php 


for($ba=0; $ba<29; $ba++){

$trunkdtxt = substr($clientimonial[$ba], 0, 220);

require_once("ms_arr_clientz.php");
	
	
	$output = "<div id='clientz_sub_div'>";
	$output .= "<table><tr>";
	$output .= "<td valign='top'><img id='clientz_sub_iconz' src='images1/clientz/$clyntimg[$ba]'></td>";
	$output .= "<td width='200px' height='90px'><h5><div style=\"text-align: left; margin: -60px 0px 0px 0px;\">$clyntnm[$ba]</div></h5></td>";
	$output .= "<td width='400px' align='right' valign='top' style=\"color: #333333;\"><div style=\" margin: 10px 0px 0px 0px;\"><font size='-1'><i>\"$trunkdtxt </i></font> <p><img src='images1/web.png' width='20px' height='20px' align='right' title=\"visit $clyntnm[$ba]'s webpage\" onclick=\"window.open('$clyntUrl[$ba]', '$clyntnm[$ba]');\"></div></td>";
	$output .= "</tr></table>";
	$output .= "</div>";
	
	
	echo $output."<br>";
}

?>

