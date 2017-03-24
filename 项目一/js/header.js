/**
 * Created by LIUXINWEI on 2017/1/10.
 */
$(function(){
    $(".menu_header div").hover(function(){
        $(this).children("ul").stop().slideDown(600,"elasticOut",function(){
            $(this).show();
        })
    },function(){
        $(".menu_header div").find("ul").stop().slideUp(200,function(){
            $(this).hide();
        })
    });
    $(".menu_header div ul li").hover(function(){
        $(this).find("em").addClass("active")
    },function (){
        $(".menu_header div ul li em").removeClass("active")
    });
    $(".menu_header div").click(function(){
        $(this).find("b").addClass("dottedActive").parent().siblings().find("b").removeClass("dottedActive")
    })
});