<template>
  <base-info-card :title="$vuetify.lang.t('$vuetify.footer.section2')">
    <a
      v-for="feature in features"
      :key="feature.name"
      :text="feature.name"
      class="mb-8 grey--text body-1 d-block text-none"
      :href="feature.link"
      v-html="`&rsaquo; ${feature.name}`"
    />
  </base-info-card>
</template>

<script>
  export default {
    name: 'SectionFeaturesAlt',
    data: () => ({
      features: [],
    }),
    mounted () {
      this.features = [
        {
          link: 'https://bilaxy.com/trade/AFU_USDT',
          name: this.$vuetify.lang.t('$vuetify.footer.section2item1'),
        },
        {
          link: '',
          name: this.$vuetify.lang.t('$vuetify.footer.section2item2'),
        },
        {
          link: '',
          name: this.$vuetify.lang.t('$vuetify.footer.section2item3'),
        },
        {
          link: 'https://www.afuproject.com/#/whitepaper',
          name: this.$vuetify.lang.t('$vuetify.footer.section2item4'),
        },
        {
          link: 'https://www.afuproject.com/#/imprint',
          name: this.$vuetify.lang.t('$vuetify.footer.section2item5'),
        },
      ]
    },
  }
</script>
