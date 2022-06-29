//TODO: refactor

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

function finalize(galleryId) {
    window.removeEventListener("resize", function() {setImageGallery(galleryId)});
    window.addEventListener("resize", function() {setImageGallery(galleryId)});

    setImageGallery(galleryId);
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


function setImageGalleries() {
    var galleryImages = document.querySelectorAll("center.gallery");

    for (let i = 0; i < galleryImages.length; i++) {
        finalize(galleryImages[i].id);
    }
}

function setImageGallery(id) {
    var galleryImages = document.querySelectorAll("center#" + id + ".gallery img");

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
            setImageGalleryHeight(id);
        }
    }
}

module.exports = setImageGalleries;