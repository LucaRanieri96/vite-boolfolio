<script>
import axios from "axios";

export default {
  name: "ContactsView",

  data() {
    return {
      data: {
        name: "",
        email: "",
        message: "",
      },
      errors: {},
      loading: false,
      success: false,
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      //console.log(this.data.name);
      //console.log(this.data.email);
      //console.log(this.data.message);
      const data = {
        name: this.data.name,
        email: this.data.email,
        message: this.data.message,
      };

      //clean the errors object in case we had val errors
      //send the form with axios projects request
      axios
        .post("http://127.0.0.1:8000/api/contacts", data)
        .then((response) => {
          //console.log(response);
          this.success = response.data.success
          if (!response.data.success) {
            this.errors = response.data.errors;
          } else {
            this.errors = {};
            this.data.name = "";
            this.data.email = "";
            this.data.message = "";
          }

          this.loading = false;
        })
        .catch((err) => {
          //console.log(err);
          this.loading = false;
        });
    },
  },
};
</script>

<template>
  <section class="contact-me">
    <div class="container py-5">

      <div v-if="success" class="alert alert-success" role="alert">
        <strong>Email inviata!</strong> Arriverà una risposta il prima possibile.
      </div>
      

      <form @submit.prevent="submitForm()">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            aria-describedby="helpId"
            v-model="data.name"
          />
          <small id="nameHelper" class="text-muted"
            >Type your full name here</small
          >
        </div>
        <p
          v-for="(error, index) in errors.name"
          :key="`message-error-${index}`"
          class="text-danger"
        >
          {{ error }}
        </p>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            class="form-control"
            aria-describedby="helpId"
            v-model="data.email"
          />
          <small id="emailHelper" class="text-muted"
            >Type your email here</small
          >
        </div>
        <p
          v-for="{ error, index } in errors.email"
          :key="`message-error-${index}`"
          class="text-danger"
        >
          {{ error }}
        </p>

        <div class="mb-3">
          <div for="message" class="form-label">Message:</div>
          <textarea
            class="form-control rounded"
            name="message"
            id="message"
            rows="8"
            v-model="data.message"
          ></textarea>
        </div>
        <p
          v-for="{ error, index } in errors.message"
          :key="`message-error-${index}`"
          class="text-danger"
        >
          {{ error }}
        </p>

        <button type="submit" class="btn btn-primary me-2" :disabled="loading">
          Send
        </button>
        <button type="reset" class="btn btn-warning">Reset</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-me {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 20px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  input,
  textarea {
    background-color: rgba($color: #e9e9e9, $alpha: 0.2) !important;
    color: white;
  }
  small {
    color: white !important;
  }
}
</style>
