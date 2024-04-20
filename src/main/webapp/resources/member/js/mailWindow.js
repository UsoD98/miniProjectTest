function mailWindow() {

    var verification = $('#verification').val();
    var MEM_EMAIL = $('#MEM_EMAIL').val();

    $.ajax({
        url: '/member/passwordEmail',
        type: 'POST', // HTTP 요청 메소드
        data: ({verification: verification,
                MEM_EMAIL:MEM_EMAIL
        }),
        success: function(data) {
            console.log("111111111")
            console.log('Success:', data);
            if(data === "true"){
                window.close();
            }else{

            }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            // 오류 처리
            console.error('Error:', textStatus, errorThrown);
            alert('인증번호 확인 중 오류가 발생했습니다.');
        }
    });
}
