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
                <v-text-field v-if="isValidEmail"
                    loading="custom"
                    label="New Password"
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
            <v-btn v-if="isValidEmail" block :disabled="!valid" color="primary" @click="changePassword"
              >Change Password</v-btn
            >
            <v-btn v-if="!isValidEmail" block :disabled="!valid || successMsg" color="primary" @click="validatEmail"
              >Validate Email</v-btn
            >
          </v-card-actions>
          <v-card-text v-if="validateEmailError" style="color:red">
            {{ validateEmailError }}
          </v-card-text>
          <v-card-text v-if="successMsg" style="color:green">
            Password has been changed. Please login with new password. You will be redirected to Login page in {{ countDown }} seconds.
          </v-card-text>
          <v-card-text>
            <router-link to="/">Go Back to Login</router-link>
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
      password:"",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length > 7) || "Min 8 characters",
      ],
      validateEmailError:"",
      isValidEmail:false,
      successMsg: false,
      countDown: 5
    };
  },
  computed: {
    progress() {
      if(this.password){
        return Math.min(100, this.password.length * 12.5);
      }else{
        return 0;
      }
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    },
  },
  methods: {
    validatEmail() {
      let self = this;
      if (this.$refs.form.validate()) {
        axios.post('/api/validate_email',{ email: this.email }).then(function (response) {
          if (response.data.ok) {
            this.isValidEmail = true;
          }
          else{
            this.validateEmailError = response.data.error;
            setTimeout(() => {
              this.validateEmailError = "";
            }, 5000);
          }
        }.bind(this)).catch(error => {
            console.log('ERROR OCCURED LOGIN');
        });
      }
    },
    changePassword() {
      let self = this;
      if (this.$refs.form.validate()) {
        const userInfo = {
          email: this.email,
          password: this.password,
        };
        axios.post('/api/forgot_password',{ post_data: userInfo }).then(function (response) {
          if (response.data.ok) {
            this.successMsg = true;
            this.countDownTimer();
            setTimeout(() => {
                this.successMsg = false;
                this.$router.push('/');
            }, 5000);
            this.$refs.form.reset();
            this.isValidEmail = false;
          }
        }.bind(this)).catch(error => {
            console.log(error);
            console.log('ERROR OCCURED FORGOT PASSWORD');
            this.email = "";
            this.password = "";
        });
      }
    },
    countDownTimer () {
      if (this.countDown > 0) {
          setTimeout(() => {
              this.countDown -= 1
              this.countDownTimer()
          }, 1000)
      }
    }
  }
};
</script>
<style></style>
