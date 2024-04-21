window.onload = actvt_all_ms_pawa;

function end_all_pawas(){
	
	end_actvt_all_ms_pawa();
	end_ms_pawa4();
	end_ms_pawa3();
	end_ms_pawa2();
	end_ms_pawa();
	end_mod_territory();
}

function all_div_off(){
	
	//Turn the following Off
		document.getElementById('cont_1').innerHTML = "";
		document.getElementById('cont_2').innerHTML = "";
		document.getElementById('cont_3').innerHTML = "";
	
}



/**************************************************************************************/
/****************************** START DEFINITION OF VARIABLES *************************/
/**************************************************************************************/

{

var home_On = "<noscript><a href='index.php'></noscript><img id='hm_icon' src='images1/home_icon.png' width='30px' height='30px' align='right' border='0' onclick=\"ms_pawa_2();\"/><noscript></a></noscript>";

var cls_List_img = "<img id='imgopa38' src='images1/cancel.png' width='20px' height='20px' align='right' title='Clear list'";

var strt_login = "<font id='up_sub_font' onclick=\"opnxtrmsms();\">Login</font>"; 

	var login_opts = "<font id='sub_font' onclick=\"opnsimpl_sms();\">Simple SMS</font><br><font id='sub_font' onclick=\"opnxtrmsms();\">X'treme SMS</font>";
	
	var pswd_on = "Text your \"USERNAME\" or \"Account Name\" to +233265997977";
	
	var pswd_4gtn = "<font id='sub_font' onclick=\"alert("+pswd_on+");\" title='"+pswd_on+"' style=\"color: #aaaaaa; margin: 0px 0px 0px -2px;\">Password forgotten ?</font>";
	
	var usrnm_4gtn = "<font id='sub_font' onclick=\"alert('Call our support line +233 242 550 332');\" title='Call our support line +233 242 550 332' style=\"color: #aaaaaa; margin: 0px 0px 0px -2px;\">Username forgotten ?</font>";

	
var strt_signup = "<font id='up_sub_font' onclick=\"signup_nw();\">Sign Up</font>";


var strt_manual = "<font id='up_sub_font' onclick=\"opn_manual();\">Manual</font>";

	var sub_manual_1 = "<font id='sub_font' onclick=\"opn_manual();\">Client manual</font>";

	var sub_manual_2 = "<font id='sub_font' onclick=\"opn_manual();\">Installations</font>";

	
var strt_client = "<font id='up_sub_font'  onclick=\"opn_Clientz();\">Our Clients</font>";


var m_i_s = "<font id='up_sub_font'>Management Information Systems</font>";
	
	var sub_m_i_s = "<font id='sub_font'>Outsource Data entry</font>";
	
	var sub_m_i_s_1 = "<font id='sub_font'>Contacts build-up</font>";
	
	var sub_m_i_s_2 = "<font id='sub_font'>Data entry & uploading</font>";

	
var strt_support = "<font id='up_sub_font' onclick=\"dsply_faq();\">Support</font>";
	
	var sub_support_1 = "<font id='sub_font' title='Frequently Asked Questions' onclick=\"dsply_faq();\">F.A.Qs</font>";

	
var strt_dsktp_apps = "<font id='up_sub_font' onclick=\"opn_appCntr();\">Desktop apps</font>";
	
	var sub_dsktp_apps_1 = "<font id='sub_font' onclick=\"opn_appCntr();\">SMS Messenger </font>";
	

var strt_excel_app = "<font id='up_sub_font' onclick=\"opn_appCntr();\">Spreadsheet apps</font>";

	var sub_excel_app_1 = "<font id='sub_font' onclick=\"opn_appCntr();\"> SMS add-on (32bit) </font>";
	
	var sub_excel_app_2 = "<font id='sub_font' onclick=\"opn_appCntr();\"> SMS add-on (64bit) </font>";

var pripac = "<font id='up_sub_font' onclick=\"opn_prcz();\"\>Packages & Prices</font>";

	var pripac_1 = "<font id='sub_font' onclick=\"opn_prcz();\">Pre - paid</font>";//pre-paid
	
	var pripac_2 = "<font id='sub_font' onclick=\"opn_prcz();\">Post - paid</font>";//post-paid

var sms_forcst = "<font id='up_sub_font' onclick=\"opn_prcz();\" title='Get to know which SMS package would be suit your demand'>SMS Forecasting</font>";

var bnk_pymnt = "<font id='up_sub_font' onclick=\"opn_paymentz();\" title='Top up your account via the bank'>Bank Payments</font>";
	
var scrtch_crd = "<font id='up_sub_font' title='Top up using mySPEEDEM voucher'>Scratch Card</font>";	

var mobile_pymnt = "<font id='up_sub_font' onclick=\"opn_paymentz();\" title='Top up your account via mobile'>Mobile money</font></div>";

var pg_Langs_1 = "<font id='up_sub_font' title='View webpage in your preferred language' onclick=\"alert('Please select language.');\">Language</font>";

var pg_Langs = "<div id='google_translate_element'></div>";

	function googleTranslateElementInit() {
		new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true, gaId: 'UA-23527560-1'}, 'google_translate_element');
	}


	var en_pg = "<font id='sub_font' title='view webpage in English' onclick=\"pgInEng();\">English</font>";

	var fr_pg = "<font id='sub_font' title='webpage en francais' onclick=\"pgInFn();\">French</font>";

}
	
/**************************************************************************************/
/****************************** END DEFINITION OF VARIABLES ***************************/
/**************************************************************************************/


/**************************************************************************************/
/******************************** START SUPER Icon boxy *******************************/
/**************************************************************************************/


//Putting curry brackets around these functions as in the case of the others renders firefox browser incapable of sort of reading the code here, hence rendering all other functions in this script useless

function actvt_all_ms_pawa(){

	var endLst = cls_List_img+" onclick=\"end_actvt_all_ms_pawa();\">";

	document.getElementById('total_ms_pawa').innerHTML = "<div id='all_lnks_On_b'>"+endLst+"<p>"+strt_login+"<br>"+login_opts+"<p>"+strt_signup+"<!--<p>"+strt_manual+"<br>"+sub_manual_1+"<br>"+sub_manual_2+"--><p>"+strt_client+"<p>"+strt_support+"<br>"+sub_support_1+"<p>"+strt_dsktp_apps+"<br>"+sub_dsktp_apps_1+"<p>"+strt_excel_app+"<br>"+sub_excel_app_1+"<br>"+sub_excel_app_2+"<p>"+pripac+"<br>"+pripac_1+"<br>"+pripac_2+"<p>"+sms_forcst+"<p>"+bnk_pymnt+"<p>"+mobile_pymnt;
	
	end_ms_pawa();
	end_ms_pawa4();
	end_ms_pawa3();
	end_ms_pawa2();
		
}

function end_actvt_all_ms_pawa(){
	document.getElementById('all_lnks_On_b').innerHTML = "<div id='total_ms_pawa'></div>";
}



/**************************************************************************************/
/********************************** END SUPER Icon boxy *******************************/
/**************************************************************************************/

/**************************************************************************************/
/********************************** START mySPEEDEM ***********************************/
/**************************************************************************************/
{

function ms_pawa(){
	
	var endLst = cls_List_img+" onclick=\"end_ms_pawa();\">";
	
	var ms_pawa = "<div id='ms_pawa_sub_On'>"+endLst+"<p>"+strt_login+"<br>"+login_opts+"<p>"+strt_signup+"<p>"+strt_manual+"<br>"+sub_manual_1+"<br>"+sub_manual_2+"<p>"+strt_client+"<p>"+strt_support+"<br>"+sub_support_1+"</div>";
	
	document.getElementById('ms_pawa_sub').outerHTML = ms_pawa;
	
	end_actvt_all_ms_pawa();
	end_ms_pawa2();
	end_ms_pawa3();
	end_ms_pawa4();
	
}

function ms_pawa_2(){
	
	window.location = "index.php";
	
	/*
	var rld_page = confirm('Reload entire page ?');
		
	//This function is specially built for the clicking activity
	
	if(rld_page){
		window.location = "http://localhost/index_2.php";//This is the only new thing here
	}
	else{
		//do nothing
	}
	*/
	ms_pawa();
	
}

function end_ms_pawa(){
	
	document.getElementById('ms_pawa_sub_On').innerHTML = "<div id='ms_pawa_sub'></div>";
	
}

}

/**************************************************************************************/
/************************************ END mySPEEDEM ***********************************/
/**************************************************************************************/

/**************************************************************************************/
/************************************ START APP Center ********************************/
/**************************************************************************************/

{

function ms_pawa2(){
	
	var endLst2 = cls_List_img+" onclick=\"end_ms_pawa2();\">";
	
	var ms_pawa2 = "<div id='ms_pawa2_sub_On'>"+endLst2+"<p>"+strt_dsktp_apps+"<br>"+sub_dsktp_apps_1+"<p>"+strt_excel_app+"<br>"+sub_excel_app_1+"<br>"+sub_excel_app_2+"</div>";
	
	document.getElementById('ms_pawa2_sub').outerHTML = ms_pawa2;
	
	end_actvt_all_ms_pawa();
	end_ms_pawa();
	end_ms_pawa3();
	end_ms_pawa4();
}

function end_ms_pawa2(){
	
	document.getElementById('ms_pawa2_sub_On').innerHTML = "<div id='ms_pawa2_sub'></div>";
	
}



	var apps_cont_link = "ms_app_center_content.php";

	var apps_cont = "<div id='big_div_1'><iframe id='sms_frame_1' src="+apps_cont_link+"  onmouseover=\"end_actvt_all_ms_pawa();\"></iframe></div>";

function strt_app_center_page(){
	//Turn the following On
		document.getElementById('cont_1b').innerHTML = "<div id='cont_1'><div id='big_div_th' onmouseover=\"end_actvt_all_ms_pawa();\"><font color='black'><b>APP CENTER</b></font>"+home_On+"</div></div>";
		
		document.getElementById('cont_2b').innerHTML = "<div id='cont_2'>"+apps_cont+"</div>";
}
	
	function opn_appCntr(){

		all_div_off();
		
		strt_app_center_page();
				
	}
	

	
}

/**************************************************************************************/
/************************************ END APP Center **********************************/
/**************************************************************************************/

/**************************************************************************************/
/************************************ START PAYMENTS **********************************/
/**************************************************************************************/

{

function ms_pawa3(){
	
	var endLst3 = cls_List_img+" onclick=\"end_ms_pawa3();\">";
	
	var ms_pawa3 = "<div id='ms_pawa3_sub_On'>"+endLst3+"<p>"+pripac+"<br>"+pripac_1+"<br>"+pripac_2+"<p>"+sms_forcst+"<p>"+bnk_pymnt+"<p>"+mobile_pymnt;
	
	document.getElementById('ms_pawa3_sub').outerHTML = ms_pawa3;
	
	end_ms_pawa2();
	end_ms_pawa();
	end_actvt_all_ms_pawa();
	end_ms_pawa4();
}

function end_ms_pawa3(){
	
	document.getElementById('ms_pawa3_sub_On').innerHTML = "<div id='ms_pawa3_sub'></div>";
	
}


	var pymnt_cont_link = "ms_payments_content.php";

	var pymnt_cont = "<div id='big_div_1'><iframe id='sms_frame_1' src="+pymnt_cont_link+"  onmouseover=\"end_actvt_all_ms_pawa();\"></iframe></div>";

function strt_payment_page(){
	//Turn the following On
		document.getElementById('cont_1b').innerHTML = "<div id='cont_1'><div id='big_div_th' onmouseover=\"end_actvt_all_ms_pawa();\"><font color='black'><b>PAYMENTS</b></font>"+home_On+"</div></div>";
		
		document.getElementById('cont_2b').innerHTML = "<div id='cont_2'>"+pymnt_cont+"</div>";
}
	
	function opn_paymentz(){

		all_div_off();
		
		strt_payment_page();
				
	}


}

/**************************************************************************************/
/************************************ END PAYMENTS ************************************/
/**************************************************************************************/

/**************************************************************************************/
/********************************** START LOGIN ***************************************/
/**************************************************************************************/

{

	function sms_tym_only(){
	//Turn the Login totally off
		document.getElementById('ms_pawa4_cont').innerHTML = "";
	
	//Turn the Signup totally off
		document.getElementById('ms_pawa5_cont').innerHTML = "";
	
		all_div_off();
	
	}


/***************************** START SIMPLE SMS ***************************************/

{

var simpl_sms_link = "http://www.simplesms.myspeedem.com/Login.aspx?ReturnUrl=%2fDefault.aspx";

var simpl_sms = "<div id='big_div_1'><iframe id='sms_frame_1' src="+simpl_sms_link+"  onmouseover=\"end_actvt_all_ms_pawa();\"></iframe></div>";

function rfrsh_simpl_sms(){
	
		var conf_xtrm_sms_rfrsh = confirm('Caution: Refreshing page may require that you login again. Proceed ?');
		
			if(conf_xtrm_sms_rfrsh){
				document.getElementById('cont_2').innerHTML = simpl_sms;//This reloads the content(SIMPLE SMS) in the sms frame
				//alert('Please wait page is refreshing');
			}
			else{
				alert('Refresh terminated');
			}
	}

function strt_simpl_sms(){
	//Turn the following On
		document.getElementById('cont_1b').innerHTML = "<div id='cont_1'><div id='big_div_th' onmouseover=\"end_actvt_all_ms_pawa();\"><font color='orange'>SIMPLE SMS</font><img id='rfrsh_img_1' src='images1/rfrsh.png' valign='middle' align='right' onclick=\"rfrsh_simpl_sms();\" title='Refresh'></div></div>";
		
		document.getElementById('cont_2b').innerHTML = "<div id='cont_2'>"+simpl_sms+"</div>";
}
	
	function opnsimpl_sms(){
		
		sms_tym_only();
			
		strt_simpl_sms();
		
		end_all_pawas();
	}

}
	
/***************************** END SIMPLE SMS *****************************************/


/***************************** START XTREME SMS ***************************************/

{

var x_sms_link = "http://www.sms.myspeedem.com/Login.aspx?ReturnUrl=%2fDefault.aspx";

var xtrm_sms = "<div id='big_div_1'><iframe id='sms_frame_1' src="+x_sms_link+"  onmouseover=\"end_actvt_all_ms_pawa();\"></iframe></div>";

	function rfrsh_x_sms(){
	
		var conf_xtrm_sms_rfrsh = confirm('Caution: Refreshing page may require that you login again. Proceed ?');
		
			if(conf_xtrm_sms_rfrsh){
				document.getElementById('cont_2').innerHTML = xtrm_sms;//This reloads the content(X'TREME SMS) in the sms frame
				//alert('Please wait page is refreshing');
			}
			else{
				alert('Refresh terminated');
			}
	}
	
	function strt_xtrmsms(){
		//Turn the following On
		document.getElementById('cont_1b').innerHTML = "<div id='cont_1'><div id='big_div_th' onmouseover=\"end_actvt_all_ms_pawa();\"><font color='#004488'>X'TREME SMS</font><img id='rfrsh_img_1' src='images1/rfrsh.png' valign='middle' align='right' onclick=\"rfrsh_x_sms();\" title='Refresh'></div></div>";
		
		document.getElementById('cont_2b').innerHTML = "<div id='cont_2'>"+xtrm_sms+"</div>";
	}
	
	function opnxtrmsms(){
	
		sms_tym_only();
			
		strt_xtrmsms();
		
		end_all_pawas();
	}

}	
	
/***************************** END XTREME SMS ***************************************/	

//LOGIN mouseover function

function ms_pawa4(){
	
	var endLst4 = cls_List_img+" onclick=\"end_ms_pawa4();\">";
		
	var ms_pawa4 = "<div id='ms_pawa4_sub_On'>"+endLst4+"<p>"+login_opts+"<p>"+pswd_4gtn+"<br>"+usrnm_4gtn+"</div>";
	
	document.getElementById('ms_pawa4_sub').outerHTML = ms_pawa4;
	
	end_actvt_all_ms_pawa();
	end_ms_pawa3();
	end_ms_pawa2();
	end_ms_pawa();
}

function ms_pawa4b(){

	opnxtrmsms();
	
	ms_pawa4();
	
	//opnxtrmsms(); //This opens X'treme SMS
	opnsimpl_sms(); //This opens Simple SMS
}

function end_ms_pawa4(){
	
	document.getElementById('ms_pawa4_sub_On').innerHTML = "<div id='ms_pawa4_sub'></div>";
	
}

}

/**************************************************************************************/
/************************************ END LOGIN ***************************************/
/**************************************************************************************/

/**************************************************************************************/
/************************************ START SIGN UP ***********************************/
/**************************************************************************************/

{

/***************************** START SIGN UP PROCESS ***************************************/

{

var sign_up_link = "http://myspeedem.getafricaonline.com/contact+us";

var signup_On = "<div id='big_div_1'><iframe id='sms_frame_1' src="+sign_up_link+"  onmouseover=\"end_actvt_all_ms_pawa();\"></iframe></div>";

	function rfrsh_sign_up(){
	
		var conf_sign_up_rfrsh = confirm('Proceed to refresh sign up ?');
		
			if(conf_sign_up_rfrsh){
				document.getElementById('cont_2').innerHTML = signup_On;//This reloads the content(X'TREME SMS) in the sms frame
				//alert('Please wait page is refreshing');
			}
			else{
				alert('Refresh terminated');
			}
	}
	
	function strt_sign_up(){
	
		//Turn the following On
		document.getElementById('cont_1b').innerHTML = "<div id='cont_1'><div id='big_div_th' onmouseover=\"end_actvt_all_ms_pawa();\"><font color='#cc0000'>Sign up</font><img id='rfrsh_img_1' src='images1/rfrsh.png' valign='middle' align='right' onclick=\"rfrsh_sign_up();\" title='Refresh'></div><div id='big_div_th_rhs_1' align='right'><font size='-1' color='black'><b>Note : </b>Please, We are doing our best to respond as soon as possible. But this <blink><i>might take a while</i> for <b>your username & password to be sent to you via mobile</b></blink> or mail. Fill-in and press 'Send'. Thank you.</font>"+home_On+"</div></div>";
		
		document.getElementById('cont_2b').innerHTML = "<div id='cont_2'>"+signup_On+"</div>";
	}
	
	
	function signup_nw(){
	
		sms_tym_only();//this switches off all the div so that specifics are displayed as stated below
			
		strt_sign_up();
		
		end_all_pawas();
		
	}

	function signup_USP_On(){
		document.getElementById('dsp_USP_1').innerHTML = "<div id='dsp_USP_2'><b><i>Sign Up</i></b> now & get <blink><font color='#cc0000'><b>15 <i>free</i></b></font> <b>SMS</b></blink></div>";
		document.getElementById('welcome_rhs1').style.opacity = 0.9;
	}
	
	function signup_USP_Off(){
		document.getElementById('dsp_USP_2').innerHTML = "<div id='dsp_USP_1'><!--<img src='images1/ok.png' border='0'>--><b><i>SPEEDEM</i></b> . . . <font size='-2'><</font> <font face='monotype corsiva'><i>We diliva</i></font> <font size='-2'>></font></div>";
		document.getElementById('welcome_rhs1').style.opacity = 0.5;
	}
	
}	
	
/***************************** END SIGN UP PROCESS *******************************************/

}

/**************************************************************************************/
/************************************ END SIGN UP *************************************/
/**************************************************************************************/

/**************************************************************************************/
/************************************ START MANUAL ************************************/
/**************************************************************************************/

{

function opn_manual(){

	//alert("Open Client Manual & Installation Manual");
	
	window.open('http://www.myspeedem.com/dl/mySPEEDEM_user_manual.pdf', 'manual_opened');

}

}

/**************************************************************************************/
/************************************ END MANUAL **************************************/
/**************************************************************************************/

/**************************************************************************************/
/************************************ START SUPPORT ***********************************/
/**************************************************************************************/

{

function provyd_supprt(){
	alert('Tel: +233 265 997 977   /   +233 242 550 332    E-mail: support@myspeedem.com');
	
	var ld_page = confirm('Open FAQ page ?');
	
	//This function is specially built for the clicking activity
	
	if(ld_page){
		
		//window.location = "ms_faqz.php";//This is the only new thing here
		
		dsply_faq();
		
	}
	else{
		//do nothing
	}
	
}

}

/**************************************************************************************/
/************************************ END SUPPORT *************************************/
/**************************************************************************************/


/**************************************************************************************/
/************************************ START TERRITORY *********************************/
/**************************************************************************************/

{

function mod_territory(){
	
	alert('Activate user language selection');
}

}

/**************************************************************************************/
/************************************ END TERRITORY ***********************************/
/**************************************************************************************/


/**************************************************************************************/
/***************************** START SENDER ID INFO ***********************************/
/**************************************************************************************/

{

function dsp_info_on_sndr_id(){
	alert('The sender id is basically the name (11 characters) or number (country code + your mobile number. eg. 233XXXXXXXXX) that appears when the the recipients receives the SMS, it can be set to a name for easy identification even if your phone number is not in the contact of the recipient. It can also be set to the sender*s mobile number so that the recipient can reply to the sender*s phone or even call the sender.');
}

}

/**************************************************************************************/
/******************************* END SENDER ID INFO ***********************************/
/**************************************************************************************/


/**************************************************************************************/
/**************************** START DISPLAYING SOLUTIONS ******************************/
/**************************************************************************************/

{

	var solns_cont_link = "ms_solutions_contents.php";

	var solns_cont = "<div id='big_div_1'><iframe id='sms_frame_1' src="+solns_cont_link+"  onmouseover=\"end_actvt_all_ms_pawa();\"></iframe></div>";

function strt_soln_page(){
	//Turn the following On
		document.getElementById('cont_1b').innerHTML = "<div id='cont_1'><div id='big_div_th' onmouseover=\"end_actvt_all_ms_pawa();\"><font color='black' onclick=\"dsply_solns();\" style=\"cursor: pointer;\"><b>SOLUTIONS</b></font>"+home_On+"</div></div>";
		
		document.getElementById('cont_2b').innerHTML = "<div id='cont_2'>"+solns_cont+"</div>";
		
}
	
	function dsply_solns(){
		
		//alert('Display Solutions image');
		
		all_div_off();
		
		strt_soln_page();
				
	}
	
}

/**************************************************************************************/
/****************************** END DISPLAYING SOLUTIONS ******************************/
/**************************************************************************************/



/**************************************************************************************/
/************************ START DISPLAYING CLIENTS SLIDE SHOW *************************/
/**************************************************************************************/

{

		var clientz_cont_link = "ms_clients_dsp.php";

	var clientz_cont = "<div id='big_div_1'><iframe id='sms_frame_1' src="+clientz_cont_link+"  onmouseover=\"end_actvt_all_ms_pawa();\"></iframe></div>";

function strt_clientz_page(){
	//Turn the following On
		document.getElementById('cont_1b').innerHTML = "<div id='cont_1'><div id='big_div_th' onmouseover=\"end_actvt_all_ms_pawa();\"><font color='black'><b>Our Corporate Clients</b></font>"+home_On+"</div></div>";
		
		document.getElementById('cont_2b').innerHTML = "<div id='cont_2'>"+clientz_cont+"</div>";
}
	
	

	function opn_Clientz(){
	
		//alert('Open clients dedicated page with links to testimonials.');
		
		all_div_off();
		
		strt_clientz_page();
	}

}

/**************************************************************************************/
/************************ END DISPLAYING CLIENTS SLIDE SHOW ***************************/
/**************************************************************************************/


/**************************************************************************************/
/******************************* START PRICING ****************************************/
/**************************************************************************************/

{

	var pymnt_cont_link = "ms_prices_content.php";

	var prcz_cont = "<div id='big_div_1'><iframe id='sms_frame_1' src="+pymnt_cont_link+"  onmouseover=\"end_actvt_all_ms_pawa();\"></iframe></div>";

function strt_pricez_page(){
	//Turn the following On
		document.getElementById('cont_1b').innerHTML = "<div id='cont_1'><div id='big_div_th' onmouseover=\"end_actvt_all_ms_pawa();\"><font color='black' onclick=\"opn_prcz();\" style=\"cursor: pointer;\"><b>PACKAGES & PRICES</b></font>"+home_On+"</div></div>";
		
		document.getElementById('cont_2b').innerHTML = "<div id='cont_2'>"+prcz_cont+"</div>";
}
	
	function opn_prcz(){

		all_div_off();
		
		strt_pricez_page();
				
	}


}

/**************************************************************************************/
/********************************* END PRICING ****************************************/
/**************************************************************************************/


/**************************************************************************************/
/******************************* START FAQ ****************************************/
/**************************************************************************************/

{

	var faq_cont_link = "ms_faqz_contents.php";

	var faqz_cont = "<div id='big_div_1'><iframe id='sms_frame_1' src="+faq_cont_link+" onmouseover=\"end_actvt_all_ms_pawa();\"></iframe></div>";

function start_dsply_faq(){
	//Turn the following On
		document.getElementById('cont_1b').innerHTML = "<div id='cont_1'><div id='big_div_th' onmouseover=\"end_actvt_all_ms_pawa();\"><font color='#000000' onclick=\"dsply_faq();\" style=\"cursor: pointer;\"><b>SUPPORT : </b> <i>Frequently asked questions</i></font>"+home_On+"</div></div>";
		
		document.getElementById('cont_2b').innerHTML = "<div id='cont_2'>"+faqz_cont+"</div>";
}
	
	function dsply_faq(){

		all_div_off();
		
		start_dsply_faq();
				
	}


}

/**************************************************************************************/
/********************************* END FAQ ****************************************/
/**************************************************************************************/