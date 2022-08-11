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
          <h1>Cashflow</h1>
          <v-card-text>
            <v-form
              ref="form"
              class="login-form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                label="Email"
                type="email"
                v-model="email"
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
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn block :disabled="!valid" color="primary" @click="login"
              >Login</v-btn
            >
          </v-card-actions>
          <v-card-text>
            <router-link to="/forgot-password">Forgot Password</router-link>
          </v-card-text>
          <v-card-text v-if="loginError" style="color:red">
            {{ loginError }}
          </v-card-text>
          <v-card-text>
            Don't have an account?<router-link to="/signup"
              >Create one here</router-link
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
      loginError:""
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
    login() {
      let self = this;
      if (this.$refs.form.validate()) {
        const userInfo = {
          email: this.email,
          password: this.password,
        };
        console.log(userInfo); 
        axios.post('/api/login',{ post_data: userInfo }).then(function (response) {
          if (response.data.ok) {
            this.$store.dispatch('setLoginSession', response.data.user_data);
            this.$router.push("/dashboard/companies-list");
          }
          else{
            this.loginError = response.data.error;
          }
        }.bind(this)).catch(error => {
            console.log('ERROR OCCURED LOGIN');
        });
      }
    },
  },
};
</script>
<style></style>
