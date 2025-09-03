<script setup>
// import BMI from "./components/BMI.vue";
// import WatchTest from "./components/WatchTest.vue";
// import WatchEffectTest from "./components/WatchEffectTest.vue";
</script>

<template>
  <div
    class="container border rounded d-flex flex-column justify-content-center align-items-center"
  >
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link :to="{ path: '/' }"
          ><a class="nav-link" href="#">BMI計算</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ path: '/watch' }"
          ><a class="nav-link" href="#">Watch測試</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ path: '/watch-effect' }"
          ><a class="nav-link" href="#">WatchEffect測試</a>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
