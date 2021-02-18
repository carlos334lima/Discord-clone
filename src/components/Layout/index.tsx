import React from 'react';

import { Grid } from './style'

import ServerList from '../ServerList/index'

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
        </Grid>
    )
}


export default Layout;