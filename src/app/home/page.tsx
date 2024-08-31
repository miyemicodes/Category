import Nav from "../../Components/navigation/navbar";
import Sidebar from "../../Components/sidebar/sidebar";
import Category from "../../Components/category/category";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <div className="py-2 md:py-10 px-2 flex flex-col md:flex-row gap-3 bg-transparent w-full">
        <Sidebar />
        <Category />
      </div>
    </main>
  );
}
