import React from "react";
import { useAuth } from "../Hooks/auth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const BlogsPage = (props) => {
  const auth = useAuth();
  const [successMessage, setSuccessMessage] = useState("");
  const params = useParams();

  return (
    <div name='blogs' className='w-full bg-zinc-200 dark:bg-zinc-700 mt-16 pt-20 pb-20'>
      <h2 className='text-6xl font-bold text-center dark:text-white'>
        Coming Soon - UX layout for Blog Posts, from Official Formula 1 APIs  
      </h2>
      <p className='text-3xl py-8 text-gray-500 dark:text-gray-300 text-center'>
        - F1 APIs provide feeds for multiple topics within Formula 1... Build up in layers.... 
      </p>
    </div>
  );
};

export default BlogsPage;