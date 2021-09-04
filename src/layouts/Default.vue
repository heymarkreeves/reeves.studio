<template>
  <div class="layout">
    <header class="header">
      <strong>
        <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
        <g-link to="/">Reeves Studio</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Services</g-link>
        <g-link class="nav__link" to="/work/">Work</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
        <g-link class="nav__link" to="/agencies/">Agencies</g-link>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: publicsans-regular, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

strong,
b,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: publicsans-semibold, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: normal;
}
em,
i {
  font-family: publicsans-italic, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-style: normal;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
