import { useState, useEffect } from "react";
import { auth } from "../helper/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useLocation, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

const useFirebase = () => {
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      if (!user && location.pathname === "/edit-panel") {
        navigate("/");
      }
    });

    return unsubscribe;
  }, [location.pathname, navigate]);

  const signOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

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

  return { user, signOut, uploadFile };
};

export default useFirebase;
