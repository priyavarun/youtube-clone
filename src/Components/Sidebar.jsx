import React from "react";
import Stack from "@mui/material/Stack";
import { categories } from "../utils/constants";

export default function Sidebar() {
  const selectedCategory = "Sample Title";
  return (
    <Stack
      direction="row"
      sx={{
        margin: "20px",
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          style={{
            background: category.name === selectedCategory ? "red" : "",
            color: "white",
          }}
          key={category.name}
          className="category-btn"
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}
