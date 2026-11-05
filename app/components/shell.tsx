"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}/></svg>; }
const links = [["/", "Home"], ["/about", "About"], ["/education", "Education"], ["/skills", "Skills"], ["/explorations", "Explorations"]];
export function Header() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner"><Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Shristi Kumari home">s<span>k</span><i>.</i></Link><button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? "Close ✕" : "Menu ☰"}</button><nav id="navigation" className={open ? "navigation is-open" : "navigation"} aria-label="Main navigation">{links.map(([href,label]) => <Link href={href} key={href} aria-current={path === href ? "page" : undefined} className={path === href ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/contact" className="button nav-cta" aria-current={path === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Let’s connect <Arrow diagonal /></Link></nav></div></header>;
}
export function Footer() { return <footer className="site-footer"><div className="footer-top"><Link className="footer-name" href="/">Shristi Kumari<span>Law, code & a little curiosity.</span></Link><p>Learning with purpose.<br/>Building with possibility.</p><Link href="/contact" className="footer-connect">Let’s start a conversation <Arrow diagonal /></Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Shristi Kumari</span><span>Made with curiosity in Patna, India <span className="tiny-star">✳</span></span><a href="#top">Back to top ↑</a></div></footer>; }
