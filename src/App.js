import Home from "./pages/Home/Home";
import Telephone from "./assets/telephone.png";
function App() {
  return (
    <>
      <div className="">
        <div className="right-0 top-[12%] translate-y-[-50%] fixed z-[99999999] flex flex-col gap-[18px]">
          <button className="bg-white shadow-1 rounded-tl-[16px] shadow-2 rounded-bl-[16px] pl-[5px] ">
            <a
              href="https://wa.me/8904458815"
              className="contact-data-info"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[46px] h-[46px] object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
                alt="whatsapp"
              />
            </a>
          </button>
          <button className="bg-white shadow-1 rounded-tl-[16px] shadow-2 rounded-bl-[16px] pl-[5px] py-[6px]">
            <a
              href="tel:8904458815"
              className="contact-data-info"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[40px] h-[40px] object-cover"
                src={Telephone}
                alt="whatsapp"
              />
            </a>
          </button>
        </div>
      </div>
      <Home />
    </>
  );
}

export default App;
