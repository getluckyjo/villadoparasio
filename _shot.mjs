import { chromium } from 'playwright';
const out = process.env.OUT;
const b = await chromium.launch();
const errors = [];
// desktop
const p = await b.newPage({ viewport:{width:1280,height:900} });
p.on('console', m => { if (m.type()==='error') errors.push('[desktop] '+m.text()); });
p.on('pageerror', e => errors.push('[desktop pageerror] '+e.message));
await p.goto('http://localhost:4321/', { waitUntil:'networkidle' });
await p.waitForTimeout(800);
await p.screenshot({ path: out+'/ref-desktop-full.png', fullPage:true });
// check whatsapp hrefs
const waHrefs = await p.$$eval('a[href*="wa.me"]', as => as.slice(0,3).map(a=>a.getAttribute('href')));
console.log('WA_HREFS '+JSON.stringify(waHrefs));
// mobile 380
const m = await b.newPage({ viewport:{width:380,height:780}, deviceScaleFactor:2 });
m.on('console', x => { if (x.type()==='error') errors.push('[mobile] '+x.text()); });
m.on('pageerror', e => errors.push('[mobile pageerror] '+e.message));
await m.goto('http://localhost:4321/', { waitUntil:'networkidle' });
await m.waitForTimeout(600);
await m.screenshot({ path: out+'/ref-m-top.png' });           // hero above fold
await m.evaluate(() => window.scrollBy(0, window.innerHeight*1.2));
await m.waitForTimeout(600);
await m.screenshot({ path: out+'/ref-m-sticky.png' });        // sticky bar should show
await m.screenshot({ path: out+'/ref-m-full.png', fullPage:true });
// table page seafood
const t = await b.newPage({ viewport:{width:1280,height:900} });
await t.goto('http://localhost:4321/the-table/', { waitUntil:'networkidle' });
await t.waitForTimeout(500);
await t.screenshot({ path: out+'/ref-table-top.png', clip:{x:0,y:600,width:1280,height:560} });
await b.close();
console.log('CONSOLE_ERRORS '+JSON.stringify(errors));
