
import './App.css'

function App(){
  return(
    <section>

      <h4>Ingresá tus datos</h4>
      <form>
      
      <label>Ingrese su nombre</label>
      <input type="text" name='nombre'/>
      <label>Ingrese su apellido</label>
      <input type="text" name='apellido'/>
      <label>Ingrese su email</label>
      <input type="email" name='correo'/>
      <label>Ingrese su teléfono</label>
      <input type="tel" name='telefono' />
      <label>Ingrese una clave</label>
      <input type="password" name='clave'/>
      <label>Reingrese la clave</label>
      <input type="password" name='clave'/>
      
      <button>Enviar</button>
      </form>
    </section>

  )

}

function sumar(n1, n2){
  return n1+n2
}

export{sumar, App}
