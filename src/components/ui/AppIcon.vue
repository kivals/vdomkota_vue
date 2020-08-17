<template>
  <img :src="iconSrc" alt="icon" />
</template>

<script>
const iconMap = {
  food: require('../../assets/img/help/food.png'),
  transport: require('../../assets/img/help/transport.png'),
  ball: require('../../assets/img/help/ball.png'),
  bowl: require('../../assets/img/help/bowl.png'),
  shampoo: require('../../assets/img/help/shampoo.png'),
  pills: require('../../assets/img/help/pills.png'),
  medicine: require('../../assets/img/help/medicine.png'),
  collars: require('../../assets/img/help/collars.png'),
  cat: require('../../assets/img/help/cat.png'),
};
export default {
  name: 'AppIcon',
  props: {
    icon: {
      type: String,
      required: true,
      validate: name => Object.keys(iconMap).includes(name),
    },
  },
  computed: {
    iconSrc() {
      return iconMap[this.icon];
    },
  },
};
</script>

<style scoped></style>
