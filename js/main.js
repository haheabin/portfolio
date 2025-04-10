$(function () {
    $('.menu img, .menu .open-button').click(function () {
        // 메뉴 열기: 'opened' 클래스 추가
        $('.menu').addClass('opened');
    });

    // 닫기 버튼 클릭 시 메뉴 닫기
    $('.menu .close-button').click(function () {
        // 메뉴 닫기: 'opened' 클래스 제거
        $('.menu').removeClass('opened');
    });

    // 메뉴 항목 클릭 시 메뉴 닫기
    $('.menu-content ul li a').click(function () {
        $('.menu').removeClass('opened'); // 메뉴를 닫습니다.
    });

    // 클릭시 첫 페이지 이동
    $(window).scroll(function () {
        console.log($(this).scrollTop())
    })
    $('.menu-content .pageone').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 100)
    })

    // 클릭시  두 번째 페이지 이동
    $(window).scroll(function () {
        console.log($(this).scrollTop())
    })
    $('.menu-content .pagetwo').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 2300
        }, 100)
    })

    // 클릭시  세 번째 페이지 이동
    $(window).scroll(function () {
        console.log($(this).scrollTop())
    })
    $('.menu-content .pagethree').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 7300
        }, 100)
    })

    // 클릭시  네 번째 페이지 이동
    $(window).scroll(function () {
        console.log($(this).scrollTop())
    })
    $('.menu-content .pagefour').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 11000
        }, 100)
    })

    $('#page3 .folder-right .f-detail:last-child button').click(function () {
        // #page4로 이동
        console.log($(this).scrollTop())
    })

    $('#page3 .folder-right .f-detail:last-child button').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 11000
        }, 100)

    });

    //클릭시 창 열리게 하기
    $('.detail-link').click(function() {
        var targetId = $(this).data('target');  // 클릭한 <a> 태그의 data-target 속성값 가져오기
        $('.file-detail .detail').hide();  // 모든 detail 창 숨기기
        $('#' + targetId).show();  // 해당 ID에 해당하는 detail 창 보이기

        // 페이지 스크롤을 9000px 위치로 이동
        $('html, body').animate({
            scrollTop: 11200  // 9000px로 스크롤 이동
        }, 100);  // 500ms 동안 부드럽게 이동
    });
    $('.close-btn').click(function() {
        $(this).closest('.detail').hide();

        $('html, body').animate({
            scrollTop: 11600  // 9000px로 스크롤 이동
        }, 100);  // 500ms 동안 부드럽게 이동
    });



    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= 7200) {
            // 7200 이상일 때 애니메이션 실행
            $('#page3 .folder-left .f-detail, #page3 .folder-right .f-detail').addClass('on');
        } else {
            // 7200 미만일 때 애니메이션 리셋
            $('#page3 .folder-left .f-detail, #page3 .folder-right .f-detail').removeClass('on');
        }
    });
});

