import { pencil } from "../tools/pencil";
import { fillBucket } from "../tools/fillBucket";
import { magicBucket } from "../tools/magicBucket";
import { eraser } from "../tools/eraser";
import { picker } from "../tools/picker";
export function hotkeyhandler(e) {
    const keyShortcuts =JSON.parse(localStorage.shortCuts);
    const keysInUse = Object.values(keyShortcuts);
    if (keysInUse.indexOf(e.key) === - 1) {
        return
    } else {
        switch(getKeyByValue(keysInUse, e.key)) {
            case '0':
                pencil();
            break;
            case '1':
                fillBucket();
            break;
            case '2':
                magicBucket();
            break;
            case '3':
                eraser();
            break;
            case '4':
                console.log('stroke has been still deploying');
            break;
            case '5':
                picker();
            break;
        }
    }
    // console.log(keysInUse.map(item => getKeyByValue(keysInUse, item)));
    
}

function getKeyByValue(object, value) { return Object.keys(object).find(key => object[key] === value); }