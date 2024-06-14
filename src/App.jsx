
import './App.css'
import Datos from './Datos'
function App() {
  
  const alumno={
    nombre:'Felipe',
    apellido:'León',
    edad:21,
  }
  return (
    <Datos alumnos={alumno}/>
    
  )
}

export default App
