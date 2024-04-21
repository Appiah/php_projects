<?php require_once("ms_constants.php"); ?>
<?php require_once("ms_functions.php"); ?>
<?php require_once("ms_header.html"); ?>

<body>

<div id='body_div_1'>

<?php //This -BELOW- would only appear when javascript is turned off ?>

<?php include("ms_sitemap.html"); ?>

<?php //This -ABOVE- would only appear when javascript is turned off ?>


<?php echo dsply_thru_frm("black", "<b>APP CENTER</b>", "Click to move to homepage", "indexphp", "$home_On", "ms_app_center_content.php"); ?>


</div>

</body>

<?php include("ms_footer.html"); ?>