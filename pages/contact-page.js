import Layout from "@/components/layout";
import Image from "next/image";

const ContactPage = () => {
  return (
    <Layout title={"ContactPage"}>
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold text-xl">Contact info</p>
        </div>
        <div className="flex justify-center ">
          <Image className="rounded-full" src="/naoki切り抜き.png" width={200} height={250} alt="naoki" />
        </div>
        <div>
          <p className="font-bold">Name</p>
          <p className="text-xs text-gray-600">Naoki Nagahara</p>
          <p className="font-bold mt-2">Address</p>
          <p className="text-xs text-gray-600">Nara City</p>
          <p className="font-bold mt-2">E-mail</p>
          <p className="text-xs text-gray-600">0512.naoki.job@gmail.com</p>
          <p className="font-bold mt-2">Phone</p>
          <p className="text-xs text-gray-600">080-4388-1876</p>
        </div>
        <div className="flex justify-around mt-3">
          <a href="">
            <p>Insta</p>
          </a>
          <a href="">
            <p>Note</p>
          </a>
          <a href="">
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
