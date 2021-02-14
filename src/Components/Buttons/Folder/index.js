import React from "react";
import { FolderClosedSvg, FolderOpenSvg } from "../../SvgIcons";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export function FolderButton({ title, input, output }) {
  return (
    <div className="folder__container">
      <Button
        onClick={() => output(!input)}
        className="folder-button"
        variant="link"
      >
        {input ? <FolderOpenSvg /> : <FolderClosedSvg />}
        <div className="badge-wrap">
          <Badge pill>{title}</Badge>
        </div>
      </Button>
    </div>
  );
}
