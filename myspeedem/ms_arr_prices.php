<?php

function prep_num($varybl){

	$output = number_format($varybl, 2);;
	
		return $output;
	
}

$ex_rate_usd_gh = 1.9;
$ex_rate_euro_gh = 2.5;
$ex_rate_pnd_gh = 3.0;

$staff_def_suffix = "supporting staff <br>+ Data processing for upload";
$staff_def_suffix_2 = "Basic support <br>+ Data processing for upload";
$staff_def_suffix_3 = "Basic support <br>+ Data processing";

$currncy = "<i>GH</i>";//For Pre-paid currency prefixing

$currncy2 = "<font size='-1'><i>GH</i></font>";//For Post-Paid currency prefixing

$ntsptd = "<font size='-1'><i>Not supported</i></font>";

$sms_pk = array("14288",
				"5558",
				"2705",
				"1318",
				"515",
				"250",
				"124");

$staff_def = array("2 $staff_def_suffix <br>+ Advertise (2 months) on our clients page <br>+ A link to your website (if any)",
"1 $staff_def_suffix <br>+ Advertise (1 month) on our clients page ",
"1 $staff_def_suffix",
"General $staff_def_suffix",
"$staff_def_suffix_2",
"$staff_def_suffix_2",
"$staff_def_suffix_3");				
				
$sms_pre_pd = array("500",
				"200",
				"100",
				"50",
				"20",
				"10",
				"5");

$pst_pd_figs = array("520",
"215",
"110",
"55");				

$pst_pd_figs[0] = "<b>".prep_num($pst_pd_figs[0])."</b>";
$pst_pd_figs[1] = "<b>".prep_num($pst_pd_figs[1])."</b>";
$pst_pd_figs[2] = "<b>".prep_num($pst_pd_figs[2])."</b>";
$pst_pd_figs[3] = "<b>".prep_num($pst_pd_figs[3])."</b>";
	
	
$sms_pst_pd = array("$currncy2 $pst_pd_figs[0]",
				"$currncy2 $pst_pd_figs[1]",
				"$currncy2 $pst_pd_figs[2]",
				"$currncy2 $pst_pd_figs[3]",
				"$ntsptd",
				"$ntsptd",
				"$ntsptd");

$sms_1 = array("3.5",
				"3.6",
				"3.7",
				"3.8",
				"3.9",
				"4.0",
				"4.1");

?>