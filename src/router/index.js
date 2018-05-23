import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import ShowBook from '@/components/ShowBook'
import CreateBook from '@/components/CreateBook'
import EditBook from '@/components/EditBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/book/:id',
      name: 'ShowBook',
      component: ShowBook
    },
    {
      path: '/add_book',
      name: 'CreateBook',
      component: CreateBook
    },
    {
      path: '/edit_book/:id',
      name: 'EditBook',
      component: EditBook
    }
  ]
})
