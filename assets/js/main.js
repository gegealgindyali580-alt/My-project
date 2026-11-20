import {initStorage} from './core/storage.js';import {getSession,logout} from './core/auth.js';import {startRouter,registerRoute} from './core/router.js';import {toast} from './core/ui.js';
import * as dashboard from './modules/dashboard.js';import * as students from './modules/students.js';import * as attendance from './modules/attendance.js';import * as grades from './modules/grades.js';import * as announcements from './modules/announcements.js';import * as settings from './modules/settings.js';import * as profile from './modules/profile.js';import * as staff from './modules/staff.js';import * as schedule from './modules/schedule.js';import * as reports from './modules/reports.js';import * as assistant from './modules/assistant.js';
initStorage();if(!getSession())location.href='index.html';
const admin=['admin'];[['dashboard',dashboard],['students',students],['attendance',attendance],['grades',grades],['announcements',announcements],['settings',settings],['profile',profile],['staff',staff],['schedule',schedule],['reports',reports],['assistant',assistant]].forEach(([path,module])=>registerRoute(path,{render:module.render,roles:admin}));
document.querySelector('#logout').addEventListener('click',()=>{logout();location.href='index.html';});
document.querySelector('#menu-toggle').addEventListener('click',()=>document.querySelector('#sidebar').classList.toggle('open'));
document.querySelector('#assistant-fab').addEventListener('click',()=>location.hash='#/assistant');
document.querySelector('#current-date').textContent=new Date().toLocaleDateString('ar-EG',{dateStyle:'full'});
startRouter();
