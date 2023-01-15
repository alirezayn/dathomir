import axios from "axios";
import main_url from "../globalServer/server.json";
export const GET = (url) => {
  return axios.get(`${main_url.main_server}${url}`);
};
