<template>
  <Layout>
    <div class="wrapper panel panel-alternating bg-solid">
      <h1>Contact Mark</h1>
    </div>
    <div class="contact-mark wrapper panel panel-alternating">
      <div>
        <g-image class="mark-desk" src="~/assets/img/desk.png" alt width="800" />
      </div>
      <div>
        <p>
          The best way to reach Mark is by email&mdash;a unified inbox for a universal medium.
          Please provide as much detail as possible. He&rsquo;ll be in touch with some times to&nbsp;connect.
        </p>
      </div>
    </div>
    <ContactForm>
      <h2>Get in touch.</h2>
    </ContactForm>
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

<style lang="scss">
@import "~/assets/css/mixins";
@import "~/assets/css/vars";
.mark-desk {
  @include remify("max-width", 340px);
}
@media all and (min-width: $breakpoint-min) {
  .contact-mark {
    display: flex;
    flex-direction: row-reverse;
    & > div:nth-of-type(2) {
      display: flex;
      flex-basis: 60%;
      flex-direction: column;
      justify-content: center;
      @include remify("padding-right", 60px);
    }
    & > div:nth-of-type(1) {
      flex-basis: 40%;
    }
  }
}
</style>
