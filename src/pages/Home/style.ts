import styled from "styled-components";


export const ContryList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 20px;
    list-style: none;

    li{
        border-radius: 5px;
        background-color: #E0E0E0;
        cursor: pointer;
        transition: background-color 0.2s;
        
        &:hover{
            background-color: #E0E0E0AA;
        }
        a{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        img{
            width: 100%;
        }
        footer{
            width: 100%;
            padding: 10px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;

            div{
                width: 100%;
                margin-bottom: 10px;
                font-size: 20px;
                strong{
                    margin-right: 5px;
                }
            }
        }
    }
`;

export const Filter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    input{
        width: 500px;
        font-size: 25px;
        padding: 5px 15px;
        border-radius: 5px;
        border-color: #eee;
    }
`;