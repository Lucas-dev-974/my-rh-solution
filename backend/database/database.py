import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# try:
#     from getConf import getConfig
# except:
#     from .getConf import getConfig


connection_url = os.environ.get("CONNECTION_URL")
print(connection_url)
# if connection_url is None:
#     connection_url = (
#         "postgresql://"
#         + getConfig("USER")
#         + ":"
#         + getConfig("PASSWORD")
#         + "@localhost:5434/"
#         + getConfig("DATABASE")
#         + ""
#     )


# engine = create_engine(connection_url)

# session = sessionmaker(bind=engine)
# session = session()
# Base = declarative_base()
