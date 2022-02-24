const gridState = {
	grid: '',
}

const alertReload = () => {
	alert('Enter number less than 100')
	window.location.reload()
}

const createBttn = document.getElementById('createBttn')

const input = document.getElementById('inputID')
input?.addEventListener('change', (ev) => {
	ev.target.value <= 100 ? (gridState.grid = ev.target.value) : alertReload()
	layoutGrid(Number(gridState.grid))
})

const clearBttn = document.getElementById('clearBttn')
clearBttn?.addEventListener('click', () => {
	window.location.reload()
})

function layoutGrid(_grid: Number) {
	const sqCont = document.getElementById('sqContainer')
	sqCont?.style.setProperty('--grid-rows', _grid.toString())
	sqCont?.style.setProperty('--grid-cols', _grid.toString())
	for (let c = 0; c < _grid * _grid; c++) {
		var cell = document.createElement('div')
		sqCont?.appendChild(cell).className = 'grid'
	}
}
