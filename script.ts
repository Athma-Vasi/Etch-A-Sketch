document.addEventListener('DOMContentLoaded', () => {
	let onceFlag = true

	const log = (i: unknown) => console.log('\n', i)

	const form: HTMLFormElement | null = document.querySelector('.form-divGen')
	const divGenContainer: HTMLDivElement | null =
		document.querySelector('.container-divGen')

	function createDivGen(this: HTMLFormElement, ev: SubmitEvent) {
		ev.preventDefault()

		if (onceFlag) {
			const formData = new FormData(this)
			const inputNum = formData.get('form-divGen__input-num')?.toString() ?? ''
			const inputColor = formData.get('form-divGen__input-colorGrid')?.toString() ?? ''
			const inputBkgd = formData.get('form-divGen__input-colorBkd')?.toString() ?? ''
			const inputBrush = formData.get('form-divGen__input-colorBrush')?.toString() ?? ''

			divGenContainer?.style.setProperty('--grid-rows', inputNum)
			divGenContainer?.style.setProperty('--grid-cols', inputNum)
			divGenContainer?.style.setProperty('--grid-bkgd', inputBkgd)
			divGenContainer?.style.setProperty('--grid-brush', inputBrush)

			for (let i = 0; i < Number(inputNum) * Number(inputNum); i++) {
				const newDiv: HTMLDivElement = document.createElement('div')

				if (divGenContainer === null) {
					log('divGenContainer is null')
				} else {
					divGenContainer.appendChild(newDiv).className = 'genDivs'
					newDiv.style.setProperty('--grid-color', inputColor)
				}
			}
		}
		onceFlag = false
	}

	// function changeColour(this: HTMLDivElement, ev: MouseEvent) {}

	form?.addEventListener('submit', createDivGen)
	// divGenContainer?.addEventListener('mouseover', changeColour)
})
