<template>
  <div class="grid-container">
    <v-container fluid>
      <v-row>
        <v-col
          v-for="book in books"
          :key="book.title"
          class="col-xlg-3 col-lg-4 col-md-6 col-12"
        >
          <v-card color="#1F7087" dark height="260px">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="book-details">
                <v-card-title
                  id="book-title"
                  v-text="book.title"
                ></v-card-title>
                <v-card-subtitle
                  class="b0 mt-1"
                  :key="author.name"
                  v-for="author in book.authors"
                  v-text="author ? author.name : ''"
                ></v-card-subtitle>
                <v-btn
                  class="ma-5"
                  outlined
                  rounded
                  small
                  @click="openBookDetails(book.id)"
                  >See details</v-btn
                >
              </div>
              <v-avatar class="ma-3" width="170px" height="240px" tile>
                <v-img
                  max-width="100%"
                  :src="book.formats['image/jpeg']"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <BookDetails :bookId="bookId" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vuetify from "vuetify";
import BookDetails from "./BookDetails";
export default {
  name: "BooksGrid",
  vuetify: new Vuetify(),
  data() {
    return {
      bookId: 0,
    };
  },
  components: { BookDetails },
  props: ["books"],
  methods: {
    openBookDetails(bookId) {
      this.bookId = bookId;
    },
  },
};
</script>

<style>
.grid-container {
  height: 90vh;
  overflow: auto;
}
.book-details {
  width: 50%;
}
#book-title {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 1.1rem;
  max-height: 95px;
  font-size: 1.2rem;
  line-height: 1.6rem;
  white-space: inherit;
  overflow: hidden;
  word-break: break-word;
}
</style>