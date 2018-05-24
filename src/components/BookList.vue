<template>
  <b-row>
    <b-col cols="12">
      <h2 class="font-title">
        Listagem de livros
      </h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <td>Título</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="book" v-for="book in books">
            <td>{{ book.title }}</td>
            <td><button class="btn" @click.stop="details(book)">Detalhes</button></td>
          </tr>
        </tbody>
      </table>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'BookList',
  data () {
    return {
      fields: {
        title: { label: 'Titulo', sortable: true },
        actions: { label: 'Ações', 'class': 'text-center' }
      },
      books: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/book`).then(response => {
      this.books = response.data
    }).catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (book) {
      this.$router.push({
        name: 'ShowBook',
        params: { id: book._id }
      })
    }
  }
}
</script>
