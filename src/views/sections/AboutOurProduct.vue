<template>
  <base-section :id="$vuetify.lang.t('$vuetify.header.Charities')">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-bee-flower"
      :title="$vuetify.lang.t('$vuetify.services.title')"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      cards: [],
    }),
    mounted () {
      this.cards = [
        {
          title: this.$vuetify.lang.t('$vuetify.services.item1'),
          subtitle: 'Reach new channels',
          text: this.$vuetify.lang.t('$vuetify.services.item1text'),
          callout: '01',
        },
        {
          title: this.$vuetify.lang.t('$vuetify.services.item2'),
          subtitle: this.$vuetify.lang.t('$vuetify.services.item2slogan'),
          text: this.$vuetify.lang.t('$vuetify.services.item2text'),
          callout: '02',
        },
        {
          title: this.$vuetify.lang.t('$vuetify.services.item3'),
          subtitle: this.$vuetify.lang.t('$vuetify.services.item3slogan'),
          text: this.$vuetify.lang.t('$vuetify.services.item3text'),
          callout: '03',
        },
        {
          title: this.$vuetify.lang.t('$vuetify.services.item4'),
          subtitle: this.$vuetify.lang.t('$vuetify.services.item4slogan'),
          text: this.$vuetify.lang.t('$vuetify.services.item4text'),
          callout: '04',
        },
        {
          title: this.$vuetify.lang.t('$vuetify.services.item5'),
          subtitle: this.$vuetify.lang.t('$vuetify.services.item5slogan'),
          text: this.$vuetify.lang.t('$vuetify.services.item5text'),
          callout: '05',
        },
        {
          title: this.$vuetify.lang.t('$vuetify.services.item6'),
          subtitle: this.$vuetify.lang.t('$vuetify.services.item6slogan'),
          text: this.$vuetify.lang.t('$vuetify.services.item6text'),
          callout: '06',
        },
        {
          title: this.$vuetify.lang.t('$vuetify.services.item7'),
          subtitle: this.$vuetify.lang.t('$vuetify.services.item7slogan'),
          text: this.$vuetify.lang.t('$vuetify.services.item7text'),
          callout: '07',
        },
        {
          title: this.$vuetify.lang.t('$vuetify.services.item8'),
          subtitle: this.$vuetify.lang.t('$vuetify.services.item8slogan'),
          text: this.$vuetify.lang.t('$vuetify.services.item8text'),
          callout: '08',
        },
      ]
    },
  }
</script>
