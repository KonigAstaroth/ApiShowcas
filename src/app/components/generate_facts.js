'use client'

import { useState } from "react"

function GenerateFacts(){
    const [fact, setFact] = useState("")
    async function fetchData() {
        try {
            const response = await fetch('https://catfact.ninja/fact?max_length=140')
            .then(response=> response.json())
            if(!response){
                console.log("No se pudo cargar el recurso")
            }
            console.log(response)
            setFact(response.fact)
        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <div style={{marginTop: "3%"}}>
            <div style={{display: "flex", flex: "row",justifyContent: "center"}}>
            <h2>Datos aleatorios de gatos</h2>
            <button onClick={() => fetchData()} style={{marginLeft: "2%"}}>Click aqui</button>
            </div>
            <br></br>
            <p id= "fact" style={{ textAlign:"center"}}>{fact}</p>
        </div>
    )
}

export default GenerateFacts