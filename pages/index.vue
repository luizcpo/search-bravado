<template>
  <Search />
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('loadAndSortUsers');
  }
}
</script>