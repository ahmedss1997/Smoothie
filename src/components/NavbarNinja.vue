<template>
  <div class="navbar">
    <!-- height auto & background blue -->
    <nav class="nav-extended indigo darken-2">
      <!-- position realtive -->
      <div class="nav-content">    
        <router-link :to="{ name: 'Home' }">
          <!-- display inline-block & font size 23 & padding 28 0 -->
          <span class="nav-title">Ninja Smoothies</span>
        </router-link>
        <!-- display inline-block  overflow hidden z-index 1 verticle aline middle border-raduis 50% & width+height 56 padding 0 & position absolute right 24 bottom -28 & background pink -->
        <a href="" class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{ name: 'AddSmoothie' }">
            <!-- the type icon -->
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "NavbarNinja",
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  nav {
    padding: 0 20px;
  }
}
</style>