import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router";
import CampaignDetails from "./CampaignDetails";
import Index from "./account";
import Splash from "./Splash";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Interface = () => {
  const [loading, setLoading] = useState(true);
  const logoRef = useRef();

  useGSAP(() => {
    gsap.to(logoRef.current, {
      rotation: 720,
      y: "150%",
      duration: 2,
      onComplete: () => {
        setLoading(false);
      },
    });
  });

  if (loading) return <Splash logoRef={logoRef} />;

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/campaign/:id" element={<CampaignDetails />} />
          <Route path="/" element={<Main />} />
          <Route path="/account" element={<Index />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Interface;
