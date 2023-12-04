import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div style={{ padding: "0px 10px 0px 10px", minHeight: "80vh" }}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default ContentWrapper;
