<script>
import axios from "axios";

export default {
  name: "SingleProjectView",
  data() {
    return {
      project: null,
      base_API: "http://127.0.0.1:8000/",
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
  <h1>{{ $route.params.slug }}</h1>

  <div class="container">
    <div class="col-12">
      <div class="card">
        <img
          class="card-img-top"
          :src="getImage(project.cover_image)"
          alt="Card image cap"
        />
        <div class="card-body">
          <h4 class="card-title">{{ project.name }}</h4>
          <h5>Repo: {{ project.repoUrl }}</h5>
          <h5>Date: {{ project.startingDate }}</h5>
          <h5>
            Type:
            <span v-if="project.type">{{ project.type.name }}</span>
            <span v-else>N/A</span>
          </h5>
          <h5>Technologies:</h5>
          <ul>
            <li v-for="technology in project.technologies" :key="technology.id">
              {{ technology.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped></style>
