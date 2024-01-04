import axios from "axios";
const instance = axios.create({
  baseURL: "https://65969e046bb4ec36ca030276.mockapi.io/ONO_Ad",

  headers: { "X-Custom-Header": "foobar" },
});
export default instance;
