import Image from "next/image";
import loaderWhite from "./white.svg";
import loaderBlack from "./black.svg";

export default function Loader(props) {
    if (props.color === "white") {
        return(
            <Image className="loader" src={loaderWhite} alt="Spinning loading indicator"></Image>
        );
    } else {
        return(
            <Image className="loader" src={loaderBlack} alt="Spinning loading indicator"></Image>
        )
    }
}