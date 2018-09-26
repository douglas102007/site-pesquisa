import {GET, POST} from './apiServices/api'
import constants from '../../src/api/constants'
import axios from 'axios'


export const logarUsuario = async(dados, success, error) =>{

    localStorage.removeItem('token');
     
    const loginModel = {
        usuario: dados.usuario,
        senha: dados.senha
    }

    axios.post(constants.apiEnd + '/api/token', loginModel).then(result =>{
        localStorage.setItem('token', result.data.token);
        success(result);
    }).catch(err =>{
        error();
    })
}
