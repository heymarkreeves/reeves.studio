<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/assets/img/favicon.png" width="135" /> -->

    <div class="hero-home panel panel-alternating bg-solid">
      <div class="hero-home-image wrapper">
        <g-image src="~/assets/img/tech.png" alt width="1000" />
      </div>
      <div class="hero-home-highlight wrapper">
        <div>
          <h1 class="accessibility">Reeves Studio</h1>
          <div class="hero-home-checklist">
            <p>
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 119 157"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m667.3 637.5c-3.8 0-7.5-1.6-10-4.5l-42-46.8c-5-5.5-4.5-14.1 1-19.1s14.1-4.5 19.1 1l27.2 30.3 41.1-108.8c2.6-7 10.4-10.5 17.4-7.9s10.5 10.4 7.9 17.4l-49 129.7c-1.7 4.4-5.5 7.6-10.1 8.5-.9.1-1.8.2-2.6.2z"
                  fill="#287ab8"
                  fill-rule="nonzero"
                  transform="translate(-611.842 -480.842)"
                />
              </svg>
              Accomplish more.
            </p>
            <p>
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 119 157"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m667.3 637.5c-3.8 0-7.5-1.6-10-4.5l-42-46.8c-5-5.5-4.5-14.1 1-19.1s14.1-4.5 19.1 1l27.2 30.3 41.1-108.8c2.6-7 10.4-10.5 17.4-7.9s10.5 10.4 7.9 17.4l-49 129.7c-1.7 4.4-5.5 7.6-10.1 8.5-.9.1-1.8.2-2.6.2z"
                  fill="#287ab8"
                  fill-rule="nonzero"
                  transform="translate(-611.842 -480.842)"
                />
              </svg>
              Worry less.
            </p>
            <p>
              <svg
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 119 157"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m667.3 637.5c-3.8 0-7.5-1.6-10-4.5l-42-46.8c-5-5.5-4.5-14.1 1-19.1s14.1-4.5 19.1 1l27.2 30.3 41.1-108.8c2.6-7 10.4-10.5 17.4-7.9s10.5 10.4 7.9 17.4l-49 129.7c-1.7 4.4-5.5 7.6-10.1 8.5-.9.1-1.8.2-2.6.2z"
                  fill="#287ab8"
                  fill-rule="nonzero"
                  transform="translate(-611.842 -480.842)"
                />
              </svg>
              Build value.
            </p>
          </div>
          <div>
            <p>
              Mark Reeves provides web development &amp; UX design services for
              small businesses &amp; product, sales, marketing, and
              editorial&nbsp;teams.
            </p>
            <g-link class="cta" to="/work/">Check out the work &raquo;</g-link>
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
            <li>Extending Craft CMS</li>
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
            <li>Shopify</li>
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
      <h2>Let&rsquo;s&nbsp;talk.</h2>
      <p>
        Whether you have a specific request or don&rsquo;t know where to start,
        the first step is a conversation. Fill out the form, hit the button, and
        Mark will be in&nbsp;touch.
      </p>
    </ContactForm>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ContactForm from "~/components/ContactForm";
export default {
  data() {
    return {
      title: "Reeves Studio",
      canonical: "https://reeves.studio/",
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { name: "og:url", content: this.canonical },
        {
          name: "og:title",
          content: this.title + " - " + this.$static.metadata.siteName,
        },
        { name: "twitter:url", content: this.canonical },
        {
          name: "twitter:title",
          content: this.title + " - " + this.$static.metadata.siteName,
        },
        { name: "dcterms.identifier", content: this.canonical },
        {
          name: "dcterms.title",
          content: this.title + " - " + this.$static.metadata.siteName,
        },
      ],
    };
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
    .cta {
      @include font("medium");
      /* Need to DRY this */
      @include remify("font-size", 18px);
      margin-top: 0.5em;
      @media all and (min-width: $breakpoint-reader-min) {
        @include remify("font-size", 20px);
      }
      @media all and (min-width: $breakpoint-min) {
        @include remify("font-size", 24px);
      }
      /* /Need to DRY this */
    }
  }
  .hero-home-checklist {
    margin-bottom: 2em;
    p {
      align-items: center;
      display: flex;
      @include font("medium");
      @include remify("font-size", 18px);
      margin-top: 0.5em;
      @media all and (min-width: $breakpoint-reader-min) {
        @include remify("font-size", 20px);
      }
      @media all and (min-width: $breakpoint-min) {
        @include remify("font-size", 24px);
      }
      svg {
        /* 119 157 */
        @include remify("height", 20px);
        @include remify("width", 26.38655462px);
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
      flex-basis: 52%;
    }
    & > div:nth-of-type(2) {
      flex-basis: 48%;
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
      text-align: center;
      /* h3, */
      /* ul, */
      li {
        display: inline;
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
