<script setup>
defineProps({
  postTitle: String,
  postSummary: String,
  postImage: String,
  postImageAlt: String,
  postSlug: String,
});
</script>

<template>
  <div class="block overflow-hidden rounded-2xl max-h-[500px]">
    <img
      :alt="postImageAlt"
      :src="postImage"
      class="object-cover w-full h-56"
    />

    <div class="p-4 bg-gray-900">
      <p class="text-xs text-gray-500">{{ postSlug }}</p>

      <h5 class="text-sm text-white">
        {{ postTitle }}
      </h5>

      <p class="mt-1 text-xs text-gray-500">
        {{ postSummary }}
      </p>
    </div>
  </div>
</template>
