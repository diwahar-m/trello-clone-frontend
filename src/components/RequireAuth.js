import {  useNavigate } from "react-router-dom";
import { getToken } from "../common/common.js";

export default function RequireAuth({ children }) {
  const token = getToken();
  const navigate = useNavigate()
  if(token){
    navigate("/")
  }
  console.log(token)
  return children;
};
