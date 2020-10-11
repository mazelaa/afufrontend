<template>
  <base-section
    :id="$vuetify.lang.t('$vuetify.header.Team')"
    space="36"
  >
    <v-container>
      <base-section-heading title="AFU Core Team" />

      <div class="row">
        <div
          v-for="member in team"
          :key="member.name"
          class="column"
        >
          <div class="card">
            <div class="container">
              <div class="grey--text">
                {{ member.title }}
              </div>
              <h2 class="primary--text">
                {{ member.name }}
              </h2>
              <base-img
                :src="require(`@/assets/${member.img}.jpg`)"
                :alt="member.img"
                style="width:100%;"
              />
              <p>{{ member.text }}</p>
              <p>
                <a :href="'mailto:'+member.email"><base-icon style="font-size:30px;color:#fff;">mdi-email</base-icon></a> <a
                  v-if="member.twitter"
                  :href="'https://twitter.com/'+member.twitter"
                ><base-icon style="font-size:30px;color:#fff;">mdi-twitter</base-icon></a><a
                  v-if="member.telegram"
                  :href="'https://t.me/'+member.telegram"
                ><base-icon style="font-size:30px;color:#fff;">mdi-telegram</base-icon></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'Team',
    data: () => ({
      team: [],
    }),
    mounted () {
      this.team = [
        {
          img: 'angela',
          name: 'Angela König',
          title: this.$vuetify.lang.t('$vuetify.team.item1'),
          text: this.$vuetify.lang.t('$vuetify.team.item1text'),
          email: 'angela@afuproject.com',
          telegram: 'TheCryptoCandy',
          twitter: 'TheCryptoCandy',
        },
        {
          img: 'sebastian',
          name: 'Sebastian Wolf',
          title: this.$vuetify.lang.t('$vuetify.team.item2'),
          text: this.$vuetify.lang.t('$vuetify.team.item2text'),
          email: 'sebastian@afuproject.com',
          telegram: 'sewo7',
          twitter: '',
        },
        {
          img: 'marco',
          name: 'Marco Bonetti',
          title: this.$vuetify.lang.t('$vuetify.team.item3'),
          text: this.$vuetify.lang.t('$vuetify.team.item3text'),
          email: 'marco@afuproject.com',
          telegram: 'maZeLaa',
          twitter: 'maZeLaa_',
        },
      ]
    },
  }
</script>

<style scoped>
.v-application a {
  color:transparent;
}
.v-application p {
  margin-top: 16px;
}
/* Three columns side by side */
.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

/* Display the columns below each other instead of side by side on small screens */
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

/* Some left and right padding inside the container */
.container {
  padding: 0 16px;
}

/* Clear floats */
.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
</style>
