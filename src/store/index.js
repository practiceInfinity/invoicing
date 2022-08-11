import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    session:{
      user_id:'',
      user_email:'',
      user_name:'',
      first_name:'',
      last_name:'',
      is_logged_in:false,
      company_name:'',
      phone:'',
      referral_code:''
    }
  },
  getters: {
  },
  mutations: {
    setLoginSession(state, data) {
      state.session.is_logged_in=true;
      state.session.user_id = data.userId;
      state.session.user_email = data.userEmail;
      state.session.first_name = data.firstName;
      state.session.last_name = data.lastName;
      state.session.company_name = data.companyName;
      state.session.phone = data.phone;
      state.session.referral_code = data.referralCode;
    },
    destroyLoginSession(state){
      state.session.is_logged_in=false;
      state.session.user_id = '';
      state.session.user_email = '';
      state.session.first_name = '';
      state.session.last_name = '';
      state.session.company_name = '';
      state.session.phone = '';
      state.session.referral_code = '';
    }
  },
  actions: {
    setLoginSession(context, data) {
      context.commit('setLoginSession', data)
    },
    destroyLoginSession(context){
      context.commit('destroyLoginSession')
    }
  },
  modules: {
  }
})
