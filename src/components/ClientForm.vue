<template>
  <div class="client_form">
  <div class="client_data">
    <span>First name</span>
    <input type="text" v-model="this.firstName" />

    <span>Last name</span>
    <input type="text" v-model="this.lastName" />

    <span>Age</span>
    <input type="number" v-model="this.age" />

    <span>Passport number</span>
    <input type="number" v-model="this.passNumber" />

    <input type="button" value="Add client" @click="sendData" />
  </div>

  <div class="product_data">
    <span>Name</span>
    <input type="text" v-model="this.productName" />

    <span>Assessed value</span>
    <input type="number" v-model="this.assessedValue" />

    <span>Outpost sum</span>
    <input type="number" v-model="this.outpostSum" />

    <span>Saving term</span>
    <input type="date" v-model="this.savingsTerm" />

  </div>
  </div>
</template>

<script>
export default {
  name: "ClientForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      age: 0,
      passNumber: 0,

      productName: "",
      assessedValue: 0,
      outpostSum: 0,
      wasDelivered: new Date(),
      savingsTerm: new Date(),
    };
  },
  methods: {
    sendData() {
      console.log(this.firstName);
      this.$store.commit("addClient", {
        FirstName: this.firstName,
        LastName: this.lastName,
        Age: this.age,
        PassNumber: this.passNumber,
        Products: [],
      });
    },
  },
};
</script>

<style scoped lang="sass">
.client_form
  display: flex
  justify-content: space-around

.client_data, .product_data
  display: flex
  flex-direction: column
  padding: 0 10%
  input
    margin: 5px
  span
    margin-top: 5px


</style>
