/* ========================================================================== *
 *  eMuSC �@�l�C���^�[�l�b�g�o���L���O �O��JavaScript�t�@�C��
 *  file name : emusc_IH.js
 *  LastMod   : 2016/09/12
 * ========================================================================== *
 */
/*
 * "���"�{�^������.
 *
 * "���"�{�^���������Ƀt�H�[�J�X��"service"�t���[���Ɉڂ��A����_�C�A���O��\�����܂�.
 */
function prnClientArea() {
	'use strict';
    top.service.focus();
    window.print();
}
/*
 * "�w���v"�{�^������.(���O�I�����)
 *
 * "�w���v"�{�^���������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openLogonHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("http://www.82bank.co.jp/neteb/h_logon3.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=550, width=520");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(�σp�X���[�h���p�җp���)
 *
 * "�w���v"�{�^���������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openLogonHelpWindowStaff() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_logon3.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=550, width=520");
    sw1.focus();
}
function openLogonRiyouHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_otp_riyou.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=550, width=520");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(��񃊃��N�p)
 *
 * "�w���v"�{�^���������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openEbHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/help2.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=30, left=30, height=400, width=400");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(���C�����j���[)
 *
 * "�w���v"�{�^���������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openMenuHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/help.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=550, width=520");
    sw1.focus();
    return false;
}
/*
 * "�w���v"�{�^������.(CSV)
 *
 * CSV�_�E�����[�h�p�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openCsvHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/banking/csv.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=470, width=620");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(�����m�F)
 *
 * �����m�F�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openKouzaKakuninHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/k_kakunin.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=470, width=620");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(�󂯎��l��)
 *
 * ���l�����̓w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openKMeigiHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/k_meigi.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=470, width=620");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(�����m�F���{�[�N)
 *
 * �����m�F���{�[�N�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openKRevokeHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/k_revoke.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=470, width=620");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(���U�_�E�����[�h)
 *
 * ���U�_�E�����[�h�p�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openSTDlHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_stdown.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(���U�_�E�����[�h)
 *
 * ���U�_�E�����[�h�p�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openATDlHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_atdown.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(���U�_�E�����[�h)
 *
 * �V���U�_�E�����[�h�p�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openNKDlHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_atdown.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(���U�_�E�����[�h)
 *
 * ���U�_�E�����[�h�p�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openKFDlHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_kfdown.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(���U����󋵃_�E�����[�h)
 *
 * ���U����󋵃_�E�����[�h�p�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openKFKekkaHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_kfkekka.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(���U����󋵑S��_�E�����[�h)
 *
 * ���U����󋵑S��_�E�����[�h�{�^���p�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openKFZGBtnKekkaHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_kfkekka_zengin.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(���U����󋵑S��_�E�����[�h)
 *
 * ���U����󋵑S��_�E�����[�h���חp�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openKFZGMSKekkaHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/k_code_upload.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}

/*
 * "�w���v"�{�^������.(���C�h�l�b�g����󋵃_�E�����[�h)
 *
 * ���C�h�l�b�g����󋵃_�E�����[�h�p�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openWNKekkaHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_wnkekka.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(���C�h�l�b�g����󋵑S��_�E�����[�h)
 *
 * ���C�h�l�b�g����󋵑S��_�E�����[�h�{�^���p�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openWNZGBtnKekkaHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_wnkekka_zengin.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "�w���v"�{�^������.(���C�h�l�b�g����󋵑S��_�E�����[�h)
 *
 * ���C�h�l�b�g����󋵑S��_�E�����[�h���חp�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openWNZGMSKekkaHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/k_code_wnupload.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}

/*
 * "�w���v"�{�^������.(�n����)
 *
 * �n���ŗp�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openRPHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/chihouzei.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}

/*
 * "�w���v"�{�^������.(MPN)
 *
 * MPN�p�w���v�ւ̃����N�������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openMpHelpWindow() {
	'use strict';
	// �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/mpn/fee.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=500, width=700");
    sw1.focus();
}
/*
 * �E�N���b�N�֎~.
 *
 * �E�N���b�N�֎~�𐧌䂵�܂�.
 * false:�E�N���b�N�֎~, true:�E�N���b�N�L���ƂȂ�܂�.
 *
 */
function chkContextMenu() {
	'use strict';
    return true;
}
/*
 * ���b�Z�[�W�ꗗ�\�����̃T�u�E�C���h�E<br>
 *
 * �ێ�ɂēo�^���ꂽ���b�Z�[�W�ɖ��ߍ��܂ꂽJavaScript��
 * ���s���܂��B
 */
function openWindow(url, style){
	'use strict';
    cw = window.open(url, "title", style);
    if (navigator.appName == "Netscape" && navigator.appVersion.charAt(0) >=3 ){
        cw.focus();
    }
}
/*
 * �{�^���摜�Ǎ�.
 * 
 * �摜�����O�ɓǂݍ���ł����܂�.
 */
function preloadImages() {
	'use strict';
    var imgs = new Array();
    for (i = 0; i < imgSrcs.length; i++) {
        imgs[i] = new Image();
        imgs[i].src = "images/" + imgSrcs[i];
	}
}
/*
 * ���O�I�t�p.
 * 
 * ���j���[�̃^�[�Q�b�g��ύX���܂�.
 */
function toTop() {
	'use strict';
    document.form1.target = "_top";
    return true;
}
/*
 * "�^�C���A�E�g"�^�C�}�[�\��
 *
 * 5���Ԃ̃J�E���g�_�E���^�C�}�[��\�����܂�
 *
 */
msec = 300;
var timeID;
function timerStart() {
	'use strict';
    msec=msec-1;
    min=parseInt(msec/60) + 1;
    document.form2.text1.value = min ;
    if (msec <= 60 ){
        document.form2.text1.value = "";
    }
    //�c��P���ŃA���[�g�A�^�C���A�E�g�\�莞����\��
    if (msec == 60) {
        dd = new Date();
        min_dd = dd.getMinutes();
        if (min_dd < 10) { min_dd = "0" + min_dd; }
        sec_dd = dd.getSeconds();
        if (sec_dd < 10) { sec_dd = "0" + sec_dd; }
        dd2 = new Date();
        dd2.setTime( dd2.getTime() + 60000 );
        min_dd2 = dd2.getMinutes();
        if (min_dd2 < 10) { min_dd2 = "0" + min_dd2; }
        sec_dd2 = dd2.getSeconds();
        if (sec_dd2 < 10) { sec_dd2 = "0" + sec_dd2; }
        alert( "���΂炭�{�^����������Ă��܂���B�P���ȓ��Ƀ{�^�����̂����삪�����ꍇ�A" + "\n" +
               "���q���܂̃Z�L�����e�B�̂��߁A�����I�ɐڑ����I�������Ă��������܂��B" + "\n\n" + 
               "���ݎ����@�@�@�@�@�@�@ �F" + dd.getHours() + ":" + min_dd + ":" + sec_dd + "\n" + 
               "�^�C���A�E�g�\�莞���@�F" + dd2.getHours() + ":" + min_dd2 + ":" + sec_dd2  );
    }
    if(msec != 0){
        timeID = setTimeout("timerStart()",1000);
    }else{
        clearTimeout(timeID);
    }
}
function timerReset() {
 	'use strict';
   if ( timeID != null && timeID != "" ) {
    	msec = 300;
    	clearTimeout(timeID);
	    timerStart();
	}
}
function timerClear() {
 	'use strict';
   msec = 0;
    clearTimeout(timeID);
    document.form2.text1.value = "";
}
/*
 * ���b�Z�[�W�ꗗ�\�����̃T�u�E�C���h�E<br>
 *
 * �ێ�ɂēo�^���ꂽ���b�Z�[�W�ɖ��ߍ��܂ꂽJavaScript��
 * ���s���܂��B
 */
function openWindow(url, style){
	'use strict';
    cw = window.open(url, "title", style);
    if (navigator.appName == "Netscape" && navigator.appVersion.charAt(0) >=3 ){
        cw.focus();
    }
}
/*
 * �σp�X���[�h�̓��̓`�F�b�N
 */
function checkAuthPassword() {
	'use strict';
	if(typeof(document.forms[0].pass) != 'undefined'){
	    if (document.forms[0].pass.value.length != LEN) {
	        alert ("\n�������p�X���[�h(" + LEN + "��)����͂��Ă��������B");
	        document.forms[0].pass.focus();
	        return false;
	    }
	}
	return true;
}
/* �|�b�v�A�b�v�E�B���h�E�\���t���O */
pop = false;
/*
 * �|�b�v�A�b�v�E�B���h�E�̎����N���[�Y
 */
function closeSubWin(){
	'use strict';
    if (pop && !window.sw1.closed) {
        window.sw1.close();
    }
}
/* �σ��b�Z�[�W�̈� */
	/* ��s���b�Z�[�W */
	function BankMsg_s() {
		'use strict';
		document.writeln("��-----�@��s���b�Z�[�W�@-----��");
		document.close();
	}
	function BankMsg_e() {
		'use strict';
		document.writeln("��-----�@��s���b�Z�[�W�@-----��");
		document.close();
	}
	/* �敪�C���[�W */
	function KbnImg_s() {
		'use strict';
		document.writeln("��-----�@�敪�C���[�W�@-----��");
		document.close();
	}
	function KbnImg_e() {
		'use strict';
		document.writeln("��-----�@�敪�C���[�W�@-----��");
		document.close();
	}
	/* �敪HTML�C���[�W */
	function KbnHtml_s() {
		'use strict';
		document.writeln("��-----�@ �敪�g�s�l�k �@-----��<br>");
		document.close();
	}
	function KbnHtml_e() {
		'use strict';
		document.writeln("��-----�@ �敪�g�s�l�k �@-----��");
		document.close();
	}
	/* �敪���b�Z�[�W */
	function KbnMsg_s() {
		'use strict';
		document.writeln("��-----�@�敪���b�Z�[�W�@-----��<br>");
		document.close();
	}
	function KbnMsg_e() {
		'use strict';
		document.writeln("��-----�@�敪���b�Z�[�W�@-----��");
		document.close();
	}
/*
 * "�w���v"�{�^������.(�����U��)
 *
 * "�w���v"�{�^���������Ƀw���v�E�B���h�E��\�����܂�.
 */
function openHelpWindow() {
	'use strict';
	//TODO �����N�� �v�C��
    sw1 = window.open("https://www.82bank.co.jp/neteb/help.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=550, width=520");
    sw1.focus();
}
/*
 * target blank link add message
 *
 */
function blankOpen(url,msg) {
	'use strict';
	alert(msg === void(0) || msg.length === 0? '���ꂩ��O���̃����N��y�[�W�ɃW�����v���܂��B' : msg);
	window.open(url,'_blank');
}
/*
 * �N�b�L�[�̎擾
 *
 * @param name
 * @return c
 */
function getCookie(name) {
	'use strict';
	var cookie = document.cookie,
		target = name + '=',
		cookieStart = cookie.indexOf(target),
		cookieEnd = cookie.indexOf(';', cookieStart) !== -1? cookie.indexOf(';', cookieStart) : cookie.length;
	return cookieStart !== -1? cookie.slice(cookieStart + target.length, cookieEnd) : '0';
}
/*
 * �N�b�L�[�̐ݒ�
 *
 * @param name
 * @param value
 * @param expiredays
 * @return
 */
function setCookie(name, value, expiredays){
	'use strict';
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = name + '=' + value + (expiredays === void(0)? ';' : '; path=/; expires = ' + exdate.toGMTString() + ';');
}
/*
 * size
 *
 */
function changeSize(slc) {
	'use strict';
	$('.fontSize li').eq(slc).addClass('current').siblings().removeClass('current');
	setCookie('selectSize', slc, 1);
	$('body').removeClass('setSizeS setSizeM setSizeL').addClass('setSize' + (['S', 'M', 'L'])[slc]);
}
/*
 * color
 *
 */
function changeColor(slc) {
	'use strict';
	$('.fontColor li').eq(slc).addClass('current').siblings().removeClass('current');
	setCookie('selectColor', slc, 1);
	$('body').removeClass('setColorA setColorB setColorC').addClass('setColor' + (['A', 'B', 'C'])[slc]);
}
/*
 * file
 * 
 */
function inputFile(obj){
	'use strict';
	$(obj).next('span').next('strong').text($(obj).val());
}
/*
 * ��ʕ\�����̏�������
 * 
 */
$(function(){
	'use strict';
	changeSize(parseInt(getCookie('selectSize')));
	changeColor(parseInt(getCookie('selectColor')));
});
$(window).load(function(){
	$('.tbl01Scroll').scroll(function(){
		$(this).find('thead td, thead th').css('top', $(this).scrollTop() + 'px');
	});
});
