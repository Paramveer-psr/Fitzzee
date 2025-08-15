import React from "react";
import Navbar from "../../components/navbar/Navbar";
import MiniFooter from "../../components/mini-footer/MiniFooter";
import Content from "../../components/review-components/Content";

function Reviews() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Navbar />
      <Content user={user} />
      <MiniFooter />
    </>
  );
}

export default Reviews;
