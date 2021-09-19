//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function setLocale() {
    let locale = navigator.language.substring(0,2);

    document.getElementsByTagName('html')[0].setAttribute('lang', locale);
}


module.exports = setLocale;