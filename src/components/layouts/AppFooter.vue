<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">
        <div class="footer__contacts contacts">
          <h3 class="contacts__title footer-title">
            For questions and suggestions
          </h3>
          <div class="contacts__email footer-text">email@shelter.com</div>
          <div class="contacts__phone footer-text">+13 674 567 75 54</div>
        </div>
        <div class="footer__location location">
          <h3 class="location__title footer-title">
            We are waiting for your visit
          </h3>
          <div class="location__spot footer-text">
            Boston, Central Street, 1st(Entrance from the store)
          </div>
        </div>
        <app-div-cover
          class="footer__photo"
          :imagePath="imagePath"
        ></app-div-cover>
      </div>
    </div>
  </footer>
</template>

<script>
import AppDivCover from '@/components/ui/AppDivCover';

export default {
  name: 'AppFooter',
  components: {
    AppDivCover,
  },
  data() {
    return {
      imagePath: require('@/assets/img/footer/cat.jpg'),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 75px;
  background-color: #000000;
  &__body {
    display: flex;
    justify-content: space-between;
  }
  &__contacts {
    flex: 0 1 33.333%;
  }
  &__location {
    flex: 0 1 33.333%;
  }
  &__photo {
    flex: 0 1 33.333%;
    height: 250px;
  }
}
.contacts {
  &__email {
    &:before {
      background: url('~@/assets/img/icons/email.png') 0 0 no-repeat;
    }
  }
  &__phone {
    &:before {
      background: url('~@/assets/img/icons/phone.png') 0 0 no-repeat;
    }
  }
}
.location {
  &__spot {
    &:before {
      background: url('~@/assets/img/icons/spot.png') 0 0 no-repeat;
    }
  }
}
.footer-title {
  font-size: 35px;
  line-height: 45px;
  letter-spacing: 0.06em;
  margin-bottom: 30px;
  color: #fff;
}
.footer-text {
  position: relative;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.06em;
  color: #f1cdb3;
  padding-left: 55px;
  margin-bottom: 35px;
  &:before {
    content: '';
    position: absolute;
    height: 40px;
    width: 40px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
}
</style>
