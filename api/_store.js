const {get,put}=require('@vercel/blob');
const {timingSafeEqual}=require('crypto');
const KEY='legion/claims.json';
function token(){const t=process.env.LEGION_READ_WRITE_TOKEN;if(!t)throw Error('Legion storage is not configured');return t}
async function read(){const result=await get(KEY,{access:'private',token:token()});if(!result)return [];return JSON.parse(await new Response(result.stream).text())}
async function write(items){await put(KEY,JSON.stringify(items),{access:'private',token:token(),addRandomSuffix:false,allowOverwrite:true,contentType:'application/json'})}
function role(req){const supplied=(req.headers.authorization||'').replace(/^Bearer /,'');if(!supplied)return null;for(const [r,k] of [['owner','OWNER_REVIEW_KEY'],['manager','MANAGER_REVIEW_KEY']]){const secret=process.env[k];if(secret){const a=Buffer.from(supplied),b=Buffer.from(secret);if(a.length===b.length&&timingSafeEqual(a,b))return r}}return null}
function authorized(req){return !!role(req)}
module.exports={read,write,role,authorized};
