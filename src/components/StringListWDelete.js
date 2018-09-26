import React from "react"

export default class StringListWDelete extends React.Component{

    render(){
        return(
        <div className="containerEmailCadastro">
            <span className="emailUsuario">
                {this.props.Item}
            </span>
                <input type="button" className="btn button btn_small btn_red" value="Deletar" onClick={() => this.props.onDelete(this.props.Item)}/>
        </div>
        )
    }
}