import { collectionRef } from './firebaseConfigAdmi.js';

const updatedImages = [
  { id:'1NEdZzDc1VlMEKfE1x9z', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F12-z.jpg?alt=media&token=4efe451c-2da0-4528-aa53-d571ab08daf4' },
  { id:'HSHiwm8kkT1W8qSuib4D', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F6-z.webp?alt=media&token=c0548243-9360-44c1-84d4-37fd969bf068' },
  { id:'I8mPOeq08eY3vq8p2N3E', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F10-z.jpg?alt=media&token=fe741136-ee1b-412f-a99c-9756367568f4'},
  { id:'I9NzTxqnLxf4YMf8J3R1', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F7-z.jpg?alt=media&token=e71803cb-c454-4fcf-90e8-aee3c02b4a81'},
  { id:'KOJPpqDJbiNuGZmwYO74', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F3-z.jpg?alt=media&token=247b865e-0649-4a99-bc9e-dc2c51abb251'},
  { id:'RGIGPZghgqUSdyf746e1', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F1-z.jpg?alt=media&token=634b26fd-618d-4bcd-b3b9-b99ec2b1ee75'},
  { id:'VEjgAl2JWeZe2g4xTx7b', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F9-z.webp?alt=media&token=a2ad7a34-40f2-4fec-a269-231dc55084c8'},
  { id:'VhF9cHfez9yz2YFlxaGE', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F14-z.jpg?alt=media&token=9037a1be-9734-4e44-9ab2-ce3482f614fa'},
  { id:'WCBkmiwBFBquBPDAJ32S', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F15-z.jpg?alt=media&token=a305bffe-2dc2-4b43-9e6f-021fba190b1b'},
  { id:'ZHxjgFcI3ldMFZFO8Rm6', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F4-z.jpg?alt=media&token=83039731-e355-4ca7-95f4-26e437e3558b'},
  { id:'gxdR1xJC4ovr4RP6qGnR', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F11-z.jpg?alt=media&token=955f77d5-f85f-425a-9953-fa39cd96cf9d'},
  { id:'og8YVypmemHx5zalDpfB', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F13-z.jpg?alt=media&token=2438433a-daa0-4ecc-b1c6-80e928efd530'},
  { id:'swpAQBhTVHJ0y2Tfg6jr', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F5-z.jpg?alt=media&token=2944d39a-e92f-4c94-87c2-54f743bedfd7'},
  { id:'vVD3hvuaAuT4KCFsj7S3', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F2-z.jpg?alt=media&token=12422bd3-0475-4bdf-9139-8d2c28942693'},
  { id:'yGxxhjT2TSAZEJwtuKAy', image:'https://firebasestorage.googleapis.com/v0/b/nei-ecommerce.appspot.com/o/products%2F8-z.webp?alt=media&token=640a18c9-d9f0-4108-87f8-875ad96f9238'},
];

export async function updateImages() {
  const updatePromises = updatedImages.map(async (item) => {
    const docRef = collectionRef.doc(item.id);
    try {
      await docRef.update({ image: item.image });
      console.log(`Documento ${item.id} actualizado correctamente.`);
    } catch (error) {
      console.error(`Error actualizando documento ${item.id}:`, error);
    }
  });

  await Promise.all(updatePromises);
  console.log("Todas las imágenes han sido actualizadas.");
}
