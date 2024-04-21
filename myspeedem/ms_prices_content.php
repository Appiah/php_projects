<?php include("ms_constants.php"); ?>
<?php include("ms_functions.php"); ?>

<div id='pricz'>

<table cellspacing='5px'>

<tr>
<td id='pricz_row_1'><b><font style="font-size: 1.4em;">Packages</font></b> </td>
<td id='pricz_row_2'><b><font style="font-size: 1.4em;">Pre - paid</font></b> </td>
<td id='pricz_row_3'><b><font style="font-size: 1.4em;">Post - paid</font></b> </td>
</tr>

<?php 


for($smsp=0; $smsp<7; $smsp++){


require_once("ms_arr_prices.php");
	
	$sms_pre_pd[$smsp] = number_format($sms_pre_pd[$smsp], 2);
	
	$output = "<tr>";//START ROW
	
	$output .= "<td id='pricz_row_1' title='Amazing packages'>";//Start Data_1 : PACKAGES
	//$output .= "<div id='pricz_row_1'>";
	$output .= "<font size='+1'><b>$sms_pk[$smsp]</b></font> <i>SMS</i> <br> $staff_def[$smsp]";
	//$output .= "</div>";
	$output .= "</td>";//End Data_1 : PACKAGES
	$output .= "<td id='pricz_row_2' title='Fantastic pre-paid prices'>";//Start Data_2 : PRE - PAID
	//$output .= "<div id='pricz_row_2'>";
	$output .= "$currncy <font size='+1'><b>$sms_pre_pd[$smsp]</b></font> <br> <font size='-2' face='arial' color='#777777'><i><b>$sms_1[$smsp]</b> pesewas per SMS</i></font>";//Pre-Paid values
	//$output .= "</div>";
	$output .= "</td>";//End Data_2 : PRE - PAID
	$output .= "<td id='pricz_row_3' title='Flexible post-paid prices'>";//Start Data_3 : POST - PAID
	//$output .= "<div id='pricz_row_3'>";
	$output .= "<font size='+1'>$sms_pst_pd[$smsp]</font>";//Post-Paid values
	//$output .= "</div>";
	$output .= "</td>";//End Data_3 : POST - PAID
	
	$output .= "</tr>";//END ROW
	
	
	echo $output;

}

?>

</table>

</div>