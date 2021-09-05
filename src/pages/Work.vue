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
