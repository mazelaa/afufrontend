<template>
  <div :id="$vuetify.lang.t('$vuetify.header.Home')">
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="65"
    >
      <router-link
        :to="{name: 'Home'}"
        @click.native="anchorHashCheck"
      >
        <base-img
          :src="require('@/assets/logo-1.png')"
          class="mr-3"
          contain
          max-width="150"
          width="100%"
        />
      </router-link>

      <v-spacer />

      <div>
        <v-tabs
          v-model="activename"
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{name: name}"
            :exact="!actualhash || actualhash === '#Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',

    components: {
      HomeDrawer: () => import('./Drawer'),
    },

    data: () => ({
      activename: '',
      drawer: null,
      actualhash: '',
      items: [],
    }),
    mounted () {
      this.activename = this.$route.name === 'Home' ? 1 : 2
      this.actualhash = location.hash
      this.anchorHashCheck()
      this.items = [
        this.$vuetify.lang.t('$vuetify.header.Home'),
        this.$vuetify.lang.t('$vuetify.header.FAQ'),
        this.$vuetify.lang.t('$vuetify.header.Whitepaper'),
      ]
    },
    methods: {
      anchorHashCheck () {
        if (window.location.hash === this.$route.hash) {
          const el = document.getElementById(this.$route.hash.slice(1))
          if (el) {
            window.scrollTo({
              top: el.offsetTop,
              behavior: 'smooth',
            })
          }
        }
      },
    },
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
