import { server } from "../../config";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


export default function Badges(props) {
    let final = [];
    // todo refactor to dont use the server variable

    const downloads = props.downloads ?? [];
    const projectName = props.projectName ?? "";

    for (let i = 0; i < downloads.length; i++) {

        let badge;
        let platform;
        switch (downloads[i]["store"]) {
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
                console.log("Unknown download type: " + downloads[i].store);
                break;
        }

        if(downloads[i].isAvailable == downloads[i].isAvailable) {
            if (downloads[i].store == "website") {
                final.push(
                    <a className="target h-16 bg-black px-4 text-white flex flex-col justify-center" href={ downloads[i].link } key={i}>
                            <span className="font-inter text-sm">Visit their</span>
                            <span className="font-interBold text-2xl">Website</span>
                    </a>
                );
            } else {
                final.push(<a className="target" href={ downloads[i].link } key={i}><img className="h-16" alt={"Download " + projectName + " from " + platform + "."} src={ server + "/" + badge }></img></a>);
            }
        }

    }
    return (
        <div className="flex flex-wrap gap-3 px-12">{ final }</div>
    );
}