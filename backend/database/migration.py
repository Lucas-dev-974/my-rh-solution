from database import engine
from models.employees import Employees, Base


''' Create all table'''
Base.metadata.create_all(engine)