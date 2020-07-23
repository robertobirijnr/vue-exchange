<template>
  <div>
    <HeroComponent />
    <section class="posts">
      <div class="container">
        <div class="posts-type">Latest Posts</div>
        <ExchangeList />
      </div>
    </section>
    <Pagination />
  </div>
</template>

<script>
import HeroComponent from "@/components/hero.vue";
import Pagination from "@/components/pagination.vue";
import ExchangeList from "@/components/exhange/exchangeList.vue";
export default {
  name: "app",
  components: {
    HeroComponent,
    Pagination,
    ExchangeList,
  },
};
</script>
