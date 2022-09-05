import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
export default function Feed() {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #ccc",
          px: { sx: "0", md: "2" },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          Copyright Details
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New <span style={{ color: "red" }}>videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
}
