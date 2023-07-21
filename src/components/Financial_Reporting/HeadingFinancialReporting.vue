<template>
    <div id="HeadingBillingStatements">
      <div class="d-flex">
        <div>
          <h1 class="blue-text">
            <font-awesome-icon icon="fa-solid fa-file-invoice" size="1x" />
            Financial Reporting | Generate Report
          </h1>
        </div>
        <div class="ml-auto mr-1">
          <b-button class="bk-blue-btn">Publish All</b-button>
        </div>
        <div>
            <b-button class="bk-blue-btn">Generate Financial Report</b-button>

        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "HeadingBillingStatements",
    data:function(){
      return{
          selectedLocation:'Austin Infectious Disease Cons - C004',
          optionsLocation:[
              {text:'Austin Infectious Disease Cons - C004',value:'Austin Infectious Disease Cons - C004'},
              {text:'Allergy & Asthma Clinics, GA - C271',value:'Allergy & Asthma Clinics, GA - C271'},
              {text:'ID Specialists, PA - C051A',value:'ID Specialists, PA - C051A'},
              {text:'ID Doctors Medical Group - C149',value:'ID Doctors Medical Group - C149'},
              {text:'Texas Regional A&A Center-FLEX - C218',value:'Texas Regional A&A Center-FLEX - C218'},
          ]
      }
    }
  };
  </script>