import { client } from "@/libs/client";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";

const HomePage = ({ data }) => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/weather");
      const res = await response.json();
      setWeather(res.data[0]);
    };
    fetchUsers();
  }, []);
  return (
    <Layout title={"HOME"}>
      <p>今日の奈良県の天気</p>
      {/* {console.log(weather.timeSeries[0].areas[0].area.name)} */}
      <p>{weather.publishingOffice}</p>
      <p>{undefined ? weather.timeSeries[0].areas[0].area.name : "undefined"}</p>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default HomePage;

// https://weather.tsukumijima.net/api/forecast/city/290010
