$(function(){
    var start = 0;
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        //  alert(st);
        if (st > start) {
            $("._header").addClass('headerhide');
    
        }
        else {
            $("._header").removeClass('headerhide');
        }
        start = st;
    })

    $(function(){
        $(".bars").click(function () {
            $("._header ._nav ul").slideToggle();
        });
    })
})

