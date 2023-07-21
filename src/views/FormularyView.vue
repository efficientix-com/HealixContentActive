<template>
  <div id="FormularyView">
    <div id="global">
      <div class="topNavBarC">
        <TopNavBarVue />
      </div>
      <div class="sideNavBarC">
        <SideNavBarVue />
      </div>
      <div class="moduleComponent">
        <b-card>
          <HeadingFormularyVue />
          <DatatableFormularyVue/>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import HeadingFormularyVue from "@/components/Formulary/HeadingFormulary.vue";
import SideNavBarVue from "@/components/template/SideNavBar.vue";
import TopNavBarVue from "@/components/template/TopNavBar.vue";
import DatatableFormularyVue from '@/components/Formulary/DatatableFormulary.vue';
export default {
  name: "FormularyView",
  components: {
    HeadingFormularyVue,
    SideNavBarVue,
    TopNavBarVue,
    DatatableFormularyVue
  },
};
</script>