import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { messageError, messageInfo } from "../util/ModelMessage";
import { GetUsertPosts } from "../hooks/context/GetUserContext";
import { Utils } from "../util/utils";

function FormupdateAdmin() {
  const { updateProfile, deleteProfile } = GetUsertPosts();
  return (
    <>
      <h2 className="text-center text-xl">Actualizar Datos</h2>
      <Formik
        calssName="mb-10"
        initialValues={{
          name: "",
          surname: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("El nombre es requerido"),
          surname: Yup.string().required("El apellido es requerido"),
        })}
        onSubmit={async (values) => {
          

          try {
            await updateProfile(values.name, values.surname);
            messageInfo("Perfil actualizado correctamente");
          } catch (error) {
            console.log(error);
            messageError("Error al actualizar el perfil");
          }
        }}
      >
        <Form>
          <div className="flex flex-col">
            <label htmlFor="name">Nombre</label>
            <Field name="name" type="text" className="p-2 text-black" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname">Apellido</label>
            <Field name="surname" type="text" className="p-2 mb-4 text-black" />
          </div>
          <div>
            <button
              type="submit"
              className="bg-white mx-auto text-black p-2 block text-center w-full rounded-full"
            >
              Actualizar
            </button>
          </div>
        </Form>
      </Formik>
      <div
        className="bg-red-600 mx-auto mt-4 text-white cursor-pointer p-2 block text-center w-full rounded-full"
        onClick={async () => {
            alert("¿Estas seguro de eliminar tu cuenta?");
            try {
                await deleteProfile();
                messageInfo("Cuenta eliminada correctamente");
                Promise.resolve();
                window.location.href = "/";
          } catch (error) {
            messageError("Error al eliminar la cuenta");
          }

          Utils.closeAccount();
        }}
      >
        Eliminar cuenta
      </div>
    </>
  );
}

export default FormupdateAdmin;
