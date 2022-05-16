document.addEventListener('DOMContentLoaded', () => {
  let onceFlag = true;

  const form: HTMLFormElement | null = document.querySelector('.form-divGen');
  const divGenContainer: HTMLDivElement | null =
    document.querySelector('.container-divGen');
  const bttnClearCanvas: HTMLButtonElement | null = document.querySelector(
    '.form-divGen__bttn-reset'
  );
  const bttnRandom: HTMLButtonElement | null = document.querySelector(
    '.form-divGen__bttn-random'
  );

  function createDivGen(this: HTMLFormElement, ev: SubmitEvent) {
    ev.preventDefault();

    if (onceFlag) {
      const formData = new FormData(this);
      const inputNum = formData.get('form-divGen__input-num')?.toString() ?? '';
      const inputColor =
        formData.get('form-divGen__input-colorGrid')?.toString() ?? '';
      const inputBkgd =
        formData.get('form-divGen__input-colorBkd')?.toString() ?? '';
      const inputBrush =
        formData.get('form-divGen__input-colorBrush')?.toString() ?? '';

      divGenContainer?.style.setProperty('--grid-rows', inputNum);
      divGenContainer?.style.setProperty('--grid-cols', inputNum);
      divGenContainer?.style.setProperty('--grid-bkgd', inputBkgd);
      divGenContainer?.style.setProperty('--grid-brush', inputBrush);

      for (let i = 0; i < Number(inputNum) * Number(inputNum); i++) {
        const newDiv: HTMLDivElement = document.createElement('div');

        if (divGenContainer) {
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

  function createRandom(this: HTMLButtonElement, ev: MouseEvent) {
    ev.preventDefault();

    const randInputFN = () => Math.floor(Math.random() * 64);
    const randInput = randInputFN().toString();

    const randHue = () => Math.floor(Math.random() * 360).toString();
    const randSaturation = () => Math.floor(Math.random() * 100).toString();
    const randLightness = () => Math.floor(Math.random() * 100).toString();
    const randAlpha = () => Math.floor(Math.random() * 100).toString();

    const randHslaFN = () =>
      `hsla(${randHue()},${randSaturation()}%,${randLightness()}%,${randAlpha()}%)`;
    const randHsla = randHslaFN();

    if (onceFlag) {
      divGenContainer?.style.setProperty('--grid-rows', randInput);
      divGenContainer?.style.setProperty('--grid-cols', randInput);
      divGenContainer?.style.setProperty('--grid-bkgd', randHslaFN());

      for (let i = 0; i < Number(randInput) * Number(randInput); i++) {
        const newDiv: HTMLDivElement = document.createElement('div');

        if (divGenContainer) {
          divGenContainer.appendChild(newDiv).className = 'genDivs';
          newDiv.style.setProperty('--grid-color', randHsla);
        }

        newDiv.addEventListener('mouseover', () => {
          newDiv.style.setProperty('--grid-brush', randHslaFN());
        });
      }
    }
    onceFlag = false;
  }

  form?.addEventListener('submit', createDivGen);
  bttnClearCanvas?.addEventListener('click', clearCanvas);
  bttnRandom?.addEventListener('click', createRandom);
});
