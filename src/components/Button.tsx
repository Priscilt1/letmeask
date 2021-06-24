import { ButtonHTMLAttributes } from "react";
import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; //pegando todos as propriedades que um bottao html tem.

export function Button(props: ButtonProps) {
  return <button className="button" {...props} />;
}
