<template>
  <div class="home">
    <Message msg="Welcome to the Framed App home page"/>
  </div>
</template>

<script>
import Message from '@/components/Message.vue';

export default {
  name: 'FramedAppHome',
  components: {
    Message,
  },
};
</script>
