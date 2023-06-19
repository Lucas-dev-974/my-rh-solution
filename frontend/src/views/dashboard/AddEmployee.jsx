import { Show, createSignal } from "solid-js";
import request from "../../services/request";

export default function () {
  const [open, setOpen] = createSignal(false);
  let employee = {
    first_name: "",
    last_name: "",
    email: "",
    email_personnal: "",
    phone_number: "",
    gender: "Male",
  };

  function toggleModal() {
    setOpen((bool) => !bool);
  }

  async function addEmployee() {
    await request("employee", "POST", JSON.stringify(employee));
  }

  return (
    <div className="">
      <button class="btn bg-[var(--green)]" onClick={toggleModal}>
        Ajouter
      </button>
      <Show when={open()}>
        <div class="modal open">
          <div class="modal-content">
            <section id="fields">
              <div>
                <label htmlFor="prenom">Prénom</label>
                <input
                  id="prenom"
                  class="text-dark"
                  type="text"
                  value={employee.first_name}
                  onChange={(e) => {
                    employee.first_name = e.target.value;
                  }}
                />
              </div>
              <div>
                <label htmlFor="nom">Nom</label>
                <input
                  id="nom"
                  class="text-dark"
                  type="text"
                  value={employee.last_name}
                  onChange={(e) => {
                    employee.last_name = e.target.value;
                  }}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  class="text-dark"
                  type="text"
                  value={employee.email}
                  onChange={(e) => {
                    employee.email = e.target.value;
                  }}
                />
              </div>
              <div>
                <label htmlFor="email-personnel">Email personnel</label>
                <input
                  id="email-personnel"
                  class="text-dark"
                  type="text"
                  value={employee.email_personnal}
                  onChange={(e) => {
                    employee.email_personnal = e.target.value;
                  }}
                />
              </div>
              <div>
                <label htmlFor="phone">Téléphone</label>
                <input
                  id="phone"
                  class="text-dark"
                  type="text"
                  value={employee.phone_number}
                  onChange={(e) => {
                    employee.phone_number = e.target.value;
                  }}
                />
              </div>
              <div>
                <label htmlFor="genre">Genre</label>
                <select
                  id="genre"
                  class="text-dark"
                  value={employee.gender}
                  onChange={(e) => {
                    employee.gender = e.target.value;
                  }}
                >
                  <option class="text-dark" value="Male">
                    Male
                  </option>
                  <option class="text-dark" value="Female">
                    Female
                  </option>
                </select>
              </div>
            </section>

            <section class="flex justify-end gap-3 mt-4">
              <button class="btn bg-[var(--red)] px-5" onClick={toggleModal}>
                Annuler
              </button>

              <button class="btn bg-[var(--green)] px-5" onClick={addEmployee}>
                Ajouter
              </button>
            </section>
          </div>
        </div>
        <div class="modal-overlay" onClick={toggleModal}></div>
      </Show>
    </div>
  );
}
