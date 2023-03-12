<template>
<div>
<div class="vh-100" >
  <div class="container py-5 h-100" >
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 " >
            <form @submit.prevent="onSubmit">
            <h3 class="mb-5 text-center">Add User</h3>
            
            <label class=" ml-5 mb-2 ">Name</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="text" v-model="user.name" class=" col-lg-9 form-control " placeholder="Name"/>
            </div>
            <label class=" ml-5 mb-2">Email</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="email" v-model="user.email"  class=" col-lg-9 form-control " placeholder="Email"/>
            </div>
            <label class=" ml-5 mb-2">Password</label>

            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="password" v-model="user.password"  class=" col-lg-9 form-control " placeholder="Password" />
            </div>
            <label class=" ml-5 mb-2">Phone Number</label>

            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="number" v-model="user.phone_number"  class=" col-lg-9 form-control" placeholder="Phone Number"/>
            </div>

              
            <div class="d-md-flex   mb-4 py-2">
        <label class=" ml-5 mb-2">Gender:</label>
                  <div class="form-check form-check-inline mb-0 me-4 ml-2" >
                    <input  class="form-check-input" type="radio" v-model="user.gender" name="user.gender" 
                      value="female" />
                    <label class="form-check-label" for="female">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" v-model="user.gender" name="user.gender" 
                      value="male" />
                    <label class="form-check-label" for="male">Male</label>
                  </div>

                  

                </div>
            
            
            <button class="btn btn-outline-success align-items-center  mb-4 d-flex justify-content-center" style=" width:75%; margin:auto auto; color:black" type="submit">Submit</button>
    
        
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
        user:{
        name: '',
        email: '',
        password: '',
        phone_number: '',
        gender: ''
      },
    
      }
    },
    created(){
      if (this.$store.state.token === null) {
                 console.log('no')
                this.$router.push('/login');
                }
    },
    methods:{
      onSubmit () {
        axios.post('http://localhost:3000/admin/create',this.user,{params:{token:this.$store.state.token}})
          .then(() => this.$router.push({path:"/admin/users"}))
          .catch(error => console.log(error))
      }
    }
}

</script>