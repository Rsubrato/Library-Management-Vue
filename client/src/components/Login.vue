<template>
<div>

<div class="vh-100" >
  <div class="container py-5 h-100" >
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center" >
          <form @submit.prevent="onSubmit">
            <h3 class="mb-5">Log in</h3>
  
            <div class="form-outline mb-4">
              <input type="email" v-model="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Email"/>
            </div>

            <div class="form-outline mb-4">
              <input type="password" v-model="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Password" />
            </div>
    
            <button class="btn btn-outline-success btn-lg btn-block" style=" color:black" type="submit">Login</button>

        
          </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>


<script>
import axios from 'axios';
export default {
    data () {
      return {
        email: '',
        password: '',
      }
    },
    methods:{
      // ...mapMutations(['setUser','setToken']),
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
        axios.post('http://localhost:3000/login',formData)
          .then((res) => {
            // localStorage.setItem('token',res.data.token);
            // console.log(this.$store.state.token);
            this.$store.commit("setToken",res.data.token);
            // this.$store.dispatch("changeToken",res.data.token);
            // console.log(this.$store.state.token);
            // console.log(this.$store.getters.getToken);
            // this.setUser(res.data.user);
            // this.$store.setToken(res.data.token);
            // this.$router.push('/admin/books');
             window.location.replace("http://localhost:8080")
      })
          .catch(error => console.log(error))
      }
    }
}

</script>
