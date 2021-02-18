FROM python:3.8

# Install CMake
RUN apt-get update && \
  apt-get --yes install cmake

# Install mgclient
RUN apt-get install -y git cmake make gcc g++ libssl-dev && \
  git clone https://github.com/memgraph/mgclient.git /mgclient && \
  cd mgclient && \
  git checkout dd5dcaaed5d7c8b275fbfd5d2ecbfc5006fa5826 && \
  mkdir build && \
  cd build && \
  cmake .. && \
  make && \
  make install

# Install pymgclient
RUN git clone https://github.com/memgraph/pymgclient /pymgclient && \
  cd pymgclient && \
  python3 setup.py build && \
  python3 setup.py install

# Install packages
COPY requirements.txt ./
RUN pip3 install -r requirements.txt

COPY public /app/public
COPY card_fraud.py /app/card_fraud.py
WORKDIR /app

ENV FLASK_ENV=development
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

ENTRYPOINT ["python3", "card_fraud.py"]