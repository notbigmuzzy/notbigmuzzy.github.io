$(document).ready(function(){function e(e){var o;o=-1!=a.search(/msie|safari/i)?window.event.keyCode:e.keyCode,112==o&&(-1==a.search(/msie/i)&&(e.stopPropagation(),e.preventDefault()),t("help"))}function t(e){"help"==e&&$("header").hasClass("header-start")&&console.log("opaaaa")}function o(){var e=location.hash;e||(window.location.href="#intro"),"#intro"===e&&($("header").addClass("header-start"),$("header").animate({top:"0%",left:"0%"},600),$(".mywork").removeClass("mywork-clicked"),$(".menu-back-wrapper").css("display","none"),$(".mywork-header").removeClass("mywork-header-clicked"),$(".mywork-back-button").removeClass("mywork-back-up"),$(".menu-wrapper").removeClass("menu-wrapper-clicked"),$(".examples-wrapper").removeClass("examples-wrapper-clicked"),$(".menu-back-wrapper").removeClass("menu-back-wrapper-clicked"),$(".mywork-close-button").removeClass("mywork-close-button-clicked"),$("iframe").removeClass("iframe-clicked"),$(".blog-wrapper").removeClass("blog-wrapper-clicked"),$(".blog-header").removeClass("blog-header-clicked"),$(".blog-back-button").removeClass("blog-back-button-x"),$(".blog-back-button-img").attr("src","images/ico/arrow-left.png")),"#work"===e&&($(".menu-wrapper").addClass("menu-wrapper-clicked"),$(".examples-wrapper").addClass("examples-wrapper-clicked"),$(".menu-back-wrapper").addClass("menu-back-wrapper-clicked"),$(".menu-back-wrapper").css("display","block"),$(".header-cover").removeClass("header-cover-clicked"),$("header").removeClass("header-contact-clicked"),$(".mywork-close-button").addClass("mywork-close-button-clicked"),$("header").removeClass("header-contact-clicked"),$("header").removeClass("header-start"),$("header").animate({top:"-100%"},600)),"#mywork"===e&&($(".mywork").addClass("mywork-clicked"),$(".mywork-header").addClass("mywork-header-clicked"),$(".menu-back-wrapper").css("display","block"),$(".mywork-back-button").addClass("mywork-back-up"),$(".header-cover").removeClass("header-cover-clicked"),$("header").removeClass("header-contact-clicked"),$("header").removeClass("header-start"),$("header").animate({top:"-100%"},600),$(".work-example-list").show(0),$(".mywork").removeClass("my-work-example1"),$(".mywork").removeClass("my-work-example2"),$(".mywork").removeClass("my-work-example3"),$(".mywork").removeClass("my-work-example4"),$(".mywork").removeClass("my-work-example5"),$(".mywork").removeClass("my-work-example6"),$(".mywork").removeClass("my-work-example7"),$(".mywork").removeClass("my-work-example8"),$(".work-full-example1").hide(0),$(".work-full-example2").hide(0),$(".work-full-example3").hide(0),$(".work-full-example4").hide(0),$(".work-full-example5").hide(0),$(".work-full-example6").hide(0),$(".work-full-example7").hide(0),$(".work-full-example8").hide(0),$(".mywork-back-button").addClass("mywork-back-up"),$(".mywork-back-button-img").attr("src","images/ico/arrow-up.png"),$(".mywork-left-button").removeClass("mywork-left-button-active"),$(".mywork-right-button").removeClass("mywork-right-button-active"),$(".mywork-left-button").removeClass("mywork-left-button1"),$(".mywork-right-button").removeClass("mywork-right-button1"),$(".mywork-left-button").removeClass("mywork-left-button2"),$(".mywork-right-button").removeClass("mywork-right-button2"),$(".mywork-left-button").removeClass("mywork-left-button3"),$(".mywork-right-button").removeClass("mywork-right-button3"),$(".mywork-left-button").removeClass("mywork-left-button4"),$(".mywork-right-button").removeClass("mywork-right-button4"),$(".mywork-left-button").removeClass("mywork-left-button5"),$(".mywork-right-button").removeClass("mywork-right-button5"),$(".mywork-left-button").removeClass("mywork-left-button6"),$(".mywork-right-button").removeClass("mywork-right-button6"),$(".mywork-left-button").removeClass("mywork-left-button7"),$(".mywork-right-button").removeClass("mywork-right-button7"),$(".mywork-left-button").removeClass("mywork-left-button8"),$(".mywork-right-button").removeClass("mywork-right-button8"),$(".mywork-back-button").removeClass("mywork-back-button-x")),"#blog"===e&&($("iframe").addClass("iframe-clicked"),$(".blog-wrapper").addClass("blog-wrapper-clicked"),$(".blog-header").addClass("blog-header-clicked"),$(".blog-back-button").addClass("blog-button-left"),$("header").removeClass("header-contact-clicked"),$("header").removeClass("header-start"),$("header").css("position","fixed"),$("header").animate({left:"-100%"},600))}$(".header-button-mywork").click(function(){window.location.href="#mywork"}),$(".header-button-mywork-tablet").click(function(){window.location.href="#work"}),$(".mywork-back-button").click(function(){$(".mywork-back-button").hasClass("mywork-back-up")&&(window.location.href="#intro")}),$(".menu-back-button").click(function(){window.location.href="#intro"}),$(".mywork-close-button").click(function(){window.location.href="#intro"}),$(".examples-wrapper").scroll(function(){wScroll=$(".examples-wrapper").scrollTop();var e=$(".example8").height(),t=$(".example7").height()+e,o=$(".example6").height()+t,a=$(".example5").height()+o,m=$(".example4").height()+a,r=$(".example3").height()+m,l=$(".example2").height()+r,s=$(".example1").height()+l;wScroll>0&&wScroll<e-200?($(".example-menu1").addClass("menu-example-selected"),$(".example-menu2").removeClass("menu-example-selected"),$(".example-menu3").removeClass("menu-example-selected"),$(".example-menu4").removeClass("menu-example-selected"),$(".example-menu5").removeClass("menu-example-selected"),$(".example-menu6").removeClass("menu-example-selected"),$(".example-menu7").removeClass("menu-example-selected"),$(".example-menu8").removeClass("menu-example-selected")):wScroll>e-200&&wScroll<t-200?($(".example-menu2").addClass("menu-example-selected"),$(".example-menu1").removeClass("menu-example-selected"),$(".example-menu3").removeClass("menu-example-selected"),$(".example-menu4").removeClass("menu-example-selected"),$(".example-menu5").removeClass("menu-example-selected"),$(".example-menu6").removeClass("menu-example-selected"),$(".example-menu7").removeClass("menu-example-selected"),$(".example-menu8").removeClass("menu-example-selected")):wScroll>t-200&&wScroll<o-200?($(".example-menu3").addClass("menu-example-selected"),$(".example-menu1").removeClass("menu-example-selected"),$(".example-menu2").removeClass("menu-example-selected"),$(".example-menu4").removeClass("menu-example-selected"),$(".example-menu5").removeClass("menu-example-selected"),$(".example-menu6").removeClass("menu-example-selected"),$(".example-menu7").removeClass("menu-example-selected"),$(".example-menu8").removeClass("menu-example-selected")):wScroll>o-200&&wScroll<a-200?($(".example-menu4").addClass("menu-example-selected"),$(".example-menu1").removeClass("menu-example-selected"),$(".example-menu2").removeClass("menu-example-selected"),$(".example-menu3").removeClass("menu-example-selected"),$(".example-menu5").removeClass("menu-example-selected"),$(".example-menu6").removeClass("menu-example-selected"),$(".example-menu7").removeClass("menu-example-selected"),$(".example-menu8").removeClass("menu-example-selected")):wScroll>a-200&&wScroll<m-200?($(".example-menu5").addClass("menu-example-selected"),$(".example-menu1").removeClass("menu-example-selected"),$(".example-menu3").removeClass("menu-example-selected"),$(".example-menu4").removeClass("menu-example-selected"),$(".example-menu2").removeClass("menu-example-selected"),$(".example-menu6").removeClass("menu-example-selected"),$(".example-menu7").removeClass("menu-example-selected"),$(".example-menu8").removeClass("menu-example-selected")):wScroll>m-200&&wScroll<r-200?($(".example-menu6").addClass("menu-example-selected"),$(".example-menu1").removeClass("menu-example-selected"),$(".example-menu3").removeClass("menu-example-selected"),$(".example-menu4").removeClass("menu-example-selected"),$(".example-menu5").removeClass("menu-example-selected"),$(".example-menu2").removeClass("menu-example-selected"),$(".example-menu7").removeClass("menu-example-selected"),$(".example-menu8").removeClass("menu-example-selected")):wScroll>r-200&&wScroll<l-200?($(".example-menu7").addClass("menu-example-selected"),$(".example-menu1").removeClass("menu-example-selected"),$(".example-menu3").removeClass("menu-example-selected"),$(".example-menu4").removeClass("menu-example-selected"),$(".example-menu5").removeClass("menu-example-selected"),$(".example-menu6").removeClass("menu-example-selected"),$(".example-menu2").removeClass("menu-example-selected"),$(".example-menu8").removeClass("menu-example-selected")):wScroll>l-200&&wScroll<s-200&&($(".example-menu8").addClass("menu-example-selected"),$(".example-menu1").removeClass("menu-example-selected"),$(".example-menu3").removeClass("menu-example-selected"),$(".example-menu4").removeClass("menu-example-selected"),$(".example-menu5").removeClass("menu-example-selected"),$(".example-menu6").removeClass("menu-example-selected"),$(".example-menu7").removeClass("menu-example-selected"),$(".example-menu2").removeClass("menu-example-selected"))}),$(".mywork-back-button").click(function(){$(".mywork-back-button").hasClass("mywork-back-button-x")&&(window.location.href="#mywork")}),$(".work-example1").click(function(){$(".mywork").addClass("my-work-example1"),$(".work-full-example1").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button1"),$(".mywork-right-button").addClass("mywork-right-button1"),window.location.href="#example"}),$(".work-example2").click(function(){$(".mywork").addClass("my-work-example2"),$(".work-full-example2").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button2"),$(".mywork-right-button").addClass("mywork-right-button2"),window.location.href="#example"}),$(".work-example3").click(function(){$(".mywork").addClass("my-work-example3"),$(".work-full-example3").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button3"),$(".mywork-right-button").addClass("mywork-right-button3"),window.location.href="#example"}),$(".work-example4").click(function(){$(".mywork").addClass("my-work-example4"),$(".work-full-example4").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button4"),$(".mywork-right-button").addClass("mywork-right-button4"),window.location.href="#example"}),$(".work-example5").click(function(){$(".mywork").addClass("my-work-example5"),$(".work-full-example5").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button5"),$(".mywork-right-button").addClass("mywork-right-button5"),window.location.href="#example"}),$(".work-example6").click(function(){$(".mywork").addClass("my-work-example6"),$(".work-full-example6").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button6"),$(".mywork-right-button").addClass("mywork-right-button6"),window.location.href="#example"}),$(".work-example7").click(function(){$(".mywork").addClass("my-work-example7"),$(".work-full-example7").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button7"),$(".mywork-right-button").addClass("mywork-right-button7"),window.location.href="#example"}),$(".work-example8").click(function(){$(".mywork").addClass("my-work-example8"),$(".work-full-example8").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button8"),$(".mywork-right-button").addClass("mywork-right-button8"),window.location.href="#example"}),$(".mywork-right-button").click(function(){$(".mywork-right-button").hasClass("mywork-right-button1")?($(".mywork").removeClass("my-work-example1"),$(".work-full-example1").hide(0),$(".mywork").addClass("my-work-example2"),$(".work-full-example2").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").removeClass("mywork-left-button1"),$(".mywork-right-button").removeClass("mywork-right-button1"),$(".mywork-left-button").addClass("mywork-left-button2"),$(".mywork-right-button").addClass("mywork-right-button2")):$(".mywork-right-button").hasClass("mywork-right-button2")?($(".mywork").removeClass("my-work-example2"),$(".work-full-example2").hide(0),$(".mywork").addClass("my-work-example3"),$(".work-full-example3").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").removeClass("mywork-left-button2"),$(".mywork-right-button").removeClass("mywork-right-button2"),$(".mywork-left-button").addClass("mywork-left-button3"),$(".mywork-right-button").addClass("mywork-right-button3")):$(".mywork-right-button").hasClass("mywork-right-button3")?($(".mywork").removeClass("my-work-example3"),$(".work-full-example3").hide(0),$(".mywork").addClass("my-work-example4"),$(".work-full-example4").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").removeClass("mywork-left-button3"),$(".mywork-right-button").removeClass("mywork-right-button3"),$(".mywork-left-button").addClass("mywork-left-button4"),$(".mywork-right-button").addClass("mywork-right-button4")):$(".mywork-right-button").hasClass("mywork-right-button4")?($(".mywork").removeClass("my-work-example4"),$(".work-full-example4").hide(0),$(".mywork").addClass("my-work-example5"),$(".work-full-example5").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").removeClass("mywork-left-button4"),$(".mywork-right-button").removeClass("mywork-right-button4"),$(".mywork-left-button").addClass("mywork-left-button5"),$(".mywork-right-button").addClass("mywork-right-button5")):$(".mywork-right-button").hasClass("mywork-right-button5")?($(".mywork").removeClass("my-work-example5"),$(".work-full-example5").hide(0),$(".mywork").addClass("my-work-example6"),$(".work-full-example6").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").removeClass("mywork-left-button5"),$(".mywork-right-button").removeClass("mywork-right-button5"),$(".mywork-left-button").addClass("mywork-left-button6"),$(".mywork-right-button").addClass("mywork-right-button6")):$(".mywork-right-button").hasClass("mywork-right-button6")?($(".mywork").removeClass("my-work-example6"),$(".work-full-example6").hide(0),$(".mywork").addClass("my-work-example7"),$(".work-full-example7").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").removeClass("mywork-left-button6"),$(".mywork-right-button").removeClass("mywork-right-button6"),$(".mywork-left-button").addClass("mywork-left-button7"),$(".mywork-right-button").addClass("mywork-right-button7")):$(".mywork-right-button").hasClass("mywork-right-button7")&&($(".mywork").removeClass("my-work-example7"),$(".work-full-example7").hide(0),$(".mywork").addClass("my-work-example8"),$(".work-full-example8").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").removeClass("mywork-left-button7"),$(".mywork-right-button").removeClass("mywork-right-button7"),$(".mywork-left-button").addClass("mywork-left-button8"),$(".mywork-right-button").addClass("mywork-right-button8"))}),$(".mywork-left-button").click(function(){$(".mywork-left-button").hasClass("mywork-left-button2")?($(".mywork").removeClass("my-work-example2"),$(".work-full-example2").hide(0),$(".mywork").addClass("my-work-example1"),$(".work-full-example1").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button1"),$(".mywork-right-button").addClass("mywork-right-button1"),$(".mywork-left-button").removeClass("mywork-left-button2"),$(".mywork-right-button").removeClass("mywork-right-button2")):$(".mywork-left-button").hasClass("mywork-left-button3")?($(".mywork").removeClass("my-work-example3"),$(".work-full-example3").hide(0),$(".mywork").addClass("my-work-example2"),$(".work-full-example2").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button2"),$(".mywork-right-button").addClass("mywork-right-button2"),$(".mywork-left-button").removeClass("mywork-left-button3"),$(".mywork-right-button").removeClass("mywork-right-button3")):$(".mywork-left-button").hasClass("mywork-left-button4")?($(".mywork").removeClass("my-work-example4"),$(".work-full-example4").hide(0),$(".mywork").addClass("my-work-example3"),$(".work-full-example3").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button3"),$(".mywork-right-button").addClass("mywork-right-button3"),$(".mywork-left-button").removeClass("mywork-left-button4"),$(".mywork-right-button").removeClass("mywork-right-button4")):$(".mywork-left-button").hasClass("mywork-left-button5")?($(".mywork").removeClass("my-work-example5"),$(".work-full-example5").hide(0),$(".mywork").addClass("my-work-example4"),$(".work-full-example4").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button4"),$(".mywork-right-button").addClass("mywork-right-button4"),$(".mywork-left-button").removeClass("mywork-left-button5"),$(".mywork-right-button").removeClass("mywork-right-button5")):$(".mywork-left-button").hasClass("mywork-left-button6")?($(".mywork").removeClass("my-work-example6"),$(".work-full-example6").hide(0),$(".mywork").addClass("my-work-example5"),$(".work-full-example5").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button5"),$(".mywork-right-button").addClass("mywork-right-button5"),$(".mywork-left-button").removeClass("mywork-left-button6"),$(".mywork-right-button").removeClass("mywork-right-button6")):$(".mywork-left-button").hasClass("mywork-left-button7")?($(".mywork").removeClass("my-work-example7"),$(".work-full-example7").hide(0),$(".mywork").addClass("my-work-example6"),$(".work-full-example6").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button6"),$(".mywork-right-button").addClass("mywork-right-button6"),$(".mywork-left-button").removeClass("mywork-left-button7"),$(".mywork-right-button").removeClass("mywork-right-button7")):$(".mywork-left-button").hasClass("mywork-left-button8")&&($(".mywork").removeClass("my-work-example8"),$(".work-full-example8").hide(0),$(".mywork").addClass("my-work-example7"),$(".work-full-example7").show(0),$(".work-example-list").hide(0),$(".mywork-back-button").removeClass("mywork-back-up"),$(".mywork-back-button").addClass("mywork-back-button-x"),$(".mywork-back-button-img").attr("src","images/ico/x.png"),$(".mywork-left-button").addClass("mywork-left-button-active"),$(".mywork-right-button").addClass("mywork-right-button-active"),$(".mywork-left-button").addClass("mywork-left-button7"),$(".mywork-right-button").addClass("mywork-right-button7"),$(".mywork-left-button").removeClass("mywork-left-button8"),$(".mywork-right-button").removeClass("mywork-right-button8"))}),$(".header-button-contact").click(function(){$("header").animate({opacity:.9},0),$(".header-cover").addClass("header-cover-clicked"),$(".menu-back-wrapper").show(0),$(".aboutme-wrapper").css("display","block"),$("header").removeClass("header-start"),$(".aboutme-wrapper").animate({top:"15%",opacity:1},400)}),$(".header-cover").click(function(){$("header").removeClass("header-contact-clicked"),$("header").animate({opacity:1},200),$(".header-cover").removeClass("header-cover-clicked"),$(".menu-back-wrapper").css("display","block"),$(".aboutme-wrapper").css("display","none"),$(".aboutme-wrapper").css("opacity","0"),$(".aboutme-wrapper").css("top","calc(15% + 50px)"),$("header").addClass("header-start")}),$(".header-button-blog").click(function(){window.location.href="#blog"}),setInterval(function(){var e=document.activeElement;e&&"IFRAME"==e.tagName&&($(".blog-back-button").removeClass("blog-button-left"),$(".blog-back-button").addClass("blog-back-button-x"),$(".blog-back-button-img").attr("src","images/ico/x2.png"))},100),$(".blog-back-button").click(function(){$(".blog-back-button").hasClass("blog-back-button-x")&&($("iframe").attr("src","http://notbigmuzzy.tumblr.com/"),$(".blog-back-button").removeClass("blog-back-button-x"),$(".blog-back-button-img").attr("src","images/ico/arrow-left.png"),setTimeout(function(){$(".blog-back-button").addClass("blog-button-left")},100)),$(".blog-back-button").hasClass("blog-button-left")&&(window.location.href="#intro")}),window.addEventListener("hashchange",o,!1),o(),document.onhelp=new Function("return false;"),window.onhelp=new Function("return false;"),document.focus,document.onkeypress=e;var a=navigator.userAgent;-1!=a.search(/msie|safari/i)&&(document.onkeydown=e),function(e,t,o,a,m,r,l){e.GoogleAnalyticsObject=m,e[m]=e[m]||function(){(e[m].q=e[m].q||[]).push(arguments)},e[m].l=1*new Date,r=t.createElement(o),l=t.getElementsByTagName(o)[0],r.async=1,r.src=a,l.parentNode.insertBefore(r,l)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-71661661-1","auto"),ga("send","pageview"),$(".footer-left").click(function(){$(".copy-notice").show(200)}),$(document).mouseup(function(e){var t=$(".copy-notice");t.is(e.target)||0!==t.has(e.target).length||t.hide()})});