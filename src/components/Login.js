import React from 'react'
import { logarUsuario } from '../api/apiAuth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from "react-redux"



class Login extends React.Component{
    state = {
        usuario: null,
        senha: null,
        error: null
    }


    autenticarUsuario = async(e) =>{
        e.preventDefault();
        logarUsuario(this.state, this.autenticarUsuarioSuccess, this.autenticarUsuarioError);
    }

    autenticarUsuarioSuccess = async(result) =>{
        this.props.dispatch({type: "LOG_USER_IN"})
        toast.success("Bem vindo!", {
            position: toast.POSITION.TOP_CENTER
        });

    }

    autenticarUsuarioError = async(result) =>{
        toast.error("Usuário ou Senha inválidos", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    handleChange = (e) => {
        var id = e.target.id
        var val = e.target.value
        this.setState({
        [id]: val,
        })
    }


    render(){
        return(

            
            <React.Fragment>

                <button type="button" className="btn-entrar" data-toggle="modal" data-target="#modalLogin">
                    Entre ou Cadastre-se
                </button>

                <div className="modal fade" id="modalLogin" tabindex="-1" role="dialog"  aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >Entrar</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <input className="form-control" type="text" onChange={this.handleChange} name="usuario" id="usuario" placeholder="Usuário ou E-Mail"/>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="text" onChange={this.handleChange} name="senha" id="senha" placeholder="Senha"/>
                            </div>
                        </div>

                        <div className="sm-text">
                            <p>
                                Não é usuário ainda ? cadastre-se!
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn button btn_red" data-dismiss="modal">Fechar</button>
                            <button className="btn button" onClick={this.autenticarUsuario}>Entrar</button>
                        </div>
                        </div>
                    </div>
                </div>
                
                <ToastContainer/>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state =>({
    userLoggedIn: state.userLoggedIn
});

export default connect(mapStateToProps)(Login);