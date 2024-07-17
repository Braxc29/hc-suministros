import React from "react";
import va from "../../assets/images/logohc";
const Us = () => {
  return (
    <div className="App bg-[#101010]">

      <div class="flex flex-col sm:flex-row sm:max-w-7xl max-w-xs mx-auto pt-20 overflow-hidden p-3 sm:mt-10">
        <div class="p-2 sm:w-1/2">
          <img
            class="object-cover w-full sm:h-80 h-60 rounded-lg"
            src={va}
            alt="Article"
          />
        </div>
        <div class="sm:p-4 p-2 pl-2 ml-5 sm:w-1/2 flex flex-col justify-between">
          <div>
            <a
              href="#"
              class="block sm:mt-2 text-left text-5xl font-semibold text-gray-50 dark:text-[#AB4D4D] hover:text-white"
            >
              VISIÓN
            </a>
            <p class="text-left mt-5  text-gray-200 dark:text-[#DCDCDC]">
              Consolidar y posicionar productos de marca propia y extranjeras
              que lideren en el mercado nacional ofreciendo soluciones novedosas
              e integrales para distintos sectores industriales, promocionando
              el uso de materiales y sistemas de instalación acordes con el
              cuidado y preservación del medio ambiente.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col  sm:flex-row-reverse sm:flex-row sm:max-w-7xl max-w-xs mx-auto overflow-hidden p-3">
        <div class="p-2 sm:w-1/2">
          <img
            class="rounded-lg object-cover w-full sm:h-80 h-60"
            src={va}
            alt="Article"
          />
        </div>
        <div class="sm:p-4 p-2 pl-2 ml-5 sm:w-1/2 flex flex-col justify-between">
          <div>
            <a
              href="#"
              class="block sm:mt-2 text-left text-5xl font-semibold text-gray-50 dark:text-[#AB4D4D] hover:text-white"
            >
              MISIÓN
            </a>
            <p class="text-left mt-5  text-gray-200 dark:text-[#DCDCDC]">
              Brindar productos y servicios que cumplan con las expectativas de
              nuestros clientes en términos de seguridad, calidad, costo y
              oportunidad. Ser un aliado estratégico para nuestros clientes,
              alineados a sus exigencias superando sus expectativas, teniendo
              como carta de presentación eficiencia, innovación y confiabilidad
              a través de la mejora continua con valores agregados añadidos en
              cada proceso.
            </p>
          </div>
        </div>
      </div>

      <div class="grid justify-items-center sm:mt-40 sm:m-36 sm:grid-cols-3 sm:gap-52 sm:text-7xl text-2xl grid-cols-2 m-10 gap-10 place-content-evenly h-full max-h-screen text-white">
          <p class="hover:text-[#AB4D4D]">Lorem rem facere</p>
          <p class="hover:text-[#AB4D4D]">Lorem rem facere</p>
          <p class="hover:text-[#AB4D4D]">Lorem rem facere</p>
          <p class="hover:text-[#AB4D4D]">Lorem rem facere</p>
          <p class="hover:text-[#AB4D4D]">Lorem rem facere</p>
          <p class="hover:text-[#AB4D4D]">Lorem rem facere</p>
      </div> 

      <div class="flex items-center w-screen bg-[#101010]">
      <div class="container mx-auto my-3 px-4 lg:px-20">
        <div class="w-full p-8 my-4 md:px-16 mr-auto bg-white rounded-2xl">
          <div class="flex">
            <h1 class="font-bold uppercase text-5xl">
              Contacto
            </h1>
          </div>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
              type="text"
              placeholder="Nombre"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
              type="text"
              placeholder="Apellido"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
              type="number"
              placeholder="Telefono"
            />
          </div>
          <div class="my-4">
            <textarea
              placeholder="Mensaje"
              class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
            ></textarea>
          </div>
          <div class="my-2 w-1/2 lg:w-1/4">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-[#A42646] text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>

  );
};
export default Us;
