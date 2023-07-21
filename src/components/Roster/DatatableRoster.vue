<template>
  <div id="DatatableFormulary">
    <!-- filters -->
    <b-row>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Physician</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedPhysician"
          :options="optionsPhysicians"
        ></b-form-select>
      </b-col>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Status</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedStatus"
          :options="optionsStatus"
        ></b-form-select>
      </b-col>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Medication</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedMedication"
          :options="optionsMedication"
        ></b-form-select>
      </b-col>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Patient's Name</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedPatientsName"
          :options="optionsPatientsName"
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
        <table class="table mt-3 px-2" id="datatable_Roster"></table>
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
import { data_test_Roster } from "./data_test_Roster";

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
      optionsStatus: [
        { text: "Active", value: "Active" },
      ],
      optionsMedication: [{ text: "cefazolin", value: "cefazolin" }],
      optionsPatientsName: [{ text: "Acosta Urbina, Said", value: "Acosta Urbina, Said" }],
    };
  },
  mounted() {
    this.datatable = new DataTable("#datatable_Roster", {
      responsive: true,
      data: data_test_Roster(),
      columnDefs: [
        { targets: [2, 3, 4, 7], width: "10rem" },

        // { targets: [7], width: "0.8rem" },
      ],
      order: [],
      columns: [
        {
          data: "roster",
          title: "Roster",
        },
        {
          data: "next_oic_visit",
          title: "Next OIC Visit",
        },
        {
          data: "physician",
          title: "Physician",
        },
        {
          data: "payer",
          title: "Payer",
        },
        {
          data: "medication",
          title: "Medication",
        },
        {
          data: "buy_n_bill_spn",
          title: "Buy & Bill/SPN",
        },
        {
          data: "status",
          title: "Status",
          render: function (data) {
            let str_return = ''
            if (data === "Active") {
              str_return = `
            <div class="d-flex justify-content-center align-items-center">
              <div class="cheto d-flex align-items-center">
                          <span>${data}</span>
              </div>
            </div>
            `;
            }else{
                str_return=`
            <div class="d-flex justify-content-center align-items-center">
              <div class="cheto green d-flex align-items-center">
                          <span>${data}</span>
              </div>
            </div>
            `;
            }
            return str_return;
          },
        },
        {
          data: "diagnosis",
          title: "Diagnosis",
        },
      ],
    });
  },
};
</script>