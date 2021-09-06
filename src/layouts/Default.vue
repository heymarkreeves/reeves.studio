<template>
  <div :class="[{ 'active-nav': menuToggleActive }, 'outer']">
    <div class="inner">
      <header class="masthead">
        <div class="wrapper">
          <strong class="brand">
            <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
            <g-link to="/">Reeves Studio</g-link>
          </strong>
          <button
            class="menu-toggle"
            @click="toggleMenu()"
            @keyup.enter="toggleMenu()"
          >
            <div></div>
            <div><span class="accessibility">Menu</span></div>
            <div></div>
          </button>
          <nav class="nav">
            <ul>
              <li><g-link to="/">Services</g-link></li>
              <li><g-link to="/work/">Work</g-link></li>
              <li><g-link to="/about/">About</g-link></li>
              <li><g-link to="/contact/">Contact</g-link></li>
              <li>
                <g-link to="/agencies/">Agencies</g-link>
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
  data() {
    return {
      menuToggleActive: false,
    };
  },
  components: {
    Footer,
  },
  methods: {
    toggleMenu() {
      this.menuToggleActive = !this.menuToggleActive;
    },
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
@import "~/assets/css/mixins";
@import "~/assets/css/vars";
.masthead {
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include remify("height", 80px);
  }
  nav {
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
      &.active--exact {
        text-decoration: underline;
      }
    }
  }
  @media all and (min-width: $breakpoint-reader-min) {
    nav {
      li {
        display: inline;
        margin-left: 20px;
      }
    }
  }
}
.brand {
  position: relative;
  z-index: 9;
}
.menu-toggle {
  display: none;
  cursor: pointer;
  @include remify("height", 44px);
  position: relative;
  @include remify("width", 44px);
  z-index: 9;
  & > div {
    background-color: var(--color-bright-blue);
    border-radius: 2px;
    @include remify("height", 4px);
    transition: 0.2s all;
    width: calc(100% - 8px);
    &:nth-of-type(1) {
      left: 4px;
      position: absolute;
      top: 10px;
    }
    &:nth-of-type(2) {
      left: 4px;
      opacity: 1;
      position: absolute;
      top: calc(50% - 2px);
    }
    &:nth-of-type(3) {
      bottom: 10px;
      left: 4px;
      position: absolute;
    }
  }
}
@media all and (max-width: $breakpoint-reader-max) {
  .menu-toggle {
    display: block;
  }
  .outer {
    @include remify("padding-top", 80px);
  }
  .masthead {
    background-color: rgb(255, 253, 247);
    @include remify("height", 80px);
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    transition: 0.2s all;
    width: 100%;
    nav {
      left: 0;
      @include remify("padding-right", 20px);
      @include remify("padding-left", 20px);
      position: absolute;
      @include remify("top", 80px);
      width: 100%;
    }
    li {
      margin-top: 0;
    }
    a {
      align-items: center;
      display: flex;
      height: 44px;
    }
  }
  .active-nav {
    .menu-toggle {
      & > div:nth-of-type(1) {
        top: 20px;
        transform: rotate(45deg);
      }
      & > div:nth-of-type(2) {
        opacity: 0;
      }
      & > div:nth-of-type(3) {
        bottom: 20px;
        transform: rotate(-45deg);
      }
    }
    .masthead {
      height: 100vh;
    }
  }
}
</style>
