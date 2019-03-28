<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand id="brand" :to="'/'">VueJS Sandbox</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" class="mobile-nav-toggle"/>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="nav-items">
        <b-nav-item v-for="route in links" :key="route.key" :to="route.url" class="nav-item">
          {{ route.text }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      links: []
    }
  },

  mounted() {
    this.links = this.$router.options.routes.map(route => {
      return {
        key: route.path.replace('/', ''),
        text: route.name,
        url: route.path 
      };
    });
  }
}
</script>