<template>
  <Layout>
    <div class="wrapper panel panel-alternating bg-solid">
      <h1>Agency Partnerships</h1>
    </div>
    <div class="panel panel-alternating">
      <div class="wrapper">
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
          WordPress, too. Mark will often deliver a full site build from kickoff
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
      <div class="agency-work wrapper panel panel-sub">
        <h2>Agency Work</h2>
        <p>
          Mark has worked on projects for the following clients in agency roles
          or as an agency partner:
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
          <li>Healthcare &amp; Biosciences&nbsp;clients</li>
        </ul>
      </div>
    </div>
    <div class="quote wrapper panel panel-alternating">
      <blockquote>
        <p>&ldquo;Great attention to&nbsp;detail.&rdquo;</p>
      </blockquote>
      <p>&ndash; Agency Creative&nbsp;Directors</p>
    </div>
    <ContactForm></ContactForm>
  </Layout>
</template>

<script>
import ContactForm from "~/components/ContactForm";

export default {
  metaInfo: {
    title: "Agencies",
  },
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss">
.agency-work {
  ul {
    list-style: none;
    margin-top: 1em;
    padding-left: 0;
  }
  li {
    display: inline;
    &:not(:last-of-type)::after {
      content: ", ";
    }
  }
}
</style>
