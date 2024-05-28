import React from "react";
import { AppLayoutWrapper, Content } from "./styles";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {  
  return (    
    <AppLayoutWrapper>
      <Header />
      <Content>        
        {children}
      </Content>
      <Footer />
    </AppLayoutWrapper>
  );
};
