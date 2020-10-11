
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Home' },

    extends: View,

    mixins: [
      LoadSections([
        'hero',
        'theme-features',
        'features',
        'about-our-product',
        'contact-us',
        /* 'affiliates', */
        'roadmap',
        /* verzeichnis an organisationen und spender adressen */
        'social-media',
        'team',
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>

<style>
theme--light.v-tabs > .v-tabs-bar .v-tab--disabled, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon {
    color: rgba(232, 230, 227, 0.54);
}
.theme--light.v-application .text--primary, .v-list-item--active .v-list-item__title {
    color: #fff !important;
}
.v-slide-group__content {
  background-color:#7C6951 !important;
  border-color: #7C6951 !important;
}
theme--light.v-tabs a {
  background-color: transparent;
}
.v-application .white {
    background-color: #7C6951 !important;/* rgb(24, 26, 27) !important;*/
    border-color: #7C6951 !important;
}
.theme--light.v-application {
  background-color: rgb(24, 26, 27);
  color: rgba(232, 230, 227, 0.87);
}
.v-application .grey--text.text--darken-1 {
  color: rgb(158, 150, 137) !important;
  caret-color: rgb(158, 150, 137) !important;
}
.base-avatar--outlined {
    background-color: rgb(24, 26, 27);
}
</style>
