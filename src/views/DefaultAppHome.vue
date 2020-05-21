<template>
  <div class="home">
    <Message msg="Welcome to the Default App home page"/>
  </div>
</template>

<script>
import Message from '@/components/Message.vue';

export default {
  name: 'DefaultAppHome',
  components: {
    Message,
  },
};
</script>
