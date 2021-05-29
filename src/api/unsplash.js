import axios from "axios";

export default axios.create({
  baseURl: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID m5Iy9QDL60EnFYyHn6cL_MhZcOPi3LTmWxj7PDrW3yI",
  }
});
