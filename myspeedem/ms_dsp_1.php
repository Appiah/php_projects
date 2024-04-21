<?php
	$snd_font = "<font color='#339911'>Send</font>";//This is a color description for the words 'Send' in the dsp_1
?>

<div id='dsp_1' onmouseover="end_actvt_all_ms_pawa();" onclick="end_actvt_all_ms_pawa();">
<?php echo $snd_font; ?> SMS now, <b><i>its easy.</i></b><hr style="color: #004488;">



<div id='dsp_1_sub'>
<p><i>After</i> <noscript><a href='ms_login.php' title='click to login'></noscript> <font id='easy_login' onclick="opnsimpl_sms();"><u>Login</u></font><noscript></a></noscript> ,<font style="margin: 30px 0px 0px 170px; cursor: pointer;"><i><?php echo "$signupnw"; ?></i></font><p><ol> <b><i>1. </i></b> Enter <b title='This name would appear as the sender of the SMS on the recipient*s mobile phone'>Sender Id</b><img id='sndr_id_hlp' src='images1/info.png' width='15px' height='15px' valign='bottom' title='click to learn more' onclick="dsp_info_on_sndr_id();"> <p> <b><i>2.</i></b> Enter <b title='This is the recipient*s mobile number begining with country code'>recipient(s)</b> <br> mobile number <br><i>(</i> eg. <font color='grey'><font title='country code'>233</font><font title='last nine (9) digits of mobile number'>XXXXXXXXX</font></font> <i>)</i>   <p><b><i>3. </i></b> Type <b>message</b> <p> <b><i>Finally</i></b>, Press <?php echo $snd_font; ?> and confirm to send message</ol>
<hr style="color: #004488;">

<!--
<br>
<a href=''>Sign up</a> | <a href=''>Login</a> <i>for extra</i> <a href='' title='Click to view extra features'>features</a>
-->

</div>

</div>