<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원정보 수정</title>
<script src="http://code.jQuery.com/jquery-3.7.1.min.js"></script>

<!-- css -->
<link rel="stylesheet" type="text/css" href="/frame/css/frame.css">
<link rel="stylesheet" type="text/css" href="/mypage/css/memberUpdate.css">
    
</head>
<body>
<header><jsp:include page="../frame/header.jsp"></jsp:include></header>

    <div id="frameContent">
    <div id="frameNav"><jsp:include page="../frame/nav.jsp"></jsp:include></div>
        <div id="content">
	<form id="memberUpdate" name="memberUpdate">
		<table id="updateTable">
			<thead>
				<tr>
					<th colspan="2">
						<p>회원정보 수정</p>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>아이디 :</th>
					<td><input type="text" readonly name="updateId" id="updateId">
					</td>
				</tr>

				<tr>
					<th>이름 :</th>
					<td>
						<input type="text" name="name" id="updateName">
						<div id="updateNameDiv"></div>
					</td>
				</tr>
				
				<tr>
					<th>비밀번호 :</th>
					<td>
						<input type="password" name="updatePwd" id="updatePwd">
						<div id="updatePwdDiv"></div>
					</td>
				</tr>

				<tr>
					<th>비밀번호 확인 :</th>
					<td>
						<input type="password" name="updateRepwd" id="updateRepwd">
						<div id="updateRepwdDiv"></div>
					</td>
				</tr>

				<tr>
					<th>전화번호 :</th>
					<td>
						<input type="text" name="updateTel" id="updateTel">
						<div id="updateTelDiv"></div>
					</td>
				</tr>

				<tr>
					<th>E-mail :</th>
					<td>
						<input type="text" name="updateEmail" id="updateEmail">
						<div id="updateEmailDiv"></div>
					</td>
				</tr>
				
				<tr>
					<th>성별</th>
					<td>
						<label for="male">male</label><input type="radio" name="updateGender" id="updateMale" value="male"></label>
						<label for="female">female</label><input type="radio" name="updateGender" id="updateFemale" value="female"></label>
						<div id="updateGenderDiv"></div>
					</td>
				</tr>
			</tbody>

			<tfoot>
				<tr>
					<th colspan="2">
						<input type="button" id="updateSubmit" value="제출하기"> 
						<input type="button" id="updateReset" value="초기화">
					</th>
				</tr>
			</tfoot>
		</table>
	</form>
	        </div>
    </div>
  <div id="upDownBtn">
        <a href="#"><button id="upBtn">위로</button></a>
        <a href="#bottom"><button id="downBtn">아래</button></a>
    </div>
    <footer><jsp:include page="../frame/footer.jsp"></jsp:include></footer>
<div id="bottom"></div>

<!-- js -->
<script src="/frame/js/frame.js"></script>
<script src="/mypage/js/memberUpdate.js"></script>
</body>
</html>