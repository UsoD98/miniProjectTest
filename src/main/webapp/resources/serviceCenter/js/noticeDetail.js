// 메뉴바 시작
function toggleNavSections() {
    var navSection = document.querySelector('.nav_section');
    navSection.classList.toggle('show');
}
// 메뉴바 끝

// //로그인 시작
// // 로그인 성공을 가정하는 함수입니다.
// // 실제 프로젝트에서는 로그인 성공 여부를 판단하는 로직이 필요합니다.
// function loginSuccess() {
//   // 로그인 버튼을 찾아서 마이페이지 버튼으로 변경합니다.
//   var loginBtn = document.getElementById('loginBtn');
//   loginBtn.value = '마이페이지'; // 버튼의 텍스트를 변경합니다.
//   loginBtn.onclick = function () { // 버튼 클릭 시 이동할 페이지를 지정합니다.
//     window.location.href = './mypage.html'; // 마이페이지로 이동하는 경로를 설정하세요.
//   };

//   // 회원가입 버튼을 찾아서 로그아웃 버튼으로 변경합니다.
//   var joinBtn = document.getElementById('JoinBtn');
//   joinBtn.value = '로그아웃'; // 버튼의 텍스트를 변경합니다.
//   joinBtn.onclick = function () { // 버튼 클릭 시 로그아웃 처리를 수행합니다.
//     // 여기에 로그아웃을 처리하는 코드를 추가하세요.
//     // 예시에서는 간단히 페이지 새로고침으로 로그아웃을 가정합니다.
//     location.reload();
//   };
// }

// // 페이지 로드 시 로그인 성공을 가정하고 함수를 실행합니다.
// // 실제로는 로그인 성공 후에 이 함수를 호출해야 합니다.
// window.onload = function () {
//   loginSuccess();
// };
// // 로그인 끝

// 위아래 버튼 시작
// 네비게이션 섹션 토글 기능
function toggleNavSections() {
    var navSection = document.querySelector('.nav_section');
    navSection.classList.toggle('show');
}

function bottomFunction() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    var menu = document.querySelector('div.menu');
    var footer = document.querySelector('footer');
    var toTopBtn = document.getElementById('upBtn');
    var toBottomBtn = document.getElementById('downBtn');

    var menuPosition = menu.getBoundingClientRect();
    var footerPosition = footer.getBoundingClientRect();

    // div.menu가 화면에서 사라졌는지 확인합니다.
    if (menuPosition.bottom < 0) {
        upBtn.style.display = 'block'; // 버튼 표시
    } else {
        upBtn.style.display = 'none'; // 버튼 숨김
    }

    // footer가 화면에 보이는지 확인합니다.
    if (footerPosition.top < 0) {
        downBtn.style.display = 'none'; // 버튼 숨김
    } else {
        downBtn.style.display = 'block'; // 버튼 표시
    }
});

// // 스크롤 시 버튼 디스플레이 로직을 처리하는 함수
// function scrollFunction() {
//   var myBtnTop = document.getElementById("myBtnTop");
//   var myBtnBottom = document.getElementById("myBtnBottom");
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     myBtnTop.style.display = "block";
//     myBtnBottom.style.display = "block";
//   } else {
//     myBtnTop.style.display = "block";
//     myBtnBottom.style.display = "block";
//   }
// }

// // 스크롤 이벤트에 함수 연결
// window.onscroll = function () { scrollFunction() };

// // "맨 위로" 버튼에 클릭 이벤트 리스너 추가
// document.getElementById("myBtnTop").addEventListener("click", function () {
//   window.scrollTo(0, 0); // 페이지 상단으로 스크롤
// });

// // "맨 아래로" 버튼에 클릭 이벤트 리스너 추가
// document.getElementById("myBtnBottom").addEventListener("click", function () {
//   window.scrollTo(0, document.body.scrollHeight); // 페이지 하단으로 스크롤
// });
//버튼 끝

// 고객센터

function showContent(contentId) {
    var allContents = ['noticeContent', 'inquiryContent', 'faqContent'];
    allContents.forEach(function(id) {
    });
}

function handleHashChange() {
    var hash = window.location.hash;

    if (hash === "#inquiry") {
        showContent('inquiryContent');
    } else if (hash === "#faq") {
        showContent('faqContent');
    } else {
        // 기본적으로 공지사항을 보여줍니다.
        showContent('noticeContent');
    }
}

function addClickListener(id, contentId) {
    var element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            showContent(contentId);
            window.location.hash = contentId.replace('Content', '');
        });
    }
}

// DOM이 완전히 로드된 후에 실행됩니다.

document.addEventListener('DOMContentLoaded', function() {
    handleHashChange(); // 페이지 로드 시 적절한 콘텐츠를 표시합니다.
    // 각 탭에 대한 클릭 이벤트 리스너를 추가합니다.
    addClickListener('showNotice', 'noticeContent');
    addClickListener('showInquiry', 'inquiryContent');
    addClickListener('showFaq', 'faqContent');
});

// 해시 변경을 감지하여 적절한 콘텐츠를 표시합니다.
window.addEventListener('hashchange', handleHashChange);

////////////////////////////// 1:1 문의 하기/////////////////////

// document.body 대신에 실제로 inquiryForm을 포함할 것으로 예상되는 부모 요소를 사용하세요.
document.addEventListener('submit', function(event) {
    if(event.target && event.target.id === 'inquiryForm') {
        // 여기에 폼 제출 처리 로직을 넣습니다.
        event.preventDefault();
        var userName = document.getElementById('userName').value;
        var userEmail = document.getElementById('userEmail').value;
        var userInquiry = document.getElementById('userInquiry').value;

        console.log('이름:', userName);
        console.log('이메일:', userEmail);
        console.log('문의 내용:', userInquiry);

        alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
        // 서버로 데이터 전송 로직 등...
    }
});
///////////////////////////////////////////////////자주 묻는 질문/////////////////////////////////////////
var currentFaq = null;

function showPopup(edit = false) {
    var title = "", text = "";

    if (edit && currentFaq) {
        title = currentFaq.title;
        text = currentFaq.text;
    }

    myWindow.onload = function() {
        myWindow.document.getElementById('saveBtn').onclick = function() {
            var newTitle = myWindow.document.getElementById('titleText').value;
            var newText = myWindow.document.getElementById('faqText').value;  // 수정됨
            var newDate = myWindow.document.getElementById('dateText').value;

            if (newTitle.trim() !== "" && newText.trim() !== "" && newDate.trim() !== "") {
                if (edit && currentFaq && currentFaq.element) {
                    var existingFaq = currentFaq.element;
                    existingFaq.querySelector('.toggleBtn').textContent = newTitle;
                    existingFaq.querySelector('.ntccontent').innerHTML = newText;
                    existingFaq.querySelector('.date').textContent = "날짜: " + newDate;
                } else {
                    var faqDiv = document.querySelector('.faqs');
                    var newFaq = document.createElement('div');
                    newFaq.innerHTML = `<div style="display: flex; justify-content: space-between; align-items: center;">
                               <button class="toggleBtn">${newTitle}
                               <div style="float: right; color: #000000" class="date">날짜: ${newDate}</div></button>
                               <button class="editBtn" style="position: relative; margin-left: 10px; right: 110px;">편집</button>
                               <button class="deleteBtn" style="margin-left: 10px; border-radius: 10px; position: relative; right: 220px;">삭제</button>
                             </div>
                             <div class="ntccontent" style="display:none;">${newText}</div>`;
                    newFaq.querySelector('.editBtn').addEventListener('click', function() {
                        currentFaq = { title: newTitle, text: newText, element: newFaq };
                        showPopup(true);
                    });
                    newFaq.querySelector('.toggleBtn').addEventListener('click', function(event) {
                        const content = event.currentTarget.parentElement.nextElementSibling;
                        if (content.style.display === "none") {
                            content.style.display = "block";
                        } else {
                            content.style.display = "none";
                        }
                    });
                    newFaq.querySelector('.deleteBtn').addEventListener('click', function() {
                        faqDiv.removeChild(newFaq);
                    });

                    faqDiv.appendChild(newFaq);
                }
                myWindow.close();
            } else {
                alert('제목과 내용을 모두 입력해주세요.');
            }
        };

        myWindow.document.getElementById('cancelBtn').onclick = function() {
            myWindow.close();
        };
    };
}
///////////////////////////////////////////////공지 사항 ////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {

    });



let notices = Array.from({length: 0}, (_, i) => ({id: i + 1, author: '작성자', title: `제목`, date: new Date().toISOString().slice(0, 10).replace(/-/g, ".")}));

let currentPage = 1; // 현재 페이지
const noticesPerPage = 10; // 페이지당 공지사항 수

function displayNotices(page) {
    const tbody = document.querySelector(".type1 tbody");
    tbody.innerHTML = ""; // 기존 목록을 비웁니다.

    // 페이지에 맞는 공지사항 분할
    const startIndex = (page - 1) * noticesPerPage;
    const endIndex = startIndex + noticesPerPage;
    const noticesToDisplay = notices.slice(startIndex, endIndex);

    // 테이블에 공지사항 목록 추가
    noticesToDisplay.forEach((notice, index) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerText = startIndex + index + 1;
        cell2.innerText = notice.author;
        // 제목에 클릭 이벤트 리스너 추가
        const title = document.createElement('a');
        title.href = 'javascript:void(0);'; // 클릭 시 페이지 리로드 방지
        title.innerText = notice.title;
        title.addEventListener('click', function() {
            // 공지사항 상세 페이지로 이동하는 로직
            // 예: sessionStorage를 사용하여 공지사항 데이터를 임시 저장  (서버로 가는 코드 작성)
            sessionStorage.setItem('noticeTitle', notice.title);
            sessionStorage.setItem('noticeDate', notice.date);
            sessionStorage.setItem('noticeContent', notice.content);
            sessionStorage.setItem('noticeImage', notice.image);
            // 상세 페이지로 이동
            window.location.href = 'NoticeDetail'; // 상세 페이지의 URL
        });
        cell3.appendChild(title);
        cell4.innerText = notice.date;

        // 생성된 번호와 작성자에 클래스 적용
        cell1.classList.add("center-align");
        cell2.classList.add("center-align");
        cell3.classList.add("left-align");
        cell4.classList.add("center-align");
    });

    updatePagination();
}

function updatePagination() {
    const pagination = document.querySelector(".paginate span");
    pagination.innerHTML = ""; // 기존 페이지 번호를 비웁니다.

    const totalPages = Math.ceil(notices.length / noticesPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.innerText = i;
        pageLink.addEventListener("click", function(e) {
            e.preventDefault();
            currentPage = i;
            displayNotices(currentPage);
        });


        if (i === currentPage) {
            const strong = document.createElement("strong");
            strong.innerText = i;
            pagination.appendChild(strong);
        } else {
            pagination.appendChild(pageLink);
        }
    }
}

function editNotice() {
    // 모달을 가져와서 보여줌
    var modal = document.getElementById("editModal");
    modal.style.display = "block";

    // 'X' 버튼을 클릭하면 모달을 닫음
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    // 모달 외부를 클릭하면 모달을 닫음
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// 수정 폼 제출 시, 공지사항 데이터를 저장하고 모달을 닫는 로직 추가 필요
// 예시 코드에서는 구현되지 않았습니다.


function deleteNotice() {
    // sessionStorage에서 공지사항 관련 항목 삭제
    sessionStorage.removeItem('noticeTitle');
    sessionStorage.removeItem('noticeDate');
    sessionStorage.removeItem('noticeContent');
    sessionStorage.removeItem('noticeImage');

    // 삭제 후 목록 페이지로 리다이렉트합니다.
    window.location.href = 'ServiceCenter#notice';
}
// 수정하기 모달에서 수정 전 내용이 나타나게 하고, 내용 수정 적용하기
function editNotice() {
    // 모달을 가져와서 보여줌
    var modal = document.getElementById("editModal");
    modal.style.display = "block";

    // 현재 세션 스토리지에 저장된 공지사항 데이터를 폼에 채우기
    document.getElementById('editTitle').value = sessionStorage.getItem('noticeTitle');
    document.getElementById('editDate').value = sessionStorage.getItem('noticeDate');
    document.getElementById('editContent').value = sessionStorage.getItem('noticeContent');

    // 'X' 버튼을 클릭하면 모달을 닫음
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    // 모달 외부를 클릭하면 모달을 닫음
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// 수정 폼 제출 시, 공지사항 데이터를 저장하고 모달을 닫는 로직
document.getElementById('editForm').onsubmit = function(event) {
    event.preventDefault(); // 폼 기본 제출 동작 방지

    // 세션 스토리지에 수정된 공지사항 데이터 업데이트
    sessionStorage.setItem('noticeTitle', document.getElementById('editTitle').value);
    sessionStorage.setItem('noticeDate', document.getElementById('editDate').value);
    sessionStorage.setItem('noticeContent', document.getElementById('editContent').value);

    // 모달 닫기
    document.getElementById("editModal").style.display = "none";

    // 페이지 새로고침하여 변경사항 반영
    location.reload();
}