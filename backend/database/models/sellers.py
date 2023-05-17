from sqlalchemy import Column, String, ForeignKey

try:
    from database import Base
except:
    from ..database import Base
    
class Sellers(Base):
    __tablename__ = 'sellers'

    id       = Column(String, primary_key=True) 
    name     = Column(String)
    state = Column(ForeignKey('locations.state'))

    