export default {
  state: {
    shelter: {
      shelterAddress: 'Приют находится в г. Калуга',
      shelterEmail: 'email@shelter.com',
      shelterInfo:
        'Тут небольшой текст с инфой о приюте Тут небольшой текст с инфой о приюте Тут небольшой текст с инфой о приюте Тут небольшой текст с инфой о приюте Тут небольшой текст с инфой о приюте',
      shelterPhone: '+7 953 326 98 86',
    },
  },
  getters: {
    shelter: s => s.shelter,
  },
};
