// 기본 마우스 호버 메뉴 (대폭 수정 필요 특히 호버 파트)
$(function () {
    $('.mainmenu>li').hover(function () {
        $('.submenu, .menubg').addClass('on');
    });
    $('.menubg').mouseout(function () {
        $('.submenu, .menubg').removeClass('on');
    });
    $('.center').hover(function () {
        $('.submenu, .menubg').removeClass('on');
    });
});

// 가이드 항목
$(function () {
    $(".ima1 , .guidesCircle1").hover(function () {
        $(".guidesCircle1").addClass('on');
    });
    $(".ima1 , .guidesCircle1").mouseout(function () {
        $(".guidesCircle1").removeClass('on');
    });

    $(".ima2 , .guidesCircle2").hover(function () {
        $(".guidesCircle2").addClass('on');
    });
    $(".ima2 , .guidesCircle2").mouseout(function () {
        $(".guidesCircle2").removeClass('on');
    });
    
    $(".ima3 , .guidesCircle3").hover(function () {
        $(".guidesCircle3").addClass('on');
    });
    $(".ima3 , .guidesCircle3").mouseout(function () {
        $(".guidesCircle3").removeClass('on');
    });

    $(".ima4 , .guidesCircle4").hover(function () {
        $(".guidesCircle4").addClass('on');
    });
    $(".ima4 , .guidesCircle4").mouseout(function () {
        $(".guidesCircle4").removeClass('on');
    });

    $(".ima5 , .guidesCircle5").hover(function () {
        $(".guidesCircle5").addClass('on');
    });
    $(".ima5 , .guidesCircle5").mouseout(function () {
        $(".guidesCircle5").removeClass('on');
    });
    
    $(".ima6 , .guidesCircle6").hover(function () {
        $(".guidesCircle6").addClass('on');
    });
    $(".ima6 , .guidesCircle6").mouseout(function () {
        $(".guidesCircle6").removeClass('on');
    });

});

// 안내 팝업
$().ready(function () {
    $("#alertStart, #alertStart1, #alertStart2, #alertStart3").click(function () {
        Swal.fire({
            icon: 'error',
            title: '안내',
            text: '지금은 준비중입니다!',
        });
    });
});

$().ready(function () {
    const el = document.createElement('div')
    el.innerHTML = "<a href='/detail/detailB-1a.html'></a>"

    $("#selectC").click(function () {
        Swal.fire({
            title: '아직 미완성 단계입니다!',
            text: "빨리 완성하겠습니다!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네!, 확인했습니다.'
        }) //.then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire(
        //             '확인됨!',
        //             '접속에 성공했습니다!',
        //             'success',
        //             window.open("/detail/detailB-1a.html")
        //         ) 
        //     }

        // })
    });
});


// 임시 저장소
// $(function(){
//     $(".detailContents>button").click(function(){
//         window.open("/detail/detailB.html")
//     });
// });