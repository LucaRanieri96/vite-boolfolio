<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg px-5 sticky-top">
      <a class="logo" href="/">LR-PROJECTS</a>

      <button
        class="navbar-toggler white-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link links" :to="{ name: 'about' }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links" :to="{ name: 'projects' }">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link links" :to="{ name: 'contacts' }">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid"></div>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: rgba($color: #000000, $alpha: 0.7) !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
  padding: 20px;
}
.white-button {
  background-color: rgba($color: #ffffff, $alpha: 0.6);
  transition: all 1s;
}

.white-button:hover {
  background-color: rgba($color: #ffffff, $alpha: 1);
}
.logo{
  font-size: 2.5rem !important;
  font-weight: 600;
  color: white;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
}

ul {
  list-style: none;
  gap: 10px;
  margin: 0;
}

ul li a {
  position: relative;
  font-size: 2rem;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px rgba($color: #ffffff, $alpha: 0.5);
}

.router-link-active,
.router-link-exact-active {
  color: rgb(255, 255, 255) !important;
}
</style>
