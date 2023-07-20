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
          <p class="breadcrumb">Financial > Accrual Net Income</p>
          <b-row>
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
  };
  </script>