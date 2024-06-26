function checkId() {
    var MEM_ID = $("#MEM_ID").val(); // 아이디 입력 필드에서 값을 가져옴
    var checkResult = $("#id-dup-result"); // 결과를 표시할 요소 선택
    console.log(MEM_ID)
    var requestData = {};
    requestData["MEM_ID"] = MEM_ID;
    // AJAX 요청 시작
    $.ajax({
        type: 'POST', // 요청 방식
        url: '/member/checkId',
        contentType: 'application/json', // JSON 형식으로 데이터를 전송하겠다고 명시
        data: JSON.stringify(requestData), // JavaScript 객체를 JSON 문자열로 변환
        success: function (response) {
            console.log(response.status); // 서버로부터의 응답 상태를 콘솔에 로그
            if (response.status === "exist") {
                checkResult.text("이미 사용 중인 아이디입니다."); // 이미 사용 중인 경우, 결과 표시
            } else if (response.status === "non_exist") {
                checkResult.text("사용 가능한 아이디입니다."); // 사용 가능한 경우, 결과 표시
            } else if (response.status === "invalid_length") {
                checkResult.text("아이디는 최소 5자 이상이어야 합니다."); // 아이디 길이 불충분
            } else if (response.status === "invalid_characters") {
                checkResult.text("아이디는 영문자와 숫자만 포함할 수 있습니다."); // 아이디에 유효하지 않은 문자 포함
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", status, error); // 오류 내용 로깅
            checkResult.text("오류가 발생했습니다. 다시 시도해주세요."); // 사용자에
        }
    })
};