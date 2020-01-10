<template>
  <div>
    <MessagesList :chats="chats"/>
    <!-- 入力フォームコンポーネント -->
    <!-- v-on:inputでmessageをupdateする親のメソッドを走らせる -->
    <textarea class="message-textarea" type="text" v-model="message"/>
    <button v-on:click="addMessage">送信</button>
    <!-- 入力フォームコンポーネント -->
    <button v-on:click="$emit('leaveRoom')">退出</button>
  </div>
</template>

<script>
import MessagesList from './ChatRoom/MessagesList.vue'

export default {
  name: 'ChatRoom',
  components: {
    MessagesList
  },
  data() {
    return {
      message: '',
      chats: []
    }
  },
  watch: {
    chats(){
      localStorage.setItem('chats', JSON.stringify(this.chats))
    },
  },
  props: {
    userName: {
      tyep: String,
      default: '名無しさん'
    }
    // roomMember: Array,
  },
  methods: {
    addMessage() {
      this.chats.push({userName: this.userName, message: this.message, timestamp: new Date().toLocaleString('ja-JP')})
      this.message = ''
    },
  },
  created(){
    this.chats = localStorage.getItem("chats") ? JSON.parse(localStorage.getItem("chats")) : []
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* TODO: 自分のメッセージの色を変える */
h3 {
  margin: 40px 0 0;
}

.register-name {
  text-align: center;
}
.message-textarea {
  font-size: 1.4rem;
  width: 100%;
}
</style>
