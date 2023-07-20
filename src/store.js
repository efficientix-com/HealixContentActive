import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        toggleSideBar:true,
      },
      mutations: {
        setToggleSideBar(state,data){
            state.toggleSideBar=data
        }
      }
    
    });

export default store;