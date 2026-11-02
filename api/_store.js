const {list,put,del}=require('@vercel/blob');
const KEY='legion/claims.json';
async function read(){const {blobs}=await list({prefix:KEY,limit:20});const b=blobs.find(x=>x.pathname===KEY);if(!b)return [];const r=await fetch(b.url,{cache:'no-store'});if(!r.ok)throw Error('Storage read failed');return await r.json()}
async function write(items){await put(KEY,JSON.stringify(items),{access:'public',addRandomSuffix:false,allowOverwrite:true,contentType:'application/json'})}
function authorized(req){const supplied=(req.headers.authorization||'').replace(/^Bearer /,'');return !!supplied&&[process.env.OWNER_REVIEW_KEY,process.env.MANAGER_REVIEW_KEY].some(x=>x&&supplied===x)}
module.exports={read,write,authorized};
