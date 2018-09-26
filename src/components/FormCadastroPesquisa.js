import React,{Component} from  "react"
import DateMenu from "./DatePicker"
import StringListWDelete from "./StringListWDelete"

class FormCadastroPesquisa extends Component{

    state={
        page: 1,
        emailUsuarioPesquisador: null,
        emailUsuarioResultado: null,
        camposPesquisa: [{}],
        nomeCampoAtual: null,
        campoOpcaoAtual: null,
        camposOpcoesAtual: [],
        UsuariosResultado: [],
        UsuariosPesquisadores:[],
        nomePesquisa: null,
    }

    proximo = () =>{
        this.setState({
            page: this.state.page != 3 ? this.state.page + 1 : 3
        })
    }

    voltar = () =>{
        this.setState({
            page: this.state.page != 1 ? this.state.page - 1 : 1
        })
    }



    finalizar = () =>{

    }

    handleChange = (e) => {
        var id = e.target.id
        var val = e.target.value
        this.setState({
        [id]: val,
        })
    }

    adicionarPesquisa = () =>{
        var novoCampoPesquisa  ={
            nomeCampo: this.state.nomeCampoAtual,
            camposOpcoes: this.state.camposOpcoesAtual,
            usuariosPesquisadores: this.state.usuariosPesquisadores,
            UsuariosResultado: this.state.UsuariosResultado,
        }
    }

    adicionarCampo = () =>{
        const novoCampo = {
            nomeCampo: this.state.nomeCampoAtual,
            campoOpcoes: this.state.camposOpcoesAtual
        }

        this.setState(prevState => ({
            camposPesquisa: [...prevState.camposPesquisa, novoCampo],
            nomeCampoAtual: null,
            campoOpcaoAtual: null,
            camposOpcoesAtual: []
        }))

        console.log(this.state.camposPesquisa);
    }

    adicionarCampoOpcao= () =>{
        var existe = this.state.camposOpcoesAtual.includes(this.state.campoOpcaoAtual);

        if(!existe){
            this.setState(prevState => ({
                camposOpcoesAtual: [...prevState.camposOpcoesAtual, this.state.campoOpcaoAtual]
            }))
        }else{
            console.log('campo ja existe na lista');
        }
    }

    removerCampoOpcao = (opcao) =>{
        console.log(opcao);
        this.setState(prevState => ({
            camposOpcoesAtual: prevState.camposOpcoesAtual.filter(e => e !== opcao)
        }))

    }

    adicionaUsuarioResultado = () => {
        var existe = this.state.UsuariosResultado.includes(this.state.emailUsuarioResultado);

        if(!existe){
            this.setState(prevState => ({
                UsuariosResultado: [...prevState.UsuariosResultado, this.state.emailUsuarioResultado]
            }))
        }else{
            console.log('email ja existe na lista');
        }
    }

    removerUsuarioResultado = (email) =>{
        this.setState(prevState => ({
            UsuariosResultado: prevState.UsuariosResultado.filter(e => e !== email.i)
        }))
    }

    adicionaUsuarioPesquisador = () => {
        var existe = this.state.UsuariosPesquisadores.includes(this.state.emailUsuarioPesquisador);

        if(!existe){
            this.setState(prevState => ({
                UsuariosPesquisadores: [...prevState.UsuariosPesquisadores, this.state.emailUsuarioPesquisador]
            }))
        }else{
            console.log('email ja existe na lista');
        }
    }

    removerUsuarioPesquisador = (email) =>{
        this.setState(prevState => ({
            UsuariosPesquisadores: prevState.UsuariosPesquisadores.filter(e => e !== email.i)
        }))
    }


    render(){
        return(
            <form className="container_padrao form_pesquisa" id="msform">

            { 
                this.state.page == 1 
                &&
                <fieldset>
                    <div className="form-group">
                        <label for="nomePesquisa">Nome da Pesquisa</label>
                        <input className="form-control" type="text" name="nomePesquisa" id="nomePesquisa" placeholder="Dê um nome à sua Pesquisa"/>
                    </div>

                    <div className="form-group">
                        <label>Onde será realizada a Pesquisa ?</label>
                        <div className="flex">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input"/>
                                    Online
                                </label>
                            </div>


                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input"/>
                                    Em Campo
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Qual será a Visibilidade do Resultado ?</label>
                        <div className="flex">
                            <div className="radio">
                                <label><input type="radio" name="optradio2" checked/> Público, Qualquer um pode ver.</label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="optradio2"/> Privado, Quero especificar quem pode ver.</label>
                            </div>
                        </div>
                    </div>

                    
                    <div className="form-group">
                        <label>Período da Pesquisa</label>
                        <div className="input-group mb-3">
                            <div className="flex" style={{marginRight: 30, marginBottom: 10}}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Início</span>
                                </div>
                                    <DateMenu></DateMenu>
                            </div>

                            <div className="flex" style={{marginRight: 30, marginBottom: 10}}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Fim</span>
                                </div>
                                    <DateMenu></DateMenu>
                            </div>
                        </div>

                    </div>


                    <div className="form-group">
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Quantidade Máxima de Repostas</span>
                            </div>
                            <input type="text" className="form-control" style={{maxWidth: 80}} placeholder="Infinito" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                    </div>
                </fieldset>
            }


            { 
                this.state.page == 2
                &&
                <fieldset>

                    <div className="row">
                    <div className="form-group col-md-6">
                        <label>Quem pode ver os Resultados ? </label>
                        <div className="flex">
                        <input className="form-control" onChange={this.handleChange} type="text" name="emailUsuarioResultado" id="emailUsuarioResultado" placeholder="E-Mail do Usuário"/>
                        <input type="button" name="UsuariosResultado" className="btn button" id="UsuariosResultado" value="+" onClick={() => this.adicionaUsuarioResultado()}/>
                        </div>

                        <ul>
                        {this.state.UsuariosResultado.map(i => {
                            return (
                                <div className="containerEmailCadastro">
                                    <span className="emailUsuario">
                                    {i}
                                    </span>
                                    <input type="button" className="btn button btn_small btn_red" value="Deletar" onClick={() => this.removerUsuarioResultado({i})}/>
                                </div>
                            )
                        })}
                        </ul>
                    </div>

                    <div className="form-group col-md-6">
                        <label>Quem serão os Pesquisadores em campo ?</label>
                        <div className="flex">
                        <input className="form-control" onChange={this.handleChange} type="text" pattern="[0-9]*" name="emailUsuarioPesquisador" id="emailUsuarioPesquisador" placeholder="E-Mail do Usuário"/>
                        <input type="button" name="UsuariosPesquisadores" className="btn button" id="UsuariosPesquisadores" value="+" onClick={() => this.adicionaUsuarioPesquisador()}/>
                        </div>

                        <div>
                        {this.state.UsuariosPesquisadores.map(i => {
                            return (
                                <div className="containerEmailCadastro">
                                    <span className="emailUsuario">
                                    {i}
                                    </span>
                                    <input type="button" className="btn button btn_small btn_red" value="Deletar" onClick={() => this.removerUsuarioPesquisador({i})}/>
                                </div>
                            )
                        })}
                        </div>
                    </div>

                    </div>
                </fieldset>
            }


            { 
                this.state.page == 3
                &&
                <fieldset>
                    <div className="containerFormCampo">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="nomePesquisa">Nome do Campo</label>
                                    <input className="form-control" type="text" name="nomeCampoAtual" id="nomeCampoAtual" placeholder="Nome"/>
                                </div>

                                <label>Tipo de campo</label>
                                <div className="flex">
                                    <div className="radio">
                                        <label><input type="radio" name="radioTipoEscolha" checked/> Múltipla escolha</label>
                                    </div>
                                    <div className="radio">
                                        <label><input type="radio" name="radioTipoEscolha"/> Apenas uma Opção</label>
                                    </div>
                                </div>


                                <label>Definições do campo</label>
                                <div className="flex">
                                    <div className="radio">
                                        <label><input type="radio" name="radioDefinicao" checked/> Definir valores</label>
                                    </div>
                                    <div className="radio">
                                        <label><input type="radio" name="radioDefinicao"/> Valores livres</label>
                                    </div>
                                </div>

                                <div className="flex">
                                <input className="form-control" onChange={this.handleChange} type="text" name="campoOpcaoAtual" id="campoOpcaoAtual" placeholder="Nome da Opção"/>
                                <input type="button" className="btn button" value="+" onClick={() => this.adicionarCampoOpcao()}/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                {this.state.camposOpcoesAtual.map(i => {
                                    return (
                                        <StringListWDelete Item={i} onDelete={this.removerCampoOpcao}></StringListWDelete>
                                    )
                                })}
                            </div>

                            <div className="col-12">
                                <input type="button" name="Adicionar" className="btn button fright" value="Adicionar" onClick={() => this.adicionarCampo()}/>
                            </div>
                        </div>

                        
                    </div>

                    <div className="containerFormCampo">
                        lista campos adicionados
                    </div>
                </fieldset>
            }


            <div className="container_btnNV">

            {
                this.state.page == 3 
                &&
                <input type="button" name="next" className="btn button fright" value="Finalizar" onClick={() => this.finalizar()}/>
                ||
                <input type="button" name="next" className="btn button fright" value="Próximo" onClick={() => this.proximo()}/>
            }

            {
                this.state.page == 1 
                ||
                <input type="button" name="next" className="btn button fleft" value="Voltar" onClick={() => this.voltar()}/>
            }
            </div>
             </form>
        )
    }
}

export default FormCadastroPesquisa;