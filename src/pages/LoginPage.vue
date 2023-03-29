<template>
    <section class="h-screen">
        <div class="m-auto w-10/12">
            <LoginComponent />
        </div>
    </section>
</template>

<script>
import LoginComponent from '../components/LoginComponent.vue'

export default {
  name: 'LoginPage',
  components: { LoginComponent },
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
