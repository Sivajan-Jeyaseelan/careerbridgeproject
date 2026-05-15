import SideNavBar from "../components/SideNavBar";
import "./sidebar.css";


export default function CandidateLayout({children,} : {children: React.ReactNode;}) {

    return (
      <div className="body-children">
          <SideNavBar />
          <main>
              {children}
          </main>      
      </div>
    );

}