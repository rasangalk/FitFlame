import {
  Autocomplete,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
const usersCollectionRef = collection(db, "users");

function TrainersSubPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [value, setValue] = React.useState(4);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();

    // listAll(imageListRef).then((res) => {
    //   res.items.forEach((item) => {
    //     getDownloadURL(item).then((url) => {
    //       setImgList((prev) => [...prev, { url: url, ref: item }]);
    //     });
    //   });
    // });
  }, []);

  return (
    <Box
      p={0}
      sx={{
        height: "calc(100vh - 64px)",
        padding: 2,
        marginTop: 8,
      }}
    >
      <Box
        sx={{
          background: "white",
          borderRadius: "41px",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
      >
        <Grid container>
          <Grid item xs={12} container justifyContent="flex-end">
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              sx={{
                width: "400px",
                marginBottom: "10px",
                paddingTop: "20px",
                marginRight: "5px",
              }}
              // options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="Search Trainer..."
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "100%",
                height: "calc(100vh - 11rem)",
                position: "relative",
                background: "rgba(255, 255, 255, 0.73)",
                borderRadius: "20px",
                paddingTop: "4px",
                // padding: 3,
                overflow: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": {
                  width: "0.4em",
                },
                "&::-webkit-scrollbar-track": {
                  background: "white",
                  marginTop: "72px",
                  marginBottom: "64px",
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
              <Box sx={{}}>
                {users.map((user) =>
                  user.role === "trainer" ? (
                    <Card
                      sx={{
                        maxWidth: "100%",
                        borderRadius: 4,
                        maxHeight: "270px",
                        background: "#F4F3F8",
                        marginBottom: 1,
                        cursor: "pointer",
                        position: "relative",
                      }}
                      onClick={() => {
                        navigate(`/trainer-details`, {
                          state: { id: user.id },
                        });
                      }}
                    >
                      <Grid container>
                        <Grid item xs={2}>
                          <CardMedia
                            component="img"
                            height="320px"
                            width="400px"
                            image="https://www.superprof.com/images/teachers/teacher-home-personal-training-amp-nutrition-planning-darmstadt-and-the-surrounding-area-licensed-personal-trainer-fitness-trainer.jpg"
                            alt="GYM TRAINER"
                          />
                        </Grid>
                        <Grid item xs={10}>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              sx={{ fontWeight: "bold" }}
                              component="div"
                            >
                              {user.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="black"
                              marginRight="10px"
                            >
                              {user.description}
                            </Typography>
                            <Box
                              sx={{
                                "& > legend": { mt: 2 },
                                position: "absolute",
                                bottom: 9,
                              }}
                            >
                              <Rating name="read-only" value={value} readOnly />
                            </Box>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Card>
                  ) : null
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default TrainersSubPage;
