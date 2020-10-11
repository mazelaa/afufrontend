<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field
      v-model="name"
      label="Name"
    />

    <base-text-field
      v-model="email"
      label="Email"
    />

    <base-text-field
      v-model="subject"
      label="Subject"
    />

    <base-textarea
      v-model="text"
      class="mb-6"
      label="Your Need & Description"
    />

    <base-textarea
      class="mb-6"
      label="Your Need & Description"
    />

    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      href="mailto:shop@vuetifyjs.com?subject=Zero%20Theme%20Question"
      outlined
      target="_blank"
    >
      Send message
    </base-btn>
  </div>
</template>

<script>
  export default {
    name: 'BaseContactForm',

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'MAIL US YOUR MESSAGE',
      },
    },
    data: () => ({
      name: '',
      email: '',
      subject: '',
      text: '',
    }),

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],
  }
</script>
