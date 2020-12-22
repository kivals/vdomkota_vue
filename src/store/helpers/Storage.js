import Vue from 'vue';

export class Storage {
  constructor() {
    this.storageRef = Vue.$storage.ref();
  }
  static getInstance() {
    return Storage.instance == null
      ? (Storage.instance = new Storage())
      : Storage.instance;
  }

  /**
   * Процесс загрузки файла
   * @param path путь в Storage
   * @param file файл
   * @returns объект мониторинга процесса загрузки
   */
  putFile(path, file) {
    if (!path || !file) {
      return;
    }
    const resourceRef = this.storageRef.child(path);
    return resourceRef.put(file);
  }

  // stateChangedHandler(snapshot) {
  //   console.log('snapshot');
  //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //   let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //   console.log('Upload is ' + progress + '% done');
  //   switch (snapshot.state) {
  //     case 'PAUSED':
  //       console.log('Upload is paused');
  //       break;
  //     case 'RUNNING':
  //       console.log('Upload is running');
  //       break;
  //   }
  // }
  //
  // //TODO Обработка ошибок
  // errorHandler(error) {
  //   console.log('error = ' + error.code);
  //   // A full list of error codes is available at
  //   // https://firebase.google.com/docs/storage/web/handle-errors
  // }
  //
  // successHandler() {
  //   // Upload completed successfully, now we can get the download URL
  //   console.log('success');
  //   // uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
  //   //   console.log('File available at', downloadURL);
  //   // });
  // }
}
