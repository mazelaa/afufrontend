<template>
  <v-theme-provider dark>
    <base-section
      id="Contact"
      class="primary"
      space="40"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              :title="$vuetify.lang.t('$vuetify.contact.title')"
            />

            <base-body space="0">
              <span class="white--text">
                {{ $vuetify.lang.t('$vuetify.contact.text') }}
              </span>
            </base-body>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <a href="mailto:business@afuproject.com">
              <base-btn
                :block="$vuetify.breakpoint.smAndDown"
                color="white"

                large
                outlined
              >
                {{ $vuetify.lang.t('$vuetify.contact.button') }}
              </base-btn>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionContactUs',
  }
</script>
