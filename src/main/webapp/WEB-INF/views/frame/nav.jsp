<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>

<ul id="nadeuliNav">
	<li><a href="/">홈</a></li>
	<br>

	<li>지역별여행
		<ul class="nav-content">
			<li><a href="/map/map">지도</a></li>
		</ul>
	</li>
	<br>

	<li>테마여행
		<ul class="nav-content">
			<li><a href="/thema/themaBoardList">테마여행 소개</a></li>
		</ul>
	</li>
	<br>
	
	<li>후기
		<ul class="nav-content">
				<li><a href="/review/reviewList?pg=1">후기 목록</a></li>
				<li><a href="/review/reviewWriteForm">후기 쓰기</a></li>
		</ul>
	</li>
	<br>


	<li>고객센터
		<ul class="nav-content">
			<li><a href="/serviceCenter/ServiceCenter">공지사항</a></li>
			<li><a href="/serviceCenter/Inquiry">1 : 1 문의</a></li>
			<li><a href="/serviceCenter/Faq">F A Q</a></li>
		</ul>
	</li>
	<br>
	<li>마이페이지
		<ul class="nav-content">
			<li><a href="/mypage/mypage">회원정보관리</a>
				<ul>
					<li><a href="/mypage/memberUpdate">회원정보 수정</a></li>
					<li><a href="/mypageRead/myBoard">내가 쓴 글</a></li>
				</ul>
			</li>
			
			<li><a href="/mypage/myCalendar">나의 일정 관리</a></li>
		</ul>
	</li>
</ul>
