<script lang="ts">
  let count = $state(0)
</script>

<svelte:head>
  <title>Homepage</title>
</svelte:head>

<main class=" w-full h-screen justify-center items-center">
  <button onclick={() => count++}>count: {count}</button>
</main>
