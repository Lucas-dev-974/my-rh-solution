import AddEmployee from "./AddEmployee";

export default function () {
  return (
    <header class="flex w-full justify-end gap-4 mt-5">
      <button class="btn bg-[var(--red)]">Supprimer la sélection</button>
      <AddEmployee />
    </header>
  );
}
