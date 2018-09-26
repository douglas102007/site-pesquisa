import React from 'react'
import Login from '../components/Login'
import {connect} from "react-redux"
import {NavLink, withRouter} from "react-router-dom"



class Home extends React.Component{

    render(){
        return(
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <NavLink to="/">
                        Início
                        </NavLink>
                    </div>

                    <ul className="list-unstyled components">
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pesquisas</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <NavLink to="/pesquisas-andamento">
                                    Pesquisas em Andamento
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pesquisas-resultado">
                                    Resultados
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="cadastro-pesquisa">
                                    Nova Pesquisa
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/configuracoes">
                            Configurações
                            </NavLink>
                        </li>
                    </ul>

                </nav>

                <div id="content">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{minWidth: 400}}>
                        <div className="container-fluid">

                            <button type="button" id="sidebarCollapse" className="btn btn-info">
                                <i className="fas fa-align-left"></i>
                            </button>

                            <div>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item">
                                        <Login/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div>

                    {this.props.children}
                    
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    teste: state.teste
});

export default withRouter(connect(mapStateToProps)(Home));