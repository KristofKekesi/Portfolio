import appleTvAppStore from "./apple-tv-app-store.svg";
import appStore from "./app-store.svg";
import macAppStore from "./mac-app-store.svg";
import googlePlayStore from "./google-play-store.png";
import microsoftStore from "./microsoft-store.png";


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function Badges(props) {
    let final = [];
    for (let i = 0; i < props.downloadLinks.length; i++) {

        let badge;
        let platform;
        switch (props.downloadLinks[i]["type"]) {
            case "apple-tv-app-store":
                badge = appleTvAppStore;
                platform = "Apple TV App Store";

                break;
            case "app-store":
                badge = appStore;
                platform = "App Store";

                break;
            case "mac-app-store":
                badge = macAppStore;
                platform = "Mac App Store";

                break;
            case "google-play-store":
                badge = googlePlayStore;
                platform = "Google Play Store";

                break;
            case "microsoft-store":
                badge = microsoftStore;
                platform = "Microsoft Store";

                break;
            default:
                console.log("Badge type not found for project " + props.projectName);
        }

        final.push(<a className="target" href={props.downloadLinks[i]["link"]} key={i}><img style={{height: "4rem"}} alt={"Download " + props.projectName + " from " + platform + "."} src={badge}></img></a>);
    }
    return (
        <div style={props.style} style={{display: "flex", flexWrap: "wrap", gap: "10px", paddingLeft: "min(5rem, 5vw)", paddingRight: "min(5rem, 5vw)"}} className="last">{final}</div>
    );
}


export default Badges;