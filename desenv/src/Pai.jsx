import FilhoComProps from "./utils/util"

function Pai (props){
    return(
        <div>
            <h1>{props.nome} {props.sobrenome}</h1>
            <h2>Filhos</h2>
            <ul>
              {<FilhoComProps dados = {props}></FilhoComProps>}
            </ul>
        </div>
    )
}

export default Pai