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
              Web development &amp; UX design for small businesses &amp;
              product, sales, marketing, and editorial teams.
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
            <li>Information&nbsp;Architecture</li>
            <li>Web applications</li>
          </ul>
        </div>
        <div>
          <h3>Platforms</h3>
          <ul>
            <li>Craft&nbsp;CMS</li>
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
  background-color: rgb(246, 243, 234);
  .hero-home-highlight,
  .hero-home-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-home-highlight {
    display: flex;
    flex-direction: row;
    justify-content: center;
    & > div {
      @include remify("max-width", 400px);
    }
  }
  .hero-home-checklist {
    margin-bottom: 2em;
    p {
      @include font("semibold");
      @include remify("font-size", 18px);
      margin-top: 0.5em;
      @media all and (min-width: $breakpoint-reader-min) {
        @include remify("font-size", 20px);
      }
      @media all and (min-width: $breakpoint-min) {
        @include remify("font-size", 24px);
      }
    }
  }
  .hero-home-image {
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
    & > div:nth-of-type(1) {
      flex-basis: 55%;
    }
    & > div:nth-of-type(2) {
      flex-basis: 45%;
    }
  }
  @media all and (min-width: $breakpoint-desk-min) {
    & > div:nth-of-type(1),
    & > div:nth-of-type(2) {
      flex-basis: 50%;
    }
  }
}
.services-list {
  @include remify("font-size", 16px);
  @media all and (min-width: $breakpoint-min) {
    @include remify("font-size", 18px);
  }
  margin-top: -1.5em;
  margin-right: auto;
  margin-left: auto;
  h3 {
    font-size: inherit;
    line-height: 1.5em;
    margin-top: 1.5em;

    text-transform: uppercase;
  }
  ul {
    font-size: inherit;
    list-style: none;
    padding-left: 0;
    li {
      line-height: 1.5em;
      break-inside: avoid;
      margin-top: 0;
      padding-top: 1.5em;
    }
  }
  @media all and (max-width: 539px) {
    & > div:nth-of-type(2) {
      @include accessibility;
    }
  }
  @media all and (max-width: $breakpoint-hand-max) {
    columns: 2;
    @include remify("column-gap", 100px);
    @include remify("column-width", 200px);
  }
  @media all and (min-width: $breakpoint-hand-min) {
    & > div {
      margin-right: auto;
      margin-left: auto;
      @include remify("max-width", 800px);
    }
    & > div:nth-of-type(1) {
      columns: 2;
      @include remify("column-gap", 100px);
    }
    & > div:nth-of-type(2) {
      @include remify("margin-top", 40px);
      h3,
      ul,
      li {
        display: inline;
        margin-top: 0;
      }
      h3::after {
        content: ":";
        margin-right: 0.5ch;
      }
      li:not(:first-of-type)::before {
        content: ", ";
      }
      li:last-of-type::before {
        content: ",\0000a0";
      }
    }
  }
}
</style>
