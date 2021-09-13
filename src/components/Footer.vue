<template>
  <footer class="panel panel-alternating" role="contentinfo">
    <div class="wrapper">
      <div>
        <p></p>
        <p>
          &copy; 2021 Clearbold, LLC. Montpelier,&nbsp;VT.&nbsp;<a
            class="link-social-icon"
            target="_blank"
            href="https://www.linkedin.com/in/heymarkreeves"
            rel="noreferrer"
            ><svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 44 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="#fff"
                fill-rule="nonzero"
                transform="translate(-28.3 -28.7941)"
              >
                <path
                  d="m40.5 32.888v.024c0 2.139-1.761 3.9-3.9 3.9-.1 0-.2-.004-.3-.012-.033.001-.067.001-.1.001-2.139 0-3.9-1.76-3.9-3.9v-.013c0-2.084 1.715-3.8 3.8-3.8.1 0 .2.004.3.012.1-.008.2-.012.3-.012 2.085 0 3.8 1.716 3.8 3.8zm-8 31.612v-24.7h7.7v24.7z"
                />
                <path
                  d="m44.8 47.7c0-3.1-.1-5.7-.2-7.9h6.7l.3 3.4h.2c1.678-2.546 4.552-4.058 7.6-4 5.1 0 8.9 3.4 8.9 10.7v14.6h-7.7v-13.7c0-3.2-1.1-5.3-3.9-5.3-1.763-.005-3.341 1.128-3.9 2.8-.205.647-.307 1.322-.3 2v14.2h-7.7z"
                />
              </g></svg
            ><span class="accessibility">LinkedIn</span></a
          ><br />
          Member,&nbsp;<a
            target="_blank"
            href="https://www.accessibilityassociation.org/"
            title="International Association of Accessibility Professionals"
            rel="noreferrer"
            >IAAP</a
          >.
          <a
            class="link-craft"
            target="_blank"
            href="https://craftcms.com/partners/clearbold"
            rel="noreferrer"
            >Craft&nbsp;CMS&nbsp;Partner</a
          >.<br />
          <a href="mailto:studio@heyreeves.com">studio@heyreeves.com</a>
        </p>
        <p>
          Caterers, event planners, and culinary&nbsp;brands, visit&nbsp;<a
            class="link-wintergreen"
            target="_blank"
            href="https://wintergreendigital.com"
            rel="noreferrer"
            >wintergreendigital.com</a
          >.
        </p>
      </div>
      <div>
        <g-image
          class="vermont-made"
          src="~/assets/img/vt.png"
          alt="Illustration says 'Made in Vermont' and features Vermont state icon."
          width="268"
        />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "~/assets/css/mixins";
@import "~/assets/css/vars";
.link-craft {
  color: #e5422b;
}
.link-wintergreen {
  color: rgb(103, 172, 103);
}
.link-social-icon {
  background-color: var(--color-bright-blue);
  border-radius: 2px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 22px;
  padding: 4px;
  position: relative;
  top: 2px;
  width: 22px;
  svg {
    height: 18px;
    position: relative;
    top: 1px;
    transition: 0.2s all;
    width: 22px;
  }
  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
}
.vermont-made {
  @include remify("max-width", 134px);
}
footer {
  .wrapper {
    text-align: center;
    & > div {
      &:nth-of-type(2) {
        margin-top: 2em;
      }
    }
    @media all and (min-width: $breakpoint-reader-min) {
      align-items: center;
      display: flex;
      text-align: left;
      & > div {
        &:nth-of-type(1) {
          flex-basis: 60%;
        }
        &:nth-of-type(2) {
          display: flex;
          flex-basis: 40%;
          justify-content: flex-end;
          margin-top: 0;
          img {
            @include remify("margin-right", 60px);
          }
        }
      }
    }
  }
}
</style>
