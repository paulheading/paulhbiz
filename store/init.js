import { hero } from 'scripts/animations'

export const card = {
  svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="320" height="320" viewBox="0 0 320 320" xml:space="preserve" enable-background="new 0 0 320 320"><path id="framework" d="M195.8,237h-71.7v-42.9h71.7v-51.3l-71.7,20.1l71.7-45h-71.7L195.8,83h-71.7" fill="none" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>`,
  desc: `I'm a Full Stack Designer. I design and build with the React.js and Vue.js frameworks. I currently work for the Barbican in London and have just over 1 years experience.`,
  attachments: [{ name: `Read more`, url: `https://blog.paulh.biz/designing-account-areas-in-vue-js-ac45de876b3f` }],
  name: `Hero: Full Stack Designer working in React & Vue.js`,
  animation: (pause, target) => hero.tl0(pause, target),
  marquee: `loading data ... please wait`,
  start: `2019-12-01T12:19:00.000Z`,
  due: `2021-12-01T12:19:00.000Z`,
  list: { name: `Projects` },
  dueComplete: false,
  class: `card-000000`,
  placeholder: false,
  id: `000000`,
};

const others = count => {
  let others = [];
  for (let index = 0; index < count; index++) {
    others.push({ 
      list: { name: '.' },
      placeholder: true,
      name: '.',
      desc: '.',
      attachments: [{ 
        name: "Read more", 
        url: "/"
      }]
    });
  }
  return others;
}

const trello = {
  ready: false,
  pages: {},
  projects: {
    info: {},
    cards: [card, ...others(3)],
  },
  roles: {
    cards: [others(3)]
  },
  education: {
    cards: [others(3)]
  }
}

const tracks = count => {
  let tracks = [];
  for (let index = 0; index < count; index++) {
    tracks.push({
      artist: { 
        name: ".", 
        url: null 
      },
      name: ".",
      url: null,
    });
  }
  return tracks;
}

const spotify = {
  ready: false,
  profile: ".",
  tracks: tracks(3),
  playlist: {
    image: null,
    owner: ".",
    name: ".",
    url: null,
  }
}

const treehouse = {
  badges: [],
  points: {
    "JavaScript": 100,
    "Databases": 100,
    "Design": 100,
  },
  profile_name: "paulheading",
  profile_url: "https://teamtreehouse.com/paulheading"
}

const timezone = {
  ready: false,
  location: ".",
  time: "."
}

const gem = {
  downloads: ".",
  ready: false,
  type: "gem",
  name: ".",
  url: null,  
};

const npm = {
  downloads: ".",
  ready: false,
  type: "npm",
  name: ".",
  url: null,  
};

const medium = {
  feed: {},
  items: [{
    "title": "Scenario planning for a digital festival",
    "pubDate": "2021-08-30 15:19:33",
    "link": "https://paulheading.medium.com/scenario-planning-for-a-digital-festival-592fd37637c2?source=rss-3acfa09d4e09------2",
    "guid": "https://medium.com/p/592fd37637c2",
    "author": "Paul Heading",
    "thumbnail": "https://cdn-images-1.medium.com/max/1024/1*AJ0QV6hDtUSlFOgC6hS7Qg.png",
    "description": "\n<blockquote>Paul Heading works as a <a href=\"https://paulh.biz/about\">Full Stack Designer</a> for the <a href=\"https://barbican.org.uk/\">Barbican</a> in London. <br>The following observations are based on this experience. Any stated opinions are entirely personal.</blockquote>\n<p>For <a href=\"https://www.barbican.org.uk/whats-on/2021/event/new-suns\">New Suns</a> Festival (5–7 Mar 2021) we needed to build a platform that provided users with ticketed access to a mix of video and static content.</p>\n<p>The video content contained both on-demand and live-streamed events. The live-streamed events would also be available on-demand for a fixed period following their broadcast.</p>\n<p>We had a good understanding of how this might work, having already built the <a href=\"https://www.barbican.org.uk/whats-on/2020/series/live-from-the-barbican\">Live from the Barbican</a> streaming service. Now we needed to brand, develop and template that work.</p>\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*AJ0QV6hDtUSlFOgC6hS7Qg.png\"><figcaption>We controlled access via a Netflix style login page</figcaption></figure><h3>Festival scenarios</h3>\n<p>The unique lesson for the front-end of our platform, was the importance of scenario design. The festival itself had 3 main scenarios:</p>\n<p>1. Pre-live<br>2. Live<br>3. Post-live</p>\n<p><strong>Pre-live scenario<br></strong>The pre-live scenario provides time and space for ticket holders to login and form an understanding of what they’ve just purchased. It’s an opportunity for users to test their technical setup and we knew from experience that they find this reassuring.</p>\n<p>This scenario is also an opportunity to generate excitement for the festival and build a sense of community before the main event begins. You might enable users to chat with each other and release some teaser content.</p>\n<p>On this occasion, we made the related content immediately available. This allowed users to become more familiar with subjects and authors that would later feature in the live events.</p>\n<p><strong>Live scenario<br></strong>The live festival scenario is a pretty straightforward concept:</p>\n<p>1. Enable users to access their content when it becomes available<br>2. Support users quickly with any issues that stop them from doing this</p>\n<p>In this scenario we needed to design how <a href=\"https://medium.com/@paulheading?source=rss-3acfa09d4e09------2#skip\">content would appear and evolve</a> over time. We experimented with a flexible dashboard layout that enabled users to toggle their feeds and focus on the content they found most relevant.</p>\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*XR4ntbQmIjte1MghAoYvrA.png\"><figcaption>The layout could be toggled to hide social media content</figcaption></figure><a href=\"https://medium.com/media/57249d0fcc5ffa506e3684702a7e5c4d/href\">https://medium.com/media/57249d0fcc5ffa506e3684702a7e5c4d/href</a><p>We also built a streaming <a href=\"https://help.barbican.org.uk/en/\">support centre</a> and provided live support at peak times through the <a href=\"https://crisp.chat/\">CrispChat</a> messaging platform.</p>\n<p><strong>Post-live scenario<br></strong>For the post-live scenario we displayed a simple alert that explained the festival had ended. Only related content remained available for ticket holders.</p>\n<h3>Content scenarios</h3>\n<p>For the live festival scenario, we needed to display all content in an easily explorable layout. We also needed to give prominence to upcoming and live content.</p>\n<p>To do this, we split the core content into three columns:</p>\n<p>1. Live video<br>2. On-demand video<br>3. Social media</p>\n<p>Each piece of content was represented by a card. Video content would click through to an individual streaming page.</p>\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*j-9uUX9dBviZFXP6gwkkNA.png\"><figcaption>A typical content scenario during New Suns festival</figcaption></figure><p><strong>Live video content</strong></p>\n<p>The typical lifespan of a live video card would involve two scenarios: “Coming soon” and “Live now”. We created a carousel for browsing upcoming events, separating and promoting only the most immediately relevant event.</p>\n<p>There would also be a period towards the end of the live festival scenario where all live video cards had expired. We created a status notification for this to provide reassurance that a user wasn’t experiencing a technical issue and they still had time to enjoy the festival via the on-demand videos.</p>\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*eHzy2d84PNp-hHtqGKXi-g.png\"><figcaption>We also had to design a scenario in which all live videos had expired</figcaption></figure><p><strong>On-demand video content</strong></p>\n<p>Similarly, on-demand videos also had two scenarios: “Coming soon” and “Available now”.</p>\n<h3>How we did it</h3>\n<p>Our <a href=\"https://tickets.barbican.org.uk/\">ticketing site</a> is built on the <a href=\"https://vuejs.org/\">Vue.js</a> framework. This allows us to work with data much more easily. For this project, we pulled data from the following places:</p>\n<p>1. Customer data from our ticketing supplier (<a href=\"https://www.spektrix.com/\">Spektrix</a>)<br>2. Event data from our video streaming supplier (<a href=\"https://www.jwplayer.com/\">JW Player</a>)</p>\n<p>First we needed to verify access via the login screen. We checked <strong>ticketing data</strong> to identify that the customer existed <em>and</em> that they had purchased access to the festival.</p>\n<p>Next we needed to display our video content on the festival dashboard. By comparing <strong>event data</strong> start times we were able to sort and display content within our layout.</p>\n<blockquote>\n<strong>Key lesson: </strong>Javascript returns a localised time based on the user’s location. We needed to create a consistent experience for international users, based around UK time. Ultimately we solved this by creating a “Barbican time” api to check against.</blockquote>\n<img src=\"https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=592fd37637c2\" width=\"1\" height=\"1\" alt=\"\">\n",
    "content": "\n<blockquote>Paul Heading works as a <a href=\"https://paulh.biz/about\">Full Stack Designer</a> for the <a href=\"https://barbican.org.uk/\">Barbican</a> in London. <br>The following observations are based on this experience. Any stated opinions are entirely personal.</blockquote>\n<p>For <a href=\"https://www.barbican.org.uk/whats-on/2021/event/new-suns\">New Suns</a> Festival (5–7 Mar 2021) we needed to build a platform that provided users with ticketed access to a mix of video and static content.</p>\n<p>The video content contained both on-demand and live-streamed events. The live-streamed events would also be available on-demand for a fixed period following their broadcast.</p>\n<p>We had a good understanding of how this might work, having already built the <a href=\"https://www.barbican.org.uk/whats-on/2020/series/live-from-the-barbican\">Live from the Barbican</a> streaming service. Now we needed to brand, develop and template that work.</p>\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*AJ0QV6hDtUSlFOgC6hS7Qg.png\"><figcaption>We controlled access via a Netflix style login page</figcaption></figure><h3>Festival scenarios</h3>\n<p>The unique lesson for the front-end of our platform, was the importance of scenario design. The festival itself had 3 main scenarios:</p>\n<p>1. Pre-live<br>2. Live<br>3. Post-live</p>\n<p><strong>Pre-live scenario<br></strong>The pre-live scenario provides time and space for ticket holders to login and form an understanding of what they’ve just purchased. It’s an opportunity for users to test their technical setup and we knew from experience that they find this reassuring.</p>\n<p>This scenario is also an opportunity to generate excitement for the festival and build a sense of community before the main event begins. You might enable users to chat with each other and release some teaser content.</p>\n<p>On this occasion, we made the related content immediately available. This allowed users to become more familiar with subjects and authors that would later feature in the live events.</p>\n<p><strong>Live scenario<br></strong>The live festival scenario is a pretty straightforward concept:</p>\n<p>1. Enable users to access their content when it becomes available<br>2. Support users quickly with any issues that stop them from doing this</p>\n<p>In this scenario we needed to design how <a href=\"https://medium.com/@paulheading?source=rss-3acfa09d4e09------2#skip\">content would appear and evolve</a> over time. We experimented with a flexible dashboard layout that enabled users to toggle their feeds and focus on the content they found most relevant.</p>\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*XR4ntbQmIjte1MghAoYvrA.png\"><figcaption>The layout could be toggled to hide social media content</figcaption></figure><a href=\"https://medium.com/media/57249d0fcc5ffa506e3684702a7e5c4d/href\">https://medium.com/media/57249d0fcc5ffa506e3684702a7e5c4d/href</a><p>We also built a streaming <a href=\"https://help.barbican.org.uk/en/\">support centre</a> and provided live support at peak times through the <a href=\"https://crisp.chat/\">CrispChat</a> messaging platform.</p>\n<p><strong>Post-live scenario<br></strong>For the post-live scenario we displayed a simple alert that explained the festival had ended. Only related content remained available for ticket holders.</p>\n<h3>Content scenarios</h3>\n<p>For the live festival scenario, we needed to display all content in an easily explorable layout. We also needed to give prominence to upcoming and live content.</p>\n<p>To do this, we split the core content into three columns:</p>\n<p>1. Live video<br>2. On-demand video<br>3. Social media</p>\n<p>Each piece of content was represented by a card. Video content would click through to an individual streaming page.</p>\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*j-9uUX9dBviZFXP6gwkkNA.png\"><figcaption>A typical content scenario during New Suns festival</figcaption></figure><p><strong>Live video content</strong></p>\n<p>The typical lifespan of a live video card would involve two scenarios: “Coming soon” and “Live now”. We created a carousel for browsing upcoming events, separating and promoting only the most immediately relevant event.</p>\n<p>There would also be a period towards the end of the live festival scenario where all live video cards had expired. We created a status notification for this to provide reassurance that a user wasn’t experiencing a technical issue and they still had time to enjoy the festival via the on-demand videos.</p>\n<figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/1024/1*eHzy2d84PNp-hHtqGKXi-g.png\"><figcaption>We also had to design a scenario in which all live videos had expired</figcaption></figure><p><strong>On-demand video content</strong></p>\n<p>Similarly, on-demand videos also had two scenarios: “Coming soon” and “Available now”.</p>\n<h3>How we did it</h3>\n<p>Our <a href=\"https://tickets.barbican.org.uk/\">ticketing site</a> is built on the <a href=\"https://vuejs.org/\">Vue.js</a> framework. This allows us to work with data much more easily. For this project, we pulled data from the following places:</p>\n<p>1. Customer data from our ticketing supplier (<a href=\"https://www.spektrix.com/\">Spektrix</a>)<br>2. Event data from our video streaming supplier (<a href=\"https://www.jwplayer.com/\">JW Player</a>)</p>\n<p>First we needed to verify access via the login screen. We checked <strong>ticketing data</strong> to identify that the customer existed <em>and</em> that they had purchased access to the festival.</p>\n<p>Next we needed to display our video content on the festival dashboard. By comparing <strong>event data</strong> start times we were able to sort and display content within our layout.</p>\n<blockquote>\n<strong>Key lesson: </strong>Javascript returns a localised time based on the user’s location. We needed to create a consistent experience for international users, based around UK time. Ultimately we solved this by creating a “Barbican time” api to check against.</blockquote>\n<img src=\"https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=592fd37637c2\" width=\"1\" height=\"1\" alt=\"\">\n",
    "enclosure": {},
    "categories": ["planning","api","vuejs","festivals"],
  }],
}

const init = {
  trello,
  spotify,
  treehouse,
  timezone,
  pause: false,
  count: 0,
  gem,
  npm,
  medium
}

export default init;