<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="8"
        lg="6"
        xl="6"
        offset-md="2"
        offset-lg="3"
        offset-xl="3"
      >
        <v-card class="mt-4 px-4 text-center">
          <h1>Start Your Free Trail</h1>
          <p>14 days trail, no credit card required</p>
          <v-card-text>
            <v-form
              ref="form"
              class="login-form"
              v-model="valid"
              lazy-validation
            >
              <div class="d-flex flex-wrap">
                <v-text-field
                  label="First Name"
                  v-model="firstName"
                  :rules="[(v) => !!v || 'First name is required']"
                  required
                ></v-text-field
                ><v-text-field
                  class="ml-2"
                  label="Last Name"
                  v-model="lastName"
                  :rules="[(v) => !!v || 'Last name is required']"
                  required
                ></v-text-field>
              </div>

              <v-text-field
                label="Work Email"
                type="email"
                v-model="workEmail"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field
                loading="custom"
                label="Password"
                v-model="password"
                :rules="passwordRules"
                required
                counter
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              >
                <template v-slot:progress>
                  <v-progress-linear
                    v-if="custom"
                    :value="progress"
                    :color="color"
                    absolute
                    height="4"
                  ></v-progress-linear>
                </template>
              </v-text-field>
              <v-text-field
                label="Company Name"
                v-model="companyName"
                :rules="[(v) => !!v || 'Company name is required']"
                required
              ></v-text-field>
              <v-text-field
                label="Phone"
                v-model="phone"
                :rules="[(v) => !!v || 'Phone Number is required']"
                required
              ></v-text-field>
              <v-text-field
                label="Referral Code"
                v-model="referralCode"
              ></v-text-field>
              <v-checkbox
                v-model="acceptedTerms"
                :rules="[(v) => !!v || 'Acceptance  is required']"
              >
                <template v-slot:label>
                  <div>
                    I agree to the
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="https://vuetifyjs.com"
                          @click.stop
                          v-on="on"
                        >
                          Terms of Service
                        </a>
                        and
                        <a
                          target="_blank"
                          href="https://vuetifyjs.com"
                          @click.stop
                          v-on="on"
                        >
                          Privacy Policy
                        </a>
                      </template>
                      Opens in new window
                    </v-tooltip>
                  </div>
                </template></v-checkbox
              >
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block :disabled="!valid" color="primary" @click="signup"
              >Sign Up</v-btn
            >
          </v-card-actions>
          <v-card-text v-if="signUpError" style="color:red">
            {{ signUpError }}
          </v-card-text>
          <v-card-text>
            Already have an account?<router-link to="/"
              >Log In here</router-link
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      custom: true,
      showPassword: false,
      valid: true,
      loading: false,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length > 7) || "Min 8 characters",
      ],
      firstName: "",
      lastName: "",
      workEmail: "",
      companyName: "",
      phone: "",
      referralCode: "",
      acceptedTerms: false,
      signUpError:""
    };
  },
  computed: {
    progress() {
      return Math.min(100, this.password.length * 12.5);
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    },
  },
  methods: {
    signup() {
      let self = this;
      if (this.$refs.form.validate()) {
        const userInfo = {
          firstName: this.firstName,
          lastName: this.lastName,
          workEmail: this.workEmail,
          companyName: this.companyName,
          password: this.password,
          phone: this.phone,
          referralCode: this.referralCode,
        };
        console.log(userInfo);
        axios.post('/api/register',{ post_data: userInfo }).then(function (response) {
          if (response.data.ok) {
            this.$router.push('/');
          }
          else{
            this.signUpError = response.data.error;
            setTimeout(() => {
              this.signUpError = "";
            }, 5000);
          }
        }.bind(this)).catch(error => {
            console.log('ERROR OCCURED SIGNUP')
        });
      }
    },
  },
};
</script>
<style></style>
