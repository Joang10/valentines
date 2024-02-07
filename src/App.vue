<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  mounted: {
    document.title = 'San Valentín';
  }
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}
</style>
