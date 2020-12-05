<template>
  <Main />
</template>

<script>
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Main,
  },
};
</script>

<style lang="scss">
.body {
  background-color: var(--surface-a);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  margin-top: 60px;
  margin-left: 60px;
  margin-right: 60px;
}
</style>
