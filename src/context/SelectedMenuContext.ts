import React from "react";

interface SelectedMenuContextType {
  selectedMenuKey: string;
  setSelectedMenuKey: (value: string) => void;
};

export const SelectedMenuContext = React.createContext<SelectedMenuContextType>({
    selectedMenuKey: "",
    setSelectedMenuKey: ()=>{}
});
