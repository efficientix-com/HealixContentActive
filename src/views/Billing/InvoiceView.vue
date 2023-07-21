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
            <HeadingBillingInvoice />
            <DatatableBillingInvoice/>
            <p class="text-center gray-text mt-3"><strong>Note: "Cash Available" estimate is updated every night at 6PM CT. Estimate is calculated from received OIC collections minus payments to Healix and retained earnings by practice. Timing issues may exist from the submission of EOB's and actual amount posted.</strong></p>
          </b-card>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HeadingBillingInvoice from "@/components/Billing_invoice/HeadingBillingInvoice.vue"
  import SideNavBarVue from "@/components/template/SideNavBar.vue";
  import TopNavBarVue from "@/components/template/TopNavBar.vue";
  import DatatableBillingInvoice from '@/components/Billing_invoice/DatatableBillingInvoice.vue';
  export default {
    name: "InvoiceView",
    components: {
      HeadingBillingInvoice,
      SideNavBarVue,
      TopNavBarVue,
      DatatableBillingInvoice
    },
  };
  </script>