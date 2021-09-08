<template>
  <Layout>
    <div class="wrapper panel panel-alternating bg-solid">
      <h1>About Mark</h1>
    </div>
    <div class="about-mark wrapper panel panel-alternating">
      <div>
        <g-image
          class="mark-seated"
          src="~/assets/img/mark.png"
          alt=""
          width="680"
          height="1133"
        />
      </div>
      <div>
        <p>
          If you were to describe Mark in one word it would be
          <strong>multidisciplinary</strong>. In college Mark studied Business,
          Communications, and Computer Science. Today he collaborates with
          designers, marketing professionals, scholars, scientists, and business
          owners while managing projects and studio&nbsp;operations.
        </p>
        <p>
          Whether it&rsquo;s making websites &amp; web apps more accessible
          &amp; inclusive for more people, or more sustainable for the planet
          &amp; the people who work with them, Mark&rsquo;s motivated to
          <strong>always do better</strong> at the work we&nbsp;do.
        </p>
        <p>
          Mark lives with his family and works remotely in
          Montpelier,&nbsp;Vermont.
        </p>
      </div>
    </div>
    <div class="quote wrapper panel panel-alternating">
      <blockquote>
        <p>
          &ldquo;Incredibly efficient and just really great to
          work&nbsp;with.&rdquo;
        </p>
      </blockquote>
      <p>
        &ndash; Lizzy Desibia, VP, Sales &amp; Marketing, Russell Morin
        Catering&nbsp;Events
      </p>
    </div>
    <ContactForm>
      <h2>Work with Mark.</h2>
      <p>
        Reliable, resourceful, responsive&mdash;and ready to make the web work
        better for you. I&rsquo;d love to hear about what you&rsquo;re working
        on, and what we can do&nbsp;better.
      </p>
    </ContactForm>
  </Layout>
</template>

<script>
import ContactForm from "~/components/ContactForm";

export default {
  metaInfo: {
    title: "Mark Reeves",
  },
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss">
@import "~/assets/css/mixins";
@import "~/assets/css/vars";
.mark-seated {
  @include remify("max-width", 340px);
}
@media all and (min-width: $breakpoint-min) {
  .about-mark {
    display: flex;
    flex-direction: row-reverse;
    @include remify("min-height", 646.5px);
    & > div:nth-of-type(2) {
      display: flex;
      flex-basis: 70%;
      flex-direction: column;
      justify-content: center;
      @include remify("padding-right", 60px);
    }
    & > div:nth-of-type(1) {
      flex-basis: 30%;
    }
  }
}
</style>
