<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">
        <div class="footer__contacts contacts">
          <h3 class="contacts__title footer-title">
            {{ mainPageConfig.footerTitleQuestions }}
          </h3>
          <div class="contacts__email footer-text">
            {{ shelter.shelterEmail }}
          </div>
          <div class="contacts__phone footer-text">
            {{ shelter.shelterPhone }}
          </div>
        </div>
        <div class="footer__location location">
          <h3 class="location__title footer-title">
            {{ mainPageConfig.footerTitleVisit }}
          </h3>
          <div class="location__spot footer-text">
            {{ shelter.shelterAddress }}
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
      mainPageConfig: {
        footerTitleQuestions: '',
        footerTitleVisit: '',
      },
      shelter: {
        shelterAddress: '',
        shelterEmail: '',
        shelterPhone: '',
      },
      imagePath: require('@/assets/img/footer/cat.jpg'),
    };
  },
  mounted() {
    this.shelter = this.$store.getters.shelter;
    this.mainPageConfig = this.$store.getters.mainPageConfig;
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
    @media (max-width: $md1+px) {
      height: 200px;
    }
    @media (max-width: $md2+px) {
      height: 150px;
    }
    @media (max-width: $md3+px) {
      display: none;
    }
  }
  @media (max-width: $md2+px) {
    padding-top: 55px;
  }
  @media (max-width: $md3+px) {
    padding-top: 35px;
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
      width: 10px;
      height: 10px;
      background-size: cover;
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
  @media (max-width: $md1+px) {
    font-size: 25px;
    line-height: 35px;
    letter-spacing: 0.05em;
    margin-bottom: 20px;
  }
  @media (max-width: $md2+px) {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.04em;
    margin-bottom: 15px;
  }
  @media (max-width: $md3+px) {
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.02em;
    margin-bottom: 10px;
  }
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
  @media (max-width: $md1+px) {
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 0.04em;
    padding-left: 55px;
    margin-bottom: 25px;
  }
  @media (max-width: $md2+px) {
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 0.03em;
    padding-left: 55px;
    margin-bottom: 15px;
  }
}
</style>
