<template>
<div>
    
<br><br>

<div class="row justify-content-center">
<table class="table table-hover" style="width:70%">
  <thead>
    <tr>
      <th>Title</th>
      <th>Name</th>
      <th >Approve</th>
      <th >Reject</th>
    </tr>
  </thead>
  <tbody v-for="(mapping,index) in mappings" v-bind:key="mapping._id">
    <tr v-if="mapping.status=='pending'">
     <!-- <th scope="row" >{{index+1}}</th> -->
      <td>{{mapping.books.title}}</td>
      <td>{{mapping.user.name}}</td>
      <td>
     
      <form @click.prevent="approve(index)">
            <button class="btn btn-outline-success" >Approve</button>
              </form> 
             
      </td>
      <td>
      <form @click.prevent="reject(index)">
            <button class="btn btn-outline-danger" >Reject</button>
              </form> 
      </td>
    </tr>
  </tbody>
</table>
</div>
</div>



</template>

<script>
import axios from 'axios';

export default {

          data(){
            return{
              mappings:[],
            }
          },
         created(){
            this.get1();
          },
          methods:{
              get1(){
                if (this.$store.state.token === null) {
                 console.log('no')
                this.$router.push('/login');
                }
                 
                  axios.get("http://localhost:3000/lecturer/approve",{params:{token:this.$store.state.token}})
                  .then(response=>{
                  this.mappings=response.data;
                  })
              },
              approve(index){
                axios.post("http://localhost:3000/lecturer/approve",null,{params:{token:this.$store.state.token,uid:this.mappings[index].user._id, bid:this.mappings[index].books._id}})
                .then(()=>{
                  this.get1();
                })
                
              },
              reject(index){
                axios.post("http://localhost:3000/lecturer/reject",null,{params:{token:this.$store.state.token,uid:this.mappings[index].user._id, bid:this.mappings[index].books._id}})
                .then(()=>{
                  this.get1();
                })
              }
          }
}      
</script>
