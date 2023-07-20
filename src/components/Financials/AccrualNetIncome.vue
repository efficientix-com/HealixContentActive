<template>
    <div id="CalculationEquity">
      <div class="d-flex">
        <div  class="mr-1">
          <label class="mr-sm-2" for="select-year">Year</label>
          <b-form-select
          id="select-year"
            class="form-select"
            v-model="selectedYear"
            :options="optionsYear"
            
          ></b-form-select>
        </div>
        <div>
          <label class="mr-sm-2" for="select-month">Month</label>
          <b-form-select
            id="select-month"
            class="form-select"
            v-model="selectedMonth"
            :options="optionsMonth"
          ></b-form-select>
        </div>
        
        <div class="d-flex justify-content-center align-items-center blue-text ml-auto mr-1">
          
              <font-awesome-icon class="btn-icon" icon="fa-file-export" size="1x" />
        </div>
        <div class="d-flex justify-content-center align-items-center blue-text">
          <font-awesome-icon class="btn-icon" icon="fa-print" size="1x" />
        </div>
      </div>
      <b-row class="mt-4">
          <b-col>
              <table class="table mt-3 px-2" id="datatable_equity"></table>
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
  import $ from "jquery";
  import { data_test_AccrualNetIncome } from "./data_test_AccrualNetIncome";
  export default {
    name: "CalculationEquity",
    data: function () {
      return {
          datatable: null,
        isToggle: null,
        menuItemsAr: [],
        selectedMonth: "June",
        selectedYear:'2021',
        optionsMonth: [
          { text: "January", value: "January" },
          { text: "February", value: "February" },
          { text: "March", value: "March" },
          { text: "April", value: "April" },
          { text: "May", value: "May" },
          { text: "June", value: "June" },
          { text: "July", value: "July" },
          { text: "August", value: "August" },
          { text: "September", value: "September" },
          { text: "October", value: "October" },
          { text: "November", value: "November" },
          { text: "December", value: "December" },
      ],
      optionsYear:[
          {value:'2018',text:'2018'},
          {value:'2019',text:'2019'},
          {value:'2020',text:'2020'},
          {value:'2021',text:'2021'},
          {value:'2022',text:'2022'},
          {value:'2023',text:'2023'},
      ]
      };
    },
    mounted(){
      this.datatable=new DataTable('#datatable_equity',{
          responsive:true,
          data:data_test_AccrualNetIncome(),
          columnDefs:[
          { targets: [1,2,3,4,5,6,7], width: "10rem" },
          { orderable: false,targets: [0,1,2,3,4,5,6,7] },
  
          // { targets: [7], width: "0.8rem" },
          ],
          pageLength:11,
          order: [],
          rowCallback:function(row,data,index){
              if(index===2 || index===7 || index===9 || index===10){
                  $(row).addClass('bold-text');
              }
          },
          columns:[
              {
                  data:'concept',
                  title:'Concept'
              },
              {
                  data:'jan_2021',
                  title:'January 2021'
              },
              {
                  data:'feb_2021',
                  title:'February 2021'
              },
              {
                  data:'mar_2021',
                  title:'March 2021'
              },
              {
                  data:'apr_2021',
                  title:'April 2021'
              },
              {
                  data:'jun_2021',
                  title:'June 2021'
              },
              {
                  data:'ytd',
                  title:'YTD 2021'
              },
              {
                  data:'inception_to_date',
                  title:'Inception to date'
              },
          ]
      })
    }
  };
  </script>