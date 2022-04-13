"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let onceFlag = true;
    const log = (i) => console.log('\n', i);
    const form = document.querySelector('.form-divGen');
    const divGenContainer = document.querySelector('.container-divGen');
    const bttnClearCanvas = document.querySelector('.form-divGen__bttn-reset');
    function createDivGen(ev) {
        ev.preventDefault();
        if (onceFlag) {
            const formData = new FormData(this);
            const inputNum = formData.get('form-divGen__input-num')?.toString() ?? '';
            const inputColor = formData.get('form-divGen__input-colorGrid')?.toString() ?? '';
            const inputBkgd = formData.get('form-divGen__input-colorBkd')?.toString() ?? '';
            const inputBrush = formData.get('form-divGen__input-colorBrush')?.toString() ?? '';
            divGenContainer?.style.setProperty('--grid-rows', inputNum);
            divGenContainer?.style.setProperty('--grid-cols', inputNum);
            divGenContainer?.style.setProperty('--grid-bkgd', inputBkgd);
            divGenContainer?.style.setProperty('--grid-brush', inputBrush);
            for (let i = 0; i < Number(inputNum) * Number(inputNum); i++) {
                const newDiv = document.createElement('div');
                if (divGenContainer === null) {
                    log('divGenContainer is null');
                }
                else {
                    divGenContainer.appendChild(newDiv).className = 'genDivs';
                    newDiv.style.setProperty('--grid-color', inputColor);
                }
            }
        }
        onceFlag = false;
    }
    function clearCanvas() {
        window.location.reload();
    }
    form?.addEventListener('submit', createDivGen);
    bttnClearCanvas?.addEventListener('click', clearCanvas);
});
