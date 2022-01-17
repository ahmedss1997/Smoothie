<template>
  <div id="ninja">
    <!-- <router-link to="/">Home</router-link> -->
    <!-- <router-link to="/about">About</router-link> -->
    <NavbarNinja />
  </div>
  <router-view />
</template>

<script>

import NavbarNinja from '@/components/NavbarNinja.vue';

export default {
  name: "App",
  components: {
    NavbarNinja
  }
}

</script>


<style>



</style>
