<template>
  <div id="HeadingFormulary">
    <div class="d-flex">
      <div>
        <h1 class="blue-text">
          <font-awesome-icon icon="fa-solid fa-layer-group" size="1x" />
          Formulary
        </h1>
      </div>
      <div class="ml-auto">
        <b-form-select
          id="select-location"
          class="form-select"
          v-model="selectedLocation"
          :options="optionsLocation"
          filter
        ></b-form-select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeadingFormulary",
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