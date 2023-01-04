import React from "react"

function bomDia(props){
    return<React.Fragment>
        <h1>Bom dia {props.nome}</h1>
        <h2>Você tem {props.idade} anos!</h2>
    </React.Fragment>
}

export default bomDia