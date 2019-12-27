export function pencilSize (id) {
    document.querySelector('#pencilSize0').classList.remove('pencilSize-active');
    document.querySelector('#pencilSize1').classList.remove('pencilSize-active');
    document.querySelector('#pencilSize2').classList.remove('pencilSize-active');
    document.querySelector('#pencilSize3').classList.remove('pencilSize-active');

    switch (id) {
        case 'pencilSize0' :
        case 'pencil0':
            localStorage.pencilSize = 0;
            document.querySelector(`#pencilSize0`).classList.add('pencilSize-active');
        break;
        case 'pencilSize1' :
        case 'pencil1':
            localStorage.pencilSize = 1;
            document.querySelector(`#pencilSize1`).classList.add('pencilSize-active');
        break;
        case 'pencilSize2' :
        case 'pencil2':
            localStorage.pencilSize = 2;
            document.querySelector(`#pencilSize2`).classList.add('pencilSize-active');
        break;
        case 'pencilSize3' :
        case 'pencil3':
            localStorage.pencilSize = 3;
            document.querySelector(`#pencilSize3`).classList.add('pencilSize-active');
        break;
        default:
        break;
    }
        
        
    
}