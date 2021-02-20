import React from 'react';

import { Grid } from './style'

import ServerList from '../ServerList/index'
import ServerName from '../ServerName';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerName />
            <ServerList />
        </Grid>
    )
}


export default Layout;