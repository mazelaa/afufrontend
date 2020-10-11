<template>
  <v-img
    :src="require('@/assets/ducks-hero.jpg')"
    class="white--text"
    gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
  >
    <base-section
      id="features"
    >
      <base-section-heading
        color="grey lighten-2"
        class="primary--text"
        :title="$vuetify.lang.t('$vuetify.animals.title')"
      />
      <v-responsive
        class="mx-auto"
        max-width="1350"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="card in cards"
              :key="card.title"
              cols="12"
              sm="4"
              md="4"
            >
              <base-info-card
                align="center"
                dark
                v-bind="card"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
  </v-img>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [],
    }),
    mounted () {
      this.cards = [
        {
          icon: 'mdi-dog-side',
          title: this.$vuetify.lang.t('$vuetify.animals.item1'),
          text: this.$vuetify.lang.t('$vuetify.animals.item1text'),
        },
        {
          icon: 'mdi-bird',
          title: this.$vuetify.lang.t('$vuetify.animals.item2'),
          text: this.$vuetify.lang.t('$vuetify.animals.item2text'),
        },
        {
          icon: 'mdi-pig-variant',
          title: this.$vuetify.lang.t('$vuetify.animals.item3'),
          text: this.$vuetify.lang.t('$vuetify.animals.item3text'),
        },
      ]
    },
  }
</script>
