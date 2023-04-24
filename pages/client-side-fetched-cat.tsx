import PageTemplate from "./../components/page-template/page-template";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Courgette } from "next/font/google";

const font = Courgette({
  weight: "400",
  subsets: ["latin"],
});

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
      {imgData && (
        <Image src={imgData} className="!relative" alt={imgData} fill={true} />
      )}
      <p className="my-5 text-[30px]">
        <span className={font.className}>{factData}</span>
      </p>
    </PageTemplate>
  );
}
