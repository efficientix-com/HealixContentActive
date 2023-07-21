<template>
    <div id=" ResourcesView">
      <div id="global">
        <div class="topNavBarC">
          <TopNavBarVue />
        </div>
        <div class="sideNavBarC">
          <SideNavBarVue />
        </div>
        <div class="moduleComponent">
          <b-card>
            <HeadingResources />
            <b-row class="mt-3">
              <b-col>
                <ResourcesAnnouncements/>
              </b-col>
              <b-col>
                <ResourcesSpotlightFeatureVue/>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
  </template>
  <script>
  import HeadingResources from "@/components/Resources/HeadingResources.vue";
  import SideNavBarVue from "@/components/template/SideNavBar.vue";
  import TopNavBarVue from "@/components/template/TopNavBar.vue";
  import ResourcesAnnouncements from '@/components/Resources/ResourcesAnnouncements.vue';
import ResourcesSpotlightFeatureVue from '@/components/Resources/ResourcesSpotlightFeature.vue';
  export default {
    name: " ResourcesView",
    components: {
      HeadingResources,
      SideNavBarVue,
      TopNavBarVue,
      ResourcesAnnouncements,
      ResourcesSpotlightFeatureVue
    },
  };
  </script>