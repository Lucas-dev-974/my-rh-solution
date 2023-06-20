from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

try:
    from getConf import getConfig
except:
    from .getConf import getConfig


connection_url = getConfig("CONNECTION_URL")

if connection_url is None:
    raise Exception("Veuillez spécifié l'utrl d conneion à la bdd")


engine = create_engine(connection_url)

session = sessionmaker(bind=engine)
session = session()
Base = declarative_base()
