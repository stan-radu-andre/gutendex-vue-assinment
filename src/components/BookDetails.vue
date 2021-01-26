<template>
  <v-col cols="auto">
    <v-dialog transition="dialog-bottom-transition" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-5"
          outlined
          rounded
          small
          v-bind="attrs"
          v-on="on"
          @click="fetchBook()"
          >See details</v-btn
        >
      </template>
      <template v-slot:default="dialog">
        <v-card color="#1F7087" dark height="470px">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div class="book-details">
              <v-card-title
                class="text-center d-block"
                v-text="openedBook.title"
              ></v-card-title>

              <v-card-subtitle
                class="b0"
                :key="author.name"
                v-for="author in openedBook.authors"
                v-text="author ? author.name : ''"
              ></v-card-subtitle>
              <v-card-text class="text--primary text-left">
                <ul>
                  <li
                    :key="bookshelf"
                    v-for="bookshelf in openedBook.bookshelves"
                  >
                    {{ bookshelf }}
                  </li>
                </ul>
              </v-card-text>
            </div>

            <v-avatar class="ma-3" width="265px" height="400px" tile>
              <v-img
                max-width="100%"
                :src="openedBook.formats['image/jpeg']"
              ></v-img>
            </v-avatar>
          </div>
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BookDetails",
  data() {
    return {
      dialog: false,
    };
  },
  computed: mapGetters(["openedBook"]),
  methods: {
    ...mapActions(["fetchBooks", "fetchBookById"]),
    fetchBook() {
      this.fetchBookById(this.bookId);
    },
  },
  props: ["bookId"],
};
</script>

<style>
</style>
