<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/assets/img/favicon.png" width="135" /> -->

    <div>
      <p>✓ Accomplish more.</p>
      <p>✓ Worry less.</p>
      <p>✓ Build value.</p>
    </div>
    <div>
      <p>
        Web development &amp; UX design for product, sales, marketing, and
        editorial teams.
      </p>
    </div>
    <ContactForm>
      <p>Ready to get started?</p>
    </ContactForm>
  </Layout>
</template>

<script>
import ContactForm from "~/components/ContactForm";
export default {
  metaInfo: {
    title: "Reeves Studio",
  },
  components: {
    ContactForm,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
