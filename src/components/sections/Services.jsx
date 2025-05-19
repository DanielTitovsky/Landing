import { Container } from "@/components/elements/container.jsx";
import { Card } from "@/components/elements/Card.jsx";
import { useEffect, useState } from "react";
import useFetchServicesCard from "../../../services/useFetchServicesCard.js";

export const Services = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { FetchServicesCard } = useFetchServicesCard();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await FetchServicesCard();
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
        <section className={'services'} id={'services'}>
            <Container className={'services-container'}>
                <h2 className="services_title">Перечень услуг</h2>
                <div className="cards-block">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            img={item.imageUrl}
                            title={item.title}
                            details={item.features}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
