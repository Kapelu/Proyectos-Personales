var toDoItems = []

var createdBy = document.querySelector('#createdBy')
createdBy.innerHTML = createdBy.innerHTML + ' Daniel Calderon'

function ToDo(description) {
	this.description = description
	this.complete = false
}

ToDo.prototype.completeToDo = function () {
	this.complete = true
}

function buildToDo(todo, index) {
	var toDoShell = document.createElement('div')
	toDoShell.className = 'toDoShell'

	var toDoText = document.createElement('span')
	toDoText.innerHTML = todo.description
	toDoText.id = index

	if (todo.complete) {toDoText.className = 'completeText'}

	toDoText.addEventListener('click', completeToDo)

	toDoShell.appendChild(toDoText)

	return toDoShell
}

function buildToDos(toDos) {
	var array = toDos.map(buildToDo) 
	return array
}

function displayToDos() {
	var toDoContainer = document.getElementById('toDoContainer')
	toDoContainer.innerHTML = ''

	var aux = buildToDos(toDoItems)
	aux.forEach(function (element) {
		toDoContainer.appendChild(element)
	})
}

function addToDo() {
	var toDoInput = document.getElementById('toDoInput')
	var newToDo = new ToDo(toDoInput.value)

	toDoItems.push(newToDo)

	toDoInput.value = ''

	displayToDos()
}

var button = document.getElementById('addButton')
button.addEventListener('click', addToDo)

function completeToDo(event) {
	const index = event.target.id

	toDoItems[index].completeToDo()
	displayToDos()
}

displayToDos()

if (typeof module !== 'undefined') {
	module.exports = {
		toDoItems: toDoItems,
		ToDo: ToDo,
		buildToDos: buildToDos,
		buildToDo: buildToDo,
		completeToDo: completeToDo,
		displayToDos: displayToDos,
		addToDo: addToDo,
	}
}
