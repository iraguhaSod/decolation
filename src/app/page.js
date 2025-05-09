import Showcarditem from "@/components/showcarditem";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { getAllItem } from "@/lib/actions/getItem";



export default async function Home() {
  const allItem = await getAllItem()
  return (
    <div className="">
      <Navbar />
      <Hero />

      < div className="grid grid-color-1 cursor -pointer md: grid-cols-2 lg:grid-cols-4 gap-4 p-10">
        {allItem.map((item, i) => (

          <Showcarditem key={item._id}
            name={item.name}
            description={item.desription}
            size={item.size}
            cost={item.cost}
            photo={item.photo} />
        ))}


      </div>




    </div>

  );
}
