/*header*/
$(function(){
	//로그인이 안되어 있다면
	$.ajax({
		type:'post'
		,url:'/mypage/getMemId'
		,success: function(data){
			if(data != '' && data != null){//로그인이 안되어 있으면
				$('#imUser').hide();
				$('#imNotUser').show();
			}else{
				$('#imNotUser').hide();
				$('#imUser').show();
			}
		}
	});
	

});//function

function toggleNavSections() {
  var navSection = document.querySelector('.nav_section');
  navSection.classList.toggle('show');
}



/*contnent*/
/*nav*/
window.addEventListener('scroll', function() {
	var nav = document.getElementById('nadeuliNav');
	var frameNav = document.getElementById('frameNav');

	// nav 또는 frameNav가 null인 경우 함수를 종료합니다.
	if (!nav || !frameNav) {
		return;
	}

	var scrollPosition = window.pageYOffset;
	var navHeight = nav.offsetHeight;
	var frameNavHeight = frameNav.offsetHeight;
	var navMarginTop = parseInt(window.getComputedStyle(nav).marginTop, 50);
	var navMarginBottom = parseInt(window.getComputedStyle(nav).marginBottom, 50);

	var frameNavTop = frameNav.offsetTop;
	var frameNavBottom = frameNavTop + frameNavHeight;

	if (scrollPosition <= frameNavTop) {
		// 스크롤 위치가 #frameNav 영역의 맨 위에 도달했을 때
		nav.style.top = frameNavTop + 'px';
	} else if (scrollPosition + navHeight >= frameNavBottom) {
		// 스크롤 위치가 #frameNav 영역의 맨 아래에 도달했을 때
		nav.style.top = (frameNavBottom - navHeight) + 'px';
	} else {
		// 그 외의 경우
		nav.style.top = scrollPosition + 'px';
	}
});

$(function() {
	$(".nav-content").hide();

	$("#nadeuliNav > li").click(function(event) { // event 매개변수 추가
		$(this).children(".nav-content").slideToggle(300);
		event.stopPropagation();
	});
	$(".nav-content").click(function(event) {
		event.stopPropagation();
	});
});


/*로그인 페이지 */
$("#loginBtn").click(function(){
	window.location.href="/member/loginForm";
} );
/*로그아웃*/
$("#logoutBtn").click(function(){
	
	$.ajax({
		type:'get'
		,url:'/member/logout'
		,success: function(){
			window.location.href='/';
		},error:function(xhr, status, error){
			console.error("Status: " + status + "\nError: " + error + "\nResponse: " + xhr.responseText);
	    }
	});//ajax
});//logoutBtn.click
/* 마이페이지 */
$("#mypageBtn").click(function(){
	$.ajax({
		type:'get'
		,url:'/mypage/mypage'
		,success: function(){
			window.location.href='/mypage/mypage';
		},error:function(xhr, status, error){
			console.error("Status: " + status + ", Error: " + error + ", Response: " + xhr.responseText);
	    }
	});//ajax
});//mypageBtn.click
/*회원가입페이지 */
$("#JoinBtn").click(function(){
	window.location.href="/member/memberJoinForm";
} );
/*page content*/


/*footer*/
function bottomFunction() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

function topFunction() {
  window.scrollTo({
    top: document.body.scrollTop,
    behavior: 'smooth'
  });
}

/*site map*/
function goToSite1() {
	var selectedSite1 = document.getElementById('site-select1').value;
	if (selectedSite1 != "") {
		window.open(selectedSite1, '_blank'); // 새 탭에서 선택한 사이트를 엽니다.
	}
}
function goToSite2() {
	var selectedSite2 = document.getElementById('site-select2').value;
	if (selectedSite2 != "") {
		window.open(selectedSite2, '_blank'); // 새 탭에서 선택한 사이트를 엽니다.
	}
}
/*main footer*/