import React, { Children } from "react"

function FilhoComProps(props){

    return React.Children.map(props.dados.children, child =>{
        return React.cloneElement(child, {...props.dados, ...child.props})
    })
}

export default FilhoComProps