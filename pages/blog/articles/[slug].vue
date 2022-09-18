<script setup>
const { $butter } = useNuxtApp();
const route = useRoute();

const { data: post } = useAsyncData("posts", async () => {
  try {
    let data = await $butter.post
      .retrieve(route.params.slug)
      .then((response) => response.data.data)
      .catch((error) => console.log(error));
    return data;
  } catch (error) {
    console.log(error.response);
    return [];
  }
});


</script>

<template>
  <main>
    <Head>
      <Title>{{ post.title }}</Title>
      <Meta name="description" :content="post.summary" />
      <Meta property="og:title" :content="post.title" />
      <Meta name="twitter:title" :content="post.title" />
      <Meta property="og:description" :content="post.summary" />
      <Meta name="twitter:description" :content="post.summary" />
      <Meta property="og:image" :content="post.featured_image" />
      <Meta property="twitter:image" :content="post.featured_image" />
    </Head>
    <article class="max-w-[1000px] mx-auto">
      <div
        id="post-body"
        v-html="post.body"
        class="mt-6 first-child:text-3xl"
      ></div>
    </article>
  </main>
</template>
