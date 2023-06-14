
from sqlalchemy     import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

try:
    from getConf import getConfig
except:
    from .getConf import getConfig
    

''' Create engine and session communicate with database '''
engine  = create_engine('postgresql://' + getConfig('USER') + ':' + getConfig('PASSWORD')
                        + '@localhost:5434/' + getConfig('DATABASE') + '', echo=True)
session = sessionmaker(bind=engine)
session = session()

Base = declarative_base()