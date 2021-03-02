import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FolderClosedSvg, FolderOpenSvg } from "components/SvgIcons";

export function FolderButton({ title, input, output }) {
  return (
    <div className="folder-button container">
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
