import './globals.css';
import SiteShell from '@/components/SiteShell';
export const metadata={metadataBase:new URL('https://usama-cinematic-portfolio.vercel.app'),title:{default:'Muhammad Usama — Full-Stack Software Engineer',template:'%s | Muhammad Usama'},description:'Muhammad Usama is a Karachi-based full-stack developer building React, ASP.NET Core and SQL-backed digital products. Portfolio, engineering work and experience.',openGraph:{title:'Muhammad Usama — Full-Stack Software Engineer',description:'Engineering digital experiences beyond the demo.',type:'website'}};
export default function RootLayout({children}){return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>}
