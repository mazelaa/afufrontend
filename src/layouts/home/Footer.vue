<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
        <!--
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template>
              <span
                href="javascript:void(0)"
                @click="changeLang('en')"
                :class="$vuetify.lang.current != 'en' ? 'white--text' : 'primary--text'"
              >EN</span> | <span
                @click="changeLang('de')"
                :class="$vuetify.lang.current != 'de' ? 'white--text' : 'primary--text'"
              >DE</span>
            </template>
          </div>
          -->
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
          v-html="$vuetify.lang.t('$vuetify.footer.copyright')"
        />
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/AFU_Project',
        },
        {
          name: 'Telegram',
          link: 'https://t.me/AFUProject',
        },
      ],
    }),
    /* methods: {
      changeLang (language) {
        this.$vuetify.lang.current = language
      },
    }, */
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
