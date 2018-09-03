<!-- A component used to render Project Description pages -->
<!-- Though there are many different project description pages in the app, -->
<!-- they all use this same component to render their content -->
<template>
  <v-layout>
    <v-container>
      <v-card>
        <div class='pt-3 pl-3'>
          <span class='display-1 grey--text'>{{ projectDescription.title }}</span>
        </div>
        <v-card-text>
          <blockquote v-html='projectDescription.subtitle'></blockquote>
          <template v-if='projectDescription.about'>
            <div class='mt-3 mb-2 headline grey--text'>
              About
            </div>
              <span class='subheading' v-html="projectDescription.about"></span>

          </template>
          <template v-if='projectDescription.gallery'>
            <div class='mt-3 mb-2 headline grey--text'>
              Gallery
            </div>
            <img class='img-rescale img-center' width="300px" :src="projectDescription.gallery" alt="Image">
          </template>
        </v-card-text>

        <v-card-actions>
          <icon-button
            v-if='projectDescription.github'
            :href='projectDescription.github'
            color='orange'
            icon='fa-github'
            text='GitHub'
          >
          </icon-button>
          <icon-button
            v-if='projectDescription.googlePlay'
            :href='projectDescription.googlePlay'
            color='green'
            icon='fa-play'
            text='Google Play'
          >
          </icon-button>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
  import {projectDescriptions} from '../../data/ProjectDescriptions'
  import IconButton from '@/components/IconButton'
  export default {
    name: 'project-description',
    props: ['project'],
    computed: {
      projectDescription () {
        return projectDescriptions.getProjectByTitle(this.project)
      }
    },
    components: {
      'icon-button': IconButton
    }
  }
</script>
