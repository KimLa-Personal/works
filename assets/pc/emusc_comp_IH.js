function include(name, fnc) {
	'use strict';
	var html;
	switch(true){
		case(name === 'header01'):
			html = '<div id="header" class="clearfix">' +
				'<p id="logo"><img src="../images/logo_inban.png" alt="���\���s �@�l�C���^�[�l�b�g�o���L���O"></p>' +
					'<ul class="utilityNavi">' +
						'<li class="fontColor">' +
						'<p>�F�ύX</p>' +
						'<ul>' +
							'<li><a href="javascript:changeColor(0);" class="current">�W��</a></li>' +
							'<li><a href="javascript:changeColor(1);">�J���[1</a></li>' +
							'<li><a href="javascript:changeColor(2);">�J���[2</a></li>' +
						'</ul>' +
					'</li>' +
				'</ul>' +
				'<ul class="utilityNavi">' +
					'<li class="fontSize">' +
						'<p>�����T�C�Y�ύX</p>' +
						'<ul>' +
							'<li><a href="javascript:changeSize(0);" class="current">��</a></li>' +
							'<li><a href="javascript:changeSize(1);">��</a></li>' +
							'<li><a href="javascript:changeSize(2);">��</a></li>' +
						'</ul>' +
					'</li>' +
				'</ul>' +
			'</div>';
			break;
		case(name === 'header02'):
			html = '<div id="header" class="clearfix">' +
				'<p id="logo"><img src="../images/logo_inban.png" alt="���\���s �@�l�C���^�[�l�b�g�o���L���O"></p>' +
				'<ul class="utilityNavi">' +
					'<li><a href="#DUUMY">�w���v�E�悭���邲����</a></li>' +
					'<li><a href="#DUUMY">���₢���킹</a></li>' +
					'<li><a href="#DUUMY">�T�C�g�}�b�v</a></li>' +
					'<li class="fontColor">' +
						'<p>�F�ύX</p>' +
						'<ul>' +
							'<li><a href="javascript:changeColor(0);" class="current">�W��</a></li>' +
							'<li><a href="javascript:changeColor(1);">�J���[1</a></li>' +
							'<li><a href="javascript:changeColor(2);">�J���[2</a></li>' +
						'</ul>' +
					'</li>' +
				'</ul>' +
				'<ul class="utilityNavi">' +
					'<li class="fontSize">' +
						'<p>�����T�C�Y�ύX</p>' +
						'<ul>' +
							'<li><a href="javascript:changeSize(0);" class="current">��</a></li>' +
							'<li><a href="javascript:changeSize(1);">��</a></li>' +
							'<li><a href="javascript:changeSize(2);">��</a></li>' +
						'</ul>' +
					'</li>' +
					'<li class="logout"><a href="../au/Logoff.html">���O�I�t</a></li>' +
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
						'<dt><a href="https://www.82bank.co.jp/">�l�̂��q����</a></dt>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002000/hpg000001946.htm">�ӂ₷�E���߂�</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000100/hpg000000070.htm">�����</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000006000/hpg000005996.htm">���Ȃ���</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002000/hpg000001956.htm">�֗��ɂ���</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000300/hpg000000217.htm">���\��̃��C�t�v����</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000001800/hpg000001781.htm">�C���^�[�l�b�g�o���L���O</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000600/hpg000000599.htm">�L�����y�[���ꗗ</a></dd>' +
					'</dl>' +
					'<dl class="fLL02">' +
						'<dt><a href="https://www.82bank.co.jp/hp/menu000000100/hpg000000047.htm">�@�l�E�l���Ǝ�̂��q����</a></dt>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000100/hpg000000048.htm">�����T�|�[�g</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000100/hpg000000049.htm">�����������EIT��</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/houjin/keiei_support.html">�o�c�E���ƃT�|�[�g</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000001800/hpg000001795.htm">�l�b�gEB</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000004800/hpg000004761.htm">���ł񂳂����T�[�r�X</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000006500/hpg000006451.htm">���\��O�׃l�b�g�T�[�r�X</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000003800/hpg000003722.htm">�l�b�g���׃T�[�r�X</a></dd>' +
					'</dl>' +
					'<dl class="fLL03">' +
						'<dt><a href="https://www.82bank.co.jp/hp/menu000001800/hpg000001793.htm">����E�����Ƃ̊F����</a></dt>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000200/hpg000000130.htm">�o�c�w�W�̐���</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000469.htm">���Z�Z�M��</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000480.htm">�L���،��񍐏�</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000489.htm">�f�B�X�N���[�W���[</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000000600/hpg000000524.htm">IR�������</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002700/hpg000002625.htm">�i�t���</a></dd>' +
					'</dl>' +
					'<dl class="fLL04">' +
						'<dt><a href="https://www.82bank.co.jp/hp/menu000001900/hpg000001838.htm">���\��O���[�v�̂�����</a></dt>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000001900/hpg000001839.htm">��ЊT�v</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000004200/hpg000004113.htm">�o�c���j�E�����o�c�v��</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000006100/hpg000006085.htm">�R�[�|���[�g�K�o�i���X</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000004200/hpg000004111.htm">�����ꗗ</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000004200/hpg000004112.htm">�g�D�}</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002200/hpg000002187.htm">���\���s�̂����</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000001900/hpg000001840.htm">���\��O���[�v</a></dd>' +
					'</dl>' +
					'<dl class="fLL05">' +
						'<dt><a href="https://www.82bank.co.jp/hp/menu000001800/hpg000001736.htm">�̗p���</a></dt>' +
						'<dd><a href="http://recruit.82bank.co.jp/" target="_blank">�V���̗p���</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002800/hpg000002787.htm">���r�̗p���</a></dd>' +
						'<dd><a href="https://www.82bank.co.jp/hp/menu000002700/hpg000002664.htm">�L�����A���^�[��</a></dd>' +
						'<dd><a href="javascript:blankOpen(\'https://www.82staff-service.co.jp/\');">���\��X�^�b�t�T�[�r�X</a></dd>' +
					'</dl>' +
				'</div>' +
				'<p class="txt01"><!--' +
					'--><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000450.htm">���U���j�E�ی���W�w�j</a> �b <!--' +
					'--><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000448.htm">�l���̕ی�ɂ���</a> �b <!--' +
					'--><a href="https://www.82bank.co.jp/hp/menu000003100/hpg000003060.htm">�a���ی����x�ɂ���</a> �b <!--' +
					'--><a href="https://www.82bank.co.jp/hp/menu000006100/hpg000006005.htm">���Z����Ɋւ����j�E���ӎ���</a> �b <!--' +
					'--><a href="https://www.82bank.co.jp/hp/menu000000500/hpg000000413.htm">�T�C�g�̂����p�ɂ�������</a><!--' +
				'--></p>' +
				'<p class="txt02"><!--' +
					'--><span>������</span>�@�@������Д��\���s�@�o�^���Z�@�ց@�֓������ǒ��i�o���j��49���@�@�@<!--' +
					'--><span>��������</span>�@�@���{�،��Ƌ���@��ʎВc�@�l���Z�敨����Ƌ���<!--' +
				'--></p>' +
				'<p id="txtCopyright">Copyright &copy; 2015 The Hachijuni Bank, Ltd. All rights reserved.</p>' +
			'</div>' +
			'<div id="btnPagetop"><a href="#">�g�b�v</a></div>';
			break;
	}
	document.write(html);
	if(fnc) { fnc(); }
}
function menuCurrent(num) {
	'use strict';
	if($('#menu').length !== 0){ $('#menu li:eq(' + num + ') a').addClass('current'); }
}