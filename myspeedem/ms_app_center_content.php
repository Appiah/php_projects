<?php require_once("ms_constants.php"); ?>
<?php require_once("ms_functions.php"); ?>

<?php

require_once("ms_arr_app_center.php");

function dwnld_lnk($dwnldLNK){

	$dwnld = "<font id='dwnld_1'><b>Download</b></font>";

	$output = "<a href='$dwnldLNK' >$dwnld</a>";
		
	return $output;
	
}

?>

<div id='dirct_dsply' onmouseover="end_actvt_all_ms_pawa();">

<table><tr>

<td width='300px' valign='top'>

	<table>
	<tr>
		<td valign='top'>
			<img id='acc_iconz' src='images1/windows.png' />
		</td>
		<td valign='middle'>
			<b><?php echo $app_nm_th[0]; ?></b>
		</td>
	</tr>
	
	<tr>
	<td></td>
	<td><?php echo $app_sub_nm[0]; ?> <br><?php echo dwnld_lnk('$app_lnkz[0]'); ?></td>
	</tr>
	
	</table>


</td>


	<td width='300px' valign='top'>

		<table><tr>

			<td valign='top'>
				<img id='acc_iconz' src='images1/excel.png' />
			</td>

			<td valign='middle'>
				<b><?php echo $app_nm_th[1]; ?></b>
				
				
			</td>

		</tr>
		<tr>
			<td></td>
			<td><font size='-1'><br><?php echo $app_sub_nm[1]; ?> <?php echo dwnld_lnk('$app_lnkz[1]'); ?><p><?php echo $app_sub_nm[2]; ?> <?php echo dwnld_lnk('$app_lnkz[2]'); ?></td>
		</tr>
		</table>

	</td>

</tr></table>

</div>