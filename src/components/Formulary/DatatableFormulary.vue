<template>
  <div id="DatatableFormulary">
    <!-- filters -->
    <b-row>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Payers</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedPayer"
          :options="optionsPayers"
        ></b-form-select>
      </b-col>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Drug Category</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedDrugCategory"
          :options="optionsDrugCategory"
        ></b-form-select>
      </b-col>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Drug Class</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedDrugClass"
          :options="optionsDrugClass"
        ></b-form-select>
      </b-col>
      <b-col md="3">
        <label class="mr-sm-2" for="select-payer">Device</label>
        <b-form-select
          id="select-payer"
          class="form-select"
          v-model="selectedDevice"
          :options="optionsDevice"
        ></b-form-select>
      </b-col>
    </b-row>
    <div class="d-flex mt-3">

        <div class="d-flex justify-content-center align-items-center blue-text ml-auto mr-1">
              
              <font-awesome-icon title="Export" class="btn-icon" icon="fa-file-export" size="1x" />
        </div>
    </div>
    <b-row class="mt-4">
        <b-col>
            <table class="table mt-3 px-2" id="datatable_Formulary"></table>
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
import {data_test_Formulary} from './data_test_Formulary';

export default {
    name:'DatatableFormulary',
    data:function(){
        return{
            datatable: null,
            selectedPayer:'BCBS',
            selectedDrugCategory:'Anti-efectives',
            selectedDrugClass:'Anti-MRSA',
            selectedDevice:'AMBULATORY PUMP',
            optionsPayers:[
                {text:'BCBS',value:'BCBS'}
            ],
            optionsDrugCategory:[
                {text:'Anti-efectives',value:'Anti-efectives'}
            ],
            optionsDrugClass:[
                {text:'Anti-MRSA',value:'Anti-MRSA'}
            ],
            optionsDevice:[
                {text:'AMBULATORY PUMP',value:'AMBULATORY PUMP'}
            ],
        }
    },
    mounted(){
        this.datatable = new DataTable("#datatable_Formulary", {
      responsive: true,
      data: data_test_Formulary(),
      columnDefs: [
        { targets: [1, 2, 3, 4, 5], width: "10rem" },
        { orderable: false, targets: [0, 1, 2, 3, 4, 5] },

        // { targets: [7], width: "0.8rem" },
      ],
      order: [],
      columns: [
        {
          data: "drug_name",
          title: "Drug Name",
        },
        {
          data: "brand",
          title: "Brand",
        },
        {
          data: "visits_per_week",
          title: "Visits per week",
        },
        {
          data: "frequency",
          title: "Frequency",
        },
        {
          data: "device",
          title: "Device",
        },
        {
          data: "estimated_daily_margin",
          title: "Estimated Daily Margin",
        },
      ],
    });
    }
}
</script>