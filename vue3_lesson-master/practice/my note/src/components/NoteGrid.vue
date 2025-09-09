<script setup>
import { ref } from "vue";
import { useNoteStore } from "../stores/note_store";
import { storeToRefs } from "pinia";

const noteStore = useNoteStore();
</script>
<template>
  <main id="result" class="container mt-4">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="note in noteStore.pinnedNotes">
        <div class="card">
          <div class="card-header">
            <i
              class="fa-solid fa-thumbtack me-3 rotate"
              @click="noteStore.markPinned(note.id)"
            ></i>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="card-text">
              {{ note.content }}
            </p>
          </div>
          <div class="card-footer text-body-secondary text-end">
            <i
              class="icon fa-solid fa-trash ms-2"
              @click="noteStore.deleteItem(note.id)"
            ></i>
          </div>
        </div>
      </div>
      <div class="col" v-for="note in noteStore.allNotes">
        <div class="card">
          <div class="card-header">
            <i
              class="fa-solid fa-thumbtack me-3"
              @click="noteStore.markPinned(note.id)"
            ></i>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="card-text">
              {{ note.content }}
            </p>
          </div>
          <div class="card-footer text-body-secondary text-end">
            <i
              class="icon fa-solid fa-trash ms-2"
              @click="noteStore.deleteItem(note.id)"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card-frame .fa-thumbtack {
  position: relative;
  z-index: 3;
  top: 30px;
  left: 10px;
  cursor: pointer;
}
.card {
  transition: all 0.3s;
}
.card:hover {
  background-color: rgb(235, 235, 235);
  box-shadow: 1px 1px 10px #999;
}

.rotate {
  top: 10px;
  left: 10px;
  color: red;
  transform: rotate(45deg);
}
</style>
