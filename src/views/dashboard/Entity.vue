<template>
  <div>
    <!-- <v-autocomplete
      v-if="updateMode"
      class="autocomplete mt-5 mr-3"
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
    </v-autocomplete> -->
    <div v-if="showBasicForm">
      <h2 class="text-center mt-5">New Company Setup</h2>
      <p class="text-center mb-5">
        Let's create a new company and upload your data
      </p>
      <v-form
        class="px-5"
        ref="basicInfo"
        v-model="basicInfoFormValid"
        lazy-validation
      >
        <v-row>
          <v-col cols="12" md="6" lg="6" xl="6">
            <v-text-field
              label="Company Name"
              v-model="companyName"
              :rules="[(v) => !!v || 'Company name is required']"
              required
            ></v-text-field>
            <v-select
              v-model="baseCurrency"
              :items="baseCurrencyList"
              item-text="name"
              item-value="name"
              label="Select Base Currency"
              :rules="[(v) => !!v || 'Base currency is required']"
              required
            ></v-select>
            <v-select
              v-model="accountingBasis"
              :items="accountingBasisList"
              item-text="name"
              item-value="name"
              label="Select Accounting Basis"
              :rules="[(v) => !!v || 'Accounting Basis is required']"
              required
            ></v-select>
          </v-col>
          <v-col cols="12" md="6" lg="6" xl="6">
            <v-select
              v-model="country"
              :items="countryList"
              item-text="name"
              item-value="name"
              label="Select Country"
              :rules="[(v) => !!v || 'Country is required']"
              required
            ></v-select>
            <v-select
              v-model="financialYearEnd"
              :items="monthList"
              item-text="name"
              item-value="name"
              label="Select Financial Year End"
              :rules="[(v) => !!v || 'Financial Year End is required']"
              required
            ></v-select>
            <v-text-field
              label="Industry (Optional)"
              v-model="industry"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
            lg="4"
            xl="4"
            offset-md="4"
            offset-lg="4"
            offset-xl="4"
          >
            <v-btn
              class="primary mb-5"
              :disabled="!basicInfoFormValid"
              block
              @click="saveBasicInfo"
              >Save and continue</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div v-if="showUploadForm">
      <h2 class="text-center mt-5">Upload Your Data</h2>
      <p class="text-center mb-5">
        Generate an Excel template, populate with your trial balance and upload
      
      </p>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <v-card class="ml-2">
            <v-tabs v-model="tab">
              <v-tab> Excel </v-tab>
              <!-- <v-tab> Accounting Provider </v-tab> -->
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card>
                  <v-card-text>
                    <v-form
                      class=""
                      ref="excelInfo"
                      v-model="excelInfo"
                      lazy-validation
                    >
                      <v-select
                        v-model="excelFormat"
                        :items="excelFormatList"
                        item-text="name"
                        item-value="name"
                        label="Select a format"
                        :rules="[(v) => !!v || 'Format is required']"
                        required
                      ></v-select>
                      <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                          <v-select
                            v-model="excelInterval"
                            :items="excelIntervalList"
                            item-text="name"
                            item-value="name"
                            label="Select an Interval"
                            :rules="[(v) => !!v || 'Interval is required']"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                          <v-select
                            v-model="excelDataType"
                            :items="excelDataTypeList"
                            item-text="name"
                            item-value="name"
                            label="Select a data  type"
                            :rules="[(v) => !!v || 'Data type is required']"
                            required
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                          <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="date"
                                label="Start Date"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                :rules="[
                                  (v) => !!v || 'Start Date is required',
                                ]"
                                required
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="date"
                              type="month"
                              no-title
                              scrollable
                            >
                              <v-spacer></v-spacer>
                              <v-btn text color="primary" @click="menu = false">
                                Cancel
                              </v-btn>
                              <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(date)"
                              >
                                OK
                              </v-btn>
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                          <v-menu
                            ref="menu2"
                            v-model="menu2"
                            :close-on-content-click="false"
                            :return-value.sync="date2"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="date2"
                                label="End Date"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                :rules="[(v) => !!v || 'End Date is required']"
                                required
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="date2"
                              type="month"
                              no-title
                              scrollable
                            >
                              <v-spacer></v-spacer>
                              <v-btn
                                text
                                color="primary"
                                @click="menu2 = false"
                              >
                                Cancel
                              </v-btn>
                              <v-btn
                                text
                                color="primary"
                                @click="$refs.menu2.save(date2)"
                              >
                                OK
                              </v-btn>
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="12"
                          md="4"
                          lg="4"
                          xl="4"
                          offset-md="3"
                          offset-lg="3"
                          offset-xl="3"
                        >
                          <v-btn
                            class="primary"
                            :disabled="!excelInfo"
                            @click="generateTemplate"
                            block
                            >Generate Template</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- <v-tab-item>
                <v-card flat>
                  <v-card-text>Accounting</v-card-text>
                </v-card>
              </v-tab-item> -->
            </v-tabs-items>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <v-card class="mr-2">
            <v-tabs v-model="tab2">
              <v-tab> Upload Data </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab2">
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-form
                      ref="uploadInfo"
                      v-model="uploadInfo"
                      lazy-validation
                    >
                      <v-file-input
                        accept=".excel,.csv"
                        label="Select Your Excel File Only"
                        :rules="[(v) => !!v || 'Excel File is required']"
                        required
                        v-model="file"
                      ></v-file-input>
                      <v-row>
                        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                          <v-checkbox
                            v-model="isMovementTrue"
                            label="Movement"
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                          <v-checkbox
                            v-model="isCommutativeYtd"
                            label="Commutative YTD"
                          ></v-checkbox>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="12"
                          md="4"
                          lg="4"
                          xl="4"
                          offset-md="3"
                          offset-lg="3"
                          offset-xl="3"
                        >
                          <v-btn
                            class="primary"
                            :disabled="!uploadInfo"
                            @click="uploadData"
                            block
                            >upload Data</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </div>
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
      countryList: [
        { id: 1, name: "South Africa" },
        
      ],
      baseCurrencyList: [
        { id: 1, name: "Zar" },
        
      ],
      monthList: [
        { id: 1, name: "January" },
        { id: 2, name: "February" },
        { id: 3, name: "March" },
        { id: 4, name: "April" },
      ],
      accountingBasisList: [
        { id: 1, name: "Accrual" },
        { id: 2, name: "Cash" },
      ],
      excelFormatList: [
        { id: 1, name: "Chart of Accounts" },
        { id: 2, name: "Trial Balance" },
      ],
      excelIntervalList: [
        { id: 1, name: "Monthly" },
        { id: 2, name: "Annual" },
      ],
      excelDataTypeList: [
        { id: 1, name: "Single Column" },
        { id: 2, name: "Multiple Column" },
      ],
      companyName: "",
      country: "",
      baseCurrency: "",
      financialYearEnd: "",
      accountingBasis: "",
      industry: "",
      selectedEntity: "",
      updateMode: false,
      showBasicForm: true,
      showUploadForm: false,
      basicInfoFormValid: true,
      file: "",
      tab: "",
      tab2: "",
      excelInfo: true,
      date: "",
      date2: "",
      menu: false,
      menu2: false,
      excelFormat: "",
      excelInterval: "",
      excelDataType: "",
      uploadInfo: true,
      isMovementTrue: false,
      isCommutativeYtd: true,
    };
  },
  created() {
    if (this.$route.query.id) {
      this.updateMode = true;
      this.showBasicForm = false;
      this.showUploadForm = true;
      this.selectedEntity = parseInt(this.$route.query.id);
    }
  },
  methods: {
    onSelectCompany(companyId) {
      this.$router.replace({
        path: "/dashboard/entity",
        query: { id: companyId },
      });
    },
    saveBasicInfo() {
      if (this.$refs.basicInfo.validate()) {
        const basicInfo = {
          companyName: this.companyName,
          country: this.country,
          baseCurrency: this.baseCurrency,
          financialYearEnd: this.financialYearEnd,
          accountingBasis: this.accountingBasis,
          industry: this.industry,
        };
        console.log(basicInfo);
        this.showBasicForm = false;
        this.showUploadForm = true;
      }
    },
    generateTemplate() {
      if (this.$refs.excelInfo.validate()) {
        const generateExcelPayload = {
          excelFormat: this.excelFormat,
          excelInterval: this.excelInterval,
          excelDataType: this.excelDataType,
          startDate: this.date,
          EndDate: this.date2,
        };
        console.log(generateExcelPayload);
      }
    },
    uploadData() {
      if (this.$refs.uploadInfo.validate()) {
        const uploadPayload = {
          file: this.file,
          isMovementTrue: this.isMovementTrue,
          isCommutativeYtd: this.isCommutativeYtd,
        };
        console.log(uploadPayload);
      }
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
</style>
