<template>
  <div class="hello">
    <h1>{{ roomName }}</h1>
    <p>
      this is Entrance of ChatRoom
    </p>
  </div>
</template>

<script>
export default {
  name: 'Enter',
  props: {
    roomName: String,
    roomMember: Array
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
