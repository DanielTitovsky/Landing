import {Layout} from "@/components/Layout.jsx";
import {Hero} from "@/components/sections/Hero.jsx";
import {Services} from "@/components/sections/Services.jsx";
import {Why} from "@/components/sections/Why.jsx";
import {Portfolio} from "@/components/sections/Portfolio.jsx";
import {Specialists} from "@/components/sections/Specialists.jsx";
import {Information} from "@/components/sections/Information.jsx";

function App() {
    return (
        <Layout>
            <Hero/>
            <Services/>
            <Why/>
            <Portfolio/>
            <Specialists/>
            <Information/>
        </Layout>
    );
}

export default App;
