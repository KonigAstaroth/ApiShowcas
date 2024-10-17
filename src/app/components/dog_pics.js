'use client'

import { useState } from "react"

function DogPic() {
    const [dogImage,setImage] = useState()
    async function fetchData() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            if(!response){
                console.log("No se pudo cargar el recurso")
            }
            console.log(response)
            setImage(response?.message)
        } catch (error) {
            
        }
        
    }
    
    return(
        <div style={{marginTop: "3%"}}>
            <div style={{display: "flex", flex: "row",justifyContent: "center"}}>
            <h2>Generar imagen de perrito aleatoria</h2>
            <button onClick={() => fetchData()} style={{marginLeft: "2%"}}>Click aqui</button>
            </div>
            <br></br>
            <img src={dogImage} style={{display:"flex", margin:"auto", width:"300px", height:"300px"}}/>
        </div>
    )
}

export default DogPic