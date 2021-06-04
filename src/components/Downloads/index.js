import { GemSvg, NpmSvg } from "icons";

export default function Downloads({ ready, type, url, title, downloads }) {

  const placeholder = !ready ? "placeholder" : "";

  return (
    <div className="component downloads">
      <a className={`link downloads ${placeholder}`} href={url}>
        <div className="block downloads --svg">
          { type === "gem" ? <GemSvg /> : <NpmSvg /> }
        </div>
        <div className="block downloads --info">
          <div className={`title downloads-title ${placeholder}`}>{ title }</div>
          <div className={`title downloads-figure ${placeholder}`}>{ downloads }</div>              
        </div>
      </a>
    </div>
  );
}