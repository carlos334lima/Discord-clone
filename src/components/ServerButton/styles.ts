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
        width: 10px;
        height: 10px;

        position: absolute;
        left: -16px;
        top: calc(50% - 4.5px);

        background-color: var(--white);
        border-radius: 50%;
        
        //OBRIGATÓRIA - mesmo não tendo conteúdo
        content: '';

        display: ${props => props.hasNotifications ? 'inline' : 'none'}
    }

    &::after{
        background-color: var(--notification);
        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius:12px;
        border:4px solid var(--quaternary);

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

        content: '${(props) => props.mentions && props.mentions}';

        display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'}
    }

    //transition da forma do servidor
    transition: border-radius .2s, background-color 0.2s;

    &.active, &:hover {
        border-radius: 16px;
        background-color: ${(props) => 
            props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}
    }
    

`