import { MaterialSymbolsLightKeyboardArrowRight } from "../util/icons/ArrowRight";
import { HeaderProps } from "../util/interfaces/customerInterface";
import Navlinkcustom from "./NavLinkCustomer/Navlinkcustom";
import imgHome from "../assets/img/initialize.jpg";
import imgsecond from "../assets/img/_67a228f5-21a7-441f-9651-0f7ba65d2d09.jpg";
import 'animate.css';
function Header({ title }: HeaderProps) {
  return (
    <>
    <header className="flex justify-around w-full p-4 sticky top-0 z-50 backdrop-blur-md    ">
      <div className="title">
        <h1 className="list-none text-2xl font-bold text-pink-600">
          <Navlinkcustom to="/" className={"list-none"} children={title} />
        </h1>
      </div>

      <div>
        <nav className="flex list-none gap-2 items-center ">
          <Navlinkcustom
            to="/help"
            className="hover:text-white p-2 rounded-md hover:bg-pink-600 duration-200"
            children="Ayuda"
          />
          <Navlinkcustom
            to="/support"
            className="hover:text-white p-2 rounded-md hover:bg-pink-600 duration-200"
            children="Soporte"
          />

          <Navlinkcustom
            to="/about"
            className="hover:text-white p-2 rounded-md hover:bg-pink-600 duration-200"
            children="Hola?"
          />
        </nav>

      </div>

      <div>
        <nav className="flex list-none gap-3 items-center ">
          <Navlinkcustom
            to="/login"
            className="bg-pink-600 text-white p-2 rounded-md hover:bg-pink-700"
            children="Iniciar Sesión"
          />
          <Navlinkcustom
            to="/Signup"
            className="hover:text-white p-2 rounded-md hover:bg-pink-600 duration-200"
            children="Registrarse"
          />
        </nav>
      </div>
    </header>


<div className="hero_content flex   justify-center mt-10">

<div className="text-description flex justify-center   w-3/4">
  <p className="bg-gradient-to-r from-purple-400 via-pink-500 mx-10 to-pink-500 text-transparent bg-clip-text text-subtitle
   animate__animated animate__fadeInDown">
  Descubre nuestras billeteras digitales: rápidas, seguras y convenientes. Únete ahora.

  </p>
</div>

</div>
<div className="subInfo">

<div className="flex justify-center gap-1 items-center mt-10">
  <Navlinkcustom
    to="/login"
    className="text-blue-600  p-1 rounded-md hover:underline font-medium text-xl duration-200"
    children="Más Información"
  />
  <MaterialSymbolsLightKeyboardArrowRight className="text-blue-600 w-10 h-10" />
  <Navlinkcustom
    to="/Logout"
    className="text-blue-600  p-1 rounded-md hover:underline font-medium text-xl duration-200"
    children="Comenzar ahora"
  />

  

</div>
</div>

<div className="imgHome flex justify-center items-center gap-10 mb-4 mx-auto max-w-screen-lg mt-10">
  <img src={imgHome} alt="imgHome" className="w-3/5 rounded-md shadow-md h-1/5 "
  style={{clipPath:"polygon(0% 0%, 100% 0, 100% 94%, 48% 100%, 0 93%)"}}
  />
  <img src={imgsecond} alt="imgHome" className="w-3/5 h-1/5 rounded-md shadow-md "
  style={{clipPath:"polygon(0% 0%, 100% 0, 100% 94%, 48% 100%, 0 93%)"}}/>
</div>
</>
  );
}

export default Header;
