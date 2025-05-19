export default function useFetchPortfolioCard() {
    return {
        FetchPortfolioCard: async () => {
            try {
                const response  =  await fetch('http://localhost:5069/api/Portfolio');
                if(!response.ok) {
                    throw new Error(`Server response ${response.status}`)
                }
                return await response.json()
            } catch (err) {
                throw new Error(err)
            }

        }
    }
}
