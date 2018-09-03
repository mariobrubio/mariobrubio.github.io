<!-- A "page" that talks about who I am -->
<template>
  <v-layout>
    <!-- extra small fills the whole screen, Small fills most of the screen, medium and up fills just the center of the screen-->
    <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
      <v-card>
        <img class='img-round img-rescale img-center' width="300px" src='../../assets/profile_photo.jpeg'></img>
        <v-card-text class='subheading'>
          <p>
            Hello, My name is <strong>Mario Bolaños</strong>. I am a Full Stack Developer and a Computer Science and Systems Engineering student at <strong>Pontificia Universidad Javeriana Cali</strong> (PUJ). I am interested in a wide variety of domains in Computer Science, but regardless of what I am working on, my focus is designing high quality, practical, readable, and maintainable code.
          </p>
          <p>
            As a student, I have worked on many <strong>school projects</strong> that are related with several programming languages. I have worked on numerous <strong>personal software projects</strong>.
            If you would like to learn more about the work I've done, please check out the rest of my website.
          </p>
          <p>
            I also have a life outside of Computer Science! I love the balance in my life that my family, traveling, sports, video games, working out, and programming brings to myself. I'm really proud of having my girlfriend in my life, she is my everything.
            
          </P>
          <p>
            If you would like to get in touch, don't hesitate to contact me.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-flex >
            <icon-button href="https://github.com/mandresbr" color="orange" text="GitHub" icon="fa-github"></icon-button>
            <icon-button href="https://linkedin.com/in/mandresbr" color="blue" text="LinkedIn" icon="fa-linkedin"></icon-button>
            <icon-button color="red" text="E-mail" icon="fa-comments" href="mailto:mandresbrubio@gmail.com"></icon-button>
            <icon-button color="deep-purple" text="Resume" icon="fa-file-text" href="/static/CV_Mario.pdf"></icon-button>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import IconButton from '@/components/IconButton'
  export default {
    name: 'about',
    components: {
      'icon-button': IconButton
    }
  }
</script>

<style scoped>
  .img-round {
    border-radius: 50%;
    padding: 10pt;
  }
  /*re-scales the image to smaller sizes if the window gets too small*/
  .img-rescale {
    max-width: 100%;
    height: auto;
  }
  .img-center {
    margin: auto;
    display: block;
  }
</style>
