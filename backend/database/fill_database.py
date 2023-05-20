from database import engine, session
import pandas as pd

data = pd.read_csv("database/brief-rh-dataset.csv")
with engine.begin() as connection:
    data.to_sql('employees', con=connection, if_exists='replace')