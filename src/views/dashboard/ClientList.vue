<template>
  <div>
    <v-data-table
      :loading="isLoading"
      :headers="headers"
      :items="clientData"
      item-key="id"
      class="elevation-1"
    >
      <template v-slot:item.name="{ item }">
        <div class="p-3">
          <h3>{{ item.name }}</h3>
          {{ item.contact_email }}
        </div>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn class="mr-2" color="warning" fab x-small disabled>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn class="mr-2" color="error" fab x-small disabled>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn color="error" fab x-small disabled>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-fab-transition>
      <v-btn
        id="btn-add"
        class="mr-2 mb-5"
        color="primary"
        fab
        dark
        fixed
        right
        bottom
        :to="{ name: 'client-add' }"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      isLoading: false,
      clientData: [],
      headers: [
        { text: "Name", value: "name", align: "start" },
        { text: "Contact Person", value: "contact_name", align: "start" },
        { text: "Contact Number", value: "contact_number", align: "start" },
        { text: "Mobile Number", value: "contact_mobile", align: "start" },
        { text: "Action", value: "action", align: "end", sortable: false },
      ],
      // -- FAB -- \\
      direction: "top",
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: "slide-y-reverse-transition",
    };
  },
  methods: {
    async getData() {
      this.isLoading = true
      try {
        const resp = await axios.get("/api/client-list");
        this.clientData = resp.data.data;
      } catch (e) {
        console.log(e);
        alert("Something Worng.!");
      }finally{
        this.isLoading = false
      }
    },
  },
};
</script>

<style></style>
