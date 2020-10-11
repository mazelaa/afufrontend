<template>
  <v-theme-provider dark>
    <base-section
      id="info-alt"
      class="grey darken-4"
    >
      <v-responsive
        class="mx-auto"
        max-width="1400"
      >
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <base-info />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <info-features />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <a
                href="javascript:void(0)"
                @click="setLang('en')"
              >EN</a> | <a
                href="javascript:void(0)"
                @click="setLang('de')"
              >DE</a>
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
    <cookie-law theme="blood-orange" />
  </v-theme-provider>
</template>

<script>
  import CookieLaw from 'vue-cookie-law'
  export default {
    name: 'SectionBusinessInfo',

    components: {
      InfoFeatures: () => import('@/components/InfoFeatures'),
      CookieLaw,
    },
    methods: {
      setLang (lang) {
        if (lang === 'en' || lang === 'de') {
          localStorage.setItem('lang', lang)
          location.reload()
        }
      },
    },
  }
</script>

<style lang="sass">
  #info-alt a
    text-decoration: none
</style>
