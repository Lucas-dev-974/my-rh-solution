import { useParams } from "@solidjs/router";
import { createEffect, createSignal, onMount } from "solid-js";
import request from "../services/request";

export const [employee, setEmployee] = createSignal()

export default function () {
    const id = location.href.substring(location.href.lastIndexOf('/') + 1)

    createEffect( async () => {
        const response = await request('employee/' + id, 'GET', {}) 
        setEmployee(response)
    })

    return <div class="container">
        <div className="flex justify-center">
            FICHE EMPLOYEE
        </div>
        
        {/* {employee().email} */}
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />

    </div>
}