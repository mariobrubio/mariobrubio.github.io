<!-- The root app component. Every other component is "kicked off" from this one mainly through the vue router -->
<!-- This is also where the global styling for Vuetify is setup -->
<template>
    <v-app light>
      <!-- This required some slight "Hacking" to look right -->
      <!-- I wanted a large title without making the tool bar too ridiculously large -->
      <!-- to do that, I had to put the tab bar inside the toolbar instead of below it, where it typically goes -->
      <!-- This then created some spacing issues where the tabs weren't in line with the bottom of the action bar -->
      <!-- To remedy this, I added padding to the top of the tabs bar -->
      <!-- Finally, the title needed to be shifted into an ideal place with margins -->
      <v-toolbar flat class="blue darken-3" dark>
        <v-toolbar-title class='title_name mt-5 ml-5'>Mario Bolaños</v-toolbar-title>
        <v-tabs class="pt-4" slot='extension' dark fixed centered>
          <v-tabs-bar slot="activators" class="blue darken-3">
            <v-tabs-slider></v-tabs-slider>
            <!-- the to prop uses vue router to fulfill the link -->
            <v-tabs-item :to="aboutRoute">
              About
            </v-tabs-item>
            <v-tabs-item :to="projectsRoute">
              Projects
            </v-tabs-item>
            <!-- This tab isn't really a tab, but a link to a static page -->
            <!-- The static page (resume) could have been converted into a Vue -->
            <!-- component to be displayed in a proper tab, but this would cause conflicting styles -->
            <!-- between the auto-generated resume CSS and Vuetify's Stylus/CSS -->
            <!-- goToResume() is used because href doesn't work for some reason -->
            <v-tabs-item  v-on:click="goToResume">
              Resume
            </v-tabs-item>
          </v-tabs-bar>
        </v-tabs>
      </v-toolbar>


      <v-slide-x-transition mode='out-in'>
        <router-view></router-view>
      </v-slide-x-transition>
      
    </v-app>
</template>

<script>
  import * as routes from './router/routes.js'
  export default {
    name: 'app',
    data: function () {
      return {
        aboutRoute: {name: routes.ABOUT},
        projectsRoute: {name: routes.PROJECTS}
      }
    },
    methods: {
      goToResume: function () {
        window.location.href = '/static/CV_Mario.pdf'
      }
    }
  }
</script>

<!-- Vuetify styles -->
<style lang="stylus">
  @import './stylus/main'
</style>

<!-- Global plain css styling -->
<style>
  a {
    text-decoration: none;
  }
</style>

<!-- Local styling for the app component (toolbar, etc...) -->
<style scoped>
  /*For really small screens, use a smaller font size*/
  /*There might be a better way to do this, but I don't know how...*/
  /*These hard coded pixel sizes are based off the definition of "xs" sized screens*/
  /*found here: https://vuetifyjs.com/layout/grid*/
  @media (max-width:599px) {
    /*same as Vuetify's display-3 font size*/
    .title_name {
      font-size: 32px;
    }
  }
  /*same as Vuetify's display-1 font size*/
  @media (min-width:600px) {
    .title_name {
      font-size: 56px;
    }
  }

</style>
