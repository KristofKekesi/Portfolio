function autoOG(description, title, image, url) {

    let og = document.getElementsByTagName("head")[0].innerHTML;
    og += "<meta property=\"og:title\" content=\"" + title + " - Kristóf Kékesi\"/>";
    og += "<meta property=\"og:description\" content=\"" + description + "\"/>";
    og += "<meta property=\"og:type\" content=\"my_namespace:Portfolio\"/>";
    og += "<meta property=\"og:image\" content=\"" + image + "\"/>";
    og += "<meta property=\"og:url\" content=\"" + url + "\" />";

    document.getElementsByTagName("head")[0].innerHTML = og;
}

function autoTWITTERAPP(site, siteId, title, description, image, lang, appName, appIdAndroid, appLinkAndroid) {

    let og = document.getElementsByTagName("head")[0].innerHTML;
    og += "<meta name=\"twitter:site\" content=\"" + site +"\"/>";
    og += "<meta name=\"twitter:site:id\" content=\"" + siteId + "\" />";
    og += "<meta name=\"twitter:title\" content=\"" + title + " - Kristóf Kékesi\" />";
    og += "<meta name=\"twitter:description\" content=\"" + description + "\" />";
    og += "<meta name=\"twitter:card\" content=\"app\" />";
    og += "<meta name=\"twitter:image:src\" content=\"" + image + "\" />";
    og += "<meta name=\"twitter:app:country\" content=\"" + lang + "\">";
    og += "<meta name=\"twitter:app:name:googleplay\" content=\"" + appName + "\">";
    og += "<meta name=\"twitter:app:id:googleplay\" content=\"" + appIdAndroid + "\">";
    og += "<meta name=\"twitter:app:url:googleplay\" content=\"" + appLinkAndroid + "\">";

    document.getElementsByTagName("head")[0].innerHTML = og;
}