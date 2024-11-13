import axios from "axios"


const baseURL = "http://localhost:4000"

const setToken= (token)=> {
    localStorage.setItem("token", token)
    return getToken()
}

const getToken=()=> {
    return localStorage.getItem("token")
}

const removeToken=()=> {
    localStorage.removeItem("token")
}

const postUser= async (url,payload)=> {
  try { 
    const res = await axios.post(baseURL + url, payload);
     console.log(res);
      return res;
    } catch (err) {
         console.error(err);
          return err; 
     }
}

const addTask= async (payload)=> {
  try { 
    const res = await axios.post(baseURL + "/api/task/add", payload, {token: getToken()});
     console.log(res);
      return res;
    } catch (err) {
         console.error(err);
          return err; 
     }
}

const getTasks = async () => {
    try { 
    const res = await axios.get(baseURL + "/api/task/list", {token: getToken()});
     console.log(res);
      return res;
    } catch (err) {
         console.error(err);
          return err; 
     }
}




export {baseURL, setToken, removeToken, postUser, getToken, addTask, getTasks}