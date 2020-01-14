<template>
  <div>
    <textarea class="message-textarea" type="text" v-model="message" v-on:input="$emit('updateMessage', message)"/>
    <button v-on:click="submitMessage">送信</button>
  </div>
</template>

<script>
export default {
  name: 'MessageForm',
  props: {
    updateMessage: Function,
    addMessage: Function
  },
  data(){
    return {
      message: ''
    }
  },
  methods: {
    submitMessage(){
      this.$emit('addMessage')
      this.message = ''
    }
  }
}
</script>

<style scoped>
textarea {
  width: 60vw;
  height: inherit;
  font-size: 1rem;
}

button {
  display: block;
  padding: 0.5em 2em;
  font-size: 1rem;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: .2s;
}

button:hover {
  background: #67c5ff;
  color: white;
}

</style>