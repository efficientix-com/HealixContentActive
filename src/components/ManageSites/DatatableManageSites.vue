<template>
    <div id="DatatableManageSites">

      <div class="d-flex mt-3">
        
        <div
          class="d-flex justify-content-center align-items-center blue-text ml-auto mr-1"
        >
          <b-button class="bk-blue-btn">Add New Site</b-button>
        </div>
      </div>
      <b-row class="mt-4">
        <b-col>
          <table class="table mt-3 px-2" id="datatable_Manage_Sites"></table>
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
  import { data_test_manage_sites } from "./data_test_manage_sites";
  
  export default {
    name: "DatatableManageSites",
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
      this.datatable = new DataTable("#datatable_Manage_Sites", {
        responsive: true,
        data: data_test_manage_sites(),
        columnDefs: [
          { targets: [1,2], width: "10rem" },
  
          { targets: [0,3], width: "0.8rem" },
        ],
        order: [],
        columns: [
          {
            data: "action",
            title: "Actions",
            render: function () {
              return `
              <div class="d-flex justify-content-center">
                  <div class="option-item-btn btn btn-light text-center mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>            
                  </div>
                  <div class="option-item-btn btn btn-light text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>            
                  </div>
              </div>
              `;
            },
          },
          {
            data: "site",
            title: "Site Name",
          },
          {
            data: "site_address",
            title: "SiteName(Address)",
            
          },
          {
            data: "status",
            title: "Status",
          }
          
        ],
      });
    },
  };
  </script>