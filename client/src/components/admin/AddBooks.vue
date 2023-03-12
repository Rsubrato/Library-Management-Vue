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
                              

              <input type="text" v-model="book.title" class=" col-lg-9 form-control " placeholder="Enter book Title"/>
            </div>

            <label class=" ml-5 mb-2">Author</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="text" v-model="book.author" class=" col-lg-9 form-control " placeholder="Enter author name"/>
            </div>

            <label class=" ml-5 mb-2">Copies</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="number" v-model="book.copies" class=" col-lg-9 form-control " placeholder="No of books" />
            </div>

            <label class=" ml-5 mb-2">Number of Pages</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="number" v-model="book.pages" class=" col-lg-9 form-control" placeholder="Enter number of pages"/>
            </div>

            <label class=" ml-5 mb-2">Language</label>
            <div class="form-outline mb-4 d-flex justify-content-center">
              <input type="text" v-model="book.language" class=" col-lg-9 form-control" placeholder="Language"/>
            </div>

            <button class=" btn btn-outline-success align-items-center btn-block mb-4 d-flex justify-content-center" 
            style="width:75%; margin:auto auto " 
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
        book:{
        title: '',
        author: '',
        copies: '',
        pages: '',
        language: '',
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
        axios.post('http://localhost:3000/admin/add',this.book,{params:{token:this.$store.state.token}})
          .then(res => 
          this.$router.push({path:"/admin/books"})
          )
          .catch(error => console.log(error))
      }
    }
}

</script>