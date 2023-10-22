import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const SubpageContext = createContext();

// Create Provider Component
function SubpageProvider({ children }) {
  const [curPageIndex, setCurPageIndex] = useState(0);
  const [academicPageIndex, setAcademicPageIndex] = useState(0);

  const getPageIndex = (index) => {
    setCurPageIndex(index);
  };

  const getAcademicPageIndex = (index) => {
    setAcademicPageIndex(index);
  };

  useEffect(() => {
    const savedIndex = localStorage.getItem("curPageIndex");
    if (savedIndex !== null) {
      setCurPageIndex(parseInt(savedIndex, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("curPageIndex", curPageIndex);
  }, [curPageIndex]);

  return (
    <SubpageContext.Provider
      value={{
        curPageIndex,
        setCurPageIndex,
        getPageIndex,
        academicPageIndex,
        getAcademicPageIndex,
      }}
    >
      {children}
    </SubpageContext.Provider>
  );
}

// Create Provider Hook
function useSubpage() {
  const context = useContext(SubpageContext);
  return context;
}

export { SubpageProvider, useSubpage };
