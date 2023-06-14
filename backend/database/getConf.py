from dotenv import dotenv_values

# Permet de garder les identifiants de connexion de la BDD dans l'environnement
def getConfig(name):
    vars = dotenv_values('.env')    
    return vars[name]