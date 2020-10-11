<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .7), rgba(5, 11, 31, .7)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading :title="$vuetify.lang.t('$vuetify.hero.title')" />

          <base-body :slogan="true">
            {{ $vuetify.lang.t('$vuetify.hero.slogan') }}
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <a href="https://t.me/AFUProject">
              <base-btn
                class="nodecoration"
              >
                <span class="nodecoration">{{ $vuetify.lang.t('$vuetify.hero.button1') }}</span>
              </base-btn>
            </a>

            <span class="font-weight-bold ml-6 mr-4 my-4">{{ $vuetify.lang.t('$vuetify.hero.textbetween') }}</span>

            <a href="https://bilaxy.com/trade/AFU_USDT">
            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
            >
              {{ $vuetify.lang.t('$vuetify.hero.button2') }}
            </base-btn>
            </a>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '70vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>

<style scoped>
.nodecoration {
  text-decoration: none !important;
}
</style>
