<template>
  <div class="oreo-stack">
    <div
      v-for="(item, index) in oreoStack"
      :key="index"
      class="p-text-center"
      :class="{ o: item === 'オ', re: item === 'レ' }"
      :style="style(index)"
    />
  </div>
</template>

<script>
export default {
  name: 'OreoStack',
  props: {
    oreoStack: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  methods: {
    style(index) {
      return {
        top: `${index * 5}px`,
        'z-index': this.oreoStack.length - index,
      };
    },
  },
};
</script>
<style scoped>
.oreo-stack {
  position: relative;
}

.o {
  width: 120px;
  height: 60px;
  left: 50%;
  background: #343028;
  border-radius: 50%;
  box-shadow: 0px 2px 3px;
  position: absolute;
}

.re {
  width: 120px;
  height: 60px;
  left: 50%;
  background: #eef2f0;
  border-radius: 50%;
  box-shadow: 0px 2px 3px;
  position: absolute;
}
</style>
