//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)


function setStorage(key, value) {
    let storage = window.localStorage;

    storage.setItem(key, value);
}

function getStorage(key) {
    let storage = window.localStorage;

    return storage.getItem(key);
}

exports.setStorage = setStorage;
exports.getStorage = getStorage;