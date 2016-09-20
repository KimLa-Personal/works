var swkKeySet = [
	[
		['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', ' ', '0', 'l', '2'],
		['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '3', '4', '5'],
		['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', ' ', '6', '7', '8'],
		['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', ' ', '9', ' ']
	],[
		['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	]
];
function swkShow(obj, keyMode) {
	'use strict';
	if(!$(obj).prop('readonly') || $('#swkAbsBg').length !== 0){ return; }
	var aryOffset = [$(obj).offset().top + 10 + $(obj).outerHeight(), $(obj).offset().left - 10],
		strHtml = '<a id="swkAbsBg" href="javascript:swkHide();"></a><div class="swkeyboardList swkAbs" style="top: ' +
			aryOffset[0] + 'px; left: ' + aryOffset[1] + 'px;">';
		for(var i = 0; i < swkKeySet[keyMode].length; i++){
			strHtml += '<ul>';
			for(var j = 0; j < swkKeySet[keyMode][i].length; j++){
				strHtml += swkKeySet[keyMode][i][j] === ' '?
					'<li></li>' : '<li><a class="btn01 txtM btn01SizeS btn01noMrk" href="javascript:swkAdd(\'' +
					$(obj).attr('id') + '\',' + keyMode + ',' + i + ',' + j + ');">' + swkKeySet[keyMode][i][j] + '</a></li>';
			}
			strHtml += '</ul>';
		}
		$('body').append(strHtml + '<ul class="swkNav">' +
			'<li><a class="btn01 txtM btn01SizeS btn01noMrk" href="javascript:swkDel(\'' + $(obj).attr('id') + '\', 1);">一文字削除</a></li>' +
			'<li><a class="btn01 txtM btn01SizeS btn01noMrk" href="javascript:swkDel(\'' + $(obj).attr('id') + '\', 0);">クリア</a></li>' +
			'<li><a class="btn01 txtM btn01SizeS btn01noMrk" href="javascript:swkHide();">閉じる</a></li>' +
		'</ul></div>');
}
function swkHide() {
	'use strict';
	$('#swkAbsBg, .swkeyboardList.swkAbs').remove();
}
function swkCheck(obj, id) {
	'use strict';
	if($(obj).prop('checked')){
		$('#' + id).prop('readonly', true).blur();
	}else{
		if(!confirm('ログオンパスワードをお守りし、より安全にご利用いただくために、ソフトウェアキーボードの使用をお勧めします。\nソフトウェアキーボードを使用しないということで、本当によろしいですか？')) {
			$(obj).prop('checked', true);
		}else {
			$('#' + id).prop('readonly', false).focus();
		}
	}
}
function swkAdd(id, h, i, j) {
	'use strict';
	var target = $('#' + id),
		maxL = target.attr('maxlength') !== void(0)? parseInt(target.attr('maxlength')) : target.val().length +1;
	if(target.val().length === maxL){ return; }
	target.val(target.val() + swkKeySet[h][i][j]).focus();
}
function swkDel(id, num) {
	'use strict';
	var target = $('#' + id);
	target.val(target.val().slice(0, target.val().length - (num === 0? target.val().length : num))).focus();
}