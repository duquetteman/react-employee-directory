import axios from "axios";

export default {
  // Gets all users
  getUsersList: function() {

    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
};
