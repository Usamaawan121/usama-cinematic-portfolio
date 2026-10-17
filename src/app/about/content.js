import { TbCode } from 'react-icons/tb';
import { profile } from '@/data/profile';
export const SECTION = { label: 'About me' };
export const HEADING = { line1: "I'm", line2: 'Usama.', line3: 'Software Engineer.' };
export const BIO = profile.bio;
export const RESUME_URL = profile.resume;
export const TECH = profile.skills.map(name => ({name,icon:TbCode}));
export const CREATIVE = profile.tools.map(name => ({name,icon:TbCode}));
export const EXPERIENCE = profile.experience.map(e=>({role:`${e.company} · ${e.role}`,period:e.period}));
