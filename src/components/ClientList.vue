<template>
  <div class="client_list">
    <h2>Clients list</h2>
  <div v-for="(client, index) in clients" :key="index">
    {{ client.FirstName }} {{ client.LastName }} {{ client.Age }}
    {{ client.PassNumber }}
  </div>
  </div>
</template>

<script>
export default {
  name: "Client list",
  props: {
    msg: String,
  },
  computed: {
    clients() {
      console.log(this.$store.state.clients);
      return this.$store.state.clients;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
client_list
  display: flex
  flex-direction: column


</style>
