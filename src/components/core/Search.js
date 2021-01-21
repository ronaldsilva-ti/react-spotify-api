import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { searchName } from '../../store/reducers/search/index';

const Input = styled.input`
    width:50%;
    height:30px;
    border-radius:8px;
    background-color:whitesmoke;
    border-color:whitesmoke;
    color:black;
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
    <Container>
        <Input 
            type="text"
            placeholder="Faça uma pesquisa"
            value={ search }
            onChange={onChange}
        />
    </Container>
    )
}