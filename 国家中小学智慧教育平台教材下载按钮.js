// ==UserScript==
// @name         国家中小学智慧教育平台教材下载按钮
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  用于下载国家中小学智慧教育平台的教材
// @author       300g-BoHeYou
// @match        https://www.zxx.edu.cn/tchMaterial/*
// @icon         https://www.zxx.edu.cn/favicon.ico
// @license MIT
// @grant        GM_download
// @grant        GM_addElement
// @grant        GM_log

// ==/UserScript==

(function() {
    'use strict';
    GM_addElement(document.body,"input", {type:"button",value:"下载pdf",title:"download",class:"downloadbtn"});

    document.getElementsByClassName("downloadbtn")[0].onclick = function(){
        GM_download({
            url:performance.getEntriesByType('resource').filter(entry =>{return /.*pdf\.pdf/.test(entry.name);})[0].name,
            name:document.title.split('·')[1]+".pdf",
            saveAs: true
        })
    };

})();
