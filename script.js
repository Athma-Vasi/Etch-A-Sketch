"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let onceFlag = true;
    const log = (i) => console.log('\n', i);
    const form = document.querySelector('.form-divGen');
    const divGenContainer = document.querySelector('.container-divGen');
    function createDivGen(ev) {
        var _a, _b;
        ev.preventDefault();
        if (onceFlag) {
            //grab input as string
            const formData = new FormData(this);
            const input = (_b = (_a = formData.get('form-divGen__input')) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
            //style='--grid-rows: input' ...
            divGenContainer === null || divGenContainer === void 0 ? void 0 : divGenContainer.style.setProperty('--grid-rows', input);
            divGenContainer === null || divGenContainer === void 0 ? void 0 : divGenContainer.style.setProperty('--grid-cols', input);
            for (let i = 0; i < Number(input) * Number(input); i++) {
                const newDiv = document.createElement('div');
                divGenContainer === null
                    ? log('divGenContainer is null')
                    : (divGenContainer.appendChild(newDiv).className = 'genDivs');
            }
        }
        onceFlag = false;
    }
    // function changeColour(this: HTMLDivElement, ev: MouseEvent) {}
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', createDivGen);
    // divGenContainer?.addEventListener('mouseover', changeColour)
});
