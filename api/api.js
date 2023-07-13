import axios from "axios";
import server from "../globalServer/server.json";

export const GET = (url) => {
  return axios.get(`${server.main_server}${url}`);
};

export const POST = (url,body)=>{
  return axios.post(`${server.main_server}${url}`,body,{
    headers:[
      "Content-Type:application/json",
    ]
    
  })
}