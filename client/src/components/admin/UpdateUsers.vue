<template>
<div>
<div class="vh-100" >
  <div class="container py-5 h-100" >
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 " >
            <form @submit.prevent="onSubmit">
            <h3 class="mb-5 text-center">Update Users</h3>
            <!-- <div v-for="user in users" v-bind:key="user._id"> -->
            <label class=" ml-5 mb-2 ">Name</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="text" v-model="users.name" id="name" class=" col-lg-9 form-control " :placeholder='users.name'/>
            </div>
            <label class=" ml-5 mb-2">Email</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="email" v-model="users.email" id="email" class=" col-lg-9 form-control " :placeholder="users.email"/>
            </div>
            <!-- <label class=" ml-5 mb-2">Password</label> -->

            <!-- <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="password" v-model="user" id="password" class=" col-lg-9 form-control " placeholder="Password" />
            </div> -->
            <label class=" ml-5 mb-2">Phone Number</label>

            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="number" v-model="users.phone_number" id="phone_number" class=" col-lg-9 form-control" :placeholder="users.phone_number"/>
            </div>
            <label class=" ml-5 mb-2">Role</label>

            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="text" v-model="users.role" id="role" class=" col-lg-9 form-control" :placeholder="users.role"/>
            </div>

              
            <div class="d-md-flex   mb-4 py-2">
        <label class=" ml-5 mb-2">Gender:</label>
                  <div class="form-check form-check-inline mb-0 me-4 ml-2" >
                    <input  class="form-check-input" type="radio" v-model="users.gender" name="user.gender" id="user.gender"
                      value="Female"  />
                    <label class="form-check-label" for="Male">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" v-model="users.gender" name="users.gender" id="user.gender"
                      value="Male"  />
                    <label class="form-check-label" for="Male">Male</label>
                  </div>

                  

                </div>

        <!-- </div> -->
            
            <button class="btn btn-outline-success align-items-center btn-block mb-4 d-flex justify-content-center" style="width:75%; margin:auto auto " type="submit">Submit</button>
    
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
        uid:'',
        users:{
        name: '',
        email: '',
        password: '',
        phone_number: '',
        gender: '',
        role:'',
      }
        //  users:[],
      }
     
    },
    created(){
      if (this.$store.state.token === null) {
                 console.log('no')
                this.$router.push('/login');
                }
      // this.token=localStorage.getItem('token');
    //  console.log(temp);
    // console.log(this.$route.params);
    const uid=this.$route.params.id;
    // console.log(uid);
            axios.get("http://localhost:3000/admin/users/update",{params:{uid:uid,token:this.$store.state.token}})
            .then(response=>{
              this.users=response.data;
              //  console.log(this.users);
              // console.log(response)
              })
             
          },
    methods:{
      onSubmit () {
        axios.post('http://localhost:3000/admin/users/update',null,{params:{token:this.$store.state.token,uid:this.users._id,name:this.users.name,email:this.users.email,phone_number:this.users.phone_number,gender:this.users.gender,role:this.users.role}})
          .then(res => 
         this.$router.push({path:"/admin/users"}))
          .catch(error => console.log(error))
      }
    }
}

</script>
