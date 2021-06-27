import { ButtonHTMLAttributes } from "react";
import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  //pegando todos as propriedades que um bottao html tem.
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} />
  );
}
