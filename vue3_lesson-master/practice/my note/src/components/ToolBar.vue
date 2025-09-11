<script setup>
import { ref, onMounted } from "vue";
import { useNoteStore } from "../stores/note_store";
import { useRouter } from "vue-router";

const noteStore = useNoteStore();
const router = useRouter();

const keyword = ref("");
const showSearch = () => {
  const result = noteStore.searchNotes(keyword.value);
  console.log(result);

  router.push({ name: "search" });
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid d-flex justify-content-between">
      <a class="navbar-brand" href="/">
        <img src="../../public/logo.png" alt="" class="logo" />
        <span>My Note</span>
      </a>

      <form class="d-flex" role="search" @submit.prevent="showSearch()">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="keyword"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  width: 4rem;
}
</style>
