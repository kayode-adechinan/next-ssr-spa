import {useRef, useEffect, useState} from "react";
import {useRouteChange} from "../hooks";
const Spinner = () => {
  const {routeChanging} = useRouteChange();
  const [shouldShowSpinner, setShouldShowSpinner] = useState(false);

  const timer = useRef();

  useEffect(() => {
    if (routeChanging) {
      // Only show spinner on page loads taking longer than 100ms.
      timer.current = setTimeout(() => setShouldShowSpinner(true), 100);
    } else {
      setShouldShowSpinner(false);

      if (timer.current) {
        clearTimeout(timer.current);
      }
    }
  }, [routeChanging]);

  if (!shouldShowSpinner) {
    return null;
  }

  return <p>Loading...</p>;
};

export default Spinner;
