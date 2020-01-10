<template>
  <div>
    <!-- メッセージリストコンポーネント -->
    <ul>
      <li v-for="(item, index) in items" v-bind:key=index>
        <div class="message-header">
          {{ index+1 }} <span class="user-name">{{item.userName}}</span> {{item.timestamp}}
        </div>
        <div class="message-text">
          {{ item.message }}
        </div>
      </li>
    </ul>
    <!-- メッセージリストコンポーネント -->
    <!-- 入力フォームコンポーネント -->
    <textarea class="message-textarea" type="text" v-model="message"/>
    <button v-on:click="addMessage">送信</button>
    <!-- 入力フォームコンポーネント -->
    <button v-on:click="$emit('leaveRoom')">退出</button>
  </div>
</template>

<script>
export default {
  name: 'ChatRoom',
  data: function() {
    return {
      message: '',
      // entered: false,
    }
  },
  computed: {
    items: function(){
      return localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
    },
  },
  props: {
      userName: String,
    // roomName: String,
    // roomMember: Array,
  },
  methods: {
    addMessage: function() {
      const items = this.items
      items.push({userName: this.userName, message: this.message, timestamp: new Date().toLocaleString('ja-JP')})
      localStorage.setItem('items', JSON.stringify(items))
      this.message = ''
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* TODO: 自分のメッセージの色を変える */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px 10px;
  background-color: #f1f1f1;
  /* background-color: #3f3f3f; */
}
.message-textarea {
  font-size: 1.4rem;
  width: 100%;
}
.user-name {
  color: blue;
  font-size: 1.4rem;
  font-weight: 900;
}
.message-header {
  font-size: 1.2rem;
}
.message-text {
  padding: .8em;
  font-size: 1.4rem;
}
.register-name {
  text-align: center;
}
</style>
