import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FolderClosedSvg, FolderOpenSvg } from "icons";
import gsap from 'gsap';

export default function Folder({ title, target, input, output }) {
  const tl = gsap.timeline({ defaults: { duration: 0.2, ease: "power1.in" } });
  
  function toggleState() {
    if (input) {
      tl.to(target,{ scale: 0.5 }).set(target,{ opacity: 0, display: "none" });
      output(!input);
    } else {
      tl.set(target,{ clearProps: "display", opacity: 1 }).to(target,{ scale: 1 });
      output(!input);
    }
  }

  return (
    <div className="component folder">
      <Button onClick={toggleState} className="folder" variant="link">
        { input ? <FolderOpenSvg /> : <FolderClosedSvg /> }
        <Badge className="folder" pill>{title}</Badge>
      </Button>
    </div>
  );
}
