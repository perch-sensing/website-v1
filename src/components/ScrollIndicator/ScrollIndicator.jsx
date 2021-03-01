import "./ScrollIndicator.scss";
import { useEffect, useState } from "react";
import { ChevronDown } from "react-feather";

export default function ScrollIndicator({ determineVisibility }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function onScroll() {
      const shouldShow = determineVisibility(
        document.documentElement.scrollTop
      );
      setHidden(!shouldShow);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <div className="ScrollIndicator">
      <div className="time-veil">
        <div className={"scroll-veil" + (hidden ? " hidden" : "")}>
          <ChevronDown size={50} />
          <ChevronDown size={50} />
          <ChevronDown size={50} />
        </div>
      </div>
    </div>
  );
}
