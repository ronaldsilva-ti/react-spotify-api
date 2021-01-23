import styled from 'styled-components';

export const SelectContainer = styled.select``;
const Container = styled.div``;
const Option = styled.option``;

export default function Select({ name, value }){
    return(
            <Option value={value} >
                { name }
            </Option>
    )
}