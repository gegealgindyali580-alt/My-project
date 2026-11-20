export function validPhone(phone){return /^01[0125][0-9]{8}$/.test(phone);}
export function validName(name){return /^[\u0600-\u06FF\s]+$/.test(name.trim())&&name.trim().split(/\s+/).length>=4;}
export function validPassword(password,username=''){return password.length>=8&&/[A-Za-z]/.test(password)&&/[0-9]/.test(password)&&password!==username;}
export function validGrade(value,max){if(value==='غ'||value==='ع')return true;const n=Number(value);return Number.isFinite(n)&&n>=0&&n<=max&&/^\d+(\.\d{1,2})?$/.test(String(value));}
