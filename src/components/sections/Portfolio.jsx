import {PortfolioCard} from "@/components/elements/PortfolioCard.jsx";
import {Container} from "@/components/elements/container.jsx";
import {useEffect, useState} from "react";
import useFetchPortfolioCard from "../../../services/useFetchPortfolioCard.js";


export const Portfolio = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { FetchPortfolioCard } = useFetchPortfolioCard();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await FetchPortfolioCard();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки данных</div>;
    if (!data || data.length === 0) return <div>Нет данных для отображения</div>;

    return (
        <section className={'portfolio'} id={'Products'}>
           <Container className={'portfolio_container'}>
               <h2 className={'portfolio_title'}>Наше портфолио</h2>
               {data.map((item, index) => (
                   <PortfolioCard key={index} {...item}/>
               ))}
           </Container>
        </section>
    )
}
