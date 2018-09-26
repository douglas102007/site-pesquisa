import React from 'react'
import constants from "../constants"
import axios from 'axios'


export const GET = async(recurso) =>{

    const api_call = await axios.get(constants.apiEnd + recurso);
    return await api_call.json();
};


export const POST = async(recurso, corpo) =>{

    const api_call = await axios.post(constants.apiEnd + recurso, corpo).then(success =>{
        return api_call.json();
    }).catch(error =>{
        console.log(error)
    })
};