import os


# Permet de garder les identifiants de connexion de la BDD dans l'environnement
def getConfig(name):
    vars = os.environ.get(name)
    return vars
