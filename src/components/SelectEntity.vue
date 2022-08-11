<template>
  <div>
    <v-autocomplete
      class="autocomplete mr-4"
      v-model="selectedEntity"
      :items="entityList"
      label="Select Company"
      item-text="entity"
      item-value="id"
      @change="onSelectCompany($event)"
    >
      <template v-slot:item="data">
        <div class="d-flex flex-wrap">
          <div class="mr-4">{{ data.item.entity }}</div>
          <div class="mr-4 primary--text">{{ data.item.analytics }}</div>
          <div class="mr-4 warning--text">{{ data.item.audit }}</div>
        </div>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entityList: [
        {
          id: 1,
          entity: "Abacus",
          analytics: "Analytics",
          audit: "Audit",
          lastRefresh: "14 hours ago",
          financialYear: "21 feb 2020",
          avatar: "PJ",
        },
        {
          id: 2,
          entity: "Peter",
          analytics: "Analytics",
          audit: "Audit",
          lastRefresh: "13 hours ago",
          financialYear: "28 feb 2021",
          avatar: "DR",
        },
      ],
      selectedEntity: "",
    };
  },
  created() {
    if (this.$route.query.id) {
      this.selectedEntity = parseInt(this.$route.query.id);
    }
  },
  methods: {
    onSelectCompany(companyId) {
      this.$router.push({
        path: "/dashboard/entity",
        query: { id: companyId },
      });
    },
  },
};
</script>

<style></style>
