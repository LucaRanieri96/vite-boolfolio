<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <nav
      class="navbar navbar-expand-lg justify-content-between px-5 sticky-top"
    >
      <a class="navbar-brand links" href="/">Boolfolio</a>

      <div class="d-flex gap-2 links">
        <router-link class="dropdown-item" :to="{ name: 'home' }"
          >Home</router-link
        >
        <router-link class="dropdown-item" :to="{ name: 'about' }"
          >About</router-link
        >
        <router-link class="dropdown-item" :to="{ name: 'contacts' }"
          >Contact</router-link
        >
      </div>
    </nav>
    <div class="container-fluid"></div>
  </header>
</template>

<style lang="scss" scoped>

.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .navbar-brand {
    font-size: 1.8rem !important;
  }
  .links {
    font-size: 1.3rem;
  }
}
</style>
