"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let onceFlag = true;
    const log = (i) => console.log('\n', i);
    const form = document.querySelector('.form-divGen');
    const divGenContainer = document.querySelector('.container-divGen');
    function createDivGen(ev) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        ev.preventDefault();
        if (onceFlag) {
            const formData = new FormData(this);
            const inputNum = (_b = (_a = formData.get('form-divGen__input-num')) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
            const inputColor = (_d = (_c = formData.get('form-divGen__input-colorGrid')) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
            const inputBkgd = (_f = (_e = formData.get('form-divGen__input-colorBkd')) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '';
            const inputBrush = (_h = (_g = formData.get('form-divGen__input-colorBrush')) === null || _g === void 0 ? void 0 : _g.toString()) !== null && _h !== void 0 ? _h : '';
            divGenContainer === null || divGenContainer === void 0 ? void 0 : divGenContainer.style.setProperty('--grid-rows', inputNum);
            divGenContainer === null || divGenContainer === void 0 ? void 0 : divGenContainer.style.setProperty('--grid-cols', inputNum);
            divGenContainer === null || divGenContainer === void 0 ? void 0 : divGenContainer.style.setProperty('--grid-bkgd', inputBkgd);
            divGenContainer === null || divGenContainer === void 0 ? void 0 : divGenContainer.style.setProperty('--grid-brush', inputBrush);
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
    // function changeColour(this: HTMLDivElement, ev: MouseEvent) {}
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', createDivGen);
    // divGenContainer?.addEventListener('mouseover', changeColour)
});
