<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/assets/img/favicon.png" width="135" /> -->

    <div class="hero-home panel-alternating bg-solid">
      <div class="wrapper">
        <h1 class="accessibility">Reeves Studio</h1>
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
      </div>
      <div class="wrapper">
        <g-image src="~/assets/img/tech.png" alt="" width="1200" height="850" />
      </div>
    </div>
    <div class="wrapper panel-alternating">
      <h2>Services</h2>
      <p>Text about services.</p>
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

<style lang="scss">
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_vars.scss";

.hero-home {
  background-color: var(--color-tan);
  background-color: rgb(246, 243, 234);
  @media all and (min-width: $breakpoint-reader-min) {
    display: flex;
    & > div {
      flex-basis: 50%;
    }
  }
}
</style>
