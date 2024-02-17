import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "animate.css";
import { Link, Navigate } from "react-router-dom";
import { FormValues } from "../util/interfaces/customerInterface";
import { messageError, messageInfo, messageSuccess } from "../util/ModelMessage";

const Login = () => {
  const [typeInput, setTypeInput] = useState(true);

  //const { getPostRegister, getLogin } = usePostAuth();


  return (
    <>
      <div className="form-signup w-[100%] m-auto dark:border-[#777777] mx-auto rounded-md dark:bg-[#37415197] border animate__animated animate__fadeIn bg-white form md:w-[30rem]  sm:3/4 my-9 drop-shadow-2xl">
        <div className="flex item-center justify-center">
          <div className=" absolute p-2 left-0 text-3xl dark:text-white text-gray-600 ">
            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14 7l-5 5l5 5"/></svg>
            </Link>
          </div>
          <div className="">
            <h1 className=" text-gray-600 mb-6 block dark:text-white p-2  text-2xl text-center font-sans font-medium ">
              Iniciar sesión
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1">
          
          <div className="container-signup   pb-1 rounded-lg ">
            <div className="description">
              <p className="block  mx-5 dark:text-white text-center">
                Crea una cuenta para mejorar la experiencia y calidad de tu
                trabajo{" "}
              </p>
            </div>
            <div className="countCuenda cursor-pointer">
              <div
                className="authGoogle 
                                p-2 m-2 flex items-center justify-center rounded"
              >
              
              </div>
            </div>
            <div className="flex items-center mx-5 my-5 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5 sm:mx-5">
              <p className="text-center mx-4 mb-0 dark:text-white">O</p>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
                toggle: false,
                checked: [],
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("El email no es valido")
                  .required("El campo no puede estar vacio"),
                password: Yup.string()
                  .required("El campo no puede estar vacio")
                  .min(6, "Debe tener mas de 6 caracteres")
                  .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[%$#@])[A-Za-z\d%$#@]{6,}$/,
                    "Debe incluir al menos una letra mayuscula, un numero y un caracter especial %$#@"
                  ),
              })}
              onSubmit={async (values: FormValues) => {
                console.log(values);
                if (values.toggle === false)
                  return messageInfo("Acepte los terminos y condiciones");
                
                try {
                    // const response = await getPostRegister(values);
                    const response = {status: 200}

                    if (response.status === 200) {
                     messageSuccess("Registro exitoso");
                        setTimeout(() => {
                            Navigate({ to: "/login" });
                        }, 2000);
                    }
                    
                } catch (error) {
                    return messageError("Error al registrar");
                }
                
               
              }}
            >
              <Form>
                <div
                  className="Fiel-email border bg-white dark:border-[#019afa] dark:bg-transparent flex items-center mx-2 my-1
                           border-solid border-1 border-slate-300 rounded
                             "
                >
                  <div className=" icons py-2 px-2  text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
                  </div>
                  <div className="email w-full ">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Correo electronico"
                      className="w-full block
                                       outline-none dark:bg-transparent dark:text-white "
                    />
                  </div>
                </div>
                <div className="error">
                  <ErrorMessage
                    component="p"
                    className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp "
                    name="email"
                  />
                </div>
                <div
                  className="Fiel-email border dark:border-[#019afa] dark:bg-transparent dark:text-white bg-white flex items-center mx-2 mt-6
                           border-solid border-1 border-slate-300 rounded"
                >
                  <div className="icons    py-2 px-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11H8a1 1 0 0 1-1-1V7a5 5 0 0 1 10 0v3a1 1 0 0 1-1 1M9 9h6V7a3 3 0 0 0-6 0Z" opacity="0.5"/><rect width="16" height="13" x="4" y="9" fill="currentColor" rx="3"/></svg>
                  </div>

                  <div className=" w-full">
                    <Field
                      type={typeInput === true ? "password" : "text"}
                      name="password"
                      placeholder="Contraseña"
                      className="w-full block
                                    outline-none bg-white dark:bg-transparent dark:text-white"
                      autoComplete="on"
                    />
                  </div>
                  <div
                    className="passEye 
                                 py-2 px-2 text-gray-400
                                 cursor-pointer
                                "
                    onClick={() => {
                      setTypeInput(!typeInput);
                    }}
                  >
                    {typeInput === true ? (
                       <svg xmlns="http://www.w3.org/2000/svg" width="1.31em" height="1em" viewBox="0 0 1792 1376"><path fill="currentColor" d="m555 1079l78-141q-87-63-136-159t-49-203q0-121 61-225q-229 117-381 353q167 258 427 375m389-759q0-20-14-34t-34-14q-125 0-214.5 89.5T592 576q0 20 14 34t34 14t34-14t14-34q0-86 61-147t147-61q20 0 34-14t14-34m363-191q0 7-1 9q-106 189-316 567t-315 566l-49 89q-10 16-28 16q-12 0-134-70q-16-10-16-28q0-12 44-87q-143-65-263.5-173T20 773Q0 742 0 704t20-69q153-235 380-371t496-136q89 0 180 17l54-97q10-16 28-16q5 0 18 6t31 15.5t33 18.5t31.5 18.5T1291 102q16 10 16 27m37 447q0 139-79 253.5T1056 994l280-502q8 45 8 84m448 128q0 35-20 69q-39 64-109 145q-150 172-347.5 267T896 1280l74-132q212-18 392.5-137T1664 704q-115-179-282-294l63-112q95 64 182.5 153T1772 635q20 34 20 69"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M3 13c3.6-8 14.4-8 18 0"/><path fill="currentColor" d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6"/></g></svg>
                    )}
                  </div>
                </div>
                <div className="error">
                  <ErrorMessage
                    component="p"
                    className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp"
                    name="password"
                  />
                </div>
                <div className="flex justify-between m-3">
                  <Link to="ayuda">
                    <p className="dark:text-white">
                      {" "}
                      {/* <FontAwesomeIcon
                        icon={faCircleQuestion}
                        className="text-[#074766] dark:text-white text-xl"
                      />{" "} */}
                      Ayuda
                    </p>
                  </Link>
                </div>
                <div className="text-center mt-5">
                  <button
                    type="submit"
                    className="bg-pink-600  inline-block dark:text-white px-6 py-2.5 text-white  text-sm   shadow-md hover:bg-pink-700 hover:shadow-lg focus:shadow-lg
                        focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-4/5 rounded-full mb-3"
                  >
                    Iniciar Sesión
                  </button>
                </div>
                <div className="permisos flex  mt-2 ml-3 justify-center text-center">
                  <Field type="checkbox" name="toggle" />
                  <Link
                    to="/privacy"
                    className="mx-2  text-slate-900 dark:text-white hover:underline overflow-hidden
                                "
                  >
                    Acepto términos y condiciones
                  </Link>
                </div>
                <p className="text-sm font-semibold  dark:text-white ml-3 sm:ml-5 text-center  my-2">
                  ¿No tienes una cuenta?
                  <Link to="/signup">
                    <span
                      
                      className="text-[#2771E0] hover:text-blue-700 transition duration-200 ease-in-out  sm:ml-1"
                    >
                        Registrate
                    </span>
                  </Link>
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default  Login;