<template>
  <div class="home">
    <BooksGrid data-app :books="allBooks" />
    <div class="text-center">
      <v-pagination
        v-model="page"
        class="my-4"
        :length="parseInt((countBooks / 32).toFixed(0))"
        :total-visible="7"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BooksGrid from "@/components/BooksGrid.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    BooksGrid,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: mapGetters(["allBooks", "countBooks"]),
  methods: {
    ...mapActions(["fetchBooks"]),
  },
  created() {
    this.fetchBooks(this.page);
  },
  watch: {
    page: function (newPage) {
      this.fetchBooks(newPage);
    },
  },
};
</script>
