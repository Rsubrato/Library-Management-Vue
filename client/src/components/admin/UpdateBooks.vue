<template>
<div>
<div class="vh-100" >
  <div class="container py-5 h-100" >
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 " >
<form @submit.prevent="onSubmit">
            <h3 class="mb-5 text-center">Add Books</h3>
            <label class=" ml-5 mb-2">Title</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
                              

              <input type="text" v-model="books.title" class=" col-lg-9 form-control " :placeholder="books.title"/>
            </div>

            <label class=" ml-5 mb-2">Author</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="text" v-model="books.author" class=" col-lg-9 form-control " :placeholder="books.author"/>
            </div>

            <label class=" ml-5 mb-2">Copies</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="number" v-model="books.copies" class=" col-lg-9 form-control " :placeholder="books.copies" />
            </div>

            <label class=" ml-5 mb-2">Number of Pages</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="number" v-model="books.pages" class=" col-lg-9 form-control" :placeholder="books.pages"/>
            </div>

            <label class=" ml-5 mb-2">Language</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="number" v-model="books.language" class=" col-lg-9 form-control" :placeholder="books.language"/>
            </div>

            <button class="btn btn-primary align-items-center btn-block mb-4 d-flex justify-content-center" 
            style="background-color: lightgreen; width:75%; margin:auto auto " 
            type="submit">Submit</button>
    
        
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
        bid:'',
        books:{
        title: '',
        author: '',
        copies: '',
        pages: '',
        language: '',
        
      }
      }
     
    },
    created(){
      if (this.$store.state.token === null) {
                 console.log('no')
                this.$router.push('/login');
                }
    //  this.token=localStorage.getItem('token');

    //  console.log(temp);
    // console.log(this.$route.params);
    const bid=this.$route.params.id;
    console.log(bid);
            axios.get("http://localhost:3000/admin/books/update",{params:{bid:bid,token:this.$store.state.token}})
            .then(response=>{
              this.books=response.data;
              //  console.log(this.books);
              // console.log(response)
              })
             
          },
    methods:{
      onSubmit () {
        axios.post('http://localhost:3000/admin/books/update',null,{params:{token:this.$store.state.token,bid:this.books._id,title:this.books.title,author:this.books.author,pages:this.books.pages,copies:this.books.copies,language:this.books.language}})
          .then(() => 
          this.$router.push({path:"/admin/books"}))
          .catch(error => console.log(error))
      }
    }
}

</script>
