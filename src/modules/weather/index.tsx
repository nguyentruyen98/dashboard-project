import useApi from "hook/useApi";
import React from "react";
const Weather = () => {
  // const f = async () => {
  //   const res = await fetch("https://reqres.in/api/users/");
  //   const json = await res.json();
  //   console.log(json.data);
  // };
  // React.useEffect(() => {
  //   f();
  // }, []);
  const { data, apiLoading } = useApi({
    url: "https://reqres.in/api/users/",
    method: "get",
    loadInitialState: true,
  });
  console.log(data);
  return <div>{apiLoading && <p>Loading--------------</p>}</div>;
};

export default Weather;
