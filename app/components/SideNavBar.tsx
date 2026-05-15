"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavBar() {

  const pathname = usePathname();

  return (
    
    <aside className="sidebar">      

        <div className="logo-section p-6 border-b border-white/20 flex items-center justify-center">
            <img
                src="/ridemachan-logo.png"
                alt="CareerBridge Logo"
                className="logo"
            />
        </div>

        
        <nav className="nav-menu flex-1 px-4 py-6">

            <ul className="u-list space-y-2">

                <li className="nav-item">
                    <Link
                        href="/candidate/dashboard"
                        className={`nav-link ${pathname === "/candidate/dashboard" ? "active" : ""}`}
                    >
                        <i className="fas fa-home"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item group">
                    <Link 
                        href="/candidate/jobs"
                        className={`nav-link ${pathname === "/candidate/jobs" ? "active" : ""}`} 
                    >
                        <i className="fas fa-user"></i>
                        <span className="font-bold">Jobs</span>
                    </Link>
                </li>

                <li className="nav-item group">
                    <Link
                        href="/candidate/cv"
                        className={`nav-link ${pathname === "/candidate/cv" ? "active" : ""}`}
                    >
                        <i className="fas fa-file"></i>
                        <span className="font-medium">Interview Calendar</span>
                    </Link>
                </li>

                <li className="nav-item group">
                    <Link 
                        href="/candidate/companies"
                        className={`nav-link ${pathname === "/candidate/companies" ? "active" : ""}`}
                    >
                        <i className="fas fa-briefcase"></i>
                        <span className="font-medium">Companies</span>
                    </Link>
                </li>

                <li className="nav-item group">
                    <Link 
                        href="/candidate/applications"
                        className={`nav-link ${pathname === "/candidate/applications" ? "active" : ""}`}
                    >
                        <i className="fas fa-paper-plane"></i>
                        <span className="font-medium">Applications</span>
                    </Link>
                </li>

                <li className="nav-item group">
                    <Link 
                        href="/candidate/interviews"
                        className={`nav-link ${pathname === "/candidate/interviews" ? "active" : ""}`}
                    >
                        <i className="fas fa-question"></i>
                        <span className="font-medium">CV Builder</span>
                    </Link>
                </li>

            </ul>
            
        </nav>

    
        <div className="logout-section">
            <Link href="/" className="nav-link">
            <i className="fas fa-sign-out"></i>
            <span>Logout</span>
            </Link>
        </div>

    </aside>

  );

}