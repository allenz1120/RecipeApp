import { useEffect, useState } from "react";
import "./Newest.css";
import { Link } from "react-router-dom";
import { db, storage } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

function Newest() {
  //  Variable and the function used to set that variable. Inside the useState, define the type of data it is
  const [newest, setNewest] = useState([]);

  const recipesCollection = collection(db, "recipes");

  useEffect(() => {
    getNewest();
  }, []);

  const getNewest = async () => {
    const check = localStorage.getItem("newest");
    if (check) {
      setNewest(JSON.parse(check));
      setImage(JSON.parse(check).image);
    } else {
      try {
        const data = await getDocs(recipesCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        localStorage.setItem("newest", JSON.stringify(filteredData[0]));

        setImage(filteredData[0].image);
        setNewest(filteredData[0]);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const setImage = async (imageUrl) => {
    // Create a storage reference from the path
    const storageRef = ref(storage, imageUrl);
    getDownloadURL(storageRef)
      .then((url) => {
        // Insert url into an <img> tag
        const img = document.getElementById("recipeImage");
        img.src = url;
      })
      .catch((error) => {
        // Handle errors
        console.error("Error getting download URL:", error);
      });
  };

  return (
    <div className="newest">
      <div className="image-wrapper">
        <Link to={"/recipe/" + newest.id}>
          <img id="recipeImage" alt="image"></img>
        </Link>
      </div>
      <div className="description-wrapper">
        <h4>New to the Kitchen</h4>
        <h1>{newest.id}</h1>
        <div className="description">{newest.description}</div>
      </div>
    </div>
  );
}

export default Newest;
