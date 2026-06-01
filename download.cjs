const fs = require('fs');

async function run() {
  if (!fs.existsSync('./public/logos')) {
    fs.mkdirSync('./public/logos');
  }

  const urls = {
    'upwork.png': 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.upwork.com&size=256',
    'fiverr.png': 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.fiverr.com&size=256',
    'fastwork.png': 'https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://fastwork.id&size=256'
  };

  for (const [filename, url] of Object.entries(urls)) {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync('./public/logos/' + filename, Buffer.from(buffer));
    console.log('Downloaded ' + filename);
  }
}

run();
