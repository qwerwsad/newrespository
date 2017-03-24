/**
 * Created by LIUXINWEI on 2017/1/10.
 */
$(function(){
    /*banner轮播图*/
    (function(){
        var n = 0;
        var len = $(".rotation em").length;
        $(".rotation em").click(function(){
            var k = $(this).index();
            $(this).addClass("blue_dotted").siblings().removeClass("blue_dotted");
            $(".banner").eq(k).fadeIn(600).siblings("div").fadeOut(200);
            n =k;
        });
        function play(){
            $(".rotation em").eq(n).addClass("blue_dotted").siblings().removeClass("blue_dotted");
            $(".banner").eq(n).fadeIn(600).siblings("div").fadeOut(200);
        }
        function autoplay(){
            n++;
            if (n>len-1){
                n=0;
            }
            $(".rotation em").eq(n).addClass("blue_dotted").siblings().removeClass("blue_dotted");
            $(".banner").eq(n).fadeIn(600).siblings("div").fadeOut(200);
        }
        $(".next").click(function(){
            autoplay();
        });
        $(".prev").click(function(){

            n--;
            if (n<0){
                n=len-1;
            }
            play();
        });
        var timer = setInterval(autoplay,2500);
        $(".banner_wrap").mouseover(function(){
            clearInterval(timer)
        });
        $(".banner_wrap").mouseout(function(){
            timer = setInterval(autoplay,2500)
        })
    })();
    (function(){
        var j = 0;
        var n;
        var len = $(".mover em").length;
        $(".mover em").click(function(){
            var k = $(this).index();
            var ff = k>j?"fadeInRight":"fadeInLeft";
            j=k;

            //console.log(j);
            qiehuan(ff);
        });

        function qiehuan(e){
            $(".mover em").eq(j).addClass("big").removeClass("small").siblings().removeClass("big").addClass("small");
            $(".content_qiehuan li").eq(j).fadeIn(600).siblings().fadeOut(200);
            $(".content_qiehuan  li").removeClass("animated fadeInLeft fadeInRight").eq(j).addClass("animated "+e)
        }
        $(".qiehuan .right").click(function(){
            j++;
            if (j>len-1){
                j = 0;
            }
            $(".mover em").eq(j).addClass("big").removeClass("small").siblings().removeClass("big").addClass("small");
            $(".content_qiehuan li").eq(j).fadeIn(600).siblings().fadeOut(200);
            $(".content_qiehuan li").eq(j).addClass("animated fadeInRight").siblings().removeClass("animated fadeInLeft fadeInRight")
        });
        $(".qiehuan .left").click(function(){
            j--;
            if (j<0){
                j = len-1;
            }
            $(".mover em").eq(j).addClass("big").removeClass("small").siblings().removeClass("big").addClass("small");
            $(".content_qiehuan li").eq(j).fadeIn(600).siblings().fadeOut(200);
            $(".content_qiehuan li").eq(j).addClass("animated fadeInLeft").siblings().removeClass("animated fadeInLeft fadeInRight")
        })
    })();
    (function(){
        var oWork = document.getElementById("work_main");
        var oBtn1 = oWork.getElementsByTagName("i");
          for (var i=0;i<oBtn1.length;i++){
              oBtn1[i].index = i;
              var n=0;
              oBtn1[i].onclick = function(){
                  var k = this.index;
                  $(".work_content").slideUp().eq(k).stop().slideToggle();
                  $(".caidan").removeClass("xiala").eq(k).addClass("xiala");
                  n=k;
              };
              $(".caidan").click(function(){
                  $(this).toggleClass("xiala","none").siblings().removeClass("xiala");
                  $(".work_content").eq(n).stop().slideToggle();
              })
          }


    })();


    /*banner轮播图*/
    (function(){
        var n = 0;
        var m = 0;
        var len = $(".team_neirong ul li").length;
        $(".team_rotation em").click(function(){
            var k = $(this).index();
            $(this).addClass("team_blue_dotted").siblings().removeClass("team_blue_dotted");
            $(".team_neirong ul").stop().animate({left:-1400*k},2000,"backIn");
            n =k;
            m=k;
        });
        function autoplayRight(){
            n++;
            m++;
            if (m>len-2){
                m=0;
            }
            $(".team_rotation em").eq(m).addClass("team_blue_dotted").siblings().removeClass("team_blue_dotted");

                $(".team_neirong ul").stop().animate({left:-1400*n},2000,"backIn",function(){
                    if (n==len-1){
                        n=0;
                        $(".team_neirong ul").animate({left:-1400*n},0)
                    }
                });


          }
        $(".team_next").click(function(){
                autoplayRight()
        });
        function autoplayLeft(){
            m--;
            if (m<0){
                m=len-2
            }
            $(".team_rotation em").eq(m).addClass("team_blue_dotted").siblings().removeClass("team_blue_dotted");
            if (n==0){
                n=len-1;
                $(".team_neirong ul").animate({left:-1400*n},0)
            }
            n--;
            $(".team_neirong ul").animate({left:-1400*n},2000,"backIn",function(){


            });
        }
        $(".team_prev").click(function(){
            autoplayLeft()
        });
        var timer = setInterval(autoplayRight,2500);
        $(".team_body").mouseover(function(){
            clearInterval(timer)
        });

        $(".team_body").mouseout(function(){
            timer = setInterval(autoplayRight,2500)
        })
    })();

    $(".bottom ul li").click(function(){
        var k = $(this).index();
       /* ie bgsound*/
        /*火狐 object*/
        /*谷歌  embed*/
        /*首先判断打开的是那个浏览器*/
        if (navigator.userAgent.indexOf("msie")!=-1){
            $("body").append('<bgsound src="music/sound0'+k+'.mp3" autoplay="true" loop="false">')
        }else if (navigator.userAgent.indexOf("firefox")!=-1){
            $("body").append('<object data="music/sound0'+k+'.mp3" type="">'+
                    '<param name="src" value="music/sound0'+k+'.mp3">'+
                    '<param name="autoplay" value="1">'+
                    '<param name="loop" value="0">'+
               ' </object>')

        }else {
            $("body").append(' <embed src="music/sound0'+k+'.mp3" type="" autoplay="true" loop="false" hidden="true">')
        }
    })


});