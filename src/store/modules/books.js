import axios from 'axios';
import { defaultBook } from '../constants';
const state = {
  booksPage: {
    count: 0,
    next: '',
    previous: '',
    results: [defaultBook],
  },
  visitedBooks: new Set(),
  openedBook: defaultBook,
};

const getters = {
  allBooks: (state) => state.booksPage.results,
  countBooks: (state) => parseInt(state.booksPage.count),
  openedBook: (state) => state.openedBook,
  visitedBooks: (state) => state.visitedBooks,
};

const actions = {
  async fetchBooks({ commit }, page = 1) {
    const response = await axios.get(
      `https://gutendex.com/books/?page=${page}`
    );
    commit('setBooks', response.data);
  },
  async fetchBookById({ commit }, id = 0) {
    const response = await axios.get(`https://gutendex.com/books/${id}`);
    commit('setOpenedBook', response.data);
  },
};

const mutations = {
  setBooks: (state, booksPage) => (state.booksPage = booksPage),
  setOpenedBook: (state, openedBook) => {
    state.openedBook = openedBook;
    state.visitedBooks.add(openedBook);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
