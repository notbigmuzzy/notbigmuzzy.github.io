$(document).ready(function() {
    function d(a) {
        var b;
        b = -1 != e.search(/msie|safari/i) ? window.event.keyCode : a.keyCode, 112 == b && (-1 == e.search(/msie/i) && (a.stopPropagation(), a.preventDefault()), f("help"))
    }

    function f(a) {
        "help" == a && $("header").hasClass("header-start") && console.log("opaaaa")
    }
    $(".mywork").mCustomScrollbar({
        scrollInertia: 0
    }), $(".header-button-mywork").click(function() {
        $(".mywork").addClass("mywork-clicked"), $(".mywork-header").addClass("mywork-header-clicked"), $(".menu-back-wrapper").css("display", "block"), $(".header-cover").removeClass("header-cover-clicked"), $("header").removeClass("header-contact-clicked"), $(".mywork-back-button").addClass("mywork-back-up"), $("header").removeClass("header-start"), $("header").animate({
            top: "-100%"
        }, 600), window.location.href = "#mywork"
    }), $(".header-button-mywork-tablet").click(function() {
        $(".menu-wrapper").addClass("menu-wrapper-clicked"), $(".examples-wrapper").addClass("examples-wrapper-clicked"), $(".menu-back-wrapper").addClass("menu-back-wrapper-clicked"), $(".menu-back-wrapper").css("display", "block"), $(".header-cover").removeClass("header-cover-clicked"), $("header").removeClass("header-contact-clicked"), $(".mywork-close-button").addClass("mywork-close-button-clicked"), $("header").removeClass("header-contact-clicked"), $("header").removeClass("header-start"), $("header").animate({
            top: "-100%"
        }, 600)
    }), $(".mywork-back-button").click(function() {
        $(".mywork-back-button").hasClass("mywork-back-up") && ($(".mywork").removeClass("mywork-clicked"), $(".mywork-header").removeClass("mywork-header-clicked"), $(".menu-back-wrapper").css("display", "block"), $(".header-cover").removeClass("header-cover-clicked"), $("header").removeClass("header-contact-clicked"), $(".mywork-back-button").removeClass("mywork-back-up"), $("header").addClass("header-start"), $("header").animate({
            top: "0%"
        }, 600), window.location.href = "#intro")
    }), $(".menu-back-button").click(function() {
        $(".menu-wrapper").removeClass("menu-wrapper-clicked"), $(".examples-wrapper").removeClass("examples-wrapper-clicked"), $(".menu-back-wrapper").removeClass("menu-back-wrapper-clicked"), $(".header-cover").removeClass("header-cover-clicked"), $(".mywork-close-button").removeClass("mywork-close-button-clicked"), $("header").addClass("header-start"), $("header").removeClass("header-contact-clicked"), $("header").animate({
            top: "0%"
        }, 600)
    }), $(".mywork-close-button").click(function() {
        $(".menu-wrapper").removeClass("menu-wrapper-clicked"), $(".examples-wrapper").removeClass("examples-wrapper-clicked"), $(".menu-back-wrapper").removeClass("menu-back-wrapper-clicked"), $(".header-cover").removeClass("header-cover-clicked"), $(".mywork-close-button").removeClass("mywork-close-button-clicked"), $("header").addClass("header-start"), $("header").removeClass("header-contact-clicked"), $("header").animate({
            top: "0%"
        }, 600)
    }), $(".example-menu1").click(function() {
        $(".examples-wrapper").scrollTo(".example8", 600)
    }), $(".example-menu2").click(function() {
        $(".examples-wrapper").scrollTo(".example7", 600)
    }), $(".example-menu3").click(function() {
        $(".examples-wrapper").scrollTo(".example6", 600)
    }), $(".example-menu4").click(function() {
        $(".examples-wrapper").scrollTo(".example5", 600)
    }), $(".example-menu5").click(function() {
        $(".examples-wrapper").scrollTo(".example4", 600)
    }), $(".example-menu6").click(function() {
        $(".examples-wrapper").scrollTo(".example3", 600)
    }), $(".example-menu7").click(function() {
        $(".examples-wrapper").scrollTo(".example2", 600)
    }), $(".example-menu8").click(function() {
        $(".examples-wrapper").scrollTo(".example1", 600)
    }), $(".examples-wrapper").scroll(function() {
        wScroll = $(".examples-wrapper").scrollTop();
        var a = $(".example8").height(),
            q = $(".example7").height() + a,
            l = $(".example6").height() + q,
            b = $(".example5").height() + l,
            p = $(".example4").height() + b,
            m = $(".example3").height() + p,
            o = $(".example2").height() + m,
            c = $(".example1").height() + o;
        wScroll > 0 && wScroll < a - 200 ? ($(".example-menu1").addClass("menu-example-selected"), $(".example-menu2").removeClass("menu-example-selected"), $(".example-menu3").removeClass("menu-example-selected"), $(".example-menu4").removeClass("menu-example-selected"), $(".example-menu5").removeClass("menu-example-selected"), $(".example-menu6").removeClass("menu-example-selected"), $(".example-menu7").removeClass("menu-example-selected"), $(".example-menu8").removeClass("menu-example-selected")) : wScroll > a - 200 && wScroll < q - 200 ? ($(".example-menu2").addClass("menu-example-selected"), $(".example-menu1").removeClass("menu-example-selected"), $(".example-menu3").removeClass("menu-example-selected"), $(".example-menu4").removeClass("menu-example-selected"), $(".example-menu5").removeClass("menu-example-selected"), $(".example-menu6").removeClass("menu-example-selected"), $(".example-menu7").removeClass("menu-example-selected"), $(".example-menu8").removeClass("menu-example-selected")) : wScroll > q - 200 && wScroll < l - 200 ? ($(".example-menu3").addClass("menu-example-selected"), $(".example-menu1").removeClass("menu-example-selected"), $(".example-menu2").removeClass("menu-example-selected"), $(".example-menu4").removeClass("menu-example-selected"), $(".example-menu5").removeClass("menu-example-selected"), $(".example-menu6").removeClass("menu-example-selected"), $(".example-menu7").removeClass("menu-example-selected"), $(".example-menu8").removeClass("menu-example-selected")) : wScroll > l - 200 && wScroll < b - 200 ? ($(".example-menu4").addClass("menu-example-selected"), $(".example-menu1").removeClass("menu-example-selected"), $(".example-menu2").removeClass("menu-example-selected"), $(".example-menu3").removeClass("menu-example-selected"), $(".example-menu5").removeClass("menu-example-selected"), $(".example-menu6").removeClass("menu-example-selected"), $(".example-menu7").removeClass("menu-example-selected"), $(".example-menu8").removeClass("menu-example-selected")) : wScroll > b - 200 && wScroll < p - 200 ? ($(".example-menu5").addClass("menu-example-selected"), $(".example-menu1").removeClass("menu-example-selected"), $(".example-menu3").removeClass("menu-example-selected"), $(".example-menu4").removeClass("menu-example-selected"), $(".example-menu2").removeClass("menu-example-selected"), $(".example-menu6").removeClass("menu-example-selected"), $(".example-menu7").removeClass("menu-example-selected"), $(".example-menu8").removeClass("menu-example-selected")) : wScroll > p - 200 && wScroll < m - 200 ? ($(".example-menu6").addClass("menu-example-selected"), $(".example-menu1").removeClass("menu-example-selected"), $(".example-menu3").removeClass("menu-example-selected"), $(".example-menu4").removeClass("menu-example-selected"), $(".example-menu5").removeClass("menu-example-selected"), $(".example-menu2").removeClass("menu-example-selected"), $(".example-menu7").removeClass("menu-example-selected"), $(".example-menu8").removeClass("menu-example-selected")) : wScroll > m - 200 && wScroll < o - 200 ? ($(".example-menu7").addClass("menu-example-selected"), $(".example-menu1").removeClass("menu-example-selected"), $(".example-menu3").removeClass("menu-example-selected"), $(".example-menu4").removeClass("menu-example-selected"), $(".example-menu5").removeClass("menu-example-selected"), $(".example-menu6").removeClass("menu-example-selected"), $(".example-menu2").removeClass("menu-example-selected"), $(".example-menu8").removeClass("menu-example-selected")) : wScroll > o - 200 && wScroll < c - 200 && ($(".example-menu8").addClass("menu-example-selected"), $(".example-menu1").removeClass("menu-example-selected"), $(".example-menu3").removeClass("menu-example-selected"), $(".example-menu4").removeClass("menu-example-selected"), $(".example-menu5").removeClass("menu-example-selected"), $(".example-menu6").removeClass("menu-example-selected"), $(".example-menu7").removeClass("menu-example-selected"), $(".example-menu2").removeClass("menu-example-selected"))
    }), $(".mywork-back-button").click(function() {
        $(".mywork-back-button").hasClass("mywork-back-button-x") && ($(".work-example-list").show(0), $(".mywork").removeClass("my-work-example1"), $(".mywork").removeClass("my-work-example2"), $(".mywork").removeClass("my-work-example3"), $(".mywork").removeClass("my-work-example4"), $(".mywork").removeClass("my-work-example5"), $(".mywork").removeClass("my-work-example6"), $(".mywork").removeClass("my-work-example7"), $(".mywork").removeClass("my-work-example8"), $(".work-full-example1").hide(0), $(".work-full-example2").hide(0), $(".work-full-example3").hide(0), $(".work-full-example4").hide(0), $(".work-full-example5").hide(0), $(".work-full-example6").hide(0), $(".work-full-example7").hide(0), $(".work-full-example8").hide(0), $(".mywork-back-button").addClass("mywork-back-up"), $(".mywork-back-button-img").attr("src", "images/ico/arrow-up.png"), $(".mywork-left-button").removeClass("mywork-left-button-active"), $(".mywork-right-button").removeClass("mywork-right-button-active"), $(".mywork-left-button").removeClass("mywork-left-button1"), $(".mywork-right-button").removeClass("mywork-right-button1"), $(".mywork-left-button").removeClass("mywork-left-button2"), $(".mywork-right-button").removeClass("mywork-right-button2"), $(".mywork-left-button").removeClass("mywork-left-button3"), $(".mywork-right-button").removeClass("mywork-right-button3"), $(".mywork-left-button").removeClass("mywork-left-button4"), $(".mywork-right-button").removeClass("mywork-right-button4"), $(".mywork-left-button").removeClass("mywork-left-button5"), $(".mywork-right-button").removeClass("mywork-right-button5"), $(".mywork-left-button").removeClass("mywork-left-button6"), $(".mywork-right-button").removeClass("mywork-right-button6"), $(".mywork-left-button").removeClass("mywork-left-button7"), $(".mywork-right-button").removeClass("mywork-right-button7"), $(".mywork-left-button").removeClass("mywork-left-button8"), $(".mywork-right-button").removeClass("mywork-right-button8"), $(".mywork-back-button").removeClass("mywork-back-button-x"))
    }), $(".work-example1").click(function() {
        $(".mywork").addClass("my-work-example1"), $(".work-full-example1").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button1"), $(".mywork-right-button").addClass("mywork-right-button1"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")
    }), $(".work-example2").click(function() {
        $(".mywork").addClass("my-work-example2"), $(".work-full-example2").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button2"), $(".mywork-right-button").addClass("mywork-right-button2"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")
    }), $(".work-example3").click(function() {
        $(".mywork").addClass("my-work-example3"), $(".work-full-example3").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button3"), $(".mywork-right-button").addClass("mywork-right-button3"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")
    }), $(".work-example4").click(function() {
        $(".mywork").addClass("my-work-example4"), $(".work-full-example4").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button4"), $(".mywork-right-button").addClass("mywork-right-button4"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")
    }), $(".work-example5").click(function() {
        $(".mywork").addClass("my-work-example5"), $(".work-full-example5").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button5"), $(".mywork-right-button").addClass("mywork-right-button5"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")
    }), $(".work-example6").click(function() {
        $(".mywork").addClass("my-work-example6"), $(".work-full-example6").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button6"), $(".mywork-right-button").addClass("mywork-right-button6"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")
    }), $(".work-example7").click(function() {
        $(".mywork").addClass("my-work-example7"), $(".work-full-example7").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button7"), $(".mywork-right-button").addClass("mywork-right-button7"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")
    }), $(".work-example8").click(function() {
        $(".mywork").addClass("my-work-example8"), $(".work-full-example8").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button8"), $(".mywork-right-button").addClass("mywork-right-button8"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")
    }), $(".mywork-right-button").click(function() {
        $(".mywork-right-button").hasClass("mywork-right-button1") ? ($(".mywork").removeClass("my-work-example1"), $(".work-full-example1").hide(0), $(".mywork").addClass("my-work-example2"), $(".work-full-example2").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").removeClass("mywork-left-button1"), $(".mywork-right-button").removeClass("mywork-right-button1"), $(".mywork-left-button").addClass("mywork-left-button2"), $(".mywork-right-button").addClass("mywork-right-button2"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-right-button").hasClass("mywork-right-button2") ? ($(".mywork").removeClass("my-work-example2"), $(".work-full-example2").hide(0), $(".mywork").addClass("my-work-example3"), $(".work-full-example3").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").removeClass("mywork-left-button2"), $(".mywork-right-button").removeClass("mywork-right-button2"), $(".mywork-left-button").addClass("mywork-left-button3"), $(".mywork-right-button").addClass("mywork-right-button3"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-right-button").hasClass("mywork-right-button3") ? ($(".mywork").removeClass("my-work-example3"), $(".work-full-example3").hide(0), $(".mywork").addClass("my-work-example4"), $(".work-full-example4").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").removeClass("mywork-left-button3"), $(".mywork-right-button").removeClass("mywork-right-button3"), $(".mywork-left-button").addClass("mywork-left-button4"), $(".mywork-right-button").addClass("mywork-right-button4"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-right-button").hasClass("mywork-right-button4") ? ($(".mywork").removeClass("my-work-example4"), $(".work-full-example4").hide(0), $(".mywork").addClass("my-work-example5"), $(".work-full-example5").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").removeClass("mywork-left-button4"), $(".mywork-right-button").removeClass("mywork-right-button4"), $(".mywork-left-button").addClass("mywork-left-button5"), $(".mywork-right-button").addClass("mywork-right-button5"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-right-button").hasClass("mywork-right-button5") ? ($(".mywork").removeClass("my-work-example5"), $(".work-full-example5").hide(0), $(".mywork").addClass("my-work-example6"), $(".work-full-example6").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").removeClass("mywork-left-button5"), $(".mywork-right-button").removeClass("mywork-right-button5"), $(".mywork-left-button").addClass("mywork-left-button6"), $(".mywork-right-button").addClass("mywork-right-button6"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-right-button").hasClass("mywork-right-button6") ? ($(".mywork").removeClass("my-work-example6"), $(".work-full-example6").hide(0), $(".mywork").addClass("my-work-example7"), $(".work-full-example7").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").removeClass("mywork-left-button6"), $(".mywork-right-button").removeClass("mywork-right-button6"), $(".mywork-left-button").addClass("mywork-left-button7"), $(".mywork-right-button").addClass("mywork-right-button7"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-right-button").hasClass("mywork-right-button7") && ($(".mywork").removeClass("my-work-example7"), $(".work-full-example7").hide(0), $(".mywork").addClass("my-work-example8"), $(".work-full-example8").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").removeClass("mywork-left-button7"), $(".mywork-right-button").removeClass("mywork-right-button7"), $(".mywork-left-button").addClass("mywork-left-button8"), $(".mywork-right-button").addClass("mywork-right-button8"), $("#mcs_container").mCustomScrollbar("scrollTo", "0"))
    }), $(".mywork-left-button").click(function() {
        $(".mywork-left-button").hasClass("mywork-left-button2") ? ($(".mywork").removeClass("my-work-example2"), $(".work-full-example2").hide(0), $(".mywork").addClass("my-work-example1"), $(".work-full-example1").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button1"), $(".mywork-right-button").addClass("mywork-right-button1"), $(".mywork-left-button").removeClass("mywork-left-button2"), $(".mywork-right-button").removeClass("mywork-right-button2"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-left-button").hasClass("mywork-left-button3") ? ($(".mywork").removeClass("my-work-example3"), $(".work-full-example3").hide(0), $(".mywork").addClass("my-work-example2"), $(".work-full-example2").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button2"), $(".mywork-right-button").addClass("mywork-right-button2"), $(".mywork-left-button").removeClass("mywork-left-button3"), $(".mywork-right-button").removeClass("mywork-right-button3"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-left-button").hasClass("mywork-left-button4") ? ($(".mywork").removeClass("my-work-example4"), $(".work-full-example4").hide(0), $(".mywork").addClass("my-work-example3"), $(".work-full-example3").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button3"), $(".mywork-right-button").addClass("mywork-right-button3"), $(".mywork-left-button").removeClass("mywork-left-button4"), $(".mywork-right-button").removeClass("mywork-right-button4"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-left-button").hasClass("mywork-left-button5") ? ($(".mywork").removeClass("my-work-example5"), $(".work-full-example5").hide(0), $(".mywork").addClass("my-work-example4"), $(".work-full-example4").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button4"), $(".mywork-right-button").addClass("mywork-right-button4"), $(".mywork-left-button").removeClass("mywork-left-button5"), $(".mywork-right-button").removeClass("mywork-right-button5"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-left-button").hasClass("mywork-left-button6") ? ($(".mywork").removeClass("my-work-example6"), $(".work-full-example6").hide(0), $(".mywork").addClass("my-work-example5"), $(".work-full-example5").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button5"), $(".mywork-right-button").addClass("mywork-right-button5"), $(".mywork-left-button").removeClass("mywork-left-button6"), $(".mywork-right-button").removeClass("mywork-right-button6"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-left-button").hasClass("mywork-left-button7") ? ($(".mywork").removeClass("my-work-example7"), $(".work-full-example7").hide(0), $(".mywork").addClass("my-work-example6"), $(".work-full-example6").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button6"), $(".mywork-right-button").addClass("mywork-right-button6"), $(".mywork-left-button").removeClass("mywork-left-button7"), $(".mywork-right-button").removeClass("mywork-right-button7"), $("#mcs_container").mCustomScrollbar("scrollTo", "0")) : $(".mywork-left-button").hasClass("mywork-left-button8") && ($(".mywork").removeClass("my-work-example8"), $(".work-full-example8").hide(0), $(".mywork").addClass("my-work-example7"), $(".work-full-example7").show(0), $(".work-example-list").hide(0), $(".mywork-back-button").removeClass("mywork-back-up"), $(".mywork-back-button").addClass("mywork-back-button-x"), $(".mywork-back-button-img").attr("src", "images/ico/x.png"), $(".mywork-left-button").addClass("mywork-left-button-active"), $(".mywork-right-button").addClass("mywork-right-button-active"), $(".mywork-left-button").addClass("mywork-left-button7"), $(".mywork-right-button").addClass("mywork-right-button7"), $(".mywork-left-button").removeClass("mywork-left-button8"), $(".mywork-right-button").removeClass("mywork-right-button8"), $("#mcs_container").mCustomScrollbar("scrollTo", "0"))
    }), $(".header-button-contact").click(function() {
        $("header").animate({
            opacity: 0.9
        }, 0), $(".header-cover").addClass("header-cover-clicked"), $(".menu-back-wrapper").show(0), $(".aboutme-wrapper").css("display", "block"), $(".aboutme-wrapper").animate({
            top: "15%",
            opacity: 1
        }, 400), $("header").removeClass("header-start")
    }), $(".header-cover").click(function() {
        $("header").removeClass("header-contact-clicked"), $("header").animate({
            opacity: 1
        }, 200), $(".header-cover").removeClass("header-cover-clicked"), $(".menu-back-wrapper").css("display", "block"), $(".aboutme-wrapper").css("display", "none"), $(".aboutme-wrapper").css("opacity", "0"), $(".aboutme-wrapper").css("top", "calc(15% + 50px)"), $("header").addClass("header-start")
    }), $(".header-button-blog").click(function() {
        $("iframe").addClass("iframe-clicked"), $(".blog-wrapper").addClass("blog-wrapper-clicked"), $(".blog-header").addClass("blog-header-clicked"), $("header").removeClass("header-contact-clicked"), $("header").removeClass("header-start"), $("header").css("position", "fixed"), $("header").animate({
            left: "-100%"
        }, 600), window.location.href = "#blog", $(".blog-back-button").addClass('blog-button-left')
    });
    setInterval(function() {
        var a = document.activeElement;
        a && "IFRAME" == a.tagName && ($(".blog-back-button").removeClass('blog-button-left'), $(".blog-back-button").addClass("blog-back-button-x"), $(".blog-back-button-img").attr("src", "images/ico/x2.png"))
    }, 500);
    $(".blog-back-button").click(function() {
        $(".blog-back-button").hasClass("blog-back-button-x") ? ($("iframe").attr("src", "blog/blog.html"), $(".blog-back-button").removeClass("blog-back-button-x"), $(".blog-back-button-img").attr("src", "images/ico/arrow-left.png")) : ($(".blog-wrapper").removeClass("blog-wrapper-clicked"), $("iframe").removeClass("iframe-clicked"), $(".blog-header").removeClass("blog-header-clicked"), $("header").addClass("header-start"), $("header").animate({left: "0%"}, 600))
    })
	
	$(".blog-back-button").click(function() {
		if($(".blog-back-button").hasClass('blog-button-left')) {
			window.location.href = ("#intro");
		};
	});

    document.onhelp = new Function("return false;"), window.onhelp = new Function("return false;"), document.focus, document.onkeypress = d;
    var e = navigator.userAgent; - 1 != e.search(/msie|safari/i) && (document.onkeydown = d),
    function(b, a, l, c, o, m, n) {
        b.GoogleAnalyticsObject = o, b[o] = b[o] || function() {
            (b[o].q = b[o].q || []).push(arguments)
        }, b[o].l = 1 * new Date, m = a.createElement(l), n = a.getElementsByTagName(l)[0], m.async = 1, m.src = c, n.parentNode.insertBefore(m, n)
    }(window, document, "script", "http://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-68170055-1", "auto"), ga("send", "pageview"), $(".footer-left").click(function() {
        $(".copy-notice").show(200)
    }), $(document).mouseup(function(a) {
        var b = $(".copy-notice");
        b.is(a.target) || 0 !== b.has(a.target).length || b.hide()
    })




	function router() {
	    var _location = location.hash;
	    if(!_location) {
	      // this is your default landing data
	      window.location.href = "#intro";
	    }
	    if(_location === '#intro') {
	    	$("header").addClass("header-start")
	    	$("header").animate({
	    		top: "0%",
	    		left: "0%"
	    	}, 600)

	    	$(".mywork").removeClass("mywork-clicked")
	    	$(".menu-back-wrapper").css("display", "none"),
	    	$(".mywork-header").removeClass("mywork-header-clicked")
	    	$(".mywork-back-button").removeClass("mywork-back-up")

	    	$("iframe").removeClass("iframe-clicked")
	    	$(".blog-wrapper").removeClass("blog-wrapper-clicked")
	    	$(".blog-header").removeClass("blog-header-clicked")

	    }

	    if(_location === '#mywork') {
	      	$(".mywork").addClass("mywork-clicked"), 
	      	$(".mywork-header").addClass("mywork-header-clicked"), 
	      	$(".menu-back-wrapper").css("display", "block"), 
			$(".mywork-back-button").addClass("mywork-back-up"), 
	      	
	      	$(".header-cover").removeClass("header-cover-clicked"), 
	      	$("header").removeClass("header-contact-clicked"), 
      	
	      	$("header").removeClass("header-start"), 
	      	$("header").animate({top: "-100%"}, 600)
	  		}

	    if(_location === '#blog') {
	    	$("iframe").addClass("iframe-clicked"), 
	    	$(".blog-wrapper").addClass("blog-wrapper-clicked"), 
	    	$(".blog-header").addClass("blog-header-clicked"), 
	    	
	    	$("header").removeClass("header-contact-clicked"), 
	    	$("header").removeClass("header-start"), 
	    	$("header").css("position", "fixed"), 
	    	$("header").animate({left: "-100%"}, 600)
	    	}
	}
	window.addEventListener("hashchange", router, false);
	router();





});
