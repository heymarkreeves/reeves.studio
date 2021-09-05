<template>
  <div class="outer">
    <div class="inner">
      <header class="masthead">
        <div class="wrapper">
          <strong>
            <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
            <g-link to="/">Reeves Studio</g-link>
          </strong>
          <nav class="nav">
            <ul>
              <li><g-link class="nav__link" to="/">Services</g-link></li>
              <li><g-link class="nav__link" to="/work/">Work</g-link></li>
              <li><g-link class="nav__link" to="/about/">About</g-link></li>
              <li><g-link class="nav__link" to="/contact/">Contact</g-link></li>
              <li>
                <g-link class="nav__link" to="/agencies/">Agencies</g-link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <slot />
      </main>
    </div>
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

<style lang="scss">
@import "~/assets/css/_mixins.scss";
@import "~/assets/css/_vars.scss";
.masthead {
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include remify("height", 80px);
    height: 80px;
  }
  nav {
    li {
      display: inline;
      margin-left: 20px;
    }
    a {
      text-decoration: none;
    }
  }
}
</style>
