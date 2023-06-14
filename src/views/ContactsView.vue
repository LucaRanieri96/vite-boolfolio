<script>
export default {
  name: "ContactsView",
};
</script>

<template>
  <section class="contact-me">
    <div class="container my-5">
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Luca Ranieri"
            aria-describedby="helpId"
          />
          <small id="nameHelper" class="text-muted"
            >Type your full name here</small
          >
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            class="form-control"
            placeholder="Luca@mail.com"
            aria-describedby="helpId"
          />
          <small id="emailHelper" class="text-muted"
            >Type your email here</small
          >
        </div>

        <div class="mb-3">
          <div for="message" class="form-label">Message:</div>
          <textarea name="message" id="message" cols="100" rows="8"></textarea>
        </div>

        <button type="submit" class="btn btn-primary me-2">Send</button>
        <button type="reset" class="btn btn-warning">Reset</button>
      </form>
    </div>
  </section>
</template>

<style lang="sass" scoped></style>
