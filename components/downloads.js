import { GemLogo, NpmLogo } from 'logos'

export default function Downloads({ ready, type, url, name, downloads }) {

  const placeholder = !ready ? "placeholder" : "";

  return (
    <div className="component downloads">
      <a className={`link downloads ${placeholder}`} href={url}>
        <div className="block downloads --svg">
          { type === "gem" ? <GemLogo /> : <NpmLogo /> }
        </div>
        <div className="block downloads --info">
          <div className={`title downloads-title ${placeholder}`}>{ name }</div>
          <div className={`title downloads-figure ${placeholder}`}>{ downloads }</div>              
        </div>
      </a>
    </div>
  );
}