import styled from "styled-components"

interface YourProps {
    strikeThrough: boolean
  }

export const TodoItem = styled.div`
 text-decoration: ${(p: YourProps) => p.strikeThrough ? 'line-through' : 'none'};
 font-family: 'Josefin Sans', sans-serif;
`