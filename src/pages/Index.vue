<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/assets/img/favicon.png" width="135" /> -->

    <div class="hero-home panel panel-alternating bg-solid">
      <div class="hero-home-image wrapper">
        <g-image src="~/assets/img/tech.png" alt="" width="1000" />
      </div>
      <div class="hero-home-highlight wrapper">
        <div>
          <h1 class="accessibility">Reeves Studio</h1>
          <div class="hero-home-checklist">
            <p>✓ Accomplish more.</p>
            <p>✓ Worry less.</p>
            <p>✓ Build value.</p>
          </div>
          <div>
            <p>
              Web development &amp; UX design for small businesses or product,
              sales, marketing, and editorial teams.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="services wrapper panel panel-alternating">
      <div class="panel-intro">
        <h2>Services</h2>
        <p>Big experience, tailor-fit to your budget&nbsp;&amp;&nbsp;needs.</p>
      </div>
      <div class="services-list">
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
            <li>Ecommerce</li>
            <li>
              Microsites, dashboards, interactive calculators, data
              visualization
            </li>
            <li>
              <abbr title="User Experience (Design)">UX</abbr> prototyping
            </li>
            <li>Information&nbsp;Architecture&nbsp;(IA)</li>
            <li>Web applications</li>
          </ul>
        </div>
        <div>
          <h3>Tools</h3>
          <ul>
            <li>Craft CMS</li>
            <li>Vue.js</li>
            <li>React</li>
            <li>Stripe</li>
            <li>Postmark</li>
            <li>Salesforce</li>
            <li>Laravel</li>
            <li>WordPress</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="quote wrapper panel panel-alternating">
      <blockquote>
        <p>
          &ldquo;EVERYTHING went so smoothly. Mark orchestrated the scope and
          timing so well; I never felt overwhelmed by what was a
          monumental&nbsp;project.&rdquo;
        </p>
      </blockquote>
      <p>&ndash; Elizabeth Howard, Founder, Journey North</p>
    </div>
    <ContactForm>
      <h2>Let&rsquo;s&nbsp;Talk.</h2>
      <p>
        Whether you have a specific request or don&rsquo;t know where to start,
        the first step is a conversation. Fill out the form, hit the button, and
        Mark will be in&nbsp;touch.
      </p>
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
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-home-highlight {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    & > div {
      @include remify("max-width", 400px);
    }
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
    @include remify("margin-bottom", 20px);
    img {
      @include remify("max-width", 500px);
    }
    @media all and (min-width: $breakpoint-reader-min) {
      margin-bottom: 0;
    }
  }
  @media all and (min-width: $breakpoint-reader-min) {
    align-items: center;
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
}
.services-list {
  margin-right: auto;
  margin-left: auto;
  @media all and (max-width: $breakpoint-hand-max) {
    columns: 2;
    column-width: 200px;
    column-gap: 60px;
    break-inside: avoid-column;
  }
  @media all and (min-width: $breakpoint-hand-min) {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    @include remify("max-width", 800px);
    & > div {
      &:nth-of-type(1) {
        @include remify("padding-right", 40px);
      }
      &:nth-of-type(2) {
        /* background-color: var(--color-gray); */
        border-left: 3px solid var(--color-gray);
        /* @include remify("margin-top", -20px); */
        /* @include remify("padding-top", 20px); */
        @include remify("padding-right", 50px);
        /* @include remify("padding-bottom", 20px); */
        @include remify("padding-left", 40px);
        h3 {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
