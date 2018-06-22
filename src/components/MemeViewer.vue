<template>
    <div v-if="this.$store.state.loggedIn"> <!-- Only show if user is logged in -->
        <Meme v-for="meme in memes" :key="meme.id" :url="meme.url" :caption="meme.caption"/>
        <button @click="prevPage">Previous Page</button>
        <button @click="nextPage">Next Page</button>
    </div>
</template>

<script>
import axios from 'axios'
import Meme from './Meme.vue'

export default {
    name: 'MemeViewer',
    components: {
        Meme
    },
    data: function() {
        return {
            memes: [],
            errors: [],
            pageNumber: 0,
            pageSize: 10
        }
    },
    mounted() {
        axios.get('https://memelords.herokuapp.com/memes?next-page=1&sort=desc', {
            headers: {
                "Authorization": this.$store.state.jwt
            }
        })
        .then(response => {
            this.memes = response.data
        })
        .catch(e => {
            this.errors.push(e)
        })
    },
    methods: {
        prevPage: function(event) {
            alert('previous page' + event)
        },
        nextPage: function(event) {
            alert('next page' + event)
        }  
    }
}
</script>

<style>

</style>
