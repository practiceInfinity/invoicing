<template>
  <v-card class="mx-8">
    <div class="px-4 py-4">
      <h2>Hi {{ userInfo.firstName }}</h2>
      <div>Welcome to the dashboard</div>
      <div class="d-flex flex-wrap align-center justify-end">
        <v-btn color="primary" to="/dashboard/entity">Add Company</v-btn>
      </div>
      <v-text-field
        class="searchField"
        label="Search"
        v-model="search"
        placeholder=""
      ></v-text-field>
      <v-data-table
        sort-by="entity"
        class="elevation-5"
        :items-per-page="5"
        :search="search"
        :loading="loading"
        loading-text="Loading... Please wait"
      >
        <template slot="header">
          <thead>
            <tr>
              <th colspan="4">Company</th>
              <th>Last Refresh</th>
              <th>Financial Year</th>
              <th>Configure</th>
            </tr>
          </thead>
        </template>
        <template slot="body">
          <tbody v-for="(i, index) in entityList" :key="index">
            <tr>
              <td>
                {{ i.entity }}
              </td>
              <td>
                <v-chip text-color="primary" label outlined
                  >{{ i.analytics }}
                </v-chip>
              </td>
              <td>
                <v-chip text-color="warning" label outlined
                  >{{ i.audit }}
                </v-chip>
              </td>
              <td>
                <v-avatar color="primary" size="30">
                  <span class="white--text">{{ i.avatar }}</span>
                </v-avatar>
              </td>
              <td>{{ i.lastRefresh }}</td>
              <td>{{ i.financialYear }}</td>
              <td>
                <div class="d-flex">
                  <div>
                    <v-btn icon @click="onSelectCompany(i.id)"
                      ><v-icon>mdi-cog</v-icon></v-btn
                    >
                  </div>
                  <div></div>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </div>
  </v-card>
</template>

<script>
import SelectEntity from "@/components/SelectEntity.vue";
export default {
  components: { SelectEntity },
  data() {
    return {
      userInfo: {
        firstName: "Paul",
      },
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
      search: "",
      loading: false,
    };
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

<style scoped>
.searchField {
  width: 100%;
  max-width: 250px;
}
</style>
