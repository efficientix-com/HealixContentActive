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
        <p class="breadcrumb">Financial > Calculation of Equity</p>
        <b-row>
            <b-col md="12" class="d-flex justify-content-center">
                <h2 class="titleFinancial">Infectious Disease Associates - C092</h2>
            </b-col>
            <b-col md="12" class="d-flex justify-content-center">
                <h4 class="subtitleFinancial">Calculation of Equity for the month ending June 30th,2021</h4>
            </b-col>
        </b-row>
        <CalculationEquityVue/>
      </b-card>
    </div>
  </div>
</template>
<script>
import CalculationEquityVue from '@/components/Financials/CalculationEquity.vue';
import SideNavBarVue from "../components/template/SideNavBar.vue";
import TopNavBarVue from "../components/template/TopNavBar.vue";

export default {
  name: "FinancialView",
  components: {
    TopNavBarVue,
    SideNavBarVue,
    CalculationEquityVue
  },
};
</script>