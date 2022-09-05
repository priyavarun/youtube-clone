import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChanelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetails,
} from "./Components";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChanelDetail />} />
          <Route path="/search/:id" element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
