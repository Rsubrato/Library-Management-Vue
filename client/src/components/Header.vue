<template>

<div>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #F0FFFF;">
  <router-link class="navbar-brand" :to=link>Library Management System</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav mr-auto">
    <div v-if="uid.role=='admin'">

         <router-link class="btn btn-outline-info mr-2" to="/admin/books">Books</router-link>
     
        <router-link class="btn btn-outline-info" to="/admin/users">Users</router-link>
        
      
     
    </div>

    <div v-if="uid.role=='lecturer'">

        <router-link class="btn btn-outline-info" to="/lecturer/approve">Approve</router-link>
      
    </div>

    <div v-if="uid.role=='student'">
    

        <router-link class="btn btn-outline-info" to="/student/books">Books</router-link>
    
       
    </div>
</ul>
  
      <div>
      <ul class="collapse navbar-collapse flex-grow-1 text-right">
    <div v-if="uid==''||uid=='no token'" class="form-inline my-2 my-lg-0">
      <router-link to="/login"><button class="btn btn-outline-primary  mr-2">Log in</button></router-link>
      <router-link to="/signup"><button class="btn btn-outline-primary ">Sign up</button></router-link>
    </div>
    <div v-else class="form-inline my-2 my-lg-0">
      <a class="mr-3">Welcome, {{uid.name}}</a>
      <router-link to="/"><button class="btn btn-outline-dark" @click.prevent="logout">Logout </button></router-link>
    </div>
    </ul>
    </div>
  </div>
</nav>
</div>

</template>

<script>
import axios from 'axios';


export default {
data(){
            return{
              books:[],
              token:'',
              uid:'',
              link:'/'
            }
          },
         created(){
            this.get1();
          },
          methods:{
            get1(){
          if(this.uid!=''||this.$store.state.token!=''){
          axios.get('http://localhost:3000/user',{params:{token:this.$store.state.token}})
          .then(result=>{
            this.uid=result.data;
            this.$store.commit("setRole",result.data.role);
            if(this.uid.role=='admin')
              this.link='/admin/books'
            else if(this.uid.role=='lecturer')
              this.link='/lecturer/approve'
              else if(this.uid.role=='student')
              this.link='/student/books'
            })
          }
        },
              logout() {
                // localStorage.clear();
                this.$store.commit("setToken",'');

                // this.get1();
                window.location.replace("http://localhost:8080")
              },
          }
}

</script>