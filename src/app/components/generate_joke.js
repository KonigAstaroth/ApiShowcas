'use client'

import { useState } from "react"


function GenerateJoke(){
    const [broma, setBroma] = useState("")
    async function fetchData() {
    
        try {
            
            const response = await fetch('https://v2.jokeapi.dev/joke/Programming?lang=es&type=single')
            .then(response=> response.json())
            if(!response){
                console.log("No se pudo cargar el recurso")
            }
            console.log(response)
            //chiste.innerHTML = response
            setBroma(response.joke)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            
            <div style={{display: "flex", flex: "row",justifyContent: "center"}}>
            <h2>Haga click aqui para generar un chiste sobre programacion</h2>
            <button onClick={() => fetchData()} style={{marginLeft: "2%"}}>Click aqui</button>
            </div>
            <br></br>
            <p id="joke" style={{textAlign: "center"}}> {broma} </p>
        </div>
        
    )
}
export default GenerateJoke