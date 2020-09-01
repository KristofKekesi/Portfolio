function autoOG(description, title, image, url) {

    let og = "";
    og += "<meta property=\"og:title\" content=\"" + title + "\" - Kristóf Kékesi\"/>";
    og += "<meta property=\"og:description\" content=\"" + description + "\"/>";
    og += "<meta property=\"og:type\" content=\"my_namespace:Portfolio\"/>";
    og += "<meta property=\"og:image\" content=\"" + image + "\"/>";
    og += "<meta property=\"og:url\" content=\"" + url + "\" />";

    document.getElementById("auto_og").innerHTML = og;
}