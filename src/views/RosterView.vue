<template>
    <div id="RosterView">
      <div id="global">
        <div class="topNavBarC">
          <TopNavBarVue />
        </div>
        <div class="sideNavBarC">
          <SideNavBarVue />
        </div>
        <div class="moduleComponent">
          <b-card>
            <HeadingRosterVue />
            <DatatableRosterVue/>
          </b-card>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HeadingRosterVue from "@/components/Roster/HeadingRoster.vue";
  import SideNavBarVue from "@/components/template/SideNavBar.vue";
  import TopNavBarVue from "@/components/template/TopNavBar.vue";
  import DatatableRosterVue from '@/components/Roster/DatatableRoster.vue';
  export default {
    name: "RosterView",
    components: {
      HeadingRosterVue,
      SideNavBarVue,
      TopNavBarVue,
      DatatableRosterVue
    },
  };
  </script>