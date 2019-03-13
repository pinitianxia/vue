<template>
    <div>
        <h1>page01</h1>
        <img src="../assets/logo.png">
        <HelloWorld/>
        <home/>
    </div>
</template>
<script>


import HelloWorld from './HelloWorld';
import Home from './Home';
export default {
  name: 'Page01',
  components: {
    HelloWorld,
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
