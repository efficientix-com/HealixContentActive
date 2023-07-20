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
          <p class="breadcrumb">Financial > Cash Net Income</p>
          <b-row>
              <b-col md="12" class="d-flex justify-content-center">
                  <h2 class="titleFinancial">Austin Infectious Disease Cons - C004</h2>
              </b-col>
              <b-col md="12" class="d-flex justify-content-center">
                  <h4 class="subtitleFinancial">Calculation of Management Fees for the month ending June 30th,2021</h4>
              </b-col>
          </b-row>
          <CashNetIncome/>
        </b-card>
      </div>
    </div>
  </template>
  <script>
  import SideNavBarVue from "../../components/template/SideNavBar.vue";
  import TopNavBarVue from "../../components/template/TopNavBar.vue";
  import CashNetIncome from "../../components/Financials/CashNetIncome.vue";
  export default {
    name: "CashNetIncomeView",
    components: {
      TopNavBarVue,
      SideNavBarVue,
      CashNetIncome
    },
  };
  </script>