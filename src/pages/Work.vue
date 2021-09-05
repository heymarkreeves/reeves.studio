<template>
  <Layout>
    <div class="wrapper panel panel-alternating bg-solid">
      <h1>Recent Work</h1>
    </div>
    <div class="panel panel-alternating">
      <div class="wrapper">
        <p>
          Include Morin's, Journey North, Sentinel Benefits, Invested Digital
          Group
        </p>
      </div>
    </div>
    <div class="quote wrapper panel panel-alternating">
      <blockquote>
        <p>
          &ldquo;[Mark delivered] as promised, all the while keeping a careful
          eye on budget constraints, staffing considerations, user experience,
          and future technical&nbsp;dependencies.&rdquo;
        </p>
      </blockquote>
      <p>&ndash; Elizabeth Howard, Founder, Journey North</p>
    </div>
    <ContactForm>
      <h2>Join the Club.</h2>
      <p>
        My clients tend to worry less about their web operations once
        we&rsquo;ve started working together. I get things done, plan ahead, and
        keep chaos at bay. Want to get more done &amp; worry less? Get
        in&nbsp;touch.
      </p>
    </ContactForm>
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
