import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalLayouts from "./layouts/GlobalLayouts";
// import LandingPage from "./pages/LandingPage";
import BlogsPage from "./pages/BlogsPage";
// import PricingPage from "./pages/PricingPage";
import PostersPage from "./pages/PostersPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Support from "./pages/SupportPage";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/ProfilePage";
// import { useAuth } from "./Hooks/auth";
const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

const App = () => {
  const [leftSideBar, setLeftSideBar] = useState(false);
  // const [nfts, setNfts] = useState([]);
  const [theme, setTheme] = useState("light");
  const [sideBar, setSideBar] = useState(false);
  const [signUpButton, setSignUpButton] = useState(false);
  // const auth = useAuth();
  const showLeftSideBar = () => setLeftSideBar(!leftSideBar);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <GlobalLayouts
          urlEndPoint={urlEndPoint}
          showLeftSideBar={showLeftSideBar}
          sideBar={sideBar}
          setSideBar={setSideBar}
          handleThemeSwitch={handleThemeSwitch}
          theme={theme}
          setTheme={setTheme}
          signUpButton={signUpButton}
          setSignUpButton={setSignUpButton}
        />
      ),
      errorElement: <ErrorPage />,
      children: [
        // {
        //   element: <LandingPage urlEndPoint={urlEndPoint} />,
        //   index: true,
        // },
        // {
        //   path: "/home",
        //   element: <HomePage urlEndPoint={urlEndPoint} />,
        // },
        {
          element: <HomePage urlEndPoint={urlEndPoint} />,
          index: true,
        },
        {
          path: "/home",
          element: <HomePage urlEndPoint={urlEndPoint} />,
        },
        {
          path: "/posters",
          element: <PostersPage/>,
          
          // (
          //   <PostersPage
          //     nfts={nfts}
          //     setNfts={setNfts}
          //     urlEndPoint={urlEndPoint}
          //     leftSideBar={leftSideBar}
          //     showLeftSideBar={showLeftSideBar}
          //   />
          // ),
        },
        {
          path: "/blogs",
          element: <BlogsPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/support",
          element: <Support />,
        },
        // {
        //   path: "/pricing",
        //   element: <PricingPage />,
        // },
        {
          path: "/login",
          element: (
            <Login
              signUpButton={signUpButton}
              setSignUpButton={setSignUpButton}
            />
          ),
        },
        {
          path: "/profile",

          element: <ProfilePage urlEndPoint={urlEndPoint} />,
        },
      ],
    },
  ]);
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  // useEffect(() => {
  //   const fetchNfts = async () => {
  //     const result = await fetch(`${urlEndPoint}/nfts/all`);
  //     const fetchedNftPayload = await result.json();
  //     setNfts(fetchedNftPayload.result);
  //   };
  //   fetchNfts();
  // }, [auth.userCartHistory]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
