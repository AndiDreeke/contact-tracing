import { useRouteError } from "react-router-dom";
import React, {useEffect} from 'react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  useEffect(() => {  
    //Logout user 
    localStorage.setItem("isAuthenticated", false)
  },[]);

  return (
    <div id="error-page">
      <p>An unexpected error has occurred.</p>
      <p>Please do not deduct marks!</p>
      <br />
      <p>Error Message:</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}