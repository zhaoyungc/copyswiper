<template>
    <div class="copy-slide-ct">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CopySlide',
}
</script>

<style scoped>
.copy-slide-ct {
    width: 100%;
    height: 100%;
    position: relative;
    flex: none;
    transition: all 1s;
    transform: translateX(0);
}
</style>