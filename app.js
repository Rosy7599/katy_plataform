//event
document.getElementById("form").addEventListener("submit", crear);
document.getElementById("tbody");



// crear

function crear(e)
{
    e.preventDefault()
    empresa = document.getElementById("empresa").value
    nombre = document.getElementById("nombre").value
    email = document.getElementById("email").value
    direccion = document.getElementById("direccion").value

    let cliente = {
        empresa,
        nombre,
        email,
        direccion
    }
    if(localStorage.getItem("clientes") === null){
        let clientes = []
        clientes.push(cliente)
        localStorage.setItem("clientes", JSON.stringify(clientes))
        }else{
            let clientes = JSON.parse(localStorage.getItem("clientes"))
            clientes.push(cliente)
            localStorage.setItem("clientes", JSON.stringify(clientes))
        }
        
        
        document.getElementById("form").reset();
        console.log("Cliente guardado correctamente") 
        
          
}

//read
function leer(){
   
    let clientes = JSON.parse(localStorage.getItem("clientes"));
    documentent.getElementById("tbody").innerHTML =  ""
    for(let i=0; i < clientes.length; i++){
        let empresa = clientes[i].empresa
        let nombre = clientes[i].nombre
        let email = clientes[i].email
        let direccion = clientes[i].direccion

        document.getElementById("tbody").innerHTML +=
          
        `
       <tr>
           <td>${empresa}</td>
           <td>${nombre}</td>
           <td>${email}</td>
           <td>${direccion}</td>
           <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactoModal" onclick="mostrarContacto(${i}
                   Ver
                </button>
                <button class="btn btn-warning" onclick="editarContacto(${i})">.</button>
               <button class="btn btn-danger" onclick="eliminarContacto(${i})">.</button>
               </td>
       </tr>
       `
 }
}
leer();

