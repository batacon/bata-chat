<template>
  <div>
    <textarea class="message-textarea" type="text" :value="message" @input="inputMessage"/>
    <button @click='addMessage'>送信</button>
  </div>
</template>

<script>
export default {
  name: 'MessageForm',
  props: {
    addMessage: {
      type: Function,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  methods: {
    inputMessage(event){
      this.$emit('updateMessage', event.target.value)
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