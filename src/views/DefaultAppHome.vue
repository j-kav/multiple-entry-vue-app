<template>
    <div class="home">
        <Message msg="Welcome to the Default App home page"/>
        <iframe :src="framedLocation" id="framedAppContainer"></iframe>
    </div>
</template>

<script>
import Message from '@/components/Message.vue';

export default {
  name: 'DefaultAppHome',
  components: {
    Message,
  },
  data: () => ({ framedLocation: `${window.location.href}framed` }),
};
</script>
<style scoped>
    #framedAppContainer {
        border: none;
        width: 100%;
        height: 400px;
    }
</style>
