<template>
  <div id="DatatableFormulary">
    <!-- Money information -->
    <b-row class="mt-3">
        <b-col md="3">
            <p class="money_title">Cash Available</p>
            <p class="money_amount">$ 541,198.26</p>
        </b-col>
        <b-col md="3">
            <p class="money_title">Balance Amount</p>
            <p class="money_amount">$ 491,275.94</p>
        </b-col>
        <b-col md="3">
            <p class="money_title">Amount Authorized</p>
            <p class="money_amount">$ 0.00</p>
        </b-col>
    </b-row>
    <!-- filters -->
    <b-row>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Year</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedPhysician"
          :options="optionsPhysicians"
        ></b-form-select>
      </b-col>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Month</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedStatus"
          :options="optionsStatus"
        ></b-form-select>
      </b-col>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Paid status</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedMedication"
          :options="optionsMedication"
        ></b-form-select>
      </b-col>
      
    </b-row>
    <div class="d-flex mt-3">
      <div
        class="d-flex justify-content-center align-items-center blue-text ml-auto mr-1"
      >
        <font-awesome-icon
          title="Export"
          class="btn-icon"
          icon="fa-file-export"
          size="1x"
        />
      </div>
    </div>
    <b-row class="mt-4">
      <b-col>
        <table class="table mt-3 px-2" id="datatable_Billing_Invoice"></table>
      </b-col>
    </b-row>
  </div>
</template>
    <script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive-dt";
import "datatables.net-dt/js/dataTables.dataTables";
import DataTable from "datatables.net-dt";
import { data_test_billing_invoice } from "./data_test_billing_invoice";

export default {
  name: "DatatableFormulary",
  data: function () {
    return {
      datatable: null,
      selectedPhysician: "",
      selectedStatus: "",
      selectedMedication: "",
      selectedPatientsName: "",
      optionsPhysicians: [{ text: "BCBS", value: "BCBS" }],
      optionsStatus: [{ text: "Active", value: "Active" }],
      optionsMedication: [{ text: "cefazolin", value: "cefazolin" }],
      optionsPatientsName: [
        { text: "Acosta Urbina, Said", value: "Acosta Urbina, Said" },
      ],
    };
  },
  mounted() {
    this.datatable = new DataTable("#datatable_Billing_Invoice", {
      responsive: true,
      data: data_test_billing_invoice(),
      columnDefs: [
        { targets: [2, 3, 4, 7], width: "10rem" },

        // { targets: [7], width: "0.8rem" },
      ],
      order: [],
      columns: [
        {
          data: "action",
          title: "Action",
          render: function () {
            return `
            <div class="d-flex justify-content-center">
                <div class="option-item-btn btn btn-light text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>              
                </div>
            </div>
            `;
          },
        },
        {
          data: "due_date",
          title: "Due Date",
        },
        {
          data: "status",
          title: "Status",
          render: function (data) {
            let str_return = "";

            str_return = `
              <div class="d-flex justify-content-center align-items-center">
                <div class="cheto d-flex align-items-center">
                            <span>${data}</span>
                </div>
              </div>
              `;

            return str_return;
          },
        },
        {
          data: "end_date",
          title: "End Date",
        },
        {
          data: "type",
          title: "Type",
        },
        {
          data: "amount",
          title: "Amount",
        },
        {
          data: "paid",
          title: "Paid",
        },
        {
          data: "remaining_balance",
          title: "Remaining Balance",
        },
        
        {
          data: "btn_authorize",
          title: "",
          render: function (data) {
            let str_return = "";

            str_return = `
              <div class="d-flex justify-content-center align-items-center">
                <div class="cheto btn d-flex align-items-center">
                            <span>${data}</span>
                </div>
              </div>
              `;

            return str_return;
          },
        },
        {
          data: "authorized_amount",
          title: "Authorized Amount",
        },
      ],
    });
  },
};
</script>