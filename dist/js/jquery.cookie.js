(function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)})(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):a+"")}function e(a){0===a.indexOf("\"")&&(a=a.slice(1,-1).replace(/\\"/g,"\"").replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(a){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,j){if(1<arguments.length&&!a.isFunction(g)){if(j=a.extend({},h.defaults,j),"number"==typeof j.expires){var k=j.expires,m=j.expires=new Date;m.setMilliseconds(m.getMilliseconds()+864e5*k)}return document.cookie=[b(e),"=",d(g),j.expires?"; expires="+j.expires.toUTCString():"",j.path?"; path="+j.path:"",j.domain?"; domain="+j.domain:"",j.secure?"; secure":""].join("")}for(var n=e?void 0:{},o=document.cookie?document.cookie.split("; "):[],p=0,q=o.length;p<q;p++){var l=o[p].split("="),r=c(l.shift()),s=l.join("=");if(e===r){n=f(s,g);break}e||(s=f(s))===void 0||(n[r]=s)}return n};h.defaults={},a.removeCookie=function(b,c){return a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b)}});