<template>
    <div>
      Quantidade de livros: {{ bookCount }}
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'BookList',
  data () {
    return {
      bookCount: null
    }
  },
  created () {
    this.getBookData()
  },
  methods: {
    getBookData () {
      axios.get('http://localhost:3000/book/sig').then(response => {
        console.log(response)
        this.bookCount = response.data
      })
    }
  }
}
</script>
