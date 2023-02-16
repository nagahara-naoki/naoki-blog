import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children, title }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm  font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-20">
            <div className="flex space-x-4">
              <Link href={"/"}>
                <p className="headerText">HOME</p>
              </Link>
              <Link href={"/blog-page"}>
                <p className="headerText">Blog</p>
              </Link>
              <Link href={"/contact-page"}>
                <p className="headerText">Contact</p>
              </Link>
              <Link href={"/portfolio-page"}>
                <p className="headerText">Works</p>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className=" flex-1 justify-center items-center flex-col w-screen">{children}</main>
      <footer className="w-full flex justify-center border-t h-15">
        <div className="flex items-center m-4">
          <p className="pr-3 font-bold">Powered by </p>
          <Image className="" src="/next.svg" alt="Next.js Logo" width={100} height={30} priority />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
