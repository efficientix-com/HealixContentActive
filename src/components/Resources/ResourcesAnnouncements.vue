<template>
  <div id="ResourcesAnnouncements">
    <div class="bk-blue">
      <h4 class="blue-text bk-blue p-2">
        <font-awesome-icon icon="fa-solid fa-bullhorn" size="1x" />
        Announcements
      </h4>
    </div>
    <b-row class="mb-2" v-for="item in announcements" v-bind:key="item.id">
       <b-col md="12" sm="12" style="text-align: left;">
        <span class="date">{{item.date}}</span>
       </b-col>
       <b-col md="12" sm="12" style="text-align: left;">
        <span class="announcement_title">{{item.title}}</span>
       </b-col>
       <b-col md="12" sm="12" style="text-align: left;">
        <span class="announcement_content">{{item.content}}</span>
       </b-col>
       <b-col md="12" sm="12" class="mt-2" style="border-bottom: 1px solid #a3a3a3;text-align: left;">
        <b-button class="btn-blue mb-2">Learn more</b-button>
       </b-col>
        
    </b-row>
  </div>
</template>
  <script>
  import {data_test_annoucements} from './data_test_announcements'
export default {
  name: "ResourcesAnnouncements",
  data: function () {
    return {
        announcements:[]
        };
  },
  mounted(){
    this.announcements=data_test_annoucements();
  }
};
</script>