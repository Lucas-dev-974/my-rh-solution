from hug.middleware import CORSMiddleware
import hug

from controllers import controllers

api = hug.API(__name__)

# allow_origins à restreindre pour le déploiement
api.http.add_middleware(CORSMiddleware(api, allow_origins=['*'])) 

api.extend(controllers, '/api/employee')