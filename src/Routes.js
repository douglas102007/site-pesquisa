
import React from "react"
import {Route, Switch} from "react-router-dom"
import CadastroPesquisa from "./screens/CadastroPesquisa"
import Inicio from "./screens/Inicio"
import Erro from "./screens/Erro"
import PesquisasResultado from "./screens/PesquisasResultado"
import PesquisasAndamento from "./screens/PesquisasAndamento"
import Configuracoes from "./screens/Configuracoes"

const Routes = () =>{
    return(
        <Switch>
            <Route path="/" component={Inicio} exact/>
            <Route path="/cadastro-pesquisa" component={CadastroPesquisa}/>
            <Route path="/pesquisas-resultado" component={PesquisasResultado}/>
            <Route path="/pesquisas-andamento" component={PesquisasAndamento}/>
            <Route path="/configuracoes" component={Configuracoes}/>
            <Route component={Erro}/>
        </Switch>

    )
};




export default Routes;