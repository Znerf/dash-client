<template>
  <section>
  
    <button
      type="button"
      @click="logout"
      class=" float-right mr-2 rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase  shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]  ">
      Logout
    </button>

    <div class="block">Welcome, user</div>
  
  </section>
</template>

<script>
import router from '@/router'

export default {
  name: 'DashboardComponent',
  methods:{
    logout : function(){
      localStorage.token=false
      router.push("/login")
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
