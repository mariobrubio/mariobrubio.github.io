<!-- A simple component that combines a button and an icon to facilitate code reuse -->
<template>
  <v-btn :href="href" flat :class="colorClass">
    <v-icon :class='[marginClass, colorClass]'>
      {{ icon }}
    </v-icon>
    <span>{{ text }}</span>
  </v-btn>
</template>

<script>
  export default {
    name: 'icon-button',
    props: ['href', 'color', 'icon', 'text'],
    data () {
      return {
        marginClass: 'mr-2'
      }
    },
    computed: {
      colorClass () {
        return this.color + '--text'
      }
    }
  }
</script>
