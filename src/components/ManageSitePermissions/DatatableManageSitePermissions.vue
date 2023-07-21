<template>
    <div id="DatatableManageSites">

      <div class="d-flex mt-3">
        <div class="col-md-2 mr-1">
            <label class="mr-sm-2" for="select-payer">Site Name</label>
          <b-form-select
            id="select-payer"
            class="form-select"
            v-model="selectedPhysician"
            :options="optionsPhysicians"
          ></b-form-select>
        </div>
        <div class="col-md-2">
            <label class="mr-sm-2" for="select-payer">User</label>
          <b-form-select
            id="select-payer"
            class="form-select"
            v-model="selectedStatus"
            :options="optionsStatus"
          ></b-form-select>
        </div>
        
      </div>
      <b-row class="mt-4">
        <b-col>
          <table class="table mt-3 px-2" id="datatable_Manage_Sites_Permissions"></table>
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
  import { data_test_manage_site_permissions } from "./data_test_manage_site_permissions";
  
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
      this.datatable = new DataTable("#datatable_Manage_Sites_Permissions", {
        responsive: true,
        data: data_test_manage_site_permissions(),
        columnDefs: [
  
        ],
        order: [],
        columns: [
          {
            data: "site_name",
            title: "Site Name",
            
          },
          {
            data: "financial",
            title: "Financial",
            render: function () {
              return `
              <div class="d-flex justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                  
              </div>
              `;
            },
          },
          {
            data: "formulary",
            title: "Formulary",
            render: function () {
              return `
              <div class="d-flex justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                  
              </div>
              `;
            },
          },
          {
            data: "roster",
            title: "Roster",
            render: function () {
              return `
              <div class="d-flex justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                  
              </div>
              `;
            },
          }
          ,
          {
            data: "billing",
            title: "Billing",
            render: function () {
              return `
              <div class="d-flex justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                  
              </div>
              `;
            },
          }
          ,
          {
            data: "payment",
            title: "payment",
            render: function () {
              return `
              <div class="d-flex justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>                  
              </div>
              `;
            },
          }
          
        ],
      });
    },
  };
  </script>