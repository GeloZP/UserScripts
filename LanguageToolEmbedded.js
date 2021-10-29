// ==UserScript==
// @name         LanguageTool Embedded
// @description  LanguageTool Embedded
// @author       Gerard López
// @include      https://languagetool.org/
// @match        https://languagetool.org/
// @grant        none
// @run-at       document-start
// ==/UserScript==


(function() {
let css = `
    .content {
        padding-top: 0px !important ;
}
    .page--background {
        min-height: 0px !important;
}
    .welcome {
        margin: 0 auto 0px !important;
        width: 100% !important;
        max-width: 100% !important;
        padding: 0 0px !important;
        box-sizing: border-box !important;
}
    .welcome-editor {
        width: 100% !important;
        margin: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        height: 100vh !important;
        min-height: 0px !important;
}
    .welcome-editor-wrapper {
        margin: 0px 0 0 !important;
        border-radius: 0px !important;
        overflow: hidden !important;
        box-shadow: 0 0px 0px rgba(0,0,0,.2) !important;
}
    .side-nav__header {
        position: relative;
        height: 65px !important;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 50px;
}
    .editor__nav__headline--all {
        background-image: url(/images/icon_all_texts.svg?43921e3…);
        left: 5px !important;
        top: 28px !important;
        position: absolute !important;
}
    .icon--gear {
        top: 43px !important;
        background-image: url(/images/icon_gear.svg?94e31d5…);
        position: absolute !important;
        left: 240px !important;
}
    .icon--back {
        background-image: url(/images/icon_arrow_left.svg?7df5b38…);
        position: absolute !important;
        top: 43px !important;
        left: 5px !important;
}
    .settings__nav__headline {
        font-weight: 700 !important;
        position: absolute !important;
        top: 30px !important;
        left: 45px !important;
}

.hero-banner--welcome {
margin: 0 auto 0px;
width: auto;
max-width: 100%;
color: #fff;
padding: 0px 0px 0;
box-sizing: border-box;
}

.headline.center, .headline--sub-title, #addon-link, .partners-section, .left-right-section, .download-section, #plugins, #office, .footer, .footer-nav, .wrapper.padding, .page--background, .header, .discount-message-box, .headline, .subline, .btn-wrapper, .gray-section, .footer, .footer-nav, .description--sub-title.center, #sign-up-link{
display: none;
}
.welcome-editor:empty, .welcome-editor__inner {
height: 100%;
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
