FROM python:3.9-slim-buster

WORKDIR /backend

COPY . .
RUN pip install --no-cache-dir -r requirements.txt


CMD ["hug", "-f", "server.py", "-p", "3000"]