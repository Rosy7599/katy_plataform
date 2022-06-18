//event
document.getElementById("form").addEventListener("submit", crear);

// crear

function crear() {
  const empresa = document.getElementById("empresa").value
  const nombre = document.getElementById("nombre").value
  const email = document.getElementById("email").value
  const direccion = document.getElementById("direccion").value

  let cliente = {
      empresa,
      nombre,
      email,
      direccion
  }
      if  ((empresa && nombre && email && direccion) == "") {
      alert('Tos los campos son requeridos');
      return false;
  }

  if (localStorage.getItem("clientes") === null) {
      let clientes = []
      clientes.push(cliente)
      localStorage.setItem("clientes", JSON.stringify(clientes))

  } else {
      let clientes = JSON.parse(localStorage.getItem("clientes"))
      clientes.push(cliente)
      localStorage.setItem("clientes", JSON.stringify(clientes))
  }
};


       
        leer();
        document.getElementById("form").reset();
        console.log("Cliente guardado correctamente") 

        

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
//editar cliente
function editarCliente(indice) {
  let clientes = JSON.parse(localStorage.getItem("clientes"));
  document.getElementById("body").innerHTML = `
          <div class="row">
          <main class="container">
             <h2> Editar Cliente </h2>
             <form >
                   <div class="col-auto">
                      <label for="nombre" class="visually-hidden">Nombre</label>
                       <input type="text" class="form-control" id="newnombre" placeholder="${clientes[indice].nombre}">
                    </div>
                    <div>
                      <label for="empresa" class="visually-hidden">Empresa</label>
                      <input type="text" class="form-control" id="newempresa" placeholder="${clientes[indice].empresa}">
                    </div>
    
                    <div class="col-auto">
                      <label for="email" class="visually-hidden">Email</label>
                      <input type="email" class="form-control" id="newemail" marcador de posición =" Correo "
                       patrón =" .+@gmail.com, @hotmail.com, @yahoo.com " placeholder="${clientes[indice].email}">
                    </div>
  
                    <div class="col-auto">
                      <label for="tetx" class="visually-hidden">Direccion</label>
                      <input type="text" class="form-control" id="newdireccion"  placeholder="${clientes[indice].direccion}">
                    </div>
                    
                    </form>
                    <button class="btn btn-success" onclick="actualizar(${indice})">Actualizar</button>
  
                    <button class="btn btn-primary" onclick="vistaPrincipal()">Cancelar</button>
          </main> 
     </div>
      
   `


}

//update
function actualizar(indice) {
  const newempresa = document.getElementById("newempresa").value;
  const newnombre = document.getElementById("newnombre").value;
  const newemail = document.getElementById("newemail").value;
  const newdireccion = document.getElementById("newdireccion").value;
  if (newempresa && newnombre && newemail && newdireccion) {
      let clientes = JSON.parse(localStorage.getItem("clientes"));
          clientes[indice] = {
          newempresa,
          newnombre,
          newemail,
          newdireccion,
      }
      localStorage.setItem("clientes", JSON.stringify(clientes));
      vistaPrincipal()
  } else {
      alert('Todos los campos son requeridos');
  }
}
//delete

const  eliminarCliente  =  ( indice )  =>  {
   if  ( confirm ( '¿Desea eliminar el elemento?' ) )  {
    clientes.splice(indice, 1);
      leer ( ) ;
      alerta ( 'Se eliminó correctamente.' )
  }
} ;
       
  
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
              `

        leer();
    }
    leer();