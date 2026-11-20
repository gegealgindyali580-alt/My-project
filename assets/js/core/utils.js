export function downloadFile(name,content,type='application/json'){const blob=new Blob([content],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();URL.revokeObjectURL(url);}
export function csv(rows){const quote=v=>`"${String(v??'').replaceAll('"','""')}"`;return '\ufeff'+rows.map(row=>row.map(quote).join(',')).join('\r\n');}
export function today(){return new Date().toISOString().slice(0,10);}
export function formatDate(value){return value?new Date(value).toLocaleDateString('ar-EG'):'—';}
