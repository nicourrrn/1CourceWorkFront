<template>
  <main>
    <ClientForm></ClientForm>
    <div class="viewer">
      <ClientList></ClientList>
      <ExpiredProductsList></ExpiredProductsList>
    </div>
  </main>
</template>

<script>
import ClientList from "./components/ClientList";
import ExpiredProductsList from "./components/ExpiredProductsList";
import ClientForm from "./components/ClientForm";

export default {
  name: "App",
  components: {
    ClientList,
    ExpiredProductsList,
    ClientForm,
  },
  data() {
    return {
      polling: null,
    };
  },
  methods: {
    updateData() {
      this.polling = setTimeout(() => {
        this.$store.dispatch("downloadData");
        this.updateData();
      }, 60000);
    },
  },
  created() {
    this.$store.dispatch("downloadData");
    this.updateData();
  },
  unmounted() {
    this.polling = null;
  }
};
</script>

<style lang="sass">


.viewer
  display: flex
  justify-content: space-around


</style>
