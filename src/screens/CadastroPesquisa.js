import React,{Component} from "react"
import FormCadastroPesquisa from "../components/FormCadastroPesquisa";

export default class CadastroPesquisa extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-12 centered">
                    <FormCadastroPesquisa/>
                </div>
            </div>
        )
    }
}