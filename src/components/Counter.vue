<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy5">+5</button>
  <button :disabled="isLoading" @click="incrementRandomInt">Random</button>

  <h1>MapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h2>Direct Getter: {{ $store.getters["counter/squareCount"] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    incrementBy5() {
      this.$store.commit("counter/incrementBy", 5);
    },
    ...mapActions("counter", ["incrementRandomInt"]),
  },
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState("counter", ["count", "lastMutation", "isLoading"]),
  },
};
</script>

<style></style>
