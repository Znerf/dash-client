<template>
  <section>
  
    

    <!-- <div class="block">Welcome, {{user.firstName}} {{user.lastName}}</div> -->
    
    <div class="flex flex-col items-center pb-10 mt-20">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg"  v-bind:src="user.image" alt="User image"/>
        <h5 class="mb-1 text-xl font-medium">Welcome {{user.firstName}} {{user.lastName}}</h5>
        <span class="text-sm text-gray-500 ">{{user.university}}</span>
        <span class="text-sm text-gray-500">Hair : {{hair.color}} and {{hair.type}}  </span>
        <button
          type="button"
          @click="logout"
          class=" mr-2 mt-4 rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase  shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]  ">
          Logout
        </button>
        
    </div>
  
  </section>
</template>

<script>
import router from '@/router'

export default {
  name: 'DashboardComponent',
  data(){
    return {
      user:{},
      hair:{}
    }
  },
  methods:{
    logout : function(){
      localStorage.token=false
      router.push("/login")
    }
      
  },mounted() {
    fetch('https://dummyjson.com/users/'+localStorage.getItem("userId"))
    .then(res => res.json())
    .then(res=>{
      this.user= res
      this.hair= res.hair
    });
    
  },
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
