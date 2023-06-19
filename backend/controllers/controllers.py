import hug
from database.database import session
from database.models import Employees
import json


@hug.get("/{id}")
def getEmployee(id):
    employee = session.query(Employees).filter_by(id=id).one()
    return employee.to_dict()


@hug.get("")
def allEmployee():
    employees = session.query(Employees).all()
    return [employee.to_dict() for employee in employees]


@hug.post("")
def addEmployee(body):
    body = json.loads(body)
    email = body.get("email")
    gender = body.get("gender")
    first_name = body.get("first_name")
    last_name = body.get("last_name")
    phone_number = body.get("phone_number")
    email_personnal = body.get("email_personnal")

    id = session.query(Employees).count()

    session.add(
        Employees(
            id=id,
            email=email,
            gender=gender,
            first_name=first_name,
            last_name=last_name,
            phone_number=phone_number,
            email_personnal=email_personnal,
        )
    )
    session.commit()
    return email


@hug.put("")
def updateEmployee(body):
    body = json.loads(body)
    id = body.get("id")
    email = body.get("email")
    gender = body.get("gender")
    first_name = body.get("first_name")
    last_name = body.get("last_name")
    phone_number = body.get("phone_number")
    email_personnal = body.get("email_personnal")

    employee = session.query(Employees).filter_by(id=id).one()

    if employee.email != email:
        employee.email = email
    if employee.gender != gender:
        employee.gender = gender
    if employee.first_name != first_name:
        employee.first_name = first_name
    if employee.last_name != last_name:
        employee.last_name = last_name
    if employee.phone_number != phone_number:
        employee.phone_number = phone_number
    if employee.email_personnal != email_personnal:
        employee.email_personnal = email_personnal

    session.commit()
    session.flush()
    return "Retourne l'employer mis à jour"


@hug.delete("/{id}")
def deleteEmployee(id):
    employee = session.query(Employees).filter(Employees.id == id)

    if employee:
        employee.delete()
        session.commit()
    return "Retourne true | false"
