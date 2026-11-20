export function toast(message){const root=document.querySelector('#toast-root');if(!root)return;const el=document.createElement('div');el.className='toast';el.textContent=message;root.append(el);setTimeout(()=>el.remove(),4000);}
export function el(tag,attrs={},children=[]){const node=document.createElement(tag);for(const [k,v] of Object.entries(attrs)){if(k==='className')node.className=v;else if(k==='text')node.textContent=v;else node.setAttribute(k,v);}for(const child of (Array.isArray(children)?children:[children]))if(child)node.append(child instanceof Node?child:document.createTextNode(String(child)));return node;}
export function safeText(value){return String(value??'');}
export function confirmAction(message){return window.confirm(message);}
