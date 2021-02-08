import React from "react";
import { FolderClosedSvg, FolderOpenSvg } from "../../SvgIcons";
import Button from "react-bootstrap/Button";

export function FolderButton({ input, output }) {
  return (
    <div className="folder__container">
      <Button
        onClick={() => output(!input)}
        className="folder-button"
        variant="link"
      >
        {input ? <FolderOpenSvg /> : <FolderClosedSvg />}
      </Button>
    </div>
  );
}
