


/* CRUD */

function validarFormulario(){
    /* let sku = document.getElementById("inputSKU").value; */
    let Nombre = document.getElementById("inputNombre").value;
    let Precio = document.getElementById("inputPrecio").value;

   /*  if (sku == "") {
        alert('El campo SKU es requerido');
        return false;
    }else if (!sku.includes('#')) {
        alert('El SKU no es valido');
        return false;
    } */

    if (Nombre == "") {
        alert('El campo Nombre es requerido');
        return false;
    }

    if (Precio == "") {
        alert('El campo Precio es requerido');
        return false;
    }

    return true;
}

 //leer
function listarProd(){

    let listar;

if (localStorage.getItem('listar') == null) {
    listar = [];
}else{
    listar = JSON.parse(localStorage.getItem('listar'));
}

    var html = "";
    
    listar.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>"+ element.sku+"</td>";
        html += "<td>"+ element.Nombre+"</td>";
        html += "<td>"+ element.Precio+"</td>";
        html += '<td> <button onclick="Editar('+ index +')" class="btn btn-primary">Editar</button></td>';
        html += "</tr>";
    });

    document.querySelector('#tableData tbody').innerHTML = html;
}

document.onload = listarProd();

function AddData(){
 if (validarFormulario() == true) {
    /* let sku = document.getElementById("inputSKU").value; */
    let Nombre = document.getElementById("inputNombre").value;
    let Precio = document.getElementById("inputPrecio").value;

    var listar;

    if (localStorage.getItem('listar') == null) {
        listar = []
    }else{
        listar = JSON.parse(localStorage.getItem('listar'));
    }
    listar.push({
        /* sku: sku, */
        Nombre: Nombre,
        Precio: Precio

    });

    localStorage.setItem('listar', JSON.stringify(listar));
    listarProd();

    /* document.getElementById('inputSKU').value = ""; */
    document.getElementById('inputNombre').value = "";
    document.getElementById('inputPrecio').value = "";
 }
}

function eliminar(index){

    let listar;

if (localStorage.getItem('listar') == null) {
    listar = [];
}else{
    listar = JSON.parse(localStorage.getItem('listar'));
}

listar.splice(index,1);
localStorage.setItem('listar', JSON.stringify(listar));

listarProd();
}


 function Editar(index){
    document.getElementById('btnAdd').style.display = 'none';
    document.getElementById('btnUpdate').style.display = 'block';

    let listar;

    if (localStorage.getItem('listar') == null) {
        listar = [];
    }else{
        listar = JSON.parse(localStorage.getItem('listar'));
    }

    /* document.getElementById('inputSKU').value = listar[index].sku; */
    document.getElementById('inputNombre').value = listar[index].Nombre;
    document.getElementById('inputPrecio').value = listar[index].Precio;

    document.querySelector('#btnUpdate').onclick = function () {
        if (validarFormulario()== true) {
            /* listar[index].sku = document.getElementById('inputSKU').value; */
            listar[index].Nombre = document.getElementById('inputNombre').value;
            listar[index].Precio = document.getElementById('inputPrecio').value;

            localStorage.setItem('listar', JSON.stringify(listar));
            listarProd();

            /* document.getElementById('inputSKU').value = ""; */
            document.getElementById('inputNombre').value = "";
            document.getElementById('inputPrecio').value = "";


            document.getElementById('btnAdd').style.display = 'block';
            document.getElementById('btnAdd').style.display = 'none';

        }
    };

} 