<template>
  <h1>オレオレオ</h1>
  <div class="p-grid nested-grid">
    <div class="p-col-12 p-md-6">
      <div class="p-col-12">
        <TextArea v-model="inputText" :auto-resize="true" style="width: 100%" />
      </div>
      <div class="p-col-8 p-offset-2">
        <Button label="リセット" style="width: 100%" @click="reset" />
      </div>
    </div>
    <div class="p-col-12 p-md-6">
      <OreoStack :oreo-stack="oreoStack" />
    </div>
  </div>
</template>

<script>
import OreoStack from './OreoStack';

export default {
  name: 'Main',
  components: {
    OreoStack,
  },
  data() {
    return {
      inputText: 'オレオ',
    };
  },
  computed: {
    oreoStack() {
      return this.inputText.split('');
    },
  },
  methods: {
    reset() {
      this.inputText = '';
    },
  },
};
</script>

<style scoped></style>
