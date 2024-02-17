import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import { FormValues } from "../util/interfaces/customerInterface";
import { messageError, messageInfo, messageSuccess } from "../util/ModelMessage";
import { SvgArrowleft, SvgEmail, SvgEye, SvgEyeSlash, SvgLoad, SvgLock } from "../util/icons/ArrowRight";
import { GetUsertPosts } from "../hooks/context/GetUserContext";

const Signup = () => {
  const [typeInput, setTypeInput] = useState(true);
  const { postSignup } = GetUsertPosts();
  const natigate = useNavigate();
  const [loading, setLoading] = useState(false);


  return (
    <>



      <div className="form-signup w-[100%] m-auto dark:border-[#777777] mx-auto rounded-md dark:bg-[#37415197] border animate__animated animate__fadeIn bg-white form md:w-[30rem]  sm:3/4 my-9 drop-shadow-2xl">
        <div className="flex item-center justify-center">
          <div className=" absolute p-2 left-0 text-3xl dark:text-white text-gray-600 ">
            <Link to="/">
              {SvgArrowleft({})}
            </Link>
          </div>
          <div className="">
            <h1 className=" text-gray-600 mb-6 block dark:text-white p-2  text-2xl text-center font-sans font-medium ">
              Crear Cuenta
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

                if (values.toggle === false) return messageInfo("Acepte los terminos y condiciones");
                setLoading(true);

                try {
                  const resp = await postSignup(values.email, values.password);
                  if (resp?.status === 200) {

                    messageSuccess("Registro exitoso");
                    setLoading(false);
                    setTimeout(() => {
                      natigate("/login");
                    }, 2000);

                  } else {
                    setLoading(false);
                    return messageError("Error al registrar");
                  }
                } catch (error) {
                  setLoading(false);
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
                    {SvgEmail({})}
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
                    {SvgLock({})}
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
                      <>
                        {SvgEye({})}
                      </>
                    ) : (

                      <>
                        {SvgEyeSlash({})}
                      </>
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

                      Ayuda
                    </p>
                  </Link>
                </div>
                <div className="text-center mt-5">

                  {
                    loading === false ? <button
                      type="submit"
                      className="bg-pink-600  inline-block dark:text-white px-6 py-2.5 text-white  text-sm   shadow-md hover:bg-pink-700 hover:shadow-lg focus:shadow-lg
                      focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-4/5 rounded-full mb-3"
                    >
                      Crear cuenta
                    </button> : <div className="bg-pink-600 text-center mx-auto   inline-block dark:text-white px-6 py-2.5 text-white  text-sm   shadow-md hover:bg-pink-700 hover:shadow-lg focus:shadow-lg
                      focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-4/5 rounded-full mb-3">
                      <>
                        <span className="flex items-center justify-center cursor-not-allowed gap-1"> {SvgLoad()} Cargando...</span>
                      </>
                    </div>
                  }


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
                  ¿Ya tienes una cuenta?
                  <Link to="/login">
                    <span

                      className="text-[#2771E0] hover:text-blue-700 transition duration-200 ease-in-out  sm:ml-1"
                    >
                      Iniciar Sesión
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

export default Signup;