<template>
  <v-theme-provider dark>
    <v-img
      :src="require('@/assets/wolf-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .6), rgba(5, 11, 31, .6)"
    >
      <base-section
        id="social"
        class="text-center"
        space="56"
      >
        <base-icon class="mb-8">
          mdi-twitter
        </base-icon>

        <base-section-heading
          color="transparent"
          :title="$vuetify.lang.t('$vuetify.socialmedia.title')"
        >
          {{ $vuetify.lang.t('$vuetify.socialmedia.text') }}
        </base-section-heading>

        <div class="py-4" />

        <v-btn
          class="font-weight-bold"
          color="white"
          href="https://twitter.com/AFU_project"
          light
          min-width="168"
          target="_blank"
          x-large
        >
          {{ $vuetify.lang.t('$vuetify.socialmedia.button') }}

          <v-icon right>
            mdi-open-in-new
          </v-icon>
        </v-btn>
      </base-section>
    </v-img>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
