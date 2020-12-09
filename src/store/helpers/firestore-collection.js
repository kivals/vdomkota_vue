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
  async getAllDocsRequest(whereCondition) {
    let docs = [];
    let collectionRef = this._ref;
    if (whereCondition) {
      collectionRef = this._ref.where(
        whereCondition.field,
        whereCondition.operator,
        whereCondition.value,
      );
    }
    const querySnapshot = await collectionRef.get();
    querySnapshot.forEach(function(docRef) {
      docs.push({
        id: docRef.id,
        ...docRef.data(),
      });
    });
    return docs;
  }

  async getWhereDocRequest() {}

  async saveDocRequest(docName, payload, options = {}) {
    const docRef = this._ref.doc(docName);
    await docRef.set(payload, options);
  }
}
