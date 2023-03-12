<template>
<div>
  
<br>
<br>

<div class="row justify-content-center">
<table class="table table-hover" style="width:70%">
  <thead>
    <tr>
    <th scope="col">S.No.</th>
      <th scope="col">Name</th>
      <th scope="col">Author</th>
      <th scope="col">Pages</th>
      <th scope="col">Copies</th>
      <th scope="col">Language</th>
      <th scope="col">Status</th>
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
   methods: {
    clear() {
      localStorage.clear();
      this.$router.push('/');
    },
    
  },
  created() {
    console.log('Hello');
    axios.get('http://localhost:3000/')
      .then(res => {
        this.books=res.data;
      })
  },
}      
</script>
