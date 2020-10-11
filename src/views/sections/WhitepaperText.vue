<template>
  <base-section
    id="whitepaper-text"
  >
    <v-container>
      <span v-html="$vuetify.lang.t('$vuetify.whitepaper.disclaimer')" />
    </v-container>

    <br><br>
    <v-container>
      <base-section-heading
        title="Managing Summary"
      />
      <span v-html="$vuetify.lang.t('$vuetify.whitepaper.summary')" />
    </v-container>
    <br><br>
    <v-container>
      <base-section-heading
        :title="$vuetify.lang.t('$vuetify.whitepaper.situationTitle')"
      />
      <span v-html="$vuetify.lang.t('$vuetify.whitepaper.situation')" />
    </v-container>
    <br><br>
    <v-container>
      <base-section-heading
        :title="$vuetify.lang.t('$vuetify.whitepaper.approachTitle')"
      />
      <span v-html="$vuetify.lang.t('$vuetify.whitepaper.approach')" />
    </v-container>
    <br><br>
    <v-container>
      <base-section-heading
        title="Token Utilities"
      />
      <span v-html="$vuetify.lang.t('$vuetify.whitepaper.utilities')" />
    </v-container>
    <br><br>
    <v-container>
      <base-section-heading
        title="Tokenonomics"
      />
      <span v-html="$vuetify.lang.t('$vuetify.whitepaper.tokenomics')" />
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="12"
        >
          <v-simple-table>
            <tbody class="body-1">
              <tr
                v-for="([name, one], i) in features"
                :key="i"
              >
                <td v-text="name" />

                <td class="text-center font-weight-bold">
                  <template v-if="typeof one === 'boolean'">
                    <v-icon :color="one ? 'success' : 'error'">
                      mdi-{{ one ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ one }}
                  </template>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'WhitepaperText',

    data: () => ({
      features: [
        ['Total Supply', '100M'],
        ['Max Supply', '100M'],
        ['Circulating Supply', '75M'],
        ['Charity Pool (locked)', '15M'],
        ['Team Pool (locked)', '10M'],
        ['Token burning', true],
        ['Token minting', false],
      ],
    }),
    methods: {
      /* gettronweb(){
        if(window.tronWeb && window.tronWeb.defaultAddress.base58){
          console.log("Yes, catch it:",window.tronWeb.defaultAddress.base58)
        }
        else {
          console.log(window.tronWeb)
        }
      }, */
    },
  }
</script>

<style scoped>
strong {
  color:#7C6951;
}
</style>
