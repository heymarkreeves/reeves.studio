<template>
  <Layout>
    <div class="wrapper panel panel-alternating bg-solid">
      <h1>Not Found</h1>
    </div>
    <div class="contact-mark wrapper panel panel-alternating">
      <div>
        <g-image
          class="mark-desk"
          src="~/assets/img/desk.png"
          alt
          width="800"
        />
      </div>
      <div>
        <p>
          The page you requested could not be found.
        </p>
      </div>
    </div>
    <ContactForm>
      <h2>Get in touch.</h2>
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
      title: "Not Found",
      canonical: "https://reeves.studio/404",
    };
  },
  metaInfo() {
    return {
      title: this.title,
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
