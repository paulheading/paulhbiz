import parse from 'html-react-parser'
import { Head } from 'layouts'
import { Status } from 'components'
import { remove, print, filter } from 'scripts/helpers'
import Link from 'next/link'

export default function ArticleLayout({ name, desc, attachments, start, due }) {
  name = remove.hero(name);

  const live = filter.in.live(attachments);
  const code = filter.in.code(attachments);
  const dates = { start, due };
  const seo = { title: print.seo(name), desc }
  
  return (
    <div className="component about-content">
      <Head { ...seo } />
      <div className="container feed-content">
        <div className="wrap feed-content">
          <h1>{ name }</h1>
          <Status { ...dates } />
          <p className="summary feed-content">
            { live && <a href={live.url}>See project</a> }
            { code && <a href={code.url}>See code</a> }
          </p>
          { desc && parse(desc) }
          <Link href="/resume"><a>Back to Resume</a></Link>
         </div>
      </div>
    </div>
  );
};
