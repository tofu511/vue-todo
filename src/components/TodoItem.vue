<template>
  <div class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">
        {{ title }}
      </div>
      <div class="todo-item-content-description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: 'Default Description',
    },
  },
};
</script>
