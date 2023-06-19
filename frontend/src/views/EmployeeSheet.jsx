import { createEffect, createSignal } from "solid-js";
import request from "../services/request";



export default function () {
    const [employee, setEmployee] = createSignal({})
    const id = location.href.substring(location.href.lastIndexOf('/') + 1)

    let employer = {}
    
    createEffect( async () => {
        const response = await request('employee/' + id, 'GET', {}) 
        setEmployee(response)
        employer = response
    })

    const update = async () => {
        const response = await request('employee/', 'PATCH', JSON.stringify(employee))
    }

    return <div class="container">
        <div className="flex justify-center">
            FICHE EMPLOYEE
        </div>
        
        <section id="employee-sheet">
            <div>
                <label htmlFor="prenom">Prénom</label>
                <input id="prenom" class="text-dark" type="text" value={employee().first_name} onChange={(e) => {
                    employer.last_name = e.target.value
                    update()
                }}/>
            </div>
            <div>
                <label htmlFor="nom">Nom</label>
                <input id="nom" class="text-dark" type="text" value={employee().last_name} onChange={(e) => {
                    employer.name = e.target.value
                    update()
                }}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" class="text-dark" type="text" value={employee().email} onChange={(e) => {
                    employer.email = e.target.value
                    update()
                }}/>
            </div>
            <div>
                <label htmlFor="email-personnel">Email personnel</label>
                <input id="email-personnel" class="text-dark" type="text" value={employee().email_personnal} onChange={(e) => {
                    employer.email_personnal = e.target.value
                    update()
                }}/>
            </div>           
            <div>
                <label htmlFor="phone">Téléphone</label>
                <input id="phone" class="text-dark" type="text" value={employee().phone_number} onChange={(e) => {
                    employer.phone_number = e.target.value
                    update()
                }}/>
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <select id="genre" class="text-dark">
                    <option class="text-dark" value="male">Male</option>
                    <option class="text-dark" value="female">Female</option>
                </select>
            </div>
        </section>
    </div>
}