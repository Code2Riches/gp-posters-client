import React from "react";
import { useAuth } from "../Hooks/auth";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

function HomePage(props) {
  const { urlEndpoint } = props;
  const [message, setMessage] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${urlEndpoint}/users/message`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken,
        },
      });
      setMessage(await response.message);
    };
    if (auth.userToken) {
      fetchMessage();
    }
    if (!auth.userToken) {
      setMessage("");
    }
  }, [auth.userToken]);
  return (
    <div
      name="home"
      className="w-full bg-zinc-200 dark:bg-zinc-600 flex flex-col justify-between pt-20 mt-8"
    >
      <div className="grid md:grid-cols max-w-[1240px] m-auto">
        <div className=" flex flex-col justify-center items-center w-full px-2 py-8">
          <p className="text-2xl dark:text-gray-300 justify-center">
            Welcome to
          </p>
          <h1 className="py-3 text 5xl md:text-7xl font-bold dark:text-gray-300">
            GP Posters
          </h1>
          <p className="text-2xl dark:text-gray-300">
            Where you'll find all of your best GP memories!
          </p>
          <button
            className="py-3 px-6 sm:w-[60%] my-4 hover:text-red-800 dark:hover:text-red-800 dark:bg-zinc-800"
            onClick={() => {
              navigate("/posters"); // Will navigate to posters page for options*
            }}
          >
            Search for your favorite GP 
          </button>
        </div>
      </div>
      <div className="grid justify-center">
        <Carousel />
      </div>
    </div>
)
};

export default HomePage;
