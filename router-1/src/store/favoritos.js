import { defineStore } from "pinia";

export const useFavoritoStore = defineStore("favoritos", {
  state: () => ({
    favoritos: [],
  }),

  actions: {
    add(poke) {
      this.favoritos.push(poke);
    },
    remove(id) {
      this.favoritos = this.favoritos.filter((item) => item.id !== id);
    },
  },
});
