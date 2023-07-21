<template>
    <div id="ManageUsersView">
      <div id="global">
        <div class="topNavBarC">
          <TopNavBarVue />
        </div>
        <div class="sideNavBarC">
          <SideNavBarVue />
        </div>
        <div class="moduleComponent">
          <b-card>
            <HeadingManageUsers />
            <FormDatatableManageUsers/>
          </b-card>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HeadingManageUsers from "@/components/ManageUsers/HeadingManageUsers.vue";
  import SideNavBarVue from "@/components/template/SideNavBar.vue";
  import TopNavBarVue from "@/components/template/TopNavBar.vue";
  import FormDatatableManageUsers from '@/components/ManageUsers/FormDatatableManageUsers.vue';
  export default {
    name: "ManageUsersView",
    components: {
      HeadingManageUsers,
      SideNavBarVue,
      TopNavBarVue,
      FormDatatableManageUsers
    },
  };
  </script>