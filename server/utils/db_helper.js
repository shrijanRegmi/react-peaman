import admin from "../configs/firebaseConfig.js";

const getDataFromCol = async (col, id) => {
  try {
    const ref = admin.firestore().collection(col).doc(id);

    const snap = await ref.get();
    if (snap.exists) {
      const data = snap.data();
      return data;
    }
  } catch (error) {
    throw error;
  }
};

const getDataFromPath = async (path) => {
  try {
    const ref = admin.firestore().doc(path);

    const snap = await ref.get();
    if (snap.exists) {
      const data = snap.data();
      return data;
    }
  } catch (error) {
    throw error;
  }
};

const getListFromRef = async (ref) => {
  const list = [];
  try {
    const snap = await ref.get();
    if (!snap.empty) {
      for (const doc of snap.docs) {
        if (doc.exists) {
          const data = doc.data();
          list.push(data);
        }
      }
    }
  } catch (error) {
    throw error;
  }
  return list;
};

export { getDataFromCol, getListFromRef, getDataFromPath };
