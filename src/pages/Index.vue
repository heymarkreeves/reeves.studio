<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/assets/img/favicon.png" width="135" /> -->

    <div class="hero-home panel-alternating bg-solid">
      <div class="hero-home-image wrapper">
        <g-image src="~/assets/img/tech.png" alt="" width="800" />
      </div>
      <div class="hero-home-highlight wrapper">
        <h1 class="accessibility">Reeves Studio</h1>
        <div class="hero-home-checklist">
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
    </div>
    <div class="services wrapper panel-alternating">
      <h2>Services</h2>
      <ul>
        <li>Website builds</li>
        <li>Website maintenance</li>
        <li>Lead capture &amp; marketing automation</li>
        <li>SEO &amp; accessibility</li>
        <li>API integrations</li>
        <li>
          Microsites, dashboards, interactive calculators, data visualization
        </li>
        <li>UX prototyping</li>
        <li>Web applications</li>
      </ul>
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
  .hero-home-highlight,
  .hero-home-image {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-home-checklist {
    margin-bottom: 2em;
    p {
      font-family: publicsans-semibold, -apple-system, system-ui,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
      @include remify("font-size", 24px);
    }
  }
  .hero-home-image {
    align-items: center;
    justify-content: center;
    img {
      @include remify("max-width", 400px);
    }
  }
  @media all and (min-width: $breakpoint-reader-min) {
    display: flex;
    flex-direction: row-reverse;
    & > div {
      flex-basis: 50%;
    }
  }
}
.services {
  ul {
    list-style: none;
    padding-left: 0;
  }
}
</style>
