import { createEffect, createSignal, on } from 'solid-js';
import { addItemToSelect, removeItemFromSelected, removeEmployee, globalSelect } from './EmployeesBoard'
import request from '../../services/request';

export default function (props) {
    const [selected, setSelected] = createSignal(false)
    let selectRef

    const employee = props.item
    employee.selected = selected

    createEffect(
        on(
            globalSelect,
            () => {
                if(globalSelect() == true){
                    setSelected(true)
                    selectRef.checked = true
                    addItemToSelect (employee)
                }else{
                    selectRef.checked = false
                    setSelected(false)
                    removeItemFromSelected(employee)
                }
                // console.log('ook', selected(), globalSelect())
                
            }
        )
    )

    

    const OnClickDelete = async () => {
        await request('employee/' + employee.id, 'DELETE', {})
        removeEmployee(employee)
    }

    return  <tr key={employee.email}>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-0 flex items-center gap-2">
            <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                onChange={() => {
                    // console.log(employee.selected());
                    if(employee.selected == false){
                        removeItemFromSelected(employee)
                        setSelected(false)
                    }
                    else {
                        addItemToSelect (employee)
                        setSelected(true)
                    }
                }}
                ref={selectRef}
                value={employee.selected()}
                className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
        {employee.first_name}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm ">{employee.last_name}</td>
        <td className="whitespace-nowrap px-3 py-4 text-sm ">{employee.email}</td>
        <td className="whitespace-nowrap px-3 py-4 text-sm ">{employee.phone_number}</td>
        <td className="flex justify-center gap-3 relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
            <button class='text-sm text-red-400' onClick={OnClickDelete}>
                Supprimer            
            </button>
            <button class='text-sm text-orange-300' onClick={() => location.href = "employee/" + employee.id}>
                Editer            
            </button>
        </td>
    </tr>
}