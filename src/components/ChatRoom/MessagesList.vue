<template>
  <ul>
    <li v-for="(chat, index) in chats" v-bind:class="usersOwn(chat)" v-bind:key=index>
      <div class="message-header">
        {{ index+1 }} 名前：<span class="user-name">{{chat.userName}} @１周年</span> {{chat.timestamp}}
      </div>
      <div class="message-text">
        {{ chat.message }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MessagesList',
  props: {
    chats: {
      type: Array,
      default: () => ([])
    },
    userName: {
      type: String,
      required: true
    }
  },
  methods: {
    usersOwn(chat) {
      if (chat.userName === this.userName) {
        return { own: true }
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  width: 60vw;
}
li {
  margin: 0 10px 10px;
  background-color: #f1f1f1;
  /* background-color: #3f3f3f; */
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
.own {
  background-color: #c2ffc0;
}
</style>