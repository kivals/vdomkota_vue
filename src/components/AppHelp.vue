<template>
  <section class="help">
    <div class="container">
      <h2 class="help__title">{{ title }}</h2>
      <div class="help__body">
        <div
          v-for="icon in icons"
          :key="icon.name"
          class="help__item help-item"
        >
          <app-icon class="help-item__img" :icon="icon.name"></app-icon>
          <p class="help-item__description">{{ icon.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppIcon from '@/components/ui/AppIcon';

export default {
  name: 'AppHelp',
  components: {
    AppIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icons: [
        {
          name: 'food',
          description: 'Еда',
        },
        {
          name: 'transport',
          description: 'Транспортировка',
        },
        {
          name: 'ball',
          description: 'Игрушки',
        },
        {
          name: 'bowl',
          description: 'Миски',
        },
        {
          name: 'shampoo',
          description: 'Шампуни',
        },
        {
          name: 'pills',
          description: 'Витамины',
        },
        {
          name: 'medicine',
          description: 'Лекарства',
        },
        {
          name: 'collars',
          description: 'Collars / leashes',
        },
        {
          name: 'cat',
          description: 'Ночлег и передержка',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.help {
  background-color: $main-background-color;
  padding-top: 60px;
  &__title {
    max-width: 316px;
    font-size: 35px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: #545454;
    margin: 0 auto 70px auto;
    text-align: center;
    @media (max-width: $md1+px) {
      font-size: 30px;
      line-height: 40px;
      letter-spacing: 0.05em;
      margin: 0 auto 50px auto;
    }
    @media (max-width: $md2+px) {
      max-width: none;
      margin: 0 auto 40px auto;
    }
    @media (max-width: $md3+px) {
      font-size: 25px;
      line-height: 35px;
      letter-spacing: 0.04em;
      margin: 0 auto 40px auto;
    }
    @media (max-width: $md4+px) {
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.04em;
      margin: 0 auto 35px auto;
    }
  }
  &__body {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__item {
    flex: 0 0 20%;
    margin-bottom: 80px;
    @media (max-width: $md1+px) {
      margin-bottom: 60px;
    }
    @media (max-width: $md2+px) {
      margin-bottom: 50px;
    }
    @media (max-width: $md3+px) {
      flex: 1 1 33.33%;
      margin-bottom: 30px;
    }
    @media (max-width: $md4+px) {
      margin-bottom: 20px;
    }
  }
  @media (max-width: $md2+px) {
    padding: 40px 0;
  }
}

.help-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__img {
    max-width: 50px;
    max-height: 60px;
    margin-bottom: 25px;
    @media (max-width: $md1+px) {
      max-width: 45px;
      max-height: 55px;
      margin-bottom: 20px;
    }
    @media (max-width: $md4+px) {
      max-width: 35px;
      max-height: 45px;
      margin-bottom: 15px;
    }
  }
  &__description {
    font-size: 20px;
    letter-spacing: 0.06em;
    color: #545454;
    @media (max-width: $md1+px) {
      font-size: 15px;
      letter-spacing: 0.05em;
    }
    @media (max-width: $md4+px) {
      font-size: 12px;
      letter-spacing: 0.03em;
    }
  }
}
</style>
