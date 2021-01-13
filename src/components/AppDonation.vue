<template>
  <section class="donation container">
    <app-div-cover
      class="donation__picture"
      :imagePath="bankImg"
    ></app-div-cover>
    <div class="donation__description donation-description">
      <h2 class="donation-description__title">
        {{ title }}
      </h2>
      <p class="donation-description__bank">
        {{ bankName }} / {{ accountType }}
      </p>
      <app-donation-card>8380 2880 8028 8791 7435</app-donation-card>
      <p class="donation-description__text">
        {{ bankInfo }}
      </p>
    </div>
  </section>
</template>

<script>
import AppDivCover from '@/components/ui/AppDivCover';
import AppDonationCard from '@/components/ui/AppDonationCard';

export default {
  name: 'donation',
  components: {
    AppDivCover,
    AppDonationCard,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    bankImg: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
    },
    bankInfo: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.donation {
  padding: 75px 20px;
  display: flex;
  @media (max-width: $md2+px) {
    flex-direction: column;
    align-items: center;
  }

  &__picture {
    width: 40%;
    min-height: 250px;
    margin-right: 60px;
    @media (max-width: $md2+px) {
      display: none;
    }
  }
  &__description {
    flex: 1 1 30%;
  }
  @media (max-width: $md2+px) {
    padding: 45px 20px;
  }
}
.donation-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__title {
    font-size: 35px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: #545454;
    margin-bottom: 25px;
    @media (max-width: $md1+px) {
      font-size: 30px;
      line-height: 40px;
    }
    @media (max-width: $md2+px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media (max-width: $md3+px) {
      font-size: 15px;
      line-height: 20px;
    }
  }
  &__bank {
    font-size: 15px;
    letter-spacing: 0.06em;
    color: #545454;
    margin-bottom: 13px;
  }
  &__text {
    font-size: 12px;
    line-height: 18px;
    font-style: italic;
    color: #b2b2b2;
  }
}
</style>
