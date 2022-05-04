function Input(props) {
  return (
    <div>
      <form onSubmit={props.handleClick}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Ingrese la busqueda
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
             onChange={props.handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary"  >
          Buscar
        </button>
      </form>
    </div>
  );
}
export default Input;
