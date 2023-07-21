<template>
    <div id="GenerateReportView">
      <div id="global">
        <div class="topNavBarC">
          <TopNavBarVue />
        </div>
        <div class="sideNavBarC">
          <SideNavBarVue />
        </div>
        <div class="moduleComponent">
          <b-card>
            <HeadingFinancialReporting />
            <DatatableFinancialReporting/>
          </b-card>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HeadingFinancialReporting from "@/components/Financial_Reporting/HeadingFinancialReporting.vue";
  import SideNavBarVue from "@/components/template/SideNavBar.vue";
  import TopNavBarVue from "@/components/template/TopNavBar.vue";
  import DatatableFinancialReporting from '@/components/Financial_Reporting/DatatableFinancialReporting.vue';
  export default {
    name: "GenerateReportView",
    components: {
      HeadingFinancialReporting,
      SideNavBarVue,
      TopNavBarVue,
      DatatableFinancialReporting
    },
  };
  </script>