import React from "react";
import { useDispatch } from "react-redux";
import { resetRedux } from "../../Redux/Action/Actions";

function ResetApp() {
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <button
        className="btn btn-warning"
        onClick={() => dispatch(resetRedux())}
      >
        Reset
      </button>
    </div>
  );
}

export default ResetApp;
