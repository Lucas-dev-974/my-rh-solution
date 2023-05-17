from database import engine

from models.sellers import Sellers, Base


''' Create all table'''
Base.metadata.create_all(engine)