import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;

    a{
        transition: opacity 0.2s;

        &:hover{
            opacity: 0.7;
        }
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 50px;
    color:#434343;

    span{
        &:first-child{
            color: #DC143C;
        }

        &:nth-child(2){
            font-size: 16px;
            font-weight: 900;
            transform: rotate(270deg);
        }
    }

    svg{
        margin-left: 10px;
    }
    
`;