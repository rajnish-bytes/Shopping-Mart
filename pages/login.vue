<template>
            <LoginBox />
</template>

<script setup>
definePageMeta({
      layout: 'custom',
      middleware: 'not-hit-login-page'
})
</script>