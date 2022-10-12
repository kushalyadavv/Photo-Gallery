import React, { Suspense, useContext, useEffect } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SplashGrid from "../../components/SplashGrid/SplashGrid";
import { UnsplashContext } from "../../context";

export default function Home() {
  const { GetImages } = useContext(UnsplashContext);

  useEffect(() => {
    GetImages();
  }, []);

  return (
    <div id="home">
      <Header />
      <Main />
      <SplashGrid />
    </div>
  );
}
