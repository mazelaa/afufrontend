<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="$vuetify.lang.t('$vuetify.footer.section3')"
        pace="6"
      />

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessInfo',

    props: { dark: Boolean },
  }
</script>
