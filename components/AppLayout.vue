<script setup lang="ts">
const alpine = useAppConfig().alpine;
defineProps({
  padded: {
    type: Boolean,
    default: true
  }
});

useHead({
  title: "Rohit's Blog",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png"
    }
  ]
});

useSeoMeta({
  title: "Rohit Prakash's Blog",
  ogTitle: "Rohit Prakash's Blog",
  ogDescription:
    "A deep dive into random shit ranging from OCaml to Brioche buns.",
  ogImage: "/og.png",
  ogUrl: "blog.rohitprakash.dev",
  twitterCard: "summary_large_image",
  twitterTitle: "Rohit Prakash's Blog",
  twitterDescription:
    "A deep dive into random shit ranging from OCaml to Brioche buns.",
  twitterImage: "/og.png"
});

useContentHead(alpine as any);
</script>

<template>
  <Container class="app-layout">
    <AppLoadingBar />
    <AppHeader v-if="alpine.header" />
    <slot />
    <AppFooter v-if="alpine.footer" />
  </Container>
</template>

<style lang="ts" scoped>
css({
  '.app-layout': {
    minWidth: '{size.xs}'
  }
})
</style>
