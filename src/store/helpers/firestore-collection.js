import Vue from 'vue';
/**
 * Класс для работы с коллекцией Firestore
 */
export class FirestoreCollection {
  constructor(collectionName) {
    this._ref = Vue.$db.collection(collectionName);
  }

  /**
   * Вернуть документ из FireStore
   * @param docName имя документа в Firestore
   * @returns объект документа
   */
  async getDocRequest(docName) {
    let data = {};
    const docRef = this._ref.doc(docName);
    const doc = await docRef.get();
    if (doc.exists) {
      data = doc.data();
    }
    return data;
  }

  /**
   * Вернуть все документы из коллекции
   * @returns набор документов
   */
  async getAllDocsRequest() {
    let docs = [];
    const querySnapshot = await this._ref.get();
    querySnapshot.forEach(function(doc) {
      docs.push(doc.data());
    });
    return docs;
  }

  async saveDocRequest(docName, payload) {
    const docRef = this._ref.doc(docName);
    await docRef.set(payload);
  }
}
