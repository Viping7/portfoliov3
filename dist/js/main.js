"use strict";function setActive(t,e){var a=$(t).offset().top,r=a+$(t).height();a<=e&&e<=r&&($(".projects .nav-link").removeClass("active"),$(".nav-link[href='".concat(t,"']")).addClass("active"))}$(document).ready(function(){$(".experience .nav-link").click(function(){var t=$(this).position().top;$(".tab-selector").css({top:t})}),$(window).on("scroll",function(){var t=$(".dummy-banner").next().position().top,e=$(window).scrollTop(),a=(t/2-e)/1e3,r="translateY(".concat(-300*(1-a),"px)");setActive("#schema-sort",e),setActive("#grep-cloud",e),setActive("#fifa-scores",e),setActive("#splitbit",e),0===e&&(a=1,r="translateY(0px)"),$(".banner").css({opacity:a,transform:r});var i=$(".projects").position().top,s=$("#splitbit").offset().top+500;i-20<=e?$(".navbar").addClass("sticky-top"):$(".navbar").removeClass("sticky-top"),e<=s?$(".navbar").fadeIn():$(".navbar").fadeOut()})});var cache={};!function(r){function t(){var a=r(this),t=a.attr("src");if(!cache[t]){var e=r.Deferred();r.get(t,function(t){e.resolve(r(t).find("svg"))}),cache[t]=e.promise()}cache[t].then(function(t){var e=r(t).clone();a.attr("id")&&e.attr("id",a.attr("id")),a.attr("class")&&e.attr("class",a.attr("class")),a.attr("style")&&e.attr("style",a.attr("style")),a.attr("width")&&(e.attr("width",a.attr("width")),a.attr("height")||e.removeAttr("height")),a.attr("height")&&(e.attr("height",a.attr("height")),a.attr("width")||e.removeAttr("width")),e.insertAfter(a),a.trigger("svgInlined",e[0]),a.remove()})}r.fn.inlineSvg=function(){return this.each(t),this}}(jQuery);