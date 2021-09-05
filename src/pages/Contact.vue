<template>
  <Layout>
    <div class="wrapper panel-alternating bg-solid">
      <h1>Contact Mark</h1>
    </div>
    <div class="wrapper panel-alternating">
      <p>Content about contacting...</p>
    </div>
    <ContactForm />
  </Layout>
</template>

<script>
import ContactForm from "~/components/ContactForm";
export default {
  metaInfo: {
    title: "Contact",
  },
  components: {
    ContactForm,
  },
};
</script>
