<template>
<div>
    
<br><br>

<div class="row justify-content-center">
<table class="table table-hover" style="width:70%">
  <thead>
    <tr>
      <th >S.No.</th>
      <th>Name</th>
      <th>Email</th>
      <th >Phone Number</th>
      <th >Gender</th>
      <th >Role</th>
      <th >Update</th>
      <th >Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user,index) in users" v-bind:key="user._id">
     <th scope="row" >{{index+1}}</th>
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone_number}}</td>
      <td>{{user.gender}}</td>
      <td>{{user.role}}</td>
      <td>
            <button class="btn btn-outline-success" @click.prevent="update(index)">Update</button>
      </td>
      <td>
            <button  class="btn btn-outline-danger" @click.prevent="dele(index)">Delete</button>
      </td>
    </tr>
  </tbody>
  <tfoot>
      <tr>
        <td colspan="7" align="center"><router-link to="/admin/users/add"><button  class="btn btn-outline-primary">Add Users</button></router-link></td>
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
              users:[],
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
           console.log(this.$store.state.text);
            axios.get("http://localhost:3000/admin/users",{params:{token:this.$store.state.token}})
            .then(response=>{
              //  console.log(response.data)
              this.users=response.data;
              }
              )
            },
            update(index){
              this.$router.push({path:"/admin/user/update/"+this.users[index]._id})
            },
            dele(index){
              axios.delete("http://localhost:3000/admin/users/delete",{params:{token:this.$store.state.token,uid:this.users[index]._id}})
              .then(()=>this.get1());
            }
          }
}      
</script>
