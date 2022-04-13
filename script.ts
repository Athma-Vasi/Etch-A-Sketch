document.addEventListener('DOMContentLoaded', () => {
	let onceFlag = true

	const log = (i: unknown) => console.log('\n', i)

	const form: HTMLFormElement | null = document.querySelector('.form-divGen')
	const divGenContainer: HTMLDivElement | null =
		document.querySelector('.container-divGen')

	function createDivGen(this: HTMLFormElement, ev: SubmitEvent) {
		ev.preventDefault()

		if (onceFlag) {
			//grab input as string
			const formData = new FormData(this)
			const input = formData.get('form-divGen__input')?.toString() ?? ''
			//style='--grid-rows: input' ...
			divGenContainer?.style.setProperty('--grid-rows', input)
			divGenContainer?.style.setProperty('--grid-cols', input)

			for (let i = 0; i < Number(input) * Number(input); i++) {
				const newDiv: HTMLDivElement = document.createElement('div')
				divGenContainer === null
					? log('divGenContainer is null')
					: (divGenContainer.appendChild(newDiv).className = 'genDivs')
			}
		}
		onceFlag = false
	}

	// function changeColour(this: HTMLDivElement, ev: MouseEvent) {}

	form?.addEventListener('submit', createDivGen)
	// divGenContainer?.addEventListener('mouseover', changeColour)
})
