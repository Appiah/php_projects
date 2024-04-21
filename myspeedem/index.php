<?php include("ms_constants.php"); ?>

<?php include("ms_functions.php"); ?>

<?php include("ms_header.html"); ?>

<body>

<div id='body_div_1'>

<?php //This -BELOW- would only appear when javascript is turned off ?>

<?php include("ms_sitemap.html"); ?>

<?php //This -ABOVE- would only appear when javascript is turned off ?>


<?php include("ms_cont_1.php");?>

<div id='cont_1b'></div>
<div id='cont_2b'></div>

		<div id='cont_2'>

<?php include("ms_cont_2.php");//This is the big images : to be programmed as a slide ?>
		
		</div>
		
		<div id='cont_3'>
	


<?php include("ms_dsp_1.php"); //Basic procedure of Sending SMS?>
	
<?php include("ms_dsp_2.php"); //Solutions & red/blue Signup button ?>

<?php include("ms_dsp_3.php"); //Out Client?>




		</div>

</div>

</body>

<?php include("ms_footer.html"); ?>