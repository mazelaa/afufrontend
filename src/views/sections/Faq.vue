<template>
  <v-theme-provider dark>
    <base-section
      id="faq"
    >
      <v-container>
        <vue-faq-accordion
          :items="faqItems"
          border-color="transparent"
          font-color="#9e9e9e"
          active-color="#7C6951"
        />
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  import VueFaqAccordion from 'vue-faq-accordion'

  export default {
    name: 'SectionNewsletterAlt',
    components: {
      VueFaqAccordion,
    },
    data () {
      return {
        faqItems: [],
      }
    },
    mounted () {
      this.faqItems = [
        {
          title: this.$vuetify.lang.t('$vuetify.faq.q1'),
          value: this.$vuetify.lang.t('$vuetify.faq.a1'),
          category: this.$vuetify.lang.t('$vuetify.faq.cat1'),
        },
        {
          title: this.$vuetify.lang.t('$vuetify.faq.q2'),
          value: this.$vuetify.lang.t('$vuetify.faq.a2'),
          category: this.$vuetify.lang.t('$vuetify.faq.cat1'),
        },
        {
          title: this.$vuetify.lang.t('$vuetify.faq.q3'),
          value: this.$vuetify.lang.t('$vuetify.faq.a3'),
          category: this.$vuetify.lang.t('$vuetify.faq.cat2'),
        },
      ]
    },
  }
</script>
