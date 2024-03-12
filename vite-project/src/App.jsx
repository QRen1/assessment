import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [EventTitle, setEventTitle] = useState("");

  const title = "CBC Cycle 2015";

  const handleClick = () => {
    alert("Event Title: " + title);
  };
  return (
    <div className="block md:flex relative">
      <div className="flex-1 ">
        <img
          src="https://onecms-res.cloudinary.com/image/upload/s--Adisr5oI--/f_auto,q_auto/c_fill,g_auto,h_622,w_830/v1/mediacorp/tdy/image/2022/01/18/2022118_al_ocbc_generics02.jpg?itok=3EuLS0Vt"
          className="h-[100vh] w-[full] object-cover"
        />
      </div>
      <div className="flex-1 p-10 bg-[#efefef] relative">
        <header className="text-[#67a7b4] font-bold text-[2rem]">
          {title}
        </header>
        <div className="flex flex-col gap-5 pt-5 ">
          <div className="flex gap-3 relative">
            <h1>VENUE:</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis,{" "}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#67a7b4"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="flex gap-3">
            <h1>DATE:</h1>
            <p>
              15 JUN 2015 <br /> 08:00 AM
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-5">
            <a className="mt-5 text-[#67a7b4] font-bold" onClick={handleClick}>
              WEBSITE
            </a>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              perspiciatis mollitia ipsum incidunt aut in tempora magnam
              laboriosam, consectetur impedit velit nostrum ad illo accusantium
              numquam excepturi, aliquam maiores. Tempore.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-10 flex gap-3">
        <p className="text-[15px] text-[#67a7b4] font-bold">
          See similar events
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
