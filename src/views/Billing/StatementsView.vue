<template>
    <div id="InvoiceView">
      <div id="global">
        <div class="topNavBarC">
          <TopNavBarVue />
        </div>
        <div class="sideNavBarC">
          <SideNavBarVue />
        </div>
        <div class="moduleComponent">
          <b-card>
            <HeadingBillingStatements />
            <DatatableBillingStatements/>
          </b-card>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HeadingBillingStatements from "@/components/Billing_Statements/HeadingBillingStatements.vue"
  import SideNavBarVue from "@/components/template/SideNavBar.vue";
  import TopNavBarVue from "@/components/template/TopNavBar.vue";
  import DatatableBillingStatements from '@/components/Billing_Statements/DatatableBillingStatements.vue';
  export default {
    name: "StatementsView",
    components: {
      HeadingBillingStatements,
      SideNavBarVue,
      TopNavBarVue,
      DatatableBillingStatements
    },
  };
  </script>