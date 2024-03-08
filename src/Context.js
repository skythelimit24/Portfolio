import React ,{ createContext, useContext, useState , useEffect} from 'react';
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState(null);
  const [input, setInput] = useState("newDelhi");
  const [hourly,setHourly] = useState(null);
  const [weekly,setWeekly] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=baa064d78ec04260af5105003241101&q=${input}&days=7&aqi=no&alerts=no`
        );
        const result = await response.json();
        if (response.ok) {
          setData(result.current);
          setLocation(result.location)
          setHourly({
            day: result.forecast.forecastday[0].day,
            hour: result.forecast.forecastday[0].hour,
          })
          setWeekly(result.forecast.forecastday)
        } else {
          throw result;
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  },[input]);



  return (
    <DataContext.Provider value={{ data, input , setInput , hourly,location,weekly }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("use Data must be provided within the DataProvider");
  }
  return context;
};
