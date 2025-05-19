import {Header} from "@/components/elements/Header.jsx";
import {Footer} from "@/components/elements/Footer.jsx";


export const Layout = ({ children }) => (
    <div className="Layout">
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
);
