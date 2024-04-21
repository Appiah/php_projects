<?php include("ms_constants.php"); ?>
<?php include("ms_functions.php"); ?>
<?php include("ms_header.html"); ?>

<body>

<div id='body_div_1'>

<?php //This -BELOW- would only appear when javascript is turned off ?>

<?php include("ms_sitemap.html"); ?>

<?php //This -ABOVE- would only appear when javascript is turned off ?>


<?php echo dsply_thru_frm("orange", "SIMPLE SMS", "Click on Xtreme SMS ", "http://localhost/ms_login_2.php", "X'treme SMS", "http://simplesms.myspeedem.com"); ?>

</div>

</body>

<?php include("ms_footer.html"); ?>