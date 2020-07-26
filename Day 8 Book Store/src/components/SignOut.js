import React from "react";

export const SignOut = () => {
    localStorage.removeItem("user");
    return(
        <div>
            <p>Thank you for stopping by!</p>
            <p>Return <a className="linkToPages" href="/">Home</a></p>
        </div>
    )
};