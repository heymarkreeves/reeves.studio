<template>
  <Layout>
    <div class="wrapper panel-alternating bg-solid">
      <h1>Recent Work</h1>
    </div>
    <div class="panel-alternating">
      <div class="wrapper">
        <p>
          Include Morin's, Journey North, Sentinel Benefits, Invested Digital
          Group
        </p>
      </div>
    </div>
    <div class="quote wrapper panel-alternating">
      <blockquote>
        <p>
          &ldquo;[Mark delivered] as promised, all the while keeping a careful
          eye on budget constraints, staffing considerations, user experience,
          and future technical&nbsp;dependencies.&rdquo;
        </p>
      </blockquote>
      <p>&ndash; Elizabeth Howard, Founder, Journey North</p>
    </div>
    <ContactForm />
  </Layout>
</template>

<script>
import ContactForm from "~/components/ContactForm";

export default {
  metaInfo: {
    title: "Work",
  },
  components: {
    ContactForm,
  },
};
</script>
