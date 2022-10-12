import React from "react";
import "./Main.scss";
import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";

export default function Main() {
  return (
    <MainWrapper id="main">
      <div className="content">
        <div className="main-center">
          <h3 className="description">
            Made by{" "}
            <a href="https://www.linkedin.com/in/kushal-yadav-8ab092115/">Kushal Yadav</a>
          </h3>
          <SearchBar />
        </div>
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  background: url("https://source.unsplash.com/collection/220381/1600x900")
      no-repeat center/cover,
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
  background-blend-mode: overlay;
  width: 100%;
`;
