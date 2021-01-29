export default {
  state: {
    bank: {
      bankInfo: 'Яндекс Кошелек: 41001825208986 ',
      bankName: 'Сбербанк',
      cardNumber: '4817 7601 8652 8737',
      accountType: 'Расчетный',
    },
  },
  getters: {
    bank: s => s.bank,
  },
};
