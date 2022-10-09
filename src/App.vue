<template>
  <div id="ninja">
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
