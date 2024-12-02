export async function fetchData() {
    const endpoint = 'vacancies';
    try {
        const response = await fetch(`https://flower-honeysuckle-empress.glitch.me/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
        
    } catch (err) {
        console.error("Error while fetching data:", err);
        return [];
    }
}
