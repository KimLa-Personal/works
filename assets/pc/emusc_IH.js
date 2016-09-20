/* ========================================================================== *
 *  eMuSC 法人インターネットバンキング 外部JavaScriptファイル
 *  file name : emusc_IH.js
 *  LastMod   : 2016/09/12
 * ========================================================================== *
 */
/*
 * "印刷"ボタン制御.
 *
 * "印刷"ボタン押下時にフォーカスを"service"フレームに移し、印刷ダイアログを表示します.
 */
function prnClientArea() {
	'use strict';
    top.service.focus();
    window.print();
}
/*
 * "ヘルプ"ボタン制御.(ログオン画面)
 *
 * "ヘルプ"ボタン押下時にヘルプウィンドウを表示します.
 */
function openLogonHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("http://www.82bank.co.jp/neteb/h_logon3.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=550, width=520");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(可変パスワード利用者用画面)
 *
 * "ヘルプ"ボタン押下時にヘルプウィンドウを表示します.
 */
function openLogonHelpWindowStaff() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_logon3.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=550, width=520");
    sw1.focus();
}
function openLogonRiyouHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_otp_riyou.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=550, width=520");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(情報リンク用)
 *
 * "ヘルプ"ボタン押下時にヘルプウィンドウを表示します.
 */
function openEbHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/help2.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=30, left=30, height=400, width=400");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(メインメニュー)
 *
 * "ヘルプ"ボタン押下時にヘルプウィンドウを表示します.
 */
function openMenuHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/help.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=550, width=520");
    sw1.focus();
    return false;
}
/*
 * "ヘルプ"ボタン制御.(CSV)
 *
 * CSVダウンロード用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openCsvHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/banking/csv.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=470, width=620");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(口座確認)
 *
 * 口座確認ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openKouzaKakuninHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/k_kakunin.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=470, width=620");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(受け取り人名)
 *
 * 受取人名入力ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openKMeigiHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/k_meigi.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=470, width=620");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(口座確認リボーク)
 *
 * 口座確認リボークヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openKRevokeHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/k_revoke.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=470, width=620");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(総振ダウンロード)
 *
 * 総振ダウンロード用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openSTDlHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_stdown.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(給振ダウンロード)
 *
 * 給振ダウンロード用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openATDlHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_atdown.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(給振ダウンロード)
 *
 * 新給振ダウンロード用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openNKDlHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_atdown.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(口振ダウンロード)
 *
 * 口振ダウンロード用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openKFDlHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_kfdown.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(口振取引状況ダウンロード)
 *
 * 口振取引状況ダウンロード用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openKFKekkaHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_kfkekka.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(口振取引状況全銀ダウンロード)
 *
 * 口振取引状況全銀ダウンロードボタン用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openKFZGBtnKekkaHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_kfkekka_zengin.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(口振取引状況全銀ダウンロード)
 *
 * 口振取引状況全銀ダウンロード明細用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openKFZGMSKekkaHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/k_code_upload.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}

/*
 * "ヘルプ"ボタン制御.(ワイドネット取引状況ダウンロード)
 *
 * ワイドネット取引状況ダウンロード用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openWNKekkaHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_wnkekka.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(ワイドネット取引状況全銀ダウンロード)
 *
 * ワイドネット取引状況全銀ダウンロードボタン用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openWNZGBtnKekkaHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/h_wnkekka_zengin.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}
/*
 * "ヘルプ"ボタン制御.(ワイドネット取引状況全銀ダウンロード)
 *
 * ワイドネット取引状況全銀ダウンロード明細用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openWNZGMSKekkaHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/k_code_wnupload.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}

/*
 * "ヘルプ"ボタン制御.(地方税)
 *
 * 地方税用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openRPHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/chihouzei.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=400, width=600");
    sw1.focus();
}

/*
 * "ヘルプ"ボタン制御.(MPN)
 *
 * MPN用ヘルプへのリンク押下時にヘルプウィンドウを表示します.
 */
function openMpHelpWindow() {
	'use strict';
	// リンク先 要修正
    sw1 = window.open("https://www.82bank.co.jp/neteb/mpn/fee.html",
                      "window1",
                      "menubar=no, toolbar=no, resizable=no, status=no, scrollbars=yes, top=5, left=5, height=500, width=700");
    sw1.focus();
}
/*
 * 右クリック禁止.
 *
 * 右クリック禁止を制御します.
 * false:右クリック禁止, true:右クリック有効となります.
 *
 */
function chkContextMenu() {
	'use strict';
    return true;
}
/*
 * メッセージ一覧表示時のサブウインドウ<br>
 *
 * 保守にて登録されたメッセージに埋め込まれたJavaScriptを
 * 実行します。
 */
function openWindow(url, style){
	'use strict';
    cw = window.open(url, "title", style);
    if (navigator.appName == "Netscape" && navigator.appVersion.charAt(0) >=3 ){
        cw.focus();
    }
}
/*
 * ボタン画像読込.
 * 
 * 画像を事前に読み込んでおきます.
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
 * ログオフ用.
 * 
 * メニューのターゲットを変更します.
 */
function toTop() {
	'use strict';
    document.form1.target = "_top";
    return true;
}
/*
 * "タイムアウト"タイマー表示
 *
 * 5分間のカウントダウンタイマーを表示します
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
    //残り１分でアラート、タイムアウト予定時刻を表示
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
        alert( "しばらくボタンを押されていません。１分以内にボタン等のご操作が無い場合、" + "\n" +
               "お客さまのセキュリティのため、自動的に接続を終了させていただきます。" + "\n\n" + 
               "現在時刻　　　　　　　 ：" + dd.getHours() + ":" + min_dd + ":" + sec_dd + "\n" + 
               "タイムアウト予定時刻　：" + dd2.getHours() + ":" + min_dd2 + ":" + sec_dd2  );
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
 * メッセージ一覧表示時のサブウインドウ<br>
 *
 * 保守にて登録されたメッセージに埋め込まれたJavaScriptを
 * 実行します。
 */
function openWindow(url, style){
	'use strict';
    cw = window.open(url, "title", style);
    if (navigator.appName == "Netscape" && navigator.appVersion.charAt(0) >=3 ){
        cw.focus();
    }
}
/*
 * 可変パスワードの入力チェック
 */
function checkAuthPassword() {
	'use strict';
	if(typeof(document.forms[0].pass) != 'undefined'){
	    if (document.forms[0].pass.value.length != LEN) {
	        alert ("\n正しいパスワード(" + LEN + "桁)を入力してください。");
	        document.forms[0].pass.focus();
	        return false;
	    }
	}
	return true;
}
/* ポップアップウィンドウ表示フラグ */
pop = false;
/*
 * ポップアップウィンドウの自動クローズ
 */
function closeSubWin(){
	'use strict';
    if (pop && !window.sw1.closed) {
        window.sw1.close();
    }
}
/* 可変メッセージ領域 */
	/* 銀行メッセージ */
	function BankMsg_s() {
		'use strict';
		document.writeln("▽-----　銀行メッセージ　-----▽");
		document.close();
	}
	function BankMsg_e() {
		'use strict';
		document.writeln("△-----　銀行メッセージ　-----△");
		document.close();
	}
	/* 区分イメージ */
	function KbnImg_s() {
		'use strict';
		document.writeln("▽-----　区分イメージ　-----▽");
		document.close();
	}
	function KbnImg_e() {
		'use strict';
		document.writeln("△-----　区分イメージ　-----△");
		document.close();
	}
	/* 区分HTMLイメージ */
	function KbnHtml_s() {
		'use strict';
		document.writeln("▽-----　 区分ＨＴＭＬ 　-----▽<br>");
		document.close();
	}
	function KbnHtml_e() {
		'use strict';
		document.writeln("△-----　 区分ＨＴＭＬ 　-----△");
		document.close();
	}
	/* 区分メッセージ */
	function KbnMsg_s() {
		'use strict';
		document.writeln("▽-----　区分メッセージ　-----▽<br>");
		document.close();
	}
	function KbnMsg_e() {
		'use strict';
		document.writeln("△-----　区分メッセージ　-----△");
		document.close();
	}
/*
 * "ヘルプ"ボタン制御.(総合振込)
 *
 * "ヘルプ"ボタン押下時にヘルプウィンドウを表示します.
 */
function openHelpWindow() {
	'use strict';
	//TODO リンク先 要修正
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
	alert(msg === void(0) || msg.length === 0? 'これから外部のリンク先ページにジャンプします。' : msg);
	window.open(url,'_blank');
}
/*
 * クッキーの取得
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
 * クッキーの設定
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
 * 画面表示時の初期処理
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
