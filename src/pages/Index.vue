<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/assets/img/favicon.png" width="135" /> -->

    <div class="hero-home panel-alternating bg-solid">
      <div class="hero-home-image wrapper">
        <g-image src="~/assets/img/tech.png" alt="" width="1000" />
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
      <div>
        <ul>
          <li>Website &amp; content management system (CMS) builds</li>
          <li>Website maintenance</li>
          <li>Lead capture &amp; marketing automation</li>
          <li>
            <abbr title="Search Engine Optimization">SEO</abbr> &amp;
            Accessibility (A11y)
          </li>
          <li>
            <abbr title="Application Programming Interface">API</abbr>
            integrations
          </li>
          <li>
            Microsites, dashboards, interactive calculators, data visualization
          </li>
          <li><abbr title="User Experience (Design)">UX</abbr> prototyping</li>
          <li>Information Architecture (IA)</li>
          <li>Web applications</li>
        </ul>
        <h3>Tools</h3>
        <ul>
          <li>Craft CMS</li>
          <li>Vue.js</li>
          <li>React</li>
          <li>Laravel</li>
          <li>WordPress</li>
        </ul>
      </div>
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
@import "~/assets/css/mixins";
@import "~/assets/css/vars";

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
      @include remify("max-width", 500px);
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
  /* h2, */
  h3 {
    @include remify("font-size", 16px);
    line-height: 1.5em;
    text-transform: uppercase;
    @media all and (min-width: $breakpoint-min) {
      @include remify("font-size", 18px);
    }
  }
  h3 {
    margin-top: 1.5em;
    & + ul {
      margin-top: 1.5em;
    }
  }
  ul {
    list-style: none;
    padding-left: 0;
    @media all and (min-width: $breakpoint-min) {
      @include remify("font-size", 18px);
    }
    li {
      line-height: 1.5em;
    }
    li:not(:first-of-type) {
      margin-top: 1.5em;
    }
  }
  & > div {
    columns: 2;
    column-width: 300px;
    column-gap: 60px;
    break-inside: avoid;
  }
}
</style>
