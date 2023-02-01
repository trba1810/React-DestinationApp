import React from "react";
import { useSelector } from "react-redux";

function DestinationFact() {
  const selectedDestination = useSelector(
    (state) => state.destinationStore.destinationSelected
  );
  if (selectedDestination == undefined) {
    return (
      <div className="text-center pt-4 text-warning">Izaberi destinaciju</div>
    );
  } else {
    return (
      <div className="text-center border p-4 m-3">
        <h4 className="text-success">{selectedDestination.name}</h4>
        Preporuceno dana : {selectedDestination.days}
        <br />
        Smesne cinjenice : {selectedDestination.fact}
      </div>
    );
  }
}

export default DestinationFact;
