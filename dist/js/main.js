"use strict";$(document).ready(function(){$(".experience .nav-link").click(function(){var t=$(this).position().top;$(".tab-selector").css({top:t})}),$(window).on("scroll",function(){var t=$(".dummy-banner").next().position().top,r=$(window).scrollTop(),a=(t/2-r)/1e3,e="translateY(".concat(-300*(1-a),"px)");0===r&&(a=1,e="translateY(0px)"),$(".banner").css({opacity:a,transform:e});var i=$(".projects").position().top,n=$("#splitbit").offset().top+500;i-20<=r?$(".navbar").addClass("sticky-top"):$(".navbar").removeClass("sticky-top"),r<=n?$(".navbar").fadeIn():$(".navbar").fadeOut()})});var cache={};!function(e){function t(){var a=e(this),t=a.attr("src");if(!cache[t]){var r=e.Deferred();e.get(t,function(t){r.resolve(e(t).find("svg"))}),cache[t]=r.promise()}cache[t].then(function(t){var r=e(t).clone();a.attr("id")&&r.attr("id",a.attr("id")),a.attr("class")&&r.attr("class",a.attr("class")),a.attr("style")&&r.attr("style",a.attr("style")),a.attr("width")&&(r.attr("width",a.attr("width")),a.attr("height")||r.removeAttr("height")),a.attr("height")&&(r.attr("height",a.attr("height")),a.attr("width")||r.removeAttr("width")),r.insertAfter(a),a.trigger("svgInlined",r[0]),a.remove()})}e.fn.inlineSvg=function(){return this.each(t),this}}(jQuery);