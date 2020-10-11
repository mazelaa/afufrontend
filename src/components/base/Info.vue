<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="$vuetify.lang.t('$vuetify.footer.section1')"
        color="primary"
      >
        <base-body>
          {{ $vuetify.lang.t('$vuetify.footer.section1text') }}
        </base-body>

        <base-btn
          class="mb-12"
          color="white"
          outlined
          :to="{ name: 'Whitepaper' }"
        >
          {{ $vuetify.lang.t('$vuetify.footer.section1button') }}
        </base-btn>
      </base-info-card>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseInfo',

    props: {
      title: String,
      dark: Boolean,
    },
  }
</script>
