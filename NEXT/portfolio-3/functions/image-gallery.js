//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

function theAlphaAndTheOmega(galleryId) {
    window.removeEventListener("resize", function() {setImageGalleries(galleryId)});
    window.addEventListener("resize", function() {setImageGalleries(galleryId)});

    setImageGalleries(galleryId);
}

function setImageGalleryHeight(galleryId) {
    
    setTimeout(function() {
        let height = document.getElementById(galleryId).children[0].children[0].clientHeight.toString();
        if (height > "0") {
            document.getElementById(galleryId).style.height = height + "px";
        } else {
            setImageGalleryHeight(galleryId);
        }
    }, 500);
}


function setImageGalleries(galleryId) {
    var galleryImages = document.querySelectorAll("center#" + galleryId +".gallery img");

    let counter = 0;
    [].forEach.call( galleryImages, function( img ) {
        
        if(img.complete) { incrementCounter();
        } else {
            if (img.getAttribute("listener") !== "true") {
                img.addEventListener( 'load', incrementCounter, false );
                img.setAttribute( 'listener', true );
            }
        }
    } );

    function incrementCounter() {
        counter++;
        if ( counter === galleryImages.length ) {
            setImageGalleryHeight(galleryId);
        }
    }
}

module.exports = theAlphaAndTheOmega;