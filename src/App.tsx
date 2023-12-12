import React, { useState } from 'react'
import './App.css'


type TitleProps = {
 children: React.ReactNode;
 size: "small" | "large"; 
}; 

type TypographyProps = {
  children: React.ReactNode;
  size?: "small" | "large"
}; 

type ParagraphProps = {
  color:string; 
}

const Paragraph = ({children, size, color, }: TypographyProps & ParagraphProps) => 
{ return (
<h1
  style={{
    fontSize:size === "small" ? "1.5rem": "3rem",
    color: color, 
  }}
  >{children}
  </h1> 
  )
  
}; 

const Title = ({children, size }: TypographyProps) => 
{ return (
<h1
  style={{
    fontSize:size === "small" ? "1.5rem": "3rem", 
  }}
  >{children}
  </h1> 
  )
  
}; 

const user = {
  id: 1,
  name: "John Doe",
  age: 30,
  isAdmin: true,
  birthDate: new Date("1980-01-01")
}; 

// typeof palavra reservada para extrair de um objeto fixo um tipo
type UserAttributes = typeof user; 

const mary: UserAttributes = {
  id: 2,
  name: 'Mary',
  age: 31,
  isAdmin: false,
  birthDate: new Date("1992-12-12")
}


function App() {
  const [count, setCount] = useState(0)

  return <div className="App">
  <Title size = "large">
  <span>Hello <b>World</b></span> 
  </Title>

  <Paragraph color='red' size='small'>
    Eu sou um parágrafo
  </Paragraph>

  </div>;
  

}
// alterar teste 
export default App; 
