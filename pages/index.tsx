import PageTemplate from "./../components/page-template/page-template";
import Link from "next/link";
export default function Home() {
  return (
    <PageTemplate heading="The super important React Next app">
      <p className="my-5">
        Assuming you&apos;re not running npm dev, you will see that the random
        cat page updates on each pageload, while the static cat page stays the
        same.
      </p>
    </PageTemplate>
  );
}
