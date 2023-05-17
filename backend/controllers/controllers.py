import hug
from database.database import session

@hug.get('/{id}')
def getEmployee(id):
    return "Retourne un json d'une fiche d'employer"

@hug.get('all')
def allEmployee():
    return "Retourne une liste d'employer"

def addEmployee(body):
    return "Retourne les infos du nouveaux employer ajouter"

@hug.patch('')
def updateEmployee(body):
    return "Retourne l'employer mis à jour"

@hug.delete('')
def deleteEmployee(id):
    return "Retourne true | false"