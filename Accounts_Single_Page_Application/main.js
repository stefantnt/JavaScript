let accTable = document.querySelector('#tabla'); // tabla na koju precrtava db.js 
let accViewBtn = document.querySelector('#acc-table-btn'); // account button
let addAccBtn = document.querySelector('#add-acc-btn'); // add account button
let accView = document.querySelector('#acc-view'); // div acc tabele view # pocetna stranica
let addAccView = document.querySelector('#add-acc-view'); // div za add account # view druga stranica
let tabla = document.querySelector('#tabla');
/* INPUTI na stranici add account */
let idInput = document.querySelector('[placeholder="id"]');
let nameInput = document.querySelector('[placeholder="name"]');
let lastnameInput = document.querySelector('[placeholder="lastname"]');
let emailInput = document.querySelector('[placeholder="email"]');
let phoneInput = document.querySelector('[placeholder="phone"]');
let saveBtn = document.querySelector('#save-acc-btn');
let saveEditBtn = document.querySelector('#save-edit');
let id;

function saveAcc() {
    const newAcc = {
        id: idInput.value,
        name: nameInput.value,
        lastname: lastnameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    };
    console.log(newAcc);
    db.push(newAcc);

    idInput.value = '';
    nameInput.value = '';
    lastnameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

    defaultView();
    createAccTable();
};


saveBtn.addEventListener('click', saveAcc); //dugme za save inputa u bazu



/* ##### Menjanje viewo tj 'stranica' na dva dugmeta ##### */
addAccBtn.addEventListener('click', function () {

    accView.style.display = 'none';
    addAccView.style.display = 'block';
}) // klikom na dugme add account menja se div koji se prikazuje

accViewBtn.addEventListener('click', function () {

    accView.style.display = 'block';
    addAccView.style.display = 'none';
})

function defaultView() {
    accView.style.display = 'block';
    addAccView.style.display = 'none'; // klikom na dugme SAVE vraca na default view gde se vidi tabela sa acc
    createAccTable();
}
// klikom na dugme account menja se div koji se prikazuje
/* ##### ######  ####### ##### */


createAccTable();
/* prolazi kroz objekat db koji nam simulira bazu podataka */
function createAccTable() {
    let htmlAcc = '';
    for (let i = 0; i < db.length; i++) {
        const accounts = db[i];
        htmlAcc += `
<tr>
<td>${accounts.id}</td> 
<td>${accounts.name}</td>
<td>${accounts.lastname}</td>
<td>${accounts.email}</td>
<td>${accounts.phone}</td>
<td><button data-id="${i}" class="btn btn-sm btn-warning" onclick="editAcc(event)">Edit</button></td>
<td><button class="btn btn-sm btn-danger" onclick="
db.splice(${i}, 1);
createAccTable();
">Delete</button></td>
</tr>` //uzima iz objekta i ispisuje u html

    }
    accTable.innerHTML = htmlAcc; // ispisujem na stranici u tabeli html podatke iz db
}



//KOD NA DOLE JE ZA EDIT ACC

hideEditAcc() // Sakriva edit acc view

function hideEditAcc() {
    const editAccView = document.getElementById('edit-acc-view');
    editAccView.style.setProperty('display', 'none');
}

function showEditAcc() {
    const editAccView = document.getElementById('edit-acc-view');
    editAccView.style.setProperty('display', 'block');
}; // ovo radi otvara edit acc view

let editid = document.querySelector('.editid');
let editname = document.querySelector('.editname');
let editlastname = document.querySelector('.editlastname');
let editemail = document.querySelector('.editemail');
let editphone = document.querySelector('.editphone');
//ovo gore uzima vec vrednosti koje su upisane i treba da budu editovane






function editAcc(event) {
    id = event.currentTarget.getAttribute('data-id');
    let selectedAcc = db[id];
    editid.value = selectedAcc.id;
    editname.value = selectedAcc.name;
    editlastname.value = selectedAcc.lastname;
    editemail.value = selectedAcc.email;
    editphone.value = selectedAcc.phone;
    showEditAcc();
    saveEditBtn.addEventListener('click', function () {


        selectedAcc = {
            id: editid.value,
            name: editname.value,
            lastname: editlastname.value,
            email: editemail.value,
            phone: editphone.value

        };
        db[id] = selectedAcc; // ovo me je kocilo je je meni stalno dodavao novi umesto da zameni za stari
        console.log(selectedAcc);
        defaultView();
        createAccTable();
        hideEditAcc()

    }


    );
}

