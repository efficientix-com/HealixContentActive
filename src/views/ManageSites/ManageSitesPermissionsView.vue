<template>
    <div id="ManageSitePermissionsView">
      <div id="global">
        <div class="topNavBarC">
          <TopNavBarVue />
        </div>
        <div class="sideNavBarC">
          <SideNavBarVue />
        </div>
        <div class="moduleComponent">
          <b-card>
            <HeadingManageSitePermissions />
            <DatatableManageSitePermissions/>
          </b-card>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HeadingManageSitePermissions from "@/components/ManageSitePermissions/HeadingManageSitePermissions.vue"
  import SideNavBarVue from "@/components/template/SideNavBar.vue";
  import TopNavBarVue from "@/components/template/TopNavBar.vue";
  import DatatableManageSitePermissions from '@/components/ManageSitePermissions/DatatableManageSitePermissions.vue';
  export default {
    name: "ManageSitePermissionsView",
    components: {
      HeadingManageSitePermissions,
      SideNavBarVue,
      TopNavBarVue,
      DatatableManageSitePermissions
    },
  };
  </script>