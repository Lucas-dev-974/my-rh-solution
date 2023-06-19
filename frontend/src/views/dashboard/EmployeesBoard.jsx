import { For, createEffect, createSignal, onMount } from "solid-js"
import request from "../../services/request"
import EmployeeItem from "./EmployeeItem"

export const [selected, setSelected] = createSignal([])
export const addItemToSelect = (item) => {
  let isSelected = selected().forEach(item => {
    return 'ok'
  })

  console.log('isSelected', isSelected);

  setSelected([...selected(), item] )
  console.log('items: ', selected());
}

export const removeItemFromSelected = (item) => {
  const items = selected().filter(_item => _item.id != item.id)
  console.log('items: ', selected());
  setSelected(items)
}

createEffect(() => {
  console.log(selected());
})
export const [globalSelect, setGlobalSelect] = createSignal(false)
export const [employees, setEmployees] = createSignal([])

export const removeEmployee = (item) => {
  const items = employees().filter(_item => _item.id != item.id)
  setEmployees(items)
}

export default function () {
    createEffect(async () => {
        const data = await request('employee', 'GET', {})
        setEmployees(data)
    })

    return <div id="employees-board" class="h-[80vh] mt-7 overflow-y-scroll bg-[var(--gray)] rounded-[5px] py-5">
      <div className=" flow-root mx-16">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle ">
            <table className="min-w-full divide-y divide-gray-300 text-white">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-0 flex items-center gap-2">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      onChange={() => setGlobalSelect((bool) => !bool)}
                      value={globalSelect()}
                    />
                    Prénom
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold ">
                    Nom
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold ">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold ">
                    Téléphone
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    Edition
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-white">
                {employees().map((employee) => (
                  <EmployeeItem item={employee}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
}