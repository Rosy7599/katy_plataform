//event
document.getElementById("form").addEventListener("submit", crear);

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
}


