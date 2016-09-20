function include(name, fnc) {
	'use strict';
	var html;
	switch(true){
		case(name === 'header01'):
			html = '<div id="header" class="clearfix">' +
				'<p id="logo"><img src="../images/logo_inban.png" alt="八十二銀行 法人インターネットバンキング"></p>' +
					'<ul class="utilityNavi">' +
						'<li class="fontColor">' +
						'<p>色変更</p>' +
						'<ul>' +
							'<li><a href="javascript:changeColor(0);">標準</a></li>' +
							'<li><a href="javascript:changeColor(1);">カラー1</a></li>' +
							'<li><a href="javascript:changeColor(2);">カラー2</a></li>' +
						'</ul>' +
					'</li>' +
				'</ul>' +
				'<ul class="utilityNavi">' +
					'<li class="fontSize">' +
						'<p>文字サイズ変更</p>' +
						'<ul>' +
							'<li><a href="javascript:changeSize(0);">小</a></li>' +
							'<li><a href="javascript:changeSize(1);">中</a></li>' +
							'<li><a href="javascript:changeSize(2);">大</a></li>' +
						'</ul>' +
					'</li>' +
				'</ul>' +
			'</div>';
			break;
		case(name === 'header02'):
			html = '<div id="header" class="clearfix">' +
				'<p id="logo"><img src="../images/logo_inban.png" alt="八十二銀行 法人インターネットバンキング"></p>' +
				'<ul class="utilityNavi">' +
					'<li><a href="#DUUMY">ヘルプ・よくあるご質問</a></li>' +
					'<li><a href="#DUUMY">お問い合わせ</a></li>' +
					'<li><a href="#DUUMY">サイトマップ</a></li>' +
					'<li class="fontColor">' +
						'<p>色変更</p>' +
						'<ul>' +
							'<li><a href="javascript:changeColor(0);">標準</a></li>' +
							'<li><a href="javascript:changeColor(1);">カラー1</a></li>' +
							'<li><a href="javascript:changeColor(2);">カラー2</a></li>' +
						'</ul>' +
					'</li>' +
				'</ul>' +
				'<ul class="utilityNavi">' +
					'<li class="fontSize">' +
						'<p>文字サイズ変更</p>' +
						'<ul>' +
							'<li><a href="javascript:changeSize(0);">小</a></li>' +
							'<li><a href="javascript:changeSize(1);">中</a></li>' +
							'<li><a href="javascript:changeSize(2);">大</a></li>' +
						'</ul>' +
					'</li>' +
					'<li class="logout"><a href="../au/Logoff.html">ログオフ</a></li>' +
				'</ul>' +
			'</div>' +
			'<ul id="menu" class="clearfix">' +
				'<li>' +
					'<a href="#modalMenu1"><img src="../images/btn_menu_01.gif" alt=""></a>' +
				'</li>' +
				'<li>' +
					'<a href="#modalMenu1"><img src="../images/btn_menu_02.gif" alt=""></a>' +
				'</li>' +
				'<li>' +
					'<a href="#modalMenu1"><img src="../images/btn_menu_03.gif" alt=""></a>' +
				'</li>' +
				'<li>' +
					'<a href="#modalMenu1"><img src="../images/btn_menu_04.gif" alt=""></a>' +
				'</li>' +
				'<li>' +
					'<a href="#modalMenu1"><img src="../images/btn_menu_05.gif" alt=""></a>' +
				'</li>' +
				'<li>' +
					'<a href="#modalMenu1"><img src="../images/btn_menu_06.gif" alt=""></a>' +
				'</li>' +
			'</ul>';
			break;
		case(name === 'footer01'):
			html = '<div id="footer">' +
				'<div class="clearfix" id="footerLinkList01">' +
					'<dl class="fLL01">' +
						'<dt><a href="https://www.82bank.co.jp/">個人のお客さま</a></dt>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002000/hpg000001946.htm">ふやす・ためる</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000100/hpg000000070.htm">かりる</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000006000/hpg000005996.htm">そなえる</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002000/hpg000001956.htm">便利につかう</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000300/hpg000000217.htm">八十二のライフプラン</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000001800/hpg000001781.htm">インターネットバンキング</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000600/hpg000000599.htm">キャンペーン一覧</a></dd>' +
					'</dl>' +
					'<dl class="fLL02">' +
						'<dt><a href="https://www.82bank.co.jp/hp/menu000000100/hpg000000047.htm">法人・個人事業主のお客さま</a></dt>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000100/hpg000000048.htm">資金サポート</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000100/hpg000000049.htm">事務合理化・IT化</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/houjin/keiei_support.html">経営・事業サポート</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000001800/hpg000001795.htm">ネットEB</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000004800/hpg000004761.htm">＜でんさい＞サービス</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000006500/hpg000006451.htm">八十二外為ネットサービス</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000003800/hpg000003722.htm">ネット明細サービス</a></dd>' +
					'</dl>' +
					'<dl class="fLL03">' +
						'<dt><a href="https://www.82bank.co.jp/hp/menu000001800/hpg000001793.htm">株主・投資家の皆さま</a></dt>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000200/hpg000000130.htm">経営指標の推移</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000469.htm">決算短信等</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000480.htm">有価証券報告書</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000489.htm">ディスクロージャー</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000600/hpg000000524.htm">IR説明会資料</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002700/hpg000002625.htm">格付情報</a></dd>' +
					'</dl>' +
					'<dl class="fLL04">' +
						'<dt><a href="https://www.82bank.co.jp/hp/menu000001900/hpg000001838.htm">八十二グループのすがた</a></dt>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000001900/hpg000001839.htm">会社概要</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000004200/hpg000004113.htm">経営方針・長期経営計画</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000006100/hpg000006085.htm">コーポレートガバナンス</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000004200/hpg000004111.htm">役員一覧</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000004200/hpg000004112.htm">組織図</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002200/hpg000002187.htm">八十二銀行のあゆみ</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000001900/hpg000001840.htm">八十二グループ</a></dd>' +
					'</dl>' +
					'<dl class="fLL05">' +
						'<dt><a href="https://www.82bank.co.jp/hp/menu000001800/hpg000001736.htm">採用情報</a></dt>' +
						'<dd><a href="http://recruit.82bank.co.jp/" target="_blank">新卒採用情報</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002800/hpg000002787.htm">中途採用情報</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002700/hpg000002664.htm">キャリアリターン</a></dd>' +
						'<dd><a href="javascript:blankOpen(\'https://www.82staff-service.co.jp/\');">八十二スタッフサービス</a></dd>' +
					'</dl>' +
				'</div>' +
				'<p class="txt01"><!--' +
					'--><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000450.htm">勧誘方針・保険募集指針</a> ｜ <!--' +
					'--><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000448.htm">個人情報の保護について</a> ｜ <!--' +
					'--><a href="https://www.82bank.co.jp/hp/menu000003100/hpg000003060.htm">預金保険制度について</a> ｜ <!--' +
					'--><a href="https://www.82bank.co.jp/hp/menu000006100/hpg000006005.htm">金融取引に関わる方針・注意事項</a> ｜ <!--' +
					'--><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000413.htm">サイトのご利用にあたって</a><!--' +
				'--></p>' +
				'<p class="txt02"><!--' +
					'--><span>商号等</span>　　株式会社八十二銀行　登録金融機関　関東財務局長（登金）第49号　　　<!--' +
					'--><span>加入協会</span>　　日本証券業協会　一般社団法人金融先物取引業協会<!--' +
				'--></p>' +
				'<p id="txtCopyright">Copyright &copy; 2015 The Hachijuni Bank, Ltd. All rights reserved.</p>' +
			'</div>' +
			'<div id="btnPagetop"><a href="#">トップ</a></div>';
			break;
	}
	document.write(html);
	if(fnc) { fnc(); }
}
function menuCurrent(num) {
	'use strict';
	if($('#menu').length !== 0){ $('#menu li:eq(' + num + ') a').addClass('current'); }
}