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

</style>