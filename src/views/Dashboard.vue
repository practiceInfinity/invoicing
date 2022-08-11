<template>
  <!-- <div id="custome-navbar"> -->
  <v-app>
    <v-app-bar app>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span>
          <v-btn link to="/dashboard/companies-list" depressed>Cashflow</v-btn>
        </span>
      </v-toolbar-title>
      <v-text-field
        full-width
        clearable
        dense
        flat
        solo-inverted
        hide-details
        append-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn @click="logOut" icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-tabs background-color="primary" class="tabs" center-active dark>
      <v-tab
        v-for="item in items"
        :key="item.text"
        :to="`/${item.link}`"
        link
        >{{ item.text }}</v-tab
      >
    </v-tabs>

    <select-entity class="autocomplete mr-8 my-4"></select-entity>
    <v-card class="mx-8"> <router-view></router-view></v-card>

    <v-footer app>
      <h5>@CashFlow</h5>
    </v-footer>
  </v-app>
  <!-- </div> -->
</template>

<script>
import axios from 'axios';

import SelectEntity from "@/components/SelectEntity.vue";
// import { mapState } from "vuex";
export default {
  components: { SelectEntity },
  props: {
    source: String,
  },
  data() {
    return {
      isAuthenticate: false,
      dialog: false,
      drawer: null,
      toogle: true,
      parmanent: false,
      mini: false,
      items: [
        {
          icon: "mdi-account-group",
          text: "Overview",
          link: "dashboard/companies-list",
          model: false,
        },
        {
          icon: "mdi-account",
          text: "Company",
          link: "dashboard/entity",
          model: false,
        },
      ],
    };
  },
  methods: {
    logOut() {
      // localStorage.removeItem("user");
      axios.get('/api/logout').then(function (response) {
          if (response.data.ok)
          {
            this.$store.dispatch('destroyLoginSession');
            this.$router.push("/");
          }
        }.bind(this));
    },
    handelSidebar() {
      if (
        this.$vuetify.breakpoint.name === "md" ||
        this.$vuetify.breakpoint.name === "lg" ||
        this.$vuetify.breakpoint.name === "xl"
      ) {
        if (this.toogle) {
          this.mini = true;
          this.toogle = false;
        } else if (!this.toogle) {
          this.mini = false;
          this.toogle = true;
        }
      } else if (
        this.$vuetify.breakpoint.name === "xs" ||
        this.$vuetify.breakpoint.name === "sm"
      ) {
        if (this.toogle) {
          this.parmanent = true;
          // this.drawer = true;
          this.toogle = false;
        } else if (!this.toogle) {
          this.parmanent = false;
          this.toogle = true;
        }
      }
    },
    fetchData() {
      console.log("change");
    },
  },
};
</script>
<style scoped>
.autocomplete {
  width: 100%;
  max-width: 250px;
  margin-left: auto;
}
.tabs {
  flex: 0 !important;
}
</style>
