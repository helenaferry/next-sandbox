import PageTemplate from "./../components/page-template/page-template";
import Image from "next/image";
import { Alkatra } from "next/font/google";

const font = Alkatra({
  weight: "400",
  subsets: ["latin"],
});

type CatFactType = {
  imgUrl: string;
  fact: string;
};

export default function RandomCatFact(props: CatFactType) {
  return (
    <PageTemplate heading="Random cat">
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

// This gets called on every request
export async function getServerSideProps() {
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
