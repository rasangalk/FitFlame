import { Box } from "@mui/system";
import React from "react";

function TrainersSubPage() {
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
          width: "100%",
          height: "calc(100vh - 6rem)",
          left: "108px",
          top: "88px",
          background: "rgba(255, 255, 255, 0.73)",
          borderRadius: "41px",
        }}
      ></Box>
    </Box>
  );
}

export default TrainersSubPage;
