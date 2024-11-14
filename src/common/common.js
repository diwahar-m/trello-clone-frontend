import axios from "axios"

const baseURL = "https://trello-clone-backend-dfvp.onrender.com"  // "http://localhost:4000"

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
    const res = await axios.post(baseURL + "/api/task/add", payload, { headers: { token: getToken()}});
     console.log(res);
      return res;
    } catch (err) {
         console.error(err);
          return err; 
     }
}

const getTasks = async () => {
    try { 
    const res = await axios.get(baseURL + "/api/task/list",{ headers: { token: getToken()}});
     console.log(res);
      return res;
    } catch (err) {
         console.error(err);
          return err; 
     }
}

const updateTask = async (payload) => {
    try {
      const res = await axios.post(baseURL + "/api/task/update", payload, {
        headers: { token: getToken() },
      });
      console.log(res);
      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  const deleteTask = async (payload) => {
    try {
      const res = await axios.post(baseURL + "/api/task/delete", payload, {
        headers: { token: getToken() },
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  };



function formatDate(isoString) { 
     const d = new Date(isoString); 
     const day = String(d.getDate()).padStart(2, '0'); 
     const month = String(d.getMonth() + 1).padStart(2, '0'); 
     const year = d.getFullYear(); 
     const hours = String(d.getHours()).padStart(2, '0'); 
     const minutes = String(d.getMinutes()).padStart(2, '0');
      const seconds = String(d.getSeconds()).padStart(2, '0');
       return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}

export {baseURL, setToken, removeToken, postUser, getToken, addTask, getTasks, formatDate, updateTask, deleteTask}