export default {
  state: {
    bank: {
      bankInfo: 'информация о банке',
      bankName: 'Титькоф',
      cardNumber: '8380 2880 8028 8791 7435',
      accountType: 'Расчетный',
    },
  },
  getters: {
    bank: s => s.bank,
  },
};
