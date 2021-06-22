import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> //pegando todos as propriedades que um bottao html tem. 

export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props}/>
  )
}