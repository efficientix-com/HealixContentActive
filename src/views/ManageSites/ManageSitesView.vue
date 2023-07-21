<template>
    <div id="ManageSitesView">
      <div id="global">
        <div class="topNavBarC">
          <TopNavBarVue />
        </div>
        <div class="sideNavBarC">
          <SideNavBarVue />
        </div>
        <div class="moduleComponent">
          <b-card>
            <HeadingManageSites />
            <DatatableManageSites/>
          </b-card>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HeadingManageSites from "@/components/ManageSites/HeadingManageSites.vue"
  import SideNavBarVue from "@/components/template/SideNavBar.vue";
  import TopNavBarVue from "@/components/template/TopNavBar.vue";
  import DatatableManageSites from '@/components/ManageSites/DatatableManageSites.vue';
  export default {
    name: "ManageSitesView",
    components: {
      HeadingManageSites,
      SideNavBarVue,
      TopNavBarVue,
      DatatableManageSites
    },
  };
  </script>