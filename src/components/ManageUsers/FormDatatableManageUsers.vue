<template>
  <div id="FormDatatableManageUsers">
    <!-- form row 1 -->
    <b-row class="mt-3">
      <b-col>
        <label for="first_name">First Name</label>
        <b-input id="first_name"></b-input>
      </b-col>
      <b-col>
        <label for="last_name">Last Name</label>
        <b-input id="last_name"></b-input>
      </b-col>
      <b-col>
        <label for="email">Email</label>
        <b-input id="email"></b-input>
      </b-col>
    </b-row>
    <!-- form row 2 -->
    <b-row>
      <b-col>
        <label for="select-role">Role</label>
        <b-form-select
          id="select-role"
          class="form-select"
          v-model="selectedPayer"
          :options="optionsPayers"
        ></b-form-select>
      </b-col>
      <b-col>
        <label for="select-role">Status</label>
        <b-form-select
          id="select-role"
          class="form-select"
          v-model="selectedPayer"
          :options="optionsPayers"
        ></b-form-select>
      </b-col>
    </b-row>
    <!-- form row 3 -->
    <b-row>
      <b-col md="12" class="d-flex">
        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
          class="mr-1"
        >
          Financial Report Notifications
        </b-form-checkbox>
      
        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
          class="mr-1"
        >
          Invoice Notifications
        </b-form-checkbox>
        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
          class="mr-1"
        >
          Statement Notifications
        </b-form-checkbox>
        </b-col>
    </b-row>
    <!-- Form row 3 -->
    <b-row>
      <b-col>
        <label for="select-role">Sites</label>
        <b-form-select
          id="select-role"
          class="form-select"
          v-model="selectedPayer"
          :options="optionsPayers"
        ></b-form-select>
      </b-col>
      <b-col>
        <label for="select-role">Default Site</label>
        <b-form-select
          id="select-role"
          class="form-select"
          v-model="selectedPayer"
          :options="optionsPayers"
        ></b-form-select>
      </b-col>
    </b-row>
    <!-- form buttons -->
    <b-row class="mt-3">
        <b-col md="1">
            <b-button>Cancel</b-button>
        </b-col>
        <b-col md="1">
            <b-button class="bk-blue-btn">Submit</b-button>
        </b-col>
    </b-row>
    <h4 class="mt-3">Site permissions</h4>
    <b-row class="mt-4">
      <b-col>
        <table class="table mt-3 px-2" id="datatable_Manage_Users"></table>
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
import { data_test_manage_users } from "./data_test_manage_users";

export default {
  name: "FormDatatableManageUsers",
  data: function () {
    return {
      datatable: null,
      selectedPayer: "BCBS",
      selectedDrugCategory: "Anti-efectives",
      selectedDrugClass: "Anti-MRSA",
      selectedDevice: "AMBULATORY PUMP",
      optionsPayers: [{ text: "BCBS", value: "BCBS" }],
      optionsDrugCategory: [
        { text: "Anti-efectives", value: "Anti-efectives" },
      ],
      optionsDrugClass: [{ text: "Anti-MRSA", value: "Anti-MRSA" }],
      optionsDevice: [{ text: "AMBULATORY PUMP", value: "AMBULATORY PUMP" }],
    };
  },
  mounted() {
    this.datatable = new DataTable("#datatable_Manage_Users", {
      responsive: true,
      data: data_test_manage_users(),
      columnDefs: [
        { targets: [1, 2, 3, 4, 5], width: "10rem" },
        { orderable: false, targets: [0, 1, 2, 3, 4, 5] },

        // { targets: [7], width: "0.8rem" },
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
        },
        {
          data: "formulary",
          title: "Formulary",
        },
        {
          data: "roster",
          title: "Roster",
        },
        {
          data: "billing",
          title: "Billing",
        },
        {
          data: "payments",
          title: "Payments",
        },
      ],
    });
  },
};
</script>