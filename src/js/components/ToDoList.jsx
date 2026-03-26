import React, { useState} from "react";

export const ToDoList = () => {

const [tarea, setTarea] = useState("");
const [lista, setLista] = useState([]);


    const agregar = (e) => {
        setTarea (e.target.value);
    };

    const agregarALaLista = (e) => {

        if (e.key=="Enter"){
            if(tarea.trim()===""){
            return;
            }
            setLista([...lista, tarea]);
            setTarea ("");
        }
    };

    const eliminarTarea = (paramIndex) => {
        let elementos = lista.filter((item,index) =>index != paramIndex)
        setLista (elementos)
    }
    return (
        <> 
        <h1 className= "titulo">To Do List</h1>
        <div className= "input-group flex-nowrap">
            <input type="text" className="form-control" placeholder= "What needs to be done?" aria-label="Username"
            aria-describedby= "addon-wrapping" value={tarea} onChange={agregar} onKeyDown={agregarALaLista} />
        </div>

<ul>
    {lista.map((item,index) => (
    <li key = {index} className= "posicionItem">{item} <span className = "botonEliminar" onClick = { () => eliminarTarea (index)}> X</span></li>
    ))}
    
</ul>

<p>{lista.length} item left</p>
        </>
    );
};