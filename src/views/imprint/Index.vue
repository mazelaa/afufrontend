<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Imprint',

    metaInfo: { title: 'Imprint' },

    extends: View,

    mixins: [
      LoadSections([
        'keep-in-touch',
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'Imprint',
      },
    },
  }
</script>

<style>
.v-icon.v-icon {
  color:#fff;
}
.theme--light .v-application {
  background:#212121 !important
}
.theme--light.v-data-table {
    background-color: #212121 !important;
    color: #fff !important;
}
.theme--light.v-data-table tr:hover {
    background-color: #7C6951 !important;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
    color: #7C6951;
}
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
