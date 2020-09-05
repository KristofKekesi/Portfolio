let ee = "&#233;";
let oo = "&#243;";

function autoOG(description, title, image, url) {

    let og = document.getElementsByTagName("head")[0].innerHTML;
    og += "<meta property=\"og:title\" content=\"" + title + " - Krist" + oo + "f K" + ee + "kesi\"/>";
    og += "<meta property=\"og:description\" content=\"" + description + "\"/>";
    og += "<meta property=\"og:type\" content=\"my_namespace:Portfolio\"/>";
    og += "<meta property=\"og:image\" content=\"" + image + "\"/>";
    og += "<meta property=\"og:url\" content=\"" + url + "\" />";

    document.getElementsByTagName("head")[0].innerHTML = og;
}

function autoTWITTERAPP(site, siteId, title, description, image, lang, appName, appIdAndroid, appLinkAndroid) {

    let twitter = document.getElementsByTagName("head")[0].innerHTML;
    twitter += "<meta name=\"twitter:site\" content=\"" + site + "\"/>";
    twitter += "<meta name=\"twitter:site:id\" content=\"" + siteId + "\" />";
    twitter += "<meta name=\"twitter:title\" content=\"" + title + " - Krist" + oo + "f K" + ee + "kesi\" />";
    twitter += "<meta name=\"twitter:description\" content=\"" + description + "\" />";
    twitter += "<meta name=\"twitter:card\" content=\"app\" />";
    twitter += "<meta name=\"twitter:image:src\" content=\"" + image + "\" />";
    twitter += "<meta name=\"twitter:app:country\" content=\"" + lang + "\">";
    twitter += "<meta name=\"twitter:app:name:googleplay\" content=\"" + appName + "\">";
    twitter += "<meta name=\"twitter:app:id:googleplay\" content=\"" + appIdAndroid + "\">";
    twitter += "<meta name=\"twitter:app:url:googleplay\" content=\"" + appLinkAndroid + "\">";

    document.getElementsByTagName("head")[0].innerHTML = twitter;
}

function autoTWITTERPLAYER(site, siteId, title, description, image) {

    let twitter = document.getElementsByTagName("head")[0].innerHTML;
    twitter += "<meta name=\"twitter:site\" content=\"" + site + "\"/>";
    twitter += "<meta name=\"twitter:site:id\" content=\"" + siteId + "\" />";
    twitter += "<meta name=\"twitter:title\" content=\"" + title + " - Krist" + oo + "f K" + ee + "kesi\" />";
    twitter += "<meta name=\"twitter:description\" content=\"" + description + "\" />";
    twitter += "<meta name=\"twitter:card\" content=\"player\" />";
    twitter += "<meta name=\"twitter:image:src\" content=\"" + image + "\" />";

    document.getElementsByTagName("head")[0].innerHTML = twitter;
}

function autoBIO() {

    let bio = document.getElementsByTagName("head")[0].innerHTML;
    bio += "<meta name=\"author\" content=\"Krist" + oo + "f K" + ee + "kesi\" />";
    bio += "<meta name=\"description\" content=\"I'm Krist" + oo + "f K" + ee + "kesi, a freelance programmer, hobby photographer. I'm currently working on Elements, a phone application.\" />";
    bio += "<meta name=\"keywords\" content=\"HTML, CSS, JS, Krist" + oo + "f, K" + ee + "kesi, programmer, programming, programing, freelance, development, developer, translator, web, mobile, translation, portfolio, photography, photographer, Elements, NASA-Mira, Notepads\" />";

    document.getElementsByTagName("head")[0].innerHTML = bio;
}

function autoUIMETA() {

    let UI = document.getElementsByTagName("head")[0].innerHTML;
    UI += "<meta charset=\"UTF-8\"/>";
    UI += "<meta content=\"true\" name=\"HandheldFriendly\"/>";
    UI += "<meta content=\"IE=edge,chrome=1\" http-equiv=\"X-UA-Compatible\"/>";
    UI += "<meta content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\" name=\"viewport\"/>";

    document.getElementsByTagName("head")[0].innerHTML = UI;
}

function autoUIFRAME(tree, type) {
    document.getElementById("js-alert").remove();

    var treeMenu = "";
    for (i = 0; i < tree.length; i++) {
        treeMenu += "<a href=\"" + tree[i].url + "\">" + tree[i].name + "</a>";
        if (i !== tree.length - 1) {
            treeMenu += " / ";
        }
    }

    let UIFRAME = "";
    UIFRAME += "<table class=\"main-table\">";
    UIFRAME += "<tr>";
    UIFRAME += "<td style=\"overflow: scroll;\" class=\"menu Blur\" id=\"autoDesktopMenu\"></td>";
    if (type === "fullscreen") {
        UIFRAME += "<td class=\"fullscreen-content\" style=\"text-align: center;\">";
    } else {
        UIFRAME += "<td class=\"content\" style=\"text-align: center;\">";
    }
    UIFRAME += "<div class=\"path-parent a\">";
    UIFRAME += treeMenu;
    UIFRAME += "</div>";
    UIFRAME += "<h1 class=\"title\" id=\"title\"></h1>";
    UIFRAME += "<div id=\"subtitle\"></div>";
    UIFRAME += "<div id=\"content\"></div>";
    UIFRAME += "<div id=\"projects\"></div>";
    UIFRAME += "</td>";
    UIFRAME += "</tr>";
    UIFRAME += "</table>";

    document.getElementById("UIFRAME").innerHTML = UIFRAME;
}

function autoDesktopMenu(tree, active) {

    let DesktopMenu = "";
    DesktopMenu += "<a href=\"" + tree + "\"><div>";
    DesktopMenu += "<div class=\"profile\"><img alt=\"\" class=\"profile-pic\" src=\"" + tree + "common-assets/profile.jpg\">";
    DesktopMenu += "<span class=\"profile-name\">Krist" + oo + "f K" + ee + "kesi</span>";
    DesktopMenu += "</div></a>";
    DesktopMenu += "</div>";
    DesktopMenu += "<div class=\"skills\">"
    if (active === "web") {
        DesktopMenu += "<p><a class=\"skills-active\" href=\"" + tree + "skills/web/\">Web Dev</a></p>";
    } else {
        DesktopMenu += "<p><a class=\"skills\" href=\"" + tree + "skills/web/\">Web Dev</a></p>";
    }
    if (active === "modelling") {
        DesktopMenu += "<p><a class=\"skills-active\" href=\"" + tree + "skills/modelling/\">Modelling</a></p>";
    } else {
        DesktopMenu += "<!--<p><a class=\"skills\" href=\"" + tree + "skills/modelling/\">Modelling</a></p>-->";
    }
    if (active === "translation") {
        DesktopMenu += "<p><a class=\"skills-active\" href=\"" + tree + "skills/translation/\">Translation</a></p>";
    } else {
        DesktopMenu += "<p><a class=\"skills\" href=\"" + tree + "skills/translation/\">Translation</a></p>";
    }
    if (active === "mobile") {
        DesktopMenu += "<p><a class=\"skills-active\" href=\"" + tree + "skills/mobile/\">Mobile Dev</a></p>";
    } else {
        DesktopMenu += "<p><a class=\"skills\" href=\"" + tree + "skills/mobile/\">Mobile Dev</a></p>";
    }
    if (active === "photography") {
        DesktopMenu += "<p><a class=\"skills-active\" href=\"" + tree + "skills/photography/\">Photography</a></p>";
    } else {
        DesktopMenu += "<p><a class=\"skills\" href=\"" + tree + "skills/photography/\">Photography</a></p>";
    }
    DesktopMenu += "</div>";
    DesktopMenu += "<div class=\"contacts\">";
    DesktopMenu += "<div class=\"contact\"><a href=\"mailto:kristofkekesiofficial@gmail.com\">Mail</a></div>";
    DesktopMenu += "<div class=\"contact\"><a href=\"https://github.com/KristofKekesi\">Github</a></div>";
    DesktopMenu += "<div class=\"contact\"><a href=\"https://twitter.com/kristofkekesio1\">Twitter</a></div>";
    DesktopMenu += "<div class=\"contact\"><a href=\"https://discord.com/invite/7URAMuc\">Discord</a></div>";
    DesktopMenu += "<div class=\"contact\"><a href=\"https://www.patreon.com/KristofKekesi\">Patreon</a></div>";
    DesktopMenu += "<div class=\"contact\"><a href=\"https://www.instagram.com/kristofkekesiofficial/\">Instagram</a></div>";
    DesktopMenu += "</div>";

    document.getElementById("autoDesktopMenu").innerHTML = DesktopMenu;
}

function autoContent(title, subtitle, content, project) {

    if (title !== false) {
        document.getElementById("title").innerHTML = title;
    } else {
        document.getElementById("title").remove();
    }
    if (subtitle !== false) {
        document.getElementById("subtitle").innerHTML = subtitle;
    } else {
        document.getElementById("subtitle").remove();
    }
    document.getElementById("content").innerHTML = content;

    if (project.length !== 0) {
        let projetsDiv = "";
        for (i = 0; i < project.length; i++) {
            projetsDiv += "<a href= \"" + project[i].url + "\"><div class=\"project Blur\">";
            projetsDiv += "<img src=\"" + project[i].logo + "\" class=\"project-logo\" alt=\"project-logo\">";
            projetsDiv += "<p class=\"project-name\">" + project[i].name + "</p>";
            projetsDiv += "</div></a>";
        }
        document.getElementById("projects").innerHTML = projetsDiv;
    }
}

function autoIMG(img) {
    
    let images = "";
    for (i = 0; i < img.length; i++) {
        images += "<div class=\"project project-photo\" style=\"background-image: url(" + img[i].src + ");\"></div>";
    }
    document.getElementById("projects").innerHTML = images;
}