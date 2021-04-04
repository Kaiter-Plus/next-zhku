<template>
  <div class="page-header">
    <div class="page-header__left" @click="$emit('back')">
      <i class="iconfont icon-zuo"></i>
      <div class="page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageHeader',

    props: {
      title: {
        type: String,
        default: '返回'
      },
      content: String
    }
  };
</script>
