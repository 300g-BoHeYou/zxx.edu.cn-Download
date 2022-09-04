// ==UserScript==
// @name         国家中小学智慧教育平台教材下载按钮
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  用于下载国家中小学智慧教育平台的教材
// @author       300g-BoHeYou
// @match        https://www.zxx.edu.cn/tchMaterial/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_download
// @grant        GM_addElement
// @grant        GM_log

// ==/UserScript==

(function() {
    'use strict';
    //begin
    //function downloadUrl(){ // 下载链接
    //GM_download(performance.getEntriesByType('resource').filter(entry =>{return /.*pdf\.pdf/.test(entry.name);})[0].name)
    //}



    GM_addElement(document.body,"input", {type:"button",value:"Download",title:"download",class:"downloadbtn"});

 document.getElementsByClassName("downloadbtn")[0].onclick = function(){GM_download(performance.getEntriesByType('resource').filter(entry =>{return /.*pdf\.pdf/.test(entry.name);})[0].name)};





    //end
})();