<template>
  <b-row>
    <b-col cols="12">
      <h2 class="font-title">
        Adicionar livro
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Título">
          <b-form-input id="title" :state="state" v-model.trim="book.title"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Autor">
          <b-form-input id="author" :state="state" v-model.trim="book.author"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Descrição">
            <b-form-textarea id="description"
                       v-model="book.description"
                       placeholder="Enter something"
                       :rows="2"
                       :max-rows="6">{{book.description}}</b-form-textarea>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Ano da publicação">
          <b-form-input id="published_year" :state="state" v-model.trim="book.published_year"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="2"
                  breakpoint="md"
                  label="Editora">
          <b-form-input id="publisher" :state="state" v-model.trim="book.publisher"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Adicionar</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateBook',
  data () {
    return {
      book: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/book`, this.book).then(response => {
        this.$router.push({
          name: 'ShowBook',
          params: { id: response.data._id }
        })
      }).catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
