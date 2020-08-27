<template>
  <div>
    <ul>
      <li>
        <p>Поменять лого</p>
        <input type="file" @change="onFileChange" />
        <div class="preview">
          <img v-if="url" :src="url" />
        </div>
      </li>
      <li>
        <p>Редактировать меню</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminMainInfo',
  data() {
    return {
      url: null,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.preview {
  img {
    width: 150px;
  }
}
li {
  margin-top: 20px;
}
</style>
