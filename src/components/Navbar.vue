<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand id="brand" :to="'/'">VueJS Sandbox</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" class="mobile-nav-toggle"/>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="nav-items">
        <b-nav-item :to="'/github-user-search'">GitHub User Search</b-nav-item>
        <b-nav-item :to="'/extended-component-demo'">Extended Component Demo</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>