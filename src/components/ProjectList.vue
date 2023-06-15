<script>
import axios from "axios";

export default {
  name: "ProjectList",

  data() {
    return {
      base_API: "http://127.0.0.1:8000/",
      projects_path: "api/projects",
      loading: true,
      projects: null,
      error: null,
      filterTerm: [],
    };
  },
  methods: {
    getProjects(url) {
      axios
        .get(url)
        .then((response) => {
          //console.log(response);
          this.projects = response.data.projects;
          this.loading = false;
        })
        .catch((error) => {
          //console.log(error);
          this.error = error.message;
        });
    },
    filterProjects() {
      if (this.filterTerm) {
        const filteredProjects = this.projects.data.filter(
          (project) => project.name.toLowerCase().includes(this.filterTerm.toLowerCase())
        );
        this.projects.data = filteredProjects;
      } else {
        const url = this.base_API + this.projects_path;
        this.getProjects(url);
      }
    },
    getImage(path) {
      return this.base_API + path;
    },
    nextPage(path) {
      this.getProjects(path);
    },
    prevPage(path) {
      this.getProjects(path);
    },
  },
  mounted() {
    const url = this.base_API + this.projects_path;
    console.log(url);
    this.getProjects(url);
  },
};
</script>

<template>
  <div class="jumbotron jumbotron-fluid py-5">
    <div class="container">
      <h1 class="display-3">All My Projects</h1>
      <p class="lead">
        This is a list of all the repositories I worked on during the 6 months
        of the Boolean lessons.
      </p>
      <hr class="my-2" />
      <p class="lead">
        Visit my profile. =>
        <a
          class="btn btn-danger"
          href="https://github.com/LucaRanieri96"
          role="button"
          >GitHub</a
        >
      </p>
    </div>
  </div>

  <section class="vue- pt-4" v-if="projects">
    <div class="container d-flex mt-3 mb-3 justify-content-end">
      <input
        type="text"
        name="name"
        id="name"
        class="me-2"
        aria-describedby="helpId"
        placeholder="Search"
        v-model="filterTerm"
        @input="filterProjects"
      />
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-6 g-3"
          v-for="project in projects.data"
          :key="project['id']"
        >
          <div class="card">
            <img
              class="card-img-top"
              :src="getImage(project.cover_image)"
              alt="Card image cap"
            />
            <div class="card-body d-flex justify-content-between">
              <h4 class="card-title">{{ project.name }}</h4>
              <router-link
                name=""
                id=""
                class="btn btn-primary"
                :to="{ name: 'single-project', params: { slug: project.slug } }"
                role="button"
                >Show Details</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav
      aria-label="Page navigation"
      class="d-flex justify-content-center mt-5"
    >
      <ul class="pagination">
        <li class="page-item">
          <button
            class="btn btn-outline-light"
            aria-label="Previous"
            v-if="projects.prev_page_url"
            @click="prevPage(projects.prev_page_url)"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li class="page-item">
          <button
            class="btn btn-outline-light"
            aria-label="Next"
            v-if="projects.next_page_url"
            @click="nextPage(projects.next_page_url)"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
input {
  background-color: rgba($color: #ebebeb, $alpha: 0.2);
  color: white;
  border: 0;
  border-radius: 0.2rem;
}
.jumbotron {
  background-color: rgba($color: #838383, $alpha: 0.1);
}
.card {
  border: 0;
  background-color: rgba($color: #e2e2e2, $alpha: 0.2);
  color: white;
  img {
    height: 400px;
  }
}
.vue-home {
  color: #d4d5d6;
  background-image: url(../assets/imgs/VmZHnTO.webp);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
