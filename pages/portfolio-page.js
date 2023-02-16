import Layout from "@/components/layout";
import Image from "next/image";

const PortfolioPage = () => {
  return (
    <Layout title={"portfolio"}>
      <div>
        <h1>作品一覧</h1>
      </div>
      <div className="grid grid-cols-2">
        <Image src="/PhotoImg/img1.jpg" width={400} height={400} className="p-2"></Image>
        <Image className="p-2" src="/PhotoImg/img2.jpg" width={400} height={400}></Image>
        <Image className="p-2" src="/PhotoImg/img3.jpg" width={400} height={400}></Image>
        <Image className="p-2" src="/PhotoImg/img4.jpg" width={400} height={400}></Image>
        <Image className="p-2" src="/PhotoImg/img5.jpg" width={400} height={400}></Image>
        <Image className="p-2" src="/PhotoImg/img5.jpg" width={400} height={400}></Image>
        <Image className="p-2" src="/PhotoImg/img5.jpg" width={400} height={400}></Image>
        <Image className="p-2" src="/PhotoImg/img5.jpg" width={400} height={400}></Image>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
