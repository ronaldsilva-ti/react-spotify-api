import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { searchName } from '../../store/reducers/filters/index';

const Input = styled.input`
    width:50%;
    height:30px;
    border-radius:8px;
    background-color:whitesmoke;
    border-color:whitesmoke;
    color:black;

    @media (max-width: 514px) {
        width:100%;

    }
    @media (max-width: 360px) {
        width:100%;

    }
`;
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;


export default function Search(){

    const  dispatch = useDispatch()

    const [search,setSearch] = useState('')

    function onChange(e){
        setSearch(e.target.value);
        dispatch(searchName(e.target.value))
    }

    return(
        <Input 
            type="text"
            placeholder="Faça uma pesquisa"
            value={ search }
            onChange={onChange}
        />
    )
}