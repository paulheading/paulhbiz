import { GemLogo, NpmLogo } from 'logos'

export default function Downloads({ ready, type, url, name, downloads }) {

  const placeholder = !ready ? "placeholder" : "";

  return (
    <div className="downloads component">
      <a className={`link downloads ${placeholder}`} href={url}>
        <div className="svg downloads">
          { type === "gem" ? <GemLogo /> : <NpmLogo /> }
        </div>
        <div className="info downloads">
          <div className={`title downloads ${placeholder}`}>{ name }</div>
          <div className={`figure downloads ${placeholder}`}>{ downloads }</div>              
        </div>
      </a>
    </div>
  );
}