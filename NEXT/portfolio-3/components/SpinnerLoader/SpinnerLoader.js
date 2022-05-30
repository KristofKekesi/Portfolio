import Image from "next/image";
import loaderWhite from "./SpinnerWhite.svg";
import loaderBlack from "./SpinnerBlack.svg";

export default function SpinnerLoader(props) {
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