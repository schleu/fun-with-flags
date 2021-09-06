import styled from "styled-components";
import {Form as Unform} from '@unform/web'


export const ContryList = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    section{
        width: 100%;
        max-width: 900px;

        display: flex;
        flex-wrap: wrap;   
        border-radius: 5px;
        background-color: #E0E0E0AA;
        cursor: pointer;
        transition: background-color 0.2s;
    

        header{
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: #E0E0E0;

            padding: 20px 50px;

            img{
                width: 50%;
            }
        }

        form{
           

        }
    
        footer{
            width: 100%;
            padding: 10px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            font-size: 20px;
    
            div{
                width: 100%;
                margin-bottom: 10px;
                strong{
                    margin-right: 5px;
                }
            }
        }
    }
`;


export const Form = styled(Unform)`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 50px;

    .title{
        margin: 20px auto;
        font-size: 30px;
        font-weight: 900;
        text-align: center;
    }

    div{
        width: 50%;
        margin: 10px auto;
        label{
            margin-right: 5px;
        }
        input{
            border:none;
            width: 100%;
            font-size: 25px;
            padding: 5px 15px;
            border-radius: 5px;
            border-color: #eee;
        }
    }
`