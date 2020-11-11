export default {
  state: {
    mainPageConfig: {
      logo:
        'https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/logos%2Flogo_v_dom_kota.jpg?alt=media&token=e5635bf3-73a7-4b97-bb56-dbee2b013f16',
      introText: 'Приют для бездомных кошек',
      introButtonText: 'Взять котика',
      introVideo: '/assets/video/videoplayback.mp4',
      introImg: '',
      shelterCatImg:
        'https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/main-page-config%2Fshelter%2Fcat-about.jpg?alt=media&token=e9bed123-81c6-4bda-8a3f-1aa8119b960b',
      bankCatImg:
        'https://firebasestorage.googleapis.com/v0/b/vdomkota-6332e.appspot.com/o/main-page-config%2Fbank%2Fcat.jpg?alt=media&token=adb934b0-8ba6-42de-a87d-c7d5542cc3ed',
      bankTitle: 'В добавок мы можете оставить пожертвования',
      helpTitle: 'Вы можете помочь нашему приюту',
      shelterTitle: 'О приюте "В Дом Кота"',
      footerTitleQuestions: 'Вопросы и предложения',
      footerTitleVisit: 'Мы расположены по адресу',
    },
  },
  mutations: {},
  actions: {},
  getters: {
    mainPageConfig: s => s.mainPageConfig,
  },
};
