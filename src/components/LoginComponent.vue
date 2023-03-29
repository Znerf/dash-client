<template>
  <section class="h-screen">
  <div class="h-full">
    <div class=" m-auto flex flex-wrap items-center justify-center lg:justify-between">

      <div class="m-auto md:w-8/12 lg:w-5/12 xl:w-5/12 rounded overflow-hidden shadow-lg p-20">
        <h1 class="font-bold mb-10">Login</h1>

        <form>

          <!-- Email input -->
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input  v-model="email" type="text" id="first_name" class=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required>
          </div>

          <!-- Password input -->
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input  v-model="password" type="password" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" required>
          </div>

          <div class="mb-6 flex items-center justify-between">
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem]  rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 hover:cursor-pointer "
                type="checkbox" />
              <label
                class="inline-block pl-[0.12rem] hover:cursor-pointer">
                Remember me
              </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <div class="text-center lg:text-left">
            <button
              type="button"
              @click="submitForm"
              class="m-auto inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 ">
              LOGIN
            </button>
            <p class="mt-2 mb-0 pt-1 text-sm font-semibold">
              Don't have an account?
              <a href="#">Register</a>
            </p>
            <!-- <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </p> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'LoginComponent',
  methods: {
    submitForm() {
      alert('Login Request successfully submitted')
    },
  },
  data() {
    return {
      email: '',
      password:''
    }
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
