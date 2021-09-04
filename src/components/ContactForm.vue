<template>
  <div class="contact-form">
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/contact/success"
    >
      <div>
        <label for="form-name">Your Name</label>
        <input id="form-name" type="text" name="name" />
      </div>
      <div>
        <label for="form-email">Your Email Address</label>
        <input id="form-email" type="email" name="email" />
      </div>
      <div>
        <label for="form-timeframe">Your Timeframe</label>
        <select id="form-timeframe" name="timeframe">
          <option>Flexible</option>
          <option>Looking for a Quote</option>
          <option>Immediate Need</option>
        </select>
        <p class="form-explainer">
          Note that most new client projects start at $5,000.
        </p>
      </div>
      <div>
        <label for="form-description">Describe your project or need.</label>
        <textarea id="form-description" name="description"></textarea>
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style>
label {
  display: block;
}
</style>
