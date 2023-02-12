import styled from "styled-components"

interface YourProps {
    strikeThrough: boolean
  }

export const TodoItem = styled.div`
 text-decoration: ${(p: YourProps) => p.strikeThrough ? 'line-through' : ''};
 font-family: 'Josefin Sans', sans-serif;
`