// build time:Fri Sep 28 2018 15:54:18 GMT+0800 (中国标准时间)
$(document).ready(function(){var t=$(".sidebar-inner");e();i();function e(){var e=n(),i=f(),o=$("#sidebar").height()+NexT.utils.getSidebarb2tHeight(),a=$("#content").height();if(e+o<a){t.affix({offset:{top:e-CONFIG.sidebar.offset,bottom:i}})}r(e).css({"margin-left":"initial"})}function i(){var t=window.matchMedia("(min-width: 991px)");t.addListener(function(t){if(t.matches){o()}})}function n(){return $(".header-inner").height()+CONFIG.sidebar.offset}function f(){var t=$(".footer-inner"),e=t.outerHeight(true)-t.outerHeight(),i=t.outerHeight(true)+e;return i}function r(t){return $("#sidebar").css({"margin-top":t})}function o(){$(window).off(".affix");t.removeData("bs.affix").removeClass("affix affix-top affix-bottom");e()}});
//rebuild by neat 