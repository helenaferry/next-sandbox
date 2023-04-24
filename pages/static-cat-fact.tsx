import PageTemplate from "./../components/page-template/page-template";
import Image from "next/image";

import { Kalam } from "next/font/google";

const font = Kalam({
  weight: "400",
  subsets: ["latin"],
});

type CatFactType = {
  imgUrl: string;
  fact: string;
};

export default function StaticCatFact(props: CatFactType) {
  return (
    <PageTemplate heading="Static cat">
      <Image
        src={props.imgUrl}
        alt={props.imgUrl}
        fill={true}
        className="!relative"
      />
      <p className="my-5 text-[30px]">
        <span className={font.className}>{props.fact}</span>
      </p>
    </PageTemplate>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Fetch data from external API
  const catFactRes = await fetch(`https://meowfacts.herokuapp.com/`);
  const factData = await catFactRes.json();

  const catImgRes = await fetch("https://api.thecatapi.com/v1/images/search");

  if (catImgRes.status !== 200 || !factData || !factData.data) {
    return;
  }
  const catImgData = await catImgRes.json();

  const data: CatFactType = {
    imgUrl: catImgData[0].url,
    fact: factData.data[0],
  };

  // Pass data to the page via props
  return { props: data };
}
