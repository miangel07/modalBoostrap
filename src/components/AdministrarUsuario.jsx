import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Alert from "../components/Alertas";

const AdministrarUsuario = () => {
  const url = "http://localhost:3000/api/usuario/listar";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [values, setValues] = useState([]);
  const [btnEditar, setbtnEditar] = useState(false);

  const [title, setTitle] = useState(); // titulo del modal
  const [operaciones, setOperaciones] = useState();

  useEffect(() => {
    GetPersonas();
  }, []);

  const usuario = async(data)=> {
 const registrar = await axios.post("http://localhost:3000/api/usuario/registrar",data)

 console.log(registrar.data.message)
  }

  const GetPersonas = async () => {
    const respuesta = await axios.get(url);
    setValues(respuesta.data);
    console.log(respuesta.data);
  };

  return (
    <>
      <div className="App">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-md-4 offset-4">
              <div className="d-grid mx-auto">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-lg-2">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>nombre</th>
                      <th>apellido</th>
                      <th>correo</th>
                      <th>telefono</th>
                      <th>rol usuario</th>
                      <th>numero de identificacion</th>
                      <th>tipo de documento</th>
                      <th>acciones</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {values.map((usuario) => (
                      <tr key={usuario.id_usuario}>
                        <td>{usuario.id_usuario}</td>
                        <td>{usuario.nombre_usuario}</td>
                        <td>{usuario.apellido_usuario}</td>
                        <td>{usuario.correo_electronico}</td>
                        <td>{usuario.telefono_usuario}</td>
                        <td>{usuario.rol_usuario}</td>
                        <td>{usuario.numero_identificacion}</td>
                        <td>{usuario.tipo_documento}</td>
                        <td>
                          <button
                            onClick={() => editarusuario(usuario.id)}
                            className="btn btn-warning"
                          >
                            editar
                          </button>
                          <button className="btn btn-danger">eliminar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* formulario aqui */}
                <form onSubmit={handleSubmit((data)=>usuario(data))}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("nombre_usuario")}
                    />
                    <div id="apellido_usuario" className="form-text">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        apellido
                      </label>
                      <input
                        {...register("apellido_usuario")}
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      correo
                    </label>
                    <input
                      {...register("correo_electronico")}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      telefono
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("telefono_usuario")}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      rol
                    </label>
                    <input
                      {...register("rol_usuario")}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      contraseña
                    </label>
                    <input
                      {...register("contraseña_usario")}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      numero de identificacion
                    </label>
                    <input
                      {...register("numero_identificacion")}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      tipo de documento
                    </label>
                    <input
                      {...register("tipo_documento")}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="text" className="form-check-input" name="" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Crear
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdministrarUsuario;
