import { RubyGemSvg, NpmSvg } from "components/SvgIcons";

export default function DownloadDetails({ type, name, downloads }) {

  function printUrl() {
    switch (type) {
      case "rubygem":
        return `https://bundler.rubygems.org/gems/${name}`;    
      default:
        return `https://www.npmjs.com/package/${name}`;
    }
  }

  function printSvg() {
    switch (type) {
      case "rubygem":
        return <RubyGemSvg />;
      default:
        return <NpmSvg />;
    }
  }

  return (
    <div className="component download-details">
      <a className="link download-details" href={ printUrl() }>
        <div className="block download-details">
          { printSvg() }
        </div>
        <div className="block download-details">
          <div>{ name }</div>
          <div>{ downloads }</div>              
        </div>
      </a>
    </div>
  );
}