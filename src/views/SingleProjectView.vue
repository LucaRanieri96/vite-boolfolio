<script>
import axios from "axios";

export default {
  name: "SingleProjectView",
  data() {
    return {
      project: null,
      base_API: "http://127.0.0.1:8000/",
      error: null,
    };
  },
  components: {},
  methods: {
    getImage(path) {
      return this.base_API + path;
    },
  },
  mounted() {
    const url = this.base_API + "api/projects/" + this.$route.params.slug;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          this.project = response.data.project;
        } else {
          this.$router.push({
            name: "NotFound",
            params: { pathMatch: this.$route.path.substring(1).split("/") },
            query: this.$route.query,
            hash: this.$route.hash,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.error = error.message;
      });
  },
};
</script>

<template>
  <section class="singleProject">
    <div class="container py-5">
      <h1 class="text-center mb-4">PROJECT: {{ $route.params.slug }}</h1>

      <div class="col-12">
        <div v-if="project" class="card">
          <img
            class="card-img-top"
            :src="getImage(project.cover_image)"
            alt="Card image cap"
          />
          <div class="card-body">
            <h2 class="mb-2">Repo: {{ project.repoUrl }}</h2>
            <h3 class="mb-2">Date: {{ project.startingDate }}</h3>
            <h4 class="mb-2">
              Type:
              <div v-if="project.type" class="badge">
                {{ project.type.name }}
              </div>
              <div v-else>N/A</div>
            </h4>
            <div class="d-flex align-items-center mb-2">
              <h4>Technologies:</h4>
              <ul v-for="technology in project.technologies">
                <li class="badge">
                  {{ technology.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.singleProject {
  h2,
  h3,
  h4 {
    margin: 0;
  }
  .card {
    background-color: rgba($color: #e9e9e9, $alpha: 0.2);
    border: 0;
    color: white;
  }
  .badge {
    background-color: rgb(0, 102, 255);
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 0.5rem;
    li {
      background-color: red !important;
    }
  }
}
</style>
