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
      <th >Status</th>
      <th >Update</th>
      <th >Delete</th>
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
      <td>
      <button class="btn btn-outline-success" @click.prevent="edit(index)">Edit</button>
      </td>
      <td>
      <button class="btn btn-outline-danger" @click.prevent="dele(index)">Delete</button>
      </td>
    </tr>
  </tbody>
  <tfoot>
      <tr>
        <td colspan="8" align="center"><router-link to="/admin/books/add"><button class="btn btn-outline-primary">Add Books</button></router-link></td>
      </tr>
    </tfoot>
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
              // if(this.$store.getters.getToken===null){
              if (this.$store.state.token === null) {
                 console.log('no')
                this.$router.push('/login');
                }
                // console.log(this.$store.state.text);
                // // this.$store.commit('setToken','sample');
                // console.log(this.$store.state.text);
            axios.get("http://localhost:3000/admin/books",{params:{token:this.$store.state.token}})
            .then(response=>{
              this.books=response.data;
              // console.log(response)
              })
            },
            edit(index){
              this.$router.push({path:"/admin/book/update/"+this.books[index]._id})
            },
            dele(index){
              axios.delete("http://localhost:3000/admin/books/delete",{params:{bid:this.books[index]._id,token:this.$store.state.token}})
              .then(result=>
              this.get1()
              );
            }
          }
}      
</script>
