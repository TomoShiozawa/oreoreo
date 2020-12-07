<template>
  <h3>オの数：{{ oCount }}</h3>
  <h3>レの数：{{ reCount }}</h3>
  <h3>実現に必要なオレオの数：{{ oreoCount }}</h3>
</template>

<script>
export default {
  name: 'OreoCounter',
  props: {
    oreoStack: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  computed: {
    oCount() {
      return this.oreoStack.filter((item) => item === 'オ').length;
    },
    reCount() {
      return this.oreoStack.filter((item) => item === 'レ').length;
    },
    oreoCount() {
      const oSetCount = Math.ceil(this.oCount / 2);
      return oSetCount > this.reCount ? oSetCount : this.reCount;
    },
  },
};
</script>

<style></style>
