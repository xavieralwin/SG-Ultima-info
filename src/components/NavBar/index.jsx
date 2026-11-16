import Logo from "../../assets/images/logo.svg";

export default function NavBar() {
  return (
    <nav className="top-0 absolute z-50 w-screen bg-transparent">
      <div className="mx-auto p-4 sm:p-6">
        <div className="flex justify-between items-center">
          <div className="flex">
            <a href="#/"><img src={Logo} alt="Citi" /></a>
          </div>
          {/* <div class="flex">
            <div>
              <button class="text-gray-700 font-normal rounded-md px-3 py-3 text-base hover:bg-gray-700 hover:text-white" type="submit">EN</button>
              <span class="text-gold font-bold">|</span>
            </div>
            <div>
              <button class="text-white font-bold rounded-md px-3 py-3 text-base hover:bg-gray-700 hover:text-white" type="submit">ZH</button>
            </div>
          </div>  */}
        </div>
      </div>
    </nav>
  );
}
