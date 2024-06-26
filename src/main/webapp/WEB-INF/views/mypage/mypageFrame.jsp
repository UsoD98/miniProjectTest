<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>



<div id="mypageContent">
	<div id="profile_userIntro">
		<div id="profileSet">
			<div class="profile"></div>
			
			<br>
			<div id="horizonBtn">
				<form  id="uploadProfile" name="uploadProfile" enctype="multipart/form-data">
					<div class="filebox">
					    <input type="file" id="changeProfileImg" accept="image/*">
						<label for="changeProfileImg">프로필 사진 변경</label> 
					</div>
				</form>
				<button id="defaultProfile">프로필 사진 삭제</button>
			</div>
		</div>

		<div id="userIntro">
			<div id="userIntroContent">
				
				<div class="horizonBox">
					<div class="verticalBox">
						<div>&#9812; 아이디</div>
						<div><p class= "userP" id="memId"></p></div>
					</div>
					
					<div class="verticalBox">
						<div>&#9786; 이름</div>
						<div><p class= "userP"  id="memName"></p></div>
					</div>
					
					<div class="verticalBox">
						<div>&#9743; 전화번호</div>
						<div><p class= "userP" id="memPhone"></p></div>
					</div>
					
					<div class="verticalBox">
						<div>&#9993; 이메일</div>
						<div><p class= "userP" id="memEmail"></p></div>
					</div>
					
					<div class="verticalBox">
						<div>&#9892; 성별</div>
						<div><p class= "userP" id="memGender"></p></div>
					</div>
					
					<div class="verticalBox " id="lastVerticalBox">
						<div>&#9752; 가입일</div>
						<div><p class= "userP" id="memJoinDate"></p></div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
	
	<div class="btnRight">
		<input type="button" onclick="location.href='/mypage/memberUpdate'" value="회원정보 수정" id="mypageChangeBtn" class="mypageChangeBtn">		
	</div>
	

	<div id="boxes">
		<div class="contentBox" id="contentBox1">
			<div class="boxContent">
			
				<div id="box1Content">
					<div class="boxHeader"><strong>나의 대표 글</strong></div>
					
					<a id="horizonBoxA">
						<div class="horizonBoxL"> 
							<div id="box1Img"></div>
							<div class="horizon">
								<div id="box1Title"></div>
								<div id="box1Txt"></div>
								<!-- <div id="box1TxtOver">. . .</div> -->
							</div>
						</div>
					</a>
				</div>	
			</div>
		</div>
		<div class="btnRight">
				<input type="button" id="goMyBoard" onclick="location.href='/mypage/myBoard'" value="대표글 변경" class="mypageChangeBtn">	
				<input type="button" id="deleteMyBoard" value="대표글 삭제" class="mypageChangeBtn">	
		</div>
			
		
		<div class="contentBox">
			<div class="boxContent">
				<div id="box2Content">
					<div class="boxHeader"><strong>나의 캘린더</strong></div><br> <br>
					<div id="myCalendarImg">
						<div id="datepicker"></div>
						<div class="vertical-container">
							<div id="selectDate">선택한 날짜: </div><br>
							
							<div id="myCalendarTxt">
								<table id="myCalTable">
									<!-- 동적 추가 -->
								</table>
								
							</div>
						</div>
					</div>
					<!--캘린더 끝-->
					
					
				</div>
			</div>
		</div>
		
		<div class="btnRight">
			<input type="button" onclick="location.href='/mypage/myCalendar'" value="캘린더 수정" class="mypageChangeBtn">		
		</div>
	</div>
</div>

