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
          <h1 class="card-title">{{ project.name }}</h1>
          <h2>Repo: {{ project.repoUrl }}</h2>
          <h2>Date: {{ project.startingDate }}</h2>
          <h3>
            Type:
            <div v-if="project.type" class="badge">{{ project.type.name }}</div>
            <div v-else>N/A</div>
          </h3>
          <h3>Technologies:</h3>
          <ul v-for="technology in project.technologies">
            <li class="badge">
              {{ technology.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
 .singleProject{
  color: #d4d5d6;
  background: #181818;
  .badge{
    background-color: rgb(0, 102, 255);
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 0.5rem;
    li{
      background-color: red !important;
    }
  }
 }
</style>
