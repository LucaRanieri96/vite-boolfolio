<script>
export default {
  name: "AboutView",
};
</script>

<template>
  <section class="aboutme">
    <div class="container my-5">
      <h2>Hello.</h2>
      <h2>My name is Luca Ranieri</h2>

      <p class="mt-5">
        This is my first work on a full-stack project alone, and this is my
        front-end application
      </p>
      <p>
        I'm working with Laravel/Breeze to manage the backend part of the
        project, so the dialogue with the database and its management through
        CRUDS operations.
      </p>
      <p>
        While for the frontend part I'm using Vite/VueJS plus external
        components such as Vue Router that make everything faster and more
        responsive.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.aboutme {
  font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: calc(10px + 0.33vw);
  padding: 5vh 10vw;

}

h2 {
  font-size: 3.5em;
  font-weight: 500;
}

p {
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.4;
  max-width: 28em;
}
</style>
