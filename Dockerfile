FROM node:20-slim

# Installer les outils nécessaires, y compris git
RUN apt-get update && apt-get install -y \
    build-essential \
    ffmpeg \
    curl \
    cmake \
    git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
RUN mkdir -p data
COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /app/whisper.cpp

RUN rm -rf build
RUN cmake -B build . && cmake --build build --config Release

WORKDIR /app

CMD ["npm", "run", "start"]
