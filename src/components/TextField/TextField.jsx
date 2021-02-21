import "./TextField.scss";

import { useState } from "react";

export default function TextField(props) {
  const [labelShown, setLabelShown] = useState(false);
  function onChange(e) {
    setLabelShown(e.target.value.length > 0);
    props.onChange?.(e);
  }
  return (
    <label className="TextField">
      <p
        style={{ transform: `translateY(${labelShown ? 0 : 30}px)` }}
        aria-hidden
      >
        {props.placeholder}
      </p>
      <input type="text" {...props} onChange={onChange} />
    </label>
  );
}
