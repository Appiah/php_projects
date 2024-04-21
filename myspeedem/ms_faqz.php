<?php include("ms_constants.php"); ?>
<?php include("ms_functions.php"); ?>
<?php include("ms_header.html"); ?>

<body>

<div id='body_div_1'>

<?php //This -BELOW- would only appear when javascript is turned off ?>

<?php include("ms_sitemap.html"); ?>

<?php //This -ABOVE- would only appear when javascript is turned off ?>


<?php echo dsply_thru_frm("black", "<b>SUPPORT : </b> <i>Frequently asked questions</i>", "Click to move to homepage", "index.php", "$home_On<noscript><a href='contactus_content.php'></noscript>$Tel_On<noscript></a></noscript>", "ms_faqz_contents.php"); ?>

</div>

</body>

<?php include("ms_footer.html"); ?>