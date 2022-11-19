import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  // const initialDetails = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       console.log(response.data);
  //       setData([...response.data]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   initialDetails();
  // });
  const initialDetails = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      setData([...response.data]);
    } catch (err) {}
  };

  useEffect(() => {
    initialDetails();
  });

  return (
    <>
      {data.slice(0, 2).map((obj, index) => {
        return (
          <ul key={index}>
            <li>{obj.id}</li>
            <li>{obj.name}</li>
          </ul>
        );
      })}
    </>
  );
}

export default App;
