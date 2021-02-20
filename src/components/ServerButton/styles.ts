import styled from 'styled-components'

import { Props } from '.'

export const Button = styled.button<Props>`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink:0; //Objeto não disponivel para minimizar

    width: 48px;
    height:48px;

    margin-bottom:8px;

    //Se for o botão da Home, utiliza a cor roxa, caso não, a cor cinza.
    background-color: ${(props) => 
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    cursor: pointer;

    position: relative;

    border-radius:50%;

    > img {
        width:24px;
        height: 24px;
    }

    &::before{

    }

    &::after{

    }

    //transition da forma do servidor
    transition: border-radius .2s, background-color 0.2s;

    &.active, &:hover {
        border-radius: 16px;
        background-color: ${(props) => 
            props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}
    }
    

`