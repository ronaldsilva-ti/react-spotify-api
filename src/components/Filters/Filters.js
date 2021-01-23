import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import Search from '../core/Search';   
import Select from '../core/Select';
import { SelectContainer, } from '../core/Select';
import { TextSelect } from './styles';

import { getLocale, getCountry, getLimitAlbum } from '../../store/reducers/filters/index';


export default function Filters(){

    const dispatch = useDispatch()
    const locale = useSelector(state => state?.filters?.filters)
    const localeState = useSelector(state => state.filters.locale)
    const countryState = useSelector(state => state.filters.country)
    const albumLimit = useSelector(state => state.filters.albumLimit);
    const limit = useSelector(state => state.filters.filters)
    const [limitAlbum, setLimitAlbum] = useState()


    useEffect(() => {
        console.log('locale',countryState)
        Counter();        
    },[locale])

    useEffect(() => {
        console.log('limit',limit)
        console.log('limitAlbum',limitAlbum)    
    }, [limit, limitAlbum])


    useEffect(() => {
    }, [locale])





    function onChangeLocale(e){
        dispatch(getLocale(e.target.value))
    }

    function onChangeCountry(e){
        dispatch(getCountry(e.target.value))
    }

    function onChangeLimit(e){
        dispatch(getLimitAlbum(e.target.value))
    }

    function Counter() {
        limit?.map(item =>{
            if(item.id === "limit"){
               const min = item.validation.min;
               const max = item.validation.max;  

               let arrayLimit = [];

               let i = min;
               let maxLimit = max + 1;
       
               for(i;i < maxLimit;i++){   
                  arrayLimit.push(i);
                  console.log(i);
                  setLimitAlbum(arrayLimit)
               }            
                  
            }
        })     
    }



    return(
    <Container>
        <Search/>
        <TextSelect>Língua</TextSelect>
        <SelectContainer onChange={ onChangeLocale } value={localeState}>
            {
                locale !== undefined && locale !== null ?

                locale[0]?.values?.map(item => (
                    <Select
                        value={ item.value }
                        name={ item.name } 
                    />
                ))

                : null
            }     
       </SelectContainer>

       <TextSelect>País</TextSelect>            
       <SelectContainer onChange={ onChangeCountry } value={countryState}>
            {
                locale !== undefined && locale !== null ?

                locale[1]?.values?.map(item => (
                    <Select
                        value={ item.value }
                        name={ item.name } 
                    />
                ))

                : null
            }     
       </SelectContainer>

       <TextSelect>Limite</TextSelect>    
       <SelectContainer onChange={ onChangeLimit } value={ albumLimit }>   
       

              {
                  limitAlbum?.map(item => (
                      <Select
                        value={ item }
                        name={ item }
                      />
                  ))
              }
       </SelectContainer>
    </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:space-around;
    margin-bottom:15px;

    @media (max-width: 514px) {
        flex-wrap:wrap;
    }
    @media (max-width: 360px) {

    }
`;