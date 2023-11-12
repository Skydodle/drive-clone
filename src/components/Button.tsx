import React from "react";
import type { Button } from "../Interface/index";

export default function Button({ btnClass, title, onClick }: Button) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <button onClick={onClick} className={`btn ${btnClass}`}>
      {title}
    </button>
  );
}
