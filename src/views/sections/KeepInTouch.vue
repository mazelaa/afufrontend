<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="8"
        >
          <base-business-info :title="$vuetify.lang.t('$vuetify.footer.section3')" />
        </v-col>

        <v-col
          cols="12"
          md="4"
        />
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionKeepInTouch',
  }
</script>
