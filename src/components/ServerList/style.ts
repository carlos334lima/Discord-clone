import styled from "styled-components";

export const Container = styled.div`
  //Definição da grid
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  //Ocupar 100% da tela
  max-height: 100vh;
  //tudo que sair da tela, vai ser que é uma scroll -- y = altura
  overflow-y: scroll;

  //Editando a scroll, dizendo que a scroll será invisível
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`

  width: 32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px;

`


