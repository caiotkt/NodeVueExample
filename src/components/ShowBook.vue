<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Editar livro
      </h2>
      <b-jumbotron>
        <template slot="header">
          <div class="font-title">
            {{book.title}}
          </div>
        </template>
        <template slot="lead">
          Autor: {{book.author}}<br>
          Descrição: {{book.description}}<br>
          Ano da publicação: {{book.published_year}}<br>
          Editora: {{book.publisher}}<br>
        </template>
        <hr class="my-4">
        <p>
          Data da atualização: {{book.updated_date}}
        </p>
        <b-btn variant="success" @click.stop="editbook(book._id)">Editar</b-btn>
        <b-btn variant="danger" @click.stop="deletebook(book._id)">Excluir</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowBook',
  data () {
    return {
      book: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/book/` + this.$route.params.id).then(response => {
      this.book = response.data
    }).catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    editbook (bookid) {
      this.$router.push({
        name: 'EditBook',
        params: { id: bookid }
      })
    },
    deletebook (bookid) {
      axios.delete('http://localhost:3000/book/' + bookid).then((result) => {
        this.$router.push({
          name: 'BookList'
        })
      }).catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
