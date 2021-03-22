import "./ScrollIndicator.scss";
import { useEffect, useState } from "react";
import { ChevronDown } from "react-feather";

/**
 * Determines whether the scrolling indicator should be shown.
 *
 * @callback visibilityCallback
 * @param {number} scrollOffset distance scrolled.
 * @returns {boolean} whether the indicator should be shown.
 */
/**
 *
 * @param {{determineVisibility: visibilityCallback, showOnce: boolean}} param0
 */
export default function ScrollIndicator({
  determineVisibility,
  showOnce = true,
}) {
  const [hidden, setHidden] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (disabled) return;

    function onScroll() {
      const shouldShow = determineVisibility(
        document.documentElement.scrollTop
      );
      if (!shouldShow && !hidden && showOnce) setDisabled(true);
      setHidden(!shouldShow);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", onScroll, { passive: true });
  }, [determineVisibility, disabled]);

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
