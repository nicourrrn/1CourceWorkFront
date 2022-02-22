import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    clients: [],
    expiredProducts: [],
  },
  mutations: {
    setClient(state, clients) {
      state.clients = clients;
    },
    addClient(state, client) {
      let haveFirst = client.FirstName.length > 0;
      let haveLast = client.LastName.length > 0;
      let haveAge = client.Age > 0;
      let havePass = client.PassNumber > 0;
      if (haveFirst && haveLast && haveAge && havePass) {
        state.clients.push(client);
      }
    },
    setExpiredProducts(state, expiredProducts) {
      state.expiredProducts = expiredProducts;
    },
  },
  actions: {
    async downloadData(context) {
      let clients = await axios
        .get("http://localhost:8081/clients")
        .then((response) => response.data);
      context.commit("setClient", clients);
      let expiredProducts = await axios
        .get("http://localhost:8081/expired_products")
        .then((response) => response.data);
      context.commit("setExpiredProducts", expiredProducts);
    },
    // async uploadData(context) {
    //
    // }
  },
  modules: {},
});
