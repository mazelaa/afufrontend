<template>
  <base-section
    :id="$vuetify.lang.t('$vuetify.header.Roadmap')"
    space="36"
  >
    <v-container>
      <base-section-heading :title="$vuetify.lang.t('$vuetify.roadmap.title')" />
      <timeline
        :timeline-items="dataTimeline"
        :message-when-no-items="messageWhenNoItems"
        :unique-timeline="true"
        :show-day-and-month="true"
        color-dots="#7C6951"
        order="asc"
      />
    </v-container>
  </base-section>
</template>

<script>
  import Timeline from 'timeline-vuejs'
  export default {
    name: 'SectionRoadmap',
    components: {
      Timeline,
    },
    data: () => ({
      messageWhenNoItems: '',
      dataTimeline: [],
    }),
    mounted () {
      this.dataTimeline = [
        {
          from: new Date(2020, 8),
          title: this.$vuetify.lang.t('$vuetify.roadmap.item1'),
          description:
            this.$vuetify.lang.t('$vuetify.roadmap.item1text'),
        },
        {
          from: new Date(2020, 9),
          title: this.$vuetify.lang.t('$vuetify.roadmap.item2'),
          description:
            this.$vuetify.lang.t('$vuetify.roadmap.item2'),
        },
        {
          from: new Date(2020, 9),
          title: this.$vuetify.lang.t('$vuetify.roadmap.item3'),
          description:
            this.$vuetify.lang.t('$vuetify.roadmap.item3text'),
        },
        {
          from: new Date(2020, 10),
          title: this.$vuetify.lang.t('$vuetify.roadmap.item4'),
          description:
            this.$vuetify.lang.t('$vuetify.roadmap.item4text'),
        },
        {
          from: new Date(2020, 11),
          title: this.$vuetify.lang.t('$vuetify.roadmap.item5'),
          description:
            this.$vuetify.lang.t('$vuetify.roadmap.item5text'),
        },
        {
          from: new Date(2020, 12),
          title: this.$vuetify.lang.t('$vuetify.roadmap.item6'),
          description:
            this.$vuetify.lang.t('$vuetify.roadmap.item6text'),
        },
        {
          from: new Date(2020, 12),
          title: this.$vuetify.lang.t('$vuetify.roadmap.item7'),
          description:
            this.$vuetify.lang.t('$vuetify.roadmap.item7text'),
        },
      ]
    },
  }
</script>
<style>
.timeline {
  max-width:100% !important;
}
.timeline-item .item {
  border-left: 5px solid #7C6951 !important;
}
.timeline-item .date-item {
  color:#7C6951 !important;
}
.timeline-item .title-item {
  font-weight:900 !important;
}
</style>
