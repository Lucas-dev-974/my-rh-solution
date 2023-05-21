from sqlalchemy import Column, String, Integer
from sqlalchemy_serializer import SerializerMixin

try:
    from database import Base
except:
    from ..database import Base
    
class Employees(Base, SerializerMixin):
    __tablename__ = 'employees'

    id     = Column(Integer, primary_key=True, nullable = False) 

    email  = Column(String)
    gender = Column(String)
    first_name = Column(String)
    last_name  = Column(String)
    phone_number = Column(String)
    email_personnal = Column(String)

    