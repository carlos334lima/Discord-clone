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

`