<?php include("ms_constants.php"); ?>
<?php include("ms_functions.php"); ?>
<?php include("ms_header.html"); ?>

<body>

<div id='body_div_1'>

<?php //This -BELOW- would only appear when javascript is turned off ?>

<?php include("ms_sitemap.html"); ?>

<?php //This -ABOVE- would only appear when javascript is turned off ?>


<?php echo dsply_thru_frm("black", "<b>PACKAGES & PRICING</b>", "Click to move to homepage", "http://localhost/index_2.php", "$home_On", "ms_prices_content.php"); ?>

</div>

</body>

<?php include("ms_footer.html"); ?>