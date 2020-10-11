<template>
  <base-section :id="$vuetify.lang.t('$vuetify.header.Vision')">
    <base-section-heading :title="$vuetify.lang.t('$vuetify.header.Vision')">
      {{ $vuetify.lang.t('$vuetify.vision.text') }}
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            {{ feature.desc }}
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [],
    }),
    mounted () {
      this.features = [
        {
          color: 'primary',
          dark: true,
          title: this.$vuetify.lang.t('$vuetify.vision.item1'),
          icon: 'mdi-cow',
          desc: this.$vuetify.lang.t('$vuetify.vision.item1text'),
        },
        {
          color: 'primary',
          dark: true,
          title: this.$vuetify.lang.t('$vuetify.vision.item2'),
          icon: 'mdi-elephant',
          desc: this.$vuetify.lang.t('$vuetify.vision.item2text'),
        },
        {
          color: 'primary',
          dark: true,
          title: this.$vuetify.lang.t('$vuetify.vision.item3'),
          icon: 'mdi-ladybug',
          desc: this.$vuetify.lang.t('$vuetify.vision.item3text'),
        },
        {
          color: 'primary',
          dark: true,
          title: this.$vuetify.lang.t('$vuetify.vision.item4'),
          icon: 'mdi-jellyfish',
          desc: this.$vuetify.lang.t('$vuetify.vision.item4text'),
        },
        {
          color: 'primary',
          dark: true,
          title: this.$vuetify.lang.t('$vuetify.vision.item5'),
          icon: 'mdi-turtle',
          desc: this.$vuetify.lang.t('$vuetify.vision.item5text'),
        },
        {
          color: 'primary',
          dark: true,
          title: this.$vuetify.lang.t('$vuetify.vision.item6'),
          icon: 'mdi-penguin', /* mdi-fish, panda, jellyfish, bee */
          desc: this.$vuetify.lang.t('$vuetify.vision.item6text'),
        },
      ]
    },
  }
</script>
