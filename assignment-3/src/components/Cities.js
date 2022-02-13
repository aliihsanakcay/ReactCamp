import cities from "../utils/cities_of_turkey.json";
import { useGlobal } from "../context/GlobalContext";

function Cities() {
    const { setSelectedCity } = useGlobal();

    const selectCity = (e) => {
        const city = cities.find((city) => city.name === e.target.value)
        setSelectedCity(city);
    }
    return (
        <div>
            <label>Choose a one city, please.</label><br/>
            <select onChange={selectCity}>
                <option hidden>Select City</option>
                {cities.map((city, key) => (
                    <option key={key} value={city.name}>{city.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Cities;
