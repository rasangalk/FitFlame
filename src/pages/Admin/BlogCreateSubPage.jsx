import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db, storage } from "../../firebase-config";
import { Box, Grid, Button, TextField } from "@mui/material";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import LoadingSpinner from "../../components/Admin/LoadingSpinner";
import { v4 } from "uuid";
import "./style.css";

const BlogCreateSubPage = () => {
  const [imageURL, setImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");

  const userNew = useSelector((state) => state.setUserData.userData);

  const navigate = useNavigate();

  useEffect(() => {
    if (userNew) {
      const userID = JSON.parse(userNew);
      setData(userID);
    }
  }, [userNew]);

  const handlePublish = async (e) => {
    const IName = imageUpload.name + v4();

    e.preventDefault();
    setIsLoading(true);
    try {
      const imageRef = ref(storage, `BlogImages/${IName}`);
      await uploadBytes(imageRef, imageUpload).then(() => {
        getDownloadURL(imageRef).then((url) => {
          addDoc(collection(db, "blogs"), {
            title: title,
            content: content,
            author: data.name,
            date: Timestamp.now(),
            image: url,
            blogID: Math.floor(10000 + Math.random() * 90000),
          });
        });
      });

      if (imageUpload == null) {
        alert("No data");
        return;
      }
      navigate("/blog");
    } catch (err) {
      alert(err);
    }
  };

  const renderPage = (
    <Box
      sx={{
        mx: "60px",
        my: "30px",
      }}
    >
      <TextField
        fullWidth
        label="Title"
        id="Title"
        value={title}
        sx={{ textTransform: "capitalize" }}
        onInput={(e) => {
          e.target.value = e.target.value.slice(0, 65);
          setTitle(e.target.value);
        }}
      />
      <TextField
        fullWidth
        sx={{ my: "20px" }}
        multiline
        rows={12}
        value={content}
        label="Content"
        id="Content"
        onInput={(e) => {
          setContent(e.target.value);
        }}
      />
      <Box sx={{ position: "absolute" }}>
        <Button
          variant="outlined"
          component="label"
          sx={{ border: "1px solid #ccc!important", color: "#2A3036" }}
        >
          <input
            accept="image/*"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
            multiple
            type="file"
          />
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ mt: "80px" }}>
        <Grid item>
          <Button
            style={{
              backgroundColor: "#2A3036",
              padding: "5px 36px",
            }}
            variant="contained"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            style={{
              backgroundColor: "#3C56F5",
              padding: "5px 36px",
            }}
            variant="contained"
            onClick={handlePublish}
          >
            Publish
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
  return (
    <>
      {" "}
      {isLoading ? (
        <LoadingSpinner message={"Please Wait! Your blog is publishing..."} />
      ) : (
        renderPage
      )}
    </>
  );
};

export default BlogCreateSubPage;
