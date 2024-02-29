import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FirebaseError } from "firebase/app";

const useFirebase = () => {
  // storage
  const storage = getStorage();

  const uploadFile = async (path: string, file: File) => {
    try {
      const storageRef = ref(storage, path);

      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(storageRef);

      console.log("File uploaded successfully. Download URL:", downloadURL);

      return downloadURL;
    } catch (error: unknown) {
      console.error("Error uploading file:", (error as FirebaseError).message);
    }
  };

  return { uploadFile };
};

export default useFirebase;
