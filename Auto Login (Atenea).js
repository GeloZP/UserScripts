// ==UserScript==
// @name         Auto Login (Atenea)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-login on Atenea
// @author       Gerard López
// @include      https://sso.upc.edu/CAS/*
// @include      https://renoir.upc.edu/login/*
// @match        https://atenea.upc.edu/login/index.php
// @grant        none
// ==/UserScript==

setTimeout(function() {
    document.querySelector('#loginbtn').click()
}, 100)

setTimeout(function() {
    document.querySelector('#submit_ok').click()
}, 500)

setTimeout(function() {
        document.querySelectorAll('#Tipus_usuari > button').click()
}, 1000)

$('body').prepend(`<style>@media (min-width: 768px) { #wrapper{background-image: url('https://i.pinimg.com/originals/0b/06/39/0b06397a3199bee4a5922ee4488ebf5a.jpg')}}</style>`)/* end random background */