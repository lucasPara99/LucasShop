


import { useState } from "react"

const Counter = () =>{




  const  [ counter , setCounter] = useState(0)

  const [user, setUser] = useState("")

    const sumar = ()=>{
     setCounter (counter + 1)
    }

    const restar = ()=>{
        setCounter (counter - 1)
    }
    const sumar10 = ()=>{
        setCounter (counter + 10)
    }
    const reiniciar = ()=>{
        setCounter (0)
    }
    const login = ()=>{
        setUser ("Lucas")
    }
    return (
        <div>
            <h1>Este es el contador</h1>
            <button onClick={sumar}>Sumar</button>
            <h3>{counter}</h3>
            <button onClick={restar}>Restar</button>
            <button onClick={sumar10}>Sumar 10</button>
            <button onClick={reiniciar}>Reniciar contador</button>

            <button onClick={login}>Login</button>

            {
               user.length > 0 ? <h2>Bienvenido {user}</h2> : <h2>Ingresa</h2>


            }
        </div>
    );
};

export default Counter