from sqlalchemy import Column, String, Boolean

try:
    from database import Base
except:
    from ..database import Base
    
class Employees(Base):
    __tablename__ = 'employees'

    id     = Column(String, primary_key=True) 
    email  = Column(String)
    gender = Column(String)
    first_name = Column(String)
    last_name  = Column(String)
    phone_number = Column(String)
    email_personnal = Column(String)

    