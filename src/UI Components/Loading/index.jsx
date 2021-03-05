import React from "react";

export const LoadingWithName = ({Loading}) => {
  return (
    <div className={`loadingContainer ${Loading ? "showLoading" : "hideLoading"}`}>
    </div>
  );
};
