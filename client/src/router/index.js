import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminHome from '../components/admin/AdminHome'
import AdminUsers from '../components/admin/AdminUsers'
import AddUsers from '../components/admin/AddUsers'
import AddBooks from '../components/admin/AddBooks'
import UpdateUsers from '../components/admin/UpdateUsers'
import UpdateBooks from '../components/admin/UpdateBooks'
import LecturerApprove from '../components/lecturer/Approve'
import Home from '../components/Home'
import StudentBooks from '../components/student/StudentBooks'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/signup',
    component:Signup
  },
  {
    path:'/admin/books',
    component:AdminHome,
    // beforeEnter:(to,from)=>{
      // console.log(to);
      // console.log('hello')
    // },
  },
  {
    path:'/admin/users',
    component:AdminUsers
  },
  {
    path:'/admin/users/add',
    component:AddUsers
  },
  {
    path:'/admin/books/add',
    component:AddBooks
  },
  {
    path:'/admin/user/update/:id',
    component:UpdateUsers
  },
  {
    path:'/admin/book/update/:id',
    component:UpdateBooks
  },
  {
    path:'/lecturer/approve',
    component:LecturerApprove
  },
  {
    path:'/student/books',
    component:StudentBooks
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router