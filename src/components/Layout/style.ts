import styled from 'styled-components';

// SL - server list 
// SN - server name
// CI - channel info
// CL - channel list
// CD - channel data
// UI - user info

export const Grid = styled.div`

    display: grid;

    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows:46px auto 52px;
    grid-area: 
            'SL SN CI CI'
            'SL CL CD UL'
            'SL UI CI UL';

    height: 100vh

`;