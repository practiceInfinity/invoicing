<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card class="px-5" elevation="2">
        <!-- BASIC -->
        <v-row>
          <v-col cols="3">
            <v-card-title>Basics</v-card-title>
            <v-card-subtitle>Let's get you started...</v-card-subtitle>
          </v-col>
          <v-col cols="1">
            <v-divider class="mx-4" vertical></v-divider>
          </v-col>
          <v-col cols="8" class="pt-5">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="client.name"
                  :rules="[rules.required]"
                  label="Name"
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="client.vatNumber"
                  label="Vat Number (optional)"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="client.currency"
                  :rules="[rules.required]"
                  label="Default Currency"
                  outlined
                  dense
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="client.creditLimit"
                  label="Credit Limit (optional)"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="px-5" elevation="2" style="margin-top: 3%">
        <!-- Address -->
        <v-row>
          <v-col cols="3">
            <v-card-title>Address</v-card-title>
            <v-card-subtitle>Where is this client based?</v-card-subtitle>
          </v-col>
          <v-col cols="1">
            <v-divider class="mx-4" vertical></v-divider>
          </v-col>
          <v-col cols="8" class="pt-5">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="client.address1"
                  :rules="[rules.required]"
                  label="Address Line 1"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="client.address2"
                  :rules="[rules.required]"
                  label="Address Line 2"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="client.address3"
                  label="Address Line 3 (optional)"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="client.address4"
                  label="Address Line 4 (optional)"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="client.postcode"
                  :rules="[rules.required]"
                  label="Postcode"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="6"> </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="px-5" elevation="2" style="margin-top: 3%">
        <!-- Contact -->
        <v-row>
          <v-col cols="3">
            <v-card-title>Contact Details</v-card-title>
            <v-card-subtitle>How do you contact this client?</v-card-subtitle>
          </v-col>
          <v-col cols="1">
            <v-divider class="mx-4" vertical></v-divider>
          </v-col>
          <v-col cols="8" class="pt-5">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="client.contactName"
                  label="Contact Name (optional)"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="client.contactEmail"
                  label="Email Address (optional)"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="client.contactNumber"
                  label="Telephone (optional)"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="client.contactMobile"
                  label="Mobile (optional)"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="px-5" elevation="2" style="margin-top: 3%">
        <!-- Payment -->
        <v-row>
          <v-col cols="3">
            <v-card-title>Payment Details</v-card-title>
            <v-card-subtitle
              >How will the client be paying you?</v-card-subtitle
            >
          </v-col>
          <v-col cols="1">
            <v-divider class="mx-4" vertical></v-divider>
          </v-col>
          <v-col cols="8" class="pt-5">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="client.paymentDue"
                  label="Payments Due In..."
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="client.paymentDueUnitTime"
                  label="Units of Time"
                  outlined
                  dense
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="px-5" elevation="2" style="margin-top: 3%">
        <!-- Opening -->
        <v-row>
          <v-col cols="3">
            <v-card-title>Opening Balance</v-card-title>
            <v-card-subtitle
              >How will the client be paying you?</v-card-subtitle
            >
          </v-col>
          <v-col cols="1">
            <v-divider class="mx-4" vertical></v-divider>
          </v-col>
          <v-col cols="8" class="pt-5">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="client.openingBalance"
                  label="Opening Balance (optional)"
                  prefix="R"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-menu
                  v-model="menuDateBalance"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="client.openingBalanceAt"
                      label="Opening Balance At (optional)"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                      dense
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="client.openingBalanceAt"
                    @input="menuDateBalance = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

      <v-row class="mt-5 mb-5">
        <v-col cols="12" class="text-right">
          <v-btn outlined class="mr-2" :to="{ name: 'client' }">Cancel</v-btn>
          <v-btn color="primary" :disabled="!valid" @click="saveData">Save</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    valid: false,
    menuDateBalance: false,
    rules: {
      required: (value) => !!value || "Required.",
      counter: (value) => value.length <= 20 || "Max 20 characters",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
    client: {
      name: "",
      vatNumber: "",
      currency: "ZAR - South Africa Rand",
      creditLimit: "",
      address1: "",
      address2: "",
      address3: "",
      address4: "",
      postcode: "",
      contactName: "",
      contactEmail: "",
      contactNumber: "",
      contactMobile: "",
      paymentDue: "28",
      paymentDueUnitTime: "days",
      openingBalance: "0.00",
      openingBalanceAt: '',
    },
  }),

  methods: {
    async saveData() {
        await this.$refs.form.validate()
        if(!this.valid) return
        try{
            const resp = await axios.post('/api/client-add', this.client)
            // console.log(resp)
            this.$router.push({name: 'client'})
        }catch(e) {
            console.log(e)
            alert('Something Wrong..!')
        }
    },
  },
};
</script>

<style></style>
