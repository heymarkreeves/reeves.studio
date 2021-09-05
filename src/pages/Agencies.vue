<template>
  <Layout>
    <h1>Agencies</h1>
    <p>
      I began my career at digital marketing agency Euro RSCG and have worked in
      or as a partner to agencies ever&nbsp;since.
    </p>
    <p>
      I&rsquo;m primarily a front end &amp; CMS developer, adept at balancing
      ambitious designs, accessibility, and performance, held in high regard for
      my attention to detail. On the CMS side, I&rsquo;ve worked extensively
      with
      <a
        target="_blank"
        href="https://craftcms.com/partners/clearbold"
        title="I’m a Craft CMS Partner."
        >Craft CMS</a
      >. I&rsquo;ve done some Drupal. I&rsquo;m open to WordPress, too.
      I&rsquo;ll often deliver a full site build from kickoff through launch.
      Full-stack UX prototyping&mdash;developing working concepts using real
      data&mdash;is something of a sweet spot for me. I&rsquo;m a generalist
      who’s good at jumping in, hitting the ground running, and getting
      stuff&nbsp;done.
    </p>
    <p>
      I&rsquo;m also aware that you&rsquo;re probably juggling multiple apps and
      services for project management, time tracking, forecasting, and sales
      pipelines, while relying on manual workflows to try to efficiently utilize
      or find insight in all that data. I&rsquo;d love to discuss dashboard or
      API projects on that&nbsp;front.
    </p>
    <div class="agency-work">
      <h2>Agency Work Has Included</h2>
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
        <li>Numerous Healthcare, Biosciences&nbsp;clients</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Agencies",
  },
};
</script>

<style lang="scss">
.agency-work {
  ul {
    list-style: none;
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
