import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

//para diminuir as importaçÕes
export function useAuth() {
  const value = useContext(AuthContext);

  return value;
}
