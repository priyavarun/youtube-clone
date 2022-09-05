import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: "20px",
        border: "1px solid #ccc",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        placeholder="Search..."
        className="searcg-bar"
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}
