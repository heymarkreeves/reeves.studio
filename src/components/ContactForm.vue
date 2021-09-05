<template>
  <div class="contact-form wrapper panel-alternating bg-solid">
    <div class="panel-intro">
      <slot />
    </div>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/contact/success"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="form-top">
        <div>
          <label for="form-name">Your Name</label>
          <input id="form-name" type="text" name="name" required />
          <label for="form-email">Your Email Address</label>
          <input id="form-email" type="email" name="email" required />
        </div>
        <div>
          <label for="form-timeframe">Your Timeframe</label>
          <select id="form-timeframe" name="timeframe">
            <option>Flexible</option>
            <option>Looking for a Quote</option>
            <option>Immediate Need</option>
          </select>
          <p class="form-explainer">
            Most new client projects start at&nbsp;$5,000.
          </p>
        </div>
      </div>
      <div class="form-bottom">
        <label for="form-description">Describe your project or need.</label>
        <textarea
          id="form-description"
          name="description"
          rows="12"
          required
        ></textarea>
      </div>
      <div>
        <button class="cta" type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style lang="scss">
@import "~/assets/css/mixins";
@import "~/assets/css/vars";
.panel-intro {
  text-align: center;
  & + form {
    @include remify("margin-top", 40px);
    @media all and (min-width: $breakpoint-reader-min) {
      @include remify("margin-top", 60px);
    }
  }
}
form {
  margin-right: auto;
  margin-left: auto;
  @include remify("max-width", 768px);
  label,
  .form-explainer {
    @include remify("font-size", 16px);
    @include remify("padding-left", 8px);
  }
  label {
    display: block;
    @include font("semibold");
    margin-top: 1em;
    margin-bottom: 0.25em;
  }
  .form-explainer {
    margin-top: 0.25em;
    @include remify("padding-left", 8px);
  }
  & > div:first-of-type() {
    & > div:first-of-type() {
      margin-top: 0;
    }
  }
  input[type="text"],
  input[type="email"],
  select,
  textarea {
    /* border: 1px solid var(--color-dark-blue-50); */
    border: 0;
    border-bottom: 1px solid #c2c0ba;
    border-radius: 1px;
    color: var(--color-dark-blue);
    @include font("regular");
    @include remify("font-size", 16px);
    @include remify("padding", 8px);
    resize: none;
    -webkit-appearance: none;
    width: 100%;
  }
  select {
    @media all and (min-width: $breakpoint-reader-min) {
      width: calc(100% - 1px);
    }
  }
}
.form-top {
  @media all and (min-width: $breakpoint-reader-min) {
    display: flex;
    & > div {
      flex-basis: 50%;
      &:nth-of-type(1) {
        @include remify("padding-right", 20px);
      }
      &:nth-of-type(2) {
        @include remify("padding-left", 20px);
      }
    }
  }
}
</style>
