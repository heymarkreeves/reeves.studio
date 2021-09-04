<template>
  <Layout>
    <h1>Contact</h1>
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
