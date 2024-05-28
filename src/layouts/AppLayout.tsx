import React from "react";
import { AppContentWrapper, AppLayoutWrapper, Content } from "./styles";
import { Header } from "./Header";
import { AppSidebar } from "./AppSidebar";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {

  return (
    <AppLayoutWrapper>
      <Header/>
      <Content>
        <AppSidebar />
        <AppContentWrapper>{children}</AppContentWrapper>
      </Content>
    </AppLayoutWrapper>
  );
};
