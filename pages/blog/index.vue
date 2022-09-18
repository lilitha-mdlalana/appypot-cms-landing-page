<script setup>
const { $butter } = useNuxtApp();

const blogPosts = ref([]);

blogPosts.value = await $butter.post
  .list({
    page: 1,
    page_size: 10,
  })
  .then((resp) => resp.data.data)
  .catch((error) => {
    console.log(error);
    return [];
  });
</script>

<template>
  <section class="mx-20 mt-2">
    <h1 class="font-bold text-3xl max-w-[400px]">
      We are always leveling up. Learn more from our team
    </h1>
    <ul
      class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16"
    >
      <li v-for="post in blogPosts" :key="post.id">
        <nuxt-link :to="`blog/articles/${post.slug}`">
          <SharedPostCard
            :post-title="post.title"
            :post-summary="post.summary"
            :post-image="post.featured_image"
            :post-image-alt="post.featured_image_alt"
            :post-slug="post.slug"
          />
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
