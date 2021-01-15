export default {
  state: {
    shelter: {
      shelterAddress: 'Калуга, ул. Баррикад 157 (вход со двора)',
      shelterEmail: 'email@shelter.com',
      shelterInfo: 'Тут небольшой текст с инфой о приюте Тут небольшой текст с инфой о приюте Тут небольшой текст с инфой о приюте Тут небольшой текст с инфой о приюте Тут небольшой текст с инфой о приюте',
      shelterPhone: '+13 674 567 75 54',
    },
  },
  getters: {
    shelter: s => s.shelter,
  },
};
