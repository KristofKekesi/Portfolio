import Image from "next/image";

import { server } from "../../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Badges(props) {
    let final = [];
    for (let i = 0; i < props.downloads.length; i++) {

        let badge;
        let platform;
        switch (props.downloads[i]["type"]) {
            case "appleTvAppStore":
                badge = "apple_tv_app_store.svg";
                platform = "Apple TV App Store";

                break;
            case "appStore":
                badge = "app_store.svg";
                platform = "App Store";

                break;
            case "macAppStore":
                badge = "mac_app_store.svg";
                platform = "Mac App Store";

                break;
            case "playStore":
                badge = "google_play_store.png";
                platform = "Google Play Store";

                break;
            case "microsoftStore":
                badge = "microsoft_store.png";
                platform = "Microsoft Store";

                break;
            case "website": break;
            default:
                console.log("Unknown download type: " + props.downloads[i].type);
                break;
        }

        if(props.downloads[i].isAvailable == props.downloads[i].isAvailable) {
            if (props.downloads[i].type == "website") {
                final.push(
                    <a className="target" href={ props.downloads[i].value } key={i}>
                        Website
                    </a>
                );
            } else {
                final.push(<a className="target" href={ props.downloads[i].value } key={i}><Image className="h-16" alt={"Download " + props.projectName + " from " + platform + "."} src={ server + "/" + badge }></Image></a>);
            }
        }

    }
    return (
        <div className="flex flex-wrap gap-3 px-12">{ final }</div>
    );
}