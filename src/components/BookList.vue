<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Listagem de livros
        <b-link class="btn" href="#/add_book">(Adicionar livro)</b-link>
      </h2>
      <b-table striped hover :items="books" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" class="btn" @click.stop="details(row.item)">Detalhes</b-btn>
        </template>
      </b-table>
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
