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
      <a class="logo" href="/">LR-PROJECTS</a>

      <div class="gap-2 links">
        <ul class="d-flex">
          <li>
            <router-link
              class="dropdown-item"
              :to="{ name: 'about' }"
              data-text="About"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              class="dropdown-item"
              :to="{ name: 'projects' }"
              data-text="Projects"
              >Projects</router-link
            >
          </li>
          <li>
            <router-link
              class="dropdown-item"
              :to="{ name: 'contacts' }"
              data-text="Contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid"></div>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  .navbar-brand {
    font-size: 1.8rem !important;
  }
  .links {
    font-size: 1.3rem;
  }
}

.logo{
  font-size: 2.5rem !important;
  font-weight: 600;
  color: #000000;
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
  font-size: 1.6rem;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px rgba($color: #000000, $alpha: 0.5);
}

ul li a:hover {
  color: transparent;
}

ul li a::before {
  content: attr(data-text);
  position: absolute;
  color: rgb(0, 0, 0);
  width: 0%;
  overflow: hidden;
  transition: 1s;
}

ul li a:hover::before {
  width: 100%;
  color: rgb(0, 0, 0);
}
.router-link-active,
.router-link-exact-active {
  color: rgb(0, 0, 0) !important;
}
</style>
