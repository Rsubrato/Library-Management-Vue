<template>
<div>
    
<br><br>

<div class="row justify-content-center">
<table class="table table-hover" style="width:70%">
  <thead>
    <tr>
      <th >S.No.</th>
      <th>Name</th>
      <th>Author</th>
      <th >Pages</th>
      <th >Copies</th>
      <th >Language</th>
      <th >Availability</th>
      <th >Status</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(book,index) in books" v-bind:key="book._id">
     <th scope="row" >{{index+1}}</th>
      <td>{{book.title}}</td>
      <td>{{book.author}}</td>
      <td>{{book.pages}}</td>
      <td>{{book.copies}}</td>
      <td>{{book.language}}</td>
      <td>{{book.bstatus}}</td>
      <td v-if="book.active==true">
      <button class="btn btn-outline-success" @click.prevent="request(index)">Request</button>
      </td>
      <td v-else>
      <button class="btn btn-outline-danger" @click.prevent="returnbook(index)">Return</button>
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
              books:[],
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
             
              axios.get("http://localhost:3000/students/books",{params:{token:this.$store.state.token}})
            .then(response=>{
              this.books=response.data;
              })
            },
            request(index){
              axios.post("http://localhost:3000/students/request",null,{params:{token:this.$store.state.token,bid:this.books[index]._id}})
              this.get1();
            },
            returnbook(index){
              axios.post("http://localhost:3000/students/return",null,{params:{token:this.$store.state.token,bid:this.books[index]._id}})
              .then(()=>{
                 this.get1();
              })
             
            }
          }
}      
</script>
