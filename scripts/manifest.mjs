import fs from 'node:fs';
const c=JSON.parse(fs.readFileSync(new URL('../public/course.json',import.meta.url),'utf8'));
const manifest={schemaVersion:1,course:'Ontario MCR3U',lastUpdated:c.lastUpdated,releaseStatus:c.audit.releaseStatus,verificationScope:c.audit.summary,lessons:c.lessons.map(({id,title,unit,nelson,financial,learn,bonus,worksheets})=>({lessonId:id,title,unit,nelson,financial:!!financial,teachingVideos:learn,bonusVideos:bonus,worksheets})),reviews:c.reviews,unresolved:c.audit.unresolved};
fs.writeFileSync(new URL('../public/resource-manifest.json',import.meta.url),JSON.stringify(manifest,null,2)+'\n');
console.log(`Manifest written: ${manifest.lessons.length} lessons, ${manifest.reviews.length} review pages.`);
