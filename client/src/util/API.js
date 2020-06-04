import axios from "axios";

// The getStateInfo method retrieves states from the server
// It accepts a "query" or term to search the state api for
export default {
  getStateInfo: function(query) {
    return axios.get("/api/state", { params: { state: query }});
  },
  getTopConsumers(type) {
    return axios.get("/api/consumption/" + type);
  },
  getPlantInfo: function(query) {
    return axios.get("api/plant", { params: {
      state: query}});
  }
};