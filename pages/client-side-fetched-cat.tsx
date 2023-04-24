import PageTemplate from "./../components/page-template/page-template";
import { useState, useEffect } from "react";

export default function ClientSideFetchedCat() {
  const [factData, setFactData] = useState(null);
  const [imgData, setImgData] = useState(null);

  useEffect(() => {
    fetch(`https://meowfacts.herokuapp.com/`)
      .then((res) => res.json())
      .then((data) => {
        setFactData(data.data[0]);
      });

    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => {
        setImgData(data[0].url);
      });
  }, []);

  return (
    <PageTemplate heading="Client side cat">
      {imgData && <img src={imgData} />}
      <p className="my-5">{factData}</p>
    </PageTemplate>
  );
}
