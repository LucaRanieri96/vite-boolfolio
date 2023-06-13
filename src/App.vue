<script>
import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'

export default {
    components: {
        
    },
    data(){
        return {
            base_API: 'http://127.0.0.1:8000/',
            projects_path: 'api/projects',
            loading: true,
            projects: null
        }
    },
    methods:{
        getProjects(url){
            axios
            .get(url)
            .then(response=> {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })

        }
    },
    mounted(){
        const url = this.base_API + this.projects_path
        console.log(url);
        this.getProjects(url)
    }
    
}
</script>

<template>
    <section class="vue-home">
        <div class="container">
            <h1>Projects</h1>
            <div class="row">
                
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';

.vue-home {
    color: #d4d5d6;
    background: #181818;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

</style>
