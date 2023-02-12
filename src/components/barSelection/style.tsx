import styled from "styled-components"

interface YourProps {
    mark?: boolean
  }

export const Container = styled.div`
    display: flex;
    width: 98%;
    flex-direction: row;
    justify-content:space-evenly;
    margin-top: 20;
    align-items: center;
    padding: 30px;
    background-color: #131A22;
    color: white;
    border-radius: 6px;
    font-size:25px;
    margin-bottom: 20px;
`

export const StyledButton = styled.button`
    border: none;
    background-color: #131A22;
    color ${(p: YourProps) => p.mark ? 'gray' : 'white'};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 40px;
    :hover {
        color: pink;
    }

`
