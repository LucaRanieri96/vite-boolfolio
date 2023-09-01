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
        CRUD operations.
      </p>
      <p>
        While for the frontend part I'm using Vite/VueJS plus external
        components such as Vue Router that make everything faster and more
        responsive.
      </p>
    </div>

    <div class="row row-cols-1 p-5 justify-content-center">
      <div
        class="col image-preview"
        :class="{ open: isImageOpen }"
      >
        <div id="icon">
          <font-awesome-icon :icon="['fas', 'eye']"/>
        </div>
        <img
          id="curriculum-thumbnail"
          src="assets/imgs/Luca-Ranieri.png"
          alt=""
        />
      </div>
      <div class="col d-flex p-3 justify-content-center">
        <a
          href="assets/downloads/LucaRanieri.pdf"
          download="lucaranieri.pdf"
          class="btn btn-primary w-25"
          >Scarica il mio CV</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.aboutme {
  font-family: "Rubik", sans-serif;
  font-size: calc(10px + 0.33vw);
  padding: 5vh 10vw;
}

h2 {
  font-size: 3.5em;
  font-weight: 500;
}

p {
  max-width: 32em;
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.4;
}

.image-preview {
  height: 300px;
  width: 500px;
  padding-bottom: 2rem;
  overflow: hidden;
  cursor: pointer;
  transition: filter 0.3s;
  position: relative;
  img{
    width: 100%;
  }
  &:hover #icon {
    display: block;
  }
}

.image-preview #icon {
  position: absolute;
  top: 50%;
  left: 50%;
  display: none;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.5);
}

.image-preview:hover {
  filter: brightness(70%);
}
</style>
