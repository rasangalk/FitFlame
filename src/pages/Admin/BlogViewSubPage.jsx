import React, { useEffect, useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import LoadingSpinner from "../../components/Admin/LoadingSpinner";

const BlogViewSubPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState("");
  const [imageURL, setimageURL] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setBlogData(location.state);

    const storage = getStorage();
    const imageRef = ref(storage, `BlogImages/${location.state.image}`);

    getDownloadURL(imageRef)
      .then((url) => {
        setimageURL(url);
      })
      .catch((error) => {
        console.log("error", error);
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const renderPage = (
    <>
      <Box
        sx={{
          mx: "60px",
          my: "30px",
        }}
      >
        <h1 sx={{ textTransform: "capitalize" }}>{blogData.title}</h1>
        <div>
          <img src={imageURL} alt="demo" style={{ height: "200px" }} />
        </div>
        <Box
          sx={{
            mt: "5px",
            height: "200px",
            overflow: "hidden",
            overflowY: "scroll",
            overflow: "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              background: "white",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#2A3036",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        >
          <span>{blogData.content}</span>
        </Box>

        <Grid container spacing={2} sx={{ mt: "0" }}>
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
            >
              edit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
  return <>{isLoading ? <LoadingSpinner /> : renderPage}</>;
};

export default BlogViewSubPage;
