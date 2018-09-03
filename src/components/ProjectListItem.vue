<!-- A component that displays an item in a list -->
<template>
  <div>
    <v-list-tile :to='to' :key='title'>
      <v-list-tile-action v-if="icon">
        <v-icon>{{ icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-html="title"></v-list-tile-title>
        <v-list-tile-sub-title v-html="subtitle"></v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action v-if="icon">
        <a id="git-icon" v-if="github" :href="github"><v-icon>fa-github</v-icon></a>
      </v-list-tile-action>
    </v-list-tile>
    <v-divider  v-if="divider" v-bind:inset="inset"></v-divider>
  </div>
</template>

<script>
  export default {
    name: 'project-list-item',
    props: {
      to: {}, // could be a string or object, and is optional
      github: {
        type: String,
        require: false
      },
      icon: {
        type: String,
        required: false
      },
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      divider: {
        type: Boolean,
        default: true
      },
      inset: {}
    }
  }
</script>
