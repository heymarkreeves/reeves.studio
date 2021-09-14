<template>
  <div :class="[{ 'active-nav': menuToggleActive }, 'outer']">
    <div class="inner">
      <header class="masthead">
        <div class="wrapper">
          <strong class="brand">
            <g-link class="accessibility" to="/">{{
              $static.metadata.siteName
            }}</g-link>
            <g-link class="brand-link" to="/">
              <div class="brand-sm">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 217 193"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  xmlns:serif="http://www.serif.com/"
                  style="
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  "
                >
                  <g transform="matrix(1,0,0,1,-611.842,-444.9)">
                    <path
                      class="checkmark"
                      d="M826.7,617.7L785.7,552.3C811.4,545.2 824.9,526.3 824.9,500.9C824.9,468 803.5,444.9 760,444.9L704.3,444.9C697.2,444.9 691.2,450.3 691.2,457.5C691.2,464.6 697.2,470.1 704.3,470.1L765.4,470.1C786.5,470.1 797.4,484.1 797.4,501C797.4,517.9 786.5,531.6 765.4,531.6L737.5,531.6C731.2,531.9 726.1,537 726.1,543.6C726.1,550.5 731.2,555.3 737.5,555.6L757.1,555.6L802.4,629.9C804.7,634.8 808.1,637.6 814.7,637.6C823.3,637.6 828.1,630.7 828.1,623.9C828.2,621.7 827.6,619.7 826.7,617.7Z"
                    />
                  </g>
                  <g transform="matrix(1,0,0,1,-611.842,-444.9)">
                    <path
                      d="M667.3,637.5C663.5,637.5 659.8,635.9 657.3,633L615.3,586.2C610.3,580.7 610.8,572.1 616.3,567.1C621.8,562.1 630.4,562.6 635.4,568.1L662.6,598.4L703.7,489.6C706.3,482.6 714.1,479.1 721.1,481.7C728.1,484.3 731.6,492.1 729,499.1L680,628.8C678.3,633.2 674.5,636.4 669.9,637.3C669,637.4 668.1,637.5 667.3,637.5Z"
                    />
                  </g>
                </svg>
              </div>
              <div class="brand-wide">
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 1095 198"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill-rule="nonzero" transform="translate(-173.042 -441.5)">
                    <path
                      class="checkmark"
                      d="m555.3 635.2h-109.8c-8.3 0-14-6-14-13.7v-163c0-7.7 6.3-13.7 14-13.7h105.5c7.1 0 13.1 5.4 13.1 12.6 0 7.1-6 12.6-13.1 12.6h-92v55.2h52c6.9 0 12.6 5.4 12.6 12.6 0 7.4-5.7 12.6-12.6 12.6h-52v59.6h96.3c7.1 0 13.1 4.9 13.1 12.6 0 7.1-6 12.6-13.1 12.6zm168.5 0h-109.8c-8.3 0-14-6-14-13.7v-163c0-7.7 6.3-13.7 14-13.7h105.5c7.1 0 13.1 5.4 13.1 12.6 0 7.1-6 12.6-13.1 12.6h-92v55.2h52c6.9 0 12.6 5.4 12.6 12.6 0 7.4-5.7 12.6-12.6 12.6h-52v59.6h96.3c7.1 0 13.1 4.9 13.1 12.6 0 7.1-6 12.6-13.1 12.6zm176.6-184.7c2.6-6.3 6.9-8 12-8 6.3 0 13.1 4.3 13.1 12.9 0 1.7-.6 3.4-1.4 5.7l-72.3 168.6c-2 4.9-5.7 7.7-11.7 7.7s-9.7-2.9-11.7-7.7l-72.3-168.6c-.9-2.3-1.4-4-1.4-5.7 0-8.6 6.9-12.9 13.1-12.9 5.1 0 9.4 1.7 12 8l60.3 145.5zm179.3 184.7h-109.8c-8.3 0-14-6-14-13.7v-163c0-7.7 6.3-13.7 14-13.7h105.5c7.1 0 13.1 5.4 13.1 12.6 0 7.1-6 12.6-13.1 12.6h-92v55.2h52c6.9 0 12.6 5.4 12.6 12.6 0 7.4-5.7 12.6-12.6 12.6h-52v59.6h96.3c7.1 0 13.1 4.9 13.1 12.6 0 7.1-6 12.6-13.1 12.6zm114.4 3.4c-25.2 0-50.9-8.3-67.4-21.1-4.3-3.4-7.4-8-7.4-12.9 0-7.1 5.1-11.1 11.7-11.1 3.4 0 6.3 1.4 9.7 3.4 15.7 10 30.3 17.7 53.7 17.7 30.3 0 45.2-12.3 45.2-28.6 0-19.1-16.9-25.1-51.2-35.4-50.9-15.1-66.9-30.9-66.9-57.7 0-34.3 30.3-51.4 73.2-51.4 14.9 0 29.4 2.9 43.2 8 9.7 3.7 23.2 10.6 23.2 19.4 0 6.6-3.7 12.3-11.7 12.3-2 0-4-.6-5.4-1.4-14-8-30-14-48.9-14-28 0-46 8-46 26.6 0 16.9 14 22.9 46.9 33.2 45.7 14.3 71.2 26.6 71.2 59.2-.2 30.4-25.3 53.8-73.1 53.8zm-806.2-20.9-41-65.4c25.7-7.1 39.2-26 39.2-51.4 0-32.9-21.4-56-64.9-56h-55.7c-7.1 0-13.1 5.4-13.1 12.6 0 7.1 6 12.6 13.1 12.6h61.1c21.1 0 32 14 32 30.9s-10.9 30.6-32 30.6h-27.9c-6.3.3-11.4 5.4-11.4 12 0 6.9 5.1 11.7 11.4 12h19.6l45.3 74.3c2.3 4.9 5.7 7.7 12.3 7.7 8.6 0 13.4-6.9 13.4-13.7 0-2.2-.5-4.2-1.4-6.2z"
                    />
                    <path
                      d="m228.5 637.5c-3.8 0-7.5-1.6-10-4.5l-42-46.8c-5-5.5-4.5-14.1 1-19.1s14.1-4.5 19.1 1l27.2 30.3 41.1-108.8c2.6-7 10.4-10.5 17.4-7.9s10.5 10.4 7.9 17.4l-48.9 129.6c-1.7 4.4-5.5 7.6-10.1 8.5-1.1.2-1.9.3-2.7.3z"
                    />
                  </g>
                </svg>
              </div>
            </g-link>
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
  svg {
    path {
      fill: var(--color-dark-blue);
    }
    path.checkmark {
      fill: var(--color-bright-blue);
    }
  }
  .brand-link {
    display: block;
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @media all and (max-width: $breakpoint-hand-max) {
    .brand-sm svg {
      display: block;
      @include remify("height", 36px); // 193
      @include remify("width", 40.47668394px); // 217
    }
    .brand-wide svg {
      display: none;
    }
  }
  @media all and (min-width: $breakpoint-hand-min) {
    .brand-sm svg {
      display: none;
    }
    .brand-wide svg {
      display: block;
      @include remify("height", 36px); // 198
      @include remify("width", 199.09090909px); // 1095
    }
  }
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
    z-index: 9;
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
    height: 100vh;
    overflow: hidden;
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
