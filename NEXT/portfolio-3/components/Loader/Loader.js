import Image from "next/image";
import loaderWhite from "./white.svg";
import loaderBlack from "./black.svg";

export default function Loader(props) {
    if (props.color === "white") {
        return(
            <div className="loader">
                <Image src={loaderWhite} alt="Spinning loading indicator"></Image>
            </div>  
        );
    } else {
        return(
            <div className="loader">
                <Image className="loader" src={loaderBlack} alt="Spinning loading indicator"></Image>
            </div>
        )
    }
}