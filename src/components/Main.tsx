import { SvgCheck } from "../util/icons/ArrowRight";

function Main() {
  return (
    <>
      <section>
        <div className="container max-w-full mx-auto py-12 px-6">
          <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
            Precios
          </h1>
          <p className="text-center text-lg text-gray-700 mt-2 px-6">
            ¡Ahorra más con nuestros combos especiales! Obtén múltiples
            servicios financieros a un precio reducido. ¡Compra ahora y
            simplifica tus finanzas!{" "}
          </p>
          <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="relative block flex flex-col md:flex-row items-center">
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      Basico
                    </h1>
                    <h2 className="text-sm text-gray-500 text-center pb-6">
                      FREE
                    </h2>
                    ¡Acceso gratuito a herramientas esenciales con nuestro plan
                    Básico! ¡Comienza hoy mismo!
                  </div>

                  <div className="flex flex-wrap mt-3 px-6">
                    <ul>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          {SvgCheck({})}
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          Herramientas esenciales para una gestión financiera
                          sólida.
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                        {SvgCheck({})}
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          Acceso sin costo mensual.
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                        {SvgCheck({})}
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          Control efectivo de tus finanzas.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="block flex items-center p-8  uppercase">
                    <button
                      className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                    >
                      Adquirir
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                <div className="text-sm leading-none rounded-t-lg bg-pink-600 text-white font-semibold uppercase py-4 text-center tracking-wide">
                  Popular
                </div>
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    Pro
                  </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">
                    <span className="text-3xl"> $49.99</span> /mes
                  </h2>
                  Obtén ventajas exclusivas con nuestro plan Pro por $49.99/mes.
                  ¡Optimiza tu gestión financiera ya!
                </div>
                <div className="flex pl-12 justify-start sm:justify-start mt-3">
                  <ul>
                    <li className="flex items-center">
                      <div className="rounded-full p-2 fill-current text-green-700">
                      {SvgCheck({})}
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                      Funciones exclusivas para una gestión financiera avanzada.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                      {SvgCheck({})}
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                      Soporte prioritario para resolver tus dudas rápidamente.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                      {SvgCheck({})}
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                      Análisis detallados para tomar decisiones financieras informadas.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="block flex items-center p-8  uppercase">
                  <button
                    className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                  >
                    Adquirir
                  </button>
                </div>
              </div>
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      Elite
                    </h1>
                    <h2 className="text-sm text-gray-500 text-center pb-6">
                      $99.99 /mes
                    </h2>
                    Desbloquea funciones premium con nuestro plan Elite por
                    $99.99 al mes. ¡Únete ahora!
                  </div>
                  <div className="flex flex-wrap mt-3 px-6">
                    <ul>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                        {SvgCheck({})}
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                        Acceso a características premium para maximizar tus finanzas.
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                        {SvgCheck({})}
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                        Servicios exclusivos diseñados para llevar tu gestión financiera al siguiente nivel.
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                        {SvgCheck({})}
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                        Opciones avanzadas de análisis y herramientas personalizadas.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="block flex items-center p-8  uppercase">
                    <button
                      className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                    >
                      Adquirir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
