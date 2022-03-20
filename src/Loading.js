import React from "react";

export default function Loading() {
  return (
    <div className="w-100 text-center mt-4">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
