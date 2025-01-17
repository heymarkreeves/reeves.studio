<template>
  <Layout>
    <div class="wrapper panel panel-alternating bg-solid">
      <h1>Agency Partnerships</h1>
    </div>
    <div class="panel panel-alternating">
      <div class="wrapper content-no-image">
        <p>
          Mark began his career at digital marketing agency Euro RSCG and has
          worked in or as a partner to agencies ever&nbsp;since.
        </p>
        <p>
          In this context, he&rsquo;s primarily a front end or CMS developer,
          adept at balancing ambitious designs, accessibility, and performance.
          On the CMS side, he&rsquo;s worked extensively with
          <a
            target="_blank"
            href="https://craftcms.com/partners/clearbold"
            title="I’m a Craft CMS Partner."
            >Craft CMS</a
          >, built or maintained a few Drupal projects, and is open to
          WordPress, too. On the front end, Mark&rsquo;s worked with Vue.js
          &amp; React. Mark will often deliver a full site build from kickoff
          through launch. Full-stack UX prototyping&mdash;developing working
          concepts using real data&mdash;is something of a sweet spot for him.
          He&rsquo;s a generalist who’s good at jumping in, hitting the ground
          running, and getting things&nbsp;done.
        </p>
        <p>
          Mark is also aware that you&rsquo;re probably juggling multiple apps
          and services for project management, time tracking, forecasting, and
          sales pipelines, while relying on manual workflows to try to
          efficiently utilize or find insight in all that data. He&rsquo;d love
          to discuss dashboard or API projects on that&nbsp;front.
        </p>
      </div>
    </div>
    <div
      class="agency-work wrapper panel-alternating bg-solid padding-extra-bottom content-centered"
    >
      <div>
        <h2>Agency Work</h2>
        <p>
          In agency roles or as an agency&nbsp;partner, Mark has supported
          efforts&nbsp;for:
        </p>
        <ul>
          <li>The Campbell Soup&nbsp;Company</li>
          <li>Lexmark</li>
          <li>Fidelity&nbsp;Investments</li>
          <li>The&nbsp;NYSE</li>
          <li>MINI&nbsp;USA</li>
          <li>Cadillac</li>
          <li>New&nbsp;Balance</li>
          <li>L.L.&nbsp;Bean</li>
          <li>Jay Peak&nbsp;Resort</li>
          <li>SAP</li>
          <li>Massachusetts General&nbsp;Hospital</li>
          <li>and Healthcare&nbsp;&amp; Biosciences&nbsp;clients</li>
        </ul>
      </div>
    </div>
    <div class="quote wrapper panel panel-alternating">
      <blockquote>
        <p>&ldquo;Great attention to&nbsp;detail.&rdquo;</p>
      </blockquote>
      <p>&ndash; Agency Creative&nbsp;Directors</p>
    </div>
    <ContactForm hideBudgetTerms="true">
      <h2>Let&rsquo;s team up.</h2>
      <p>
        Freelancing just makes sense for me. Let&rsquo;s leverage that. Where my
        skills and bandwidth overlap your resource or skills
        gaps&mdash;that&rsquo;s a good fit. Get in touch to see where we
        can&nbsp;align.
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
      title: "Agency Partnerships",
      canonical: "https://reeves.studio/agencies",
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

.agency-work {
  div:not(.panel-intro) {
    text-align: center;
  }
  ul {
    list-style: none;
    margin-right: auto;
    margin-left: auto;
    @include remify("max-width", 800px);
    padding-left: 0;
  }
  li {
    display: inline;
    &:not(:last-of-type)::after {
      content: ", ";
    }
  }
}
.content-no-image {
  @media all and (min-width: $breakpoint-min) {
    columns: 2;
    @include remify("column-gap", 60px);
  }
}
</style>
