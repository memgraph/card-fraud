FROM python:3.9

# Install CMake for gqlalchemy
RUN apt-get update && \
    apt-get --yes install cmake && \
    rm -rf /var/lib/apt/lists/*

# Install packages
COPY requirements.txt ./
RUN pip3 install -r requirements.txt

# Copy the source code
COPY public /app/public
COPY models.py /app/models.py
COPY card_fraud.py /app/card_fraud.py
WORKDIR /app

# Set the environment variables
ENV FLASK_ENV=development
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

# Start the web application
ENTRYPOINT ["python3", "card_fraud.py"]
