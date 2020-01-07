<template>
  <div>
    <Enter roomName="first room"/>
    <input type="text" v-model="newMessage">
    <button v-on:click="addMessage">送信</button>
    <ul>
      <li v-for="(item, index) in items" v-bind:key=index>
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import Enter from './Enter.vue'

export default {
  name: 'ChatRoom',
  components: {
    Enter,
  },
  data: function() {
    return {
      newMessage: '',
      items: function(){
        return JSON.parse(localStorage.getItem("items"))
      }
    }
  },
  props: {
    // roomName: String,
    // roomMember: Array,
    // userName: String
  },
  // data: function() {
  //   return {
  //     newMessage: 'aaa'
  //   }
  // },
  methods: {
    addMessage: function() {
      let item = {
        // user: this.props.user,
        message: this.newMessage
      }
      // this.props.items.push(item)
      // if (this.props.items) {
        console.log(this.items())
        const newItems = this.items().push(item)
        localStorage.setItem('items', {items: newItems})
        // localStorage.setItem('items', JSON.stringify({message: "testtest"}))
      // } else {
      localStorage.setItem('items', [{"message": this.newMessage}])
      // }
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
