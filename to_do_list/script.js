function uzmiInput() {
	let input = document.querySelector('#input').value;
	let lista = document.querySelector('.div-list');
    
 if(input.length > 1) {
 	const collection = document.getElementsByClassName("todo-lista");
 	let broj = collection.length + 1;
	lista.innerHTML += `<div class="todo-lista">
                        <p>${'#' + broj} - ${input}</p> 
	                        <img onclick="important(this)" src="img/important.png" class="icon">
	                        <img onclick="doneTask(this)" src="img/done.png" class="icon">
	                        <img onclick="deleteItem(this)" src="img/delete.png" class="icon">
                        </div>`;
	} else {
		alert('Upisi u input')}


}

function important(obj) {
 let todo = obj.closest('.todo-lista');
 let listaElement = todo.querySelector('p');
 if (listaElement.style.color !== "red") {
	listaElement.style.color = "red";
 } else {
	listaElement.style.color = "black";
 }
}

function doneTask(gotovo) {
 let ovaj = gotovo.closest('.todo-lista');
 let listaElement = ovaj.querySelector('p');
 listaElement.style.textDecoration = "line-through";
}

function deleteItem(obrisi) {
let ovaj = obrisi.closest('.todo-lista')
ovaj.remove();

 
}

