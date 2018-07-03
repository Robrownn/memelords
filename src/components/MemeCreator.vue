<template>
  <div class="hello" v-if="this.$store.state.loggedIn"> <!-- only show if user is logged in -->
    <input v-model="meme.url" type="text" placeholder="enter url here"/>
    <input v-model="meme.title" type="text" placeholder="enter title here">
    <input v-model="meme.caption" type="text" placeholder="caption"/>
    <button @click="submit">Submit</button>
    <hr/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MemeCreator',
  data: function() {
    return {
      meme: {id: 0, title: '', url: '', caption: ''}
    }
  },
  methods: {
    submit: function() {

      axios.post("https://memelords.herokuapp.com/memes?title=" + this.meme.title + "&caption=" + this.meme.caption + "&link=" + this.meme.url, {}, {
        headers: {
                "Authorization": this.$store.state.jwt
            }
      })
      .then((response) => {
        if (response === 200) {
          // refresh memeviewer component
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
