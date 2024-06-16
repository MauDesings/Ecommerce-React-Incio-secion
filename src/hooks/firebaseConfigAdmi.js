import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

// Ruta del archivo de credenciales
const serviceAccountPath = path.resolve('./src/credentials/serviceAccountKey.json');

// Leer y parsear el archivo JSON de credenciales
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();
const collectionRef = db.collection('products');

export { collectionRef };
