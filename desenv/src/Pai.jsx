import Filho from "./Filho"

function Pai (props){
    return(
        <div>
            <h1>{props.nome} {props.sobrenome}</h1>
            <ul>
                <Filho nome= "José" sobrenome = {props.sobrenome}></Filho>
                <Filho nome= "Maria" sobrenome = {props.sobrenome}></Filho>
            </ul>
        </div>
    )
}

export default Pai