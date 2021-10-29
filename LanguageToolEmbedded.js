// ==UserScript==
// @name         LanguageTool Embed
// @version      1.0
// @description  LanguageTool Embedded
// @author       Gerard López
// @include      https://languagetool.org/
// @run-at       document-start
// ==/UserScript==


(function() {
let css = `
    
header,
footer{
display: none!important;
}

section.content > section,
.headline,
.center,
.btn-wrapper{
display:none!important;
}

.hero-banner--welcome {
margin: 0;
width: 100%;
height: 100%;
max-width: 100%;
padding: 0;
}

.page--background {
min-height: 0px;
height: 100%;
}

.content {
padding-top: 0px;
}
`;

if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
