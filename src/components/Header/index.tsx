import React from "react";
import { Flag} from "@styled-icons/icomoon"


import {Container,Logo} from "./styles"

const Header = (): JSX.Element =>{
    return(
        <Container>
            <Logo to="/">
                <span>FUN</span>
                <span>WITH</span>
                FLAGS
                <Flag size="40" title="Fun with flags" />
            </Logo>
        </Container>
    )
}


export default Header