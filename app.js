//event
document.getElementById("form").addEventListener("submit", crear);

// crear

function crear(e)
{
   
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
        
        leer();
        document.getElementById("form").reset();
        console.log("Cliente guardado correctamente") 
        e.preventDefault()
        
          
}

//read
function leer(){
   
    let clientes = JSON.parse(localStorage.getItem("clientes"));
    document.getElementById("tbody").innerHTML =  ""
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
           <td> 
                <button class="btn btn-warning" onclick="editarCliente(${i})"><i class="fas fa-edit"></i></button>
               <button class="btn btn-danger" onclick="eliminarCliente(${i})"><i class="fa-solid fa-trash"></i></button>
               </td>
       </tr>
       `
    }
}
//update
function editar(nombre){
    let clientes = JSON.parse(localStorage.getItem("clientes"));
        for (let i=0; i<clientes.length; i++){
        if(clientes[i].nombre === nombre){
            document.getElementById("body").innerHTML = `
            <div class="row">
            <main class="container">
               <h2> Editar Cliente>
               <form>
                  <div class="col-auto">
                   
                     <div class="col-auto">
                        <label for="nombre" class="visually-hidden">Nombre</label>
                         <input type="text" class="form-control" id="newnombre" placeholder="${clientes[i].nombre}">
                      </div>
                      <div>
                        <label for="empresa" class="visually-hidden">Empresa</label>
                        <input type="text" class="form-control" id="newempresa" placeholder="${clientes[i].empresa}">
                      </div>
      
                      <div class="col-auto">
                        <label for="email" class="visually-hidden">Email</label>
                        <input type="email" class="form-control" id="newemail" marcador de posición =" Correo "
                         patrón =" .+@gmail.com, @hotmail.com, @yahoo.com " placeholder="${clientes[i].email}">
                      </div>
    
                      <div class="col-auto">
                        <label for="tetx" class="visually-hidden">Direccion</label>
                        <input type="text" class="form-control" id="newdireccion"  placeholder="${clientes[i].direccion}">
                      </div>
                                   
                  </form>
                  <button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button>

                  <button class="btn btn-primary" onclick="vistaPrincipal()">Cancelar</button>
            </main> 
       </div>
        
     `

        }

    }
}

//update
function actualizar(i){
    let libros = JSON.parse(localStorage.getItem("clientes"));
    clientes[i].empresa = document.getElementById("newempresa").value;
    clientes[i].nombre = document.getElementById("newnombre").value;
    clientes[i].email = document.getElementById("newemail").value;
    clientes[i].direccion = document.getElementById("newdireccion").value;
      
    localStorage.setItem("clientes", JSON.stringify(clientes));
    vistaPrincipal()
}
//delete

function eliminar(titulo){
    let clientes = JSON.parse(localStorage.getItem("clientes"));
    for(let i=0; i<clientes.length; i++){
        if(clientes[i].titulo == titulo){
            clientes.splice(i,1);
            }
        }
       localStorage.setItem("clientes", JSON.stringify(clientes)); 
       leer();
    }

    function vistaPrincipal(){
        document.getElementById("body").innerHTML = `
        <div class="row">
            <main class="container">
               <form id="form">
                  <div class="col-auto">
                   
                     <div class="col-auto">
                        <label for="nombre" class="visually-hidden">Nombre</label>
                         <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                      </div>
                      <div>
                        <label for="empresa" class="visually-hidden">Empresa</label>
                        <input type="text" class="form-control" id="empresa" placeholder="Empresa">
                      </div>
      
                      <div class="col-auto">
                        <label for="email" class="visually-hidden">Email</label>
                        <input type="email" class="form-control" id="email" marcador de posición =" Correo "
                         patrón =" .+@gmail.com, @hotmail.com, @yahoo.com " placeholder="Email">
                      </div>
    
                      <div class="col-auto">
                        <label for="tetx" class="visually-hidden">Direccion</label>
                        <input type="text" class="form-control" id="direccion"  placeholder="Direccion">
                      </div>
                
                       <div class="col-auto">
                         <button type="submit" id="agregar" class="btn btn-primary mb-3">Agregar</button>
                       </div>
                  </div>
                </form>
            </main> 
       </div>
       <section>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Empresa</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <th colspan="5">
                        <h1 class="mensaje">Sin registros</h1>
                    </th >
                </tbody>
            </table>
        </section>
        `
        leer();
    }
    leer();


