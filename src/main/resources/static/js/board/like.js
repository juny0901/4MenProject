//상세게시글 좋아요 클릭시
function likeUp() {
	var frm_read = $('#frm_read');
	var boardNum = $('#boardNum', frm_read).val();
	console.log("boardNum, userId : " + boardNum + "," + userId);
	//ajax start
	$.ajax({
		url: '/board/updateBoardLike',
		type: 'post',
		data: 'boardNum=' + boardNum,
		success: function(data) {
			var msg = '';
			var like_img = '';
			msg += data.msg;
			alert(msg);

			if (data.like_check == 0) {
				like_img = "./images/dislike.png";
			} else {
				like_img = "./images/like.png";
			}
			$('#like_img', frm_read).attr('src', like_img);
			$('#like_cnt').html(data.like_cnt);
			$('#like_check').html(data.like_check);
		},
		error: function(request, status, error) {
			alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
		}
	});
	//ajax end
}
