<template>
  <Layout>
    <div class="wrapper panel panel-alternating bg-solid">
      <h1>Success!</h1>
    </div>
    <div class="contact-mark wrapper panel panel-alternating">
      <div>
        <g-image class="mark-desk" src="~/assets/img/desk.png" alt width="800" />
      </div>
      <div>
        <p>That was easy. Mark will be in touch.</p>
      </div>
    </div>
    <div class="panel panel-alternating bg-solid">
      <!-- empty div -->
    </div>
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
      title: "Contact Mark",
      canonical: "https://reeves.studio/contact/success",
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
