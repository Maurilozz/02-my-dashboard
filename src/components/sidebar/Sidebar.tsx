import Image from "next/image";
import { FaCalculator, FaHeart, FaHouseDamage, FaReact } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import { SidebarMenuItem } from "./SidebarMenuItem";

const items = [
  {
    path: "/dashboard/main",
    icon: <FaHouseDamage size={20} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <FaCalculator size={20} />,
    title: "Contador",
    subTitle: "Contador de estado",
  },
  {
    path: "/dashboard/pokemons",
    icon: <MdCatchingPokemon size={20} />,
    title: "Pokemons",
    subTitle: "Generación estatica",
  },
  {
    path: "/dashboard/favorites",
    icon: <FaHeart size={20} />,
    title: "Favoritos",
    subTitle: "Generación Local",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex text-lg md:text-2xl font-bold text-white">
          <FaReact className="text-2xl mr-1" />
          <span>Dash</span>
          <span className="text-lime-500">8</span>.
        </h1>

        <p className="text-slate-500 text-sm">Controla tus Actividades</p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-400">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            {/* Cuando se usa una imagen es necesario configurar en next-config el dominio y el protocolo */}
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              width={50}
              height={50}
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Maurilozz</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {items.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}

        {/* <a
          href="#"
          className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">
              Counter
            </span>
            <span className="text-sm text-slate-500 hidden md:block">
              Control de estado
            </span>
          </div>
        </a> */}
      </div>
    </div>
  );
};
