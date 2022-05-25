//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


const platformTypes = {
    "google-play-store": "Android",
    "microsoft-store": "Windows",
    "self-host-windows": "Windows",
    "mac-app-store": "MacOS",
    "app-store": "iOS",
    "apple-tv-app-store": "tvOS",
    "web-app": "Web"
};

function getPlatforms(platforms, separator, productForMentionOnError) {
    var platformList = [];
    for (let i = 0; i < platforms.length; i++) {
        if (platforms[i]["type"] in platformTypes) {
            if (!(platformList.includes(platformTypes[platforms[i]["type"]]))) {
                platformList.push(platformTypes[platforms[i]["type"]]);
            }
        } else {
            console.warn("No platform for store " + platforms[i]["type"]);
        }
    }
    if (platformList === []) {
        console.warn("No download link for " + productForMentionOnError );
    }
    return platformList.join(separator);
}

export { getPlatforms };