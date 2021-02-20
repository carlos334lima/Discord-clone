import React from 'react'

import ServerButton from '../ServerButton/index'

import { Container, Separator } from './style'

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome/>

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton mentions={7}/>
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />        

        </Container>
    )
    
}

export default ServerList;