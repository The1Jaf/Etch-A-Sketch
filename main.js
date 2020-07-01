const container = document.createElement('div');
container.className = 'main-container';
document.body.appendChild(container);
const button = document.createElement('button');
button.className = 'btn';
button.textContent = 'reset';
document.body.appendChild(button);

function createGrid(grid) {

	container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

	for(let i = 0; i < (grid*grid); i++) {
		let grid = document.createElement('div');
		container.appendChild(grid).className = 'gridCell'
	}
}

function request() {
	let gridSize = Number(prompt('Choose a Number'));
	if (gridSize < 0) return 'Impossible.';
		else createGrid(gridSize);
}
function paint() {
let gridCell = document.querySelectorAll('.gridCell')
let cells = Array.from(gridCell)
cells.forEach(elem => {
		elem.addEventListener('mouseenter', function() { 
			elem.style.backgroundColor = "black";
			elem.style.borderColor = "white";
		})
	});
};

function reset() {
	if(container.hasChildNodes()){
		while(container.hasChildNodes()) {
			container.removeChild(container.lastChild)
		}
	};
	request();
	paint();
};
request();
paint();

button.addEventListener('click', () => { reset()});