<template>
  <div>
    <BooksGrid data-app :books="visitedBooks" />
  </div>
</template>

<script>
// @ is an alias to /src
import BooksGrid from "@/components/BooksGrid.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "VisitedBooks",
  components: {
    BooksGrid,
  },
  computed: mapGetters(["visitedBooks"]),
  methods: {
    ...mapActions(["fetchBooks"]),
  },
};
</script>
