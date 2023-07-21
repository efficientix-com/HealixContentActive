<template>
    <div id="global">
      <div class="topNavBarC">
        <TopNavBarVue />
      </div>
      <div class="sideNavBarC">
        <SideNavBarVue />
      </div>
      <div class="moduleComponent">
        <b-card>
          <div class="d-flex">
        <div>
          <h1 class="blue-text">
            <font-awesome-icon icon="fa-solid fa-money-check-dollar" size="1x" />
            Financial | Accrual Net Income
          </h1>
        </div>
        <div class="ml-auto">
          <b-form-select
            id="select-location"
            class="form-select"
            v-model="selectedLocation"
            :options="optionsLocation"
            filter
          ></b-form-select>
        </div>
      </div>             
      <b-row class="mt-3">
              <b-col md="12" class="d-flex justify-content-center">
                  <h2 class="titleFinancial">Austin Infectious Disease Cons - C004</h2>
              </b-col>
              <b-col md="12" class="d-flex justify-content-center">
                  <h4 class="subtitleFinancial">Accrual Net Income for the month ending June 30th,2021</h4>
              </b-col>
          </b-row>
          <AccrualNetIncomeVue/>
        </b-card>
      </div>
    </div>
  </template>
  <script>
  import AccrualNetIncomeVue from '@/components/Financials/AccrualNetIncome.vue';
  import SideNavBarVue from "../../components/template/SideNavBar.vue";
  import TopNavBarVue from "../../components/template/TopNavBar.vue";
  
  export default {
    name: "AccrualNetIncomeView",
    components: {
      TopNavBarVue,
      SideNavBarVue,
      AccrualNetIncomeVue
    },
    data:function(){
      return{
          selectedLocation:'Austin Infectious Disease Cons - C004',
          optionsLocation:[
              {text:'Austin Infectious Disease Cons - C004',value:'Austin Infectious Disease Cons - C004'},
              {text:'Allergy & Asthma Clinics, GA - C271',value:'Allergy & Asthma Clinics, GA - C271'},
              {text:'ID Specialists, PA - C051A',value:'ID Specialists, PA - C051A'},
              {text:'ID Doctors Medical Group - C149',value:'ID Doctors Medical Group - C149'},
              {text:'Texas Regional A&A Center-FLEX - C218',value:'Texas Regional A&A Center-FLEX - C218'},
          ]
      }
    }
  };
  </script>