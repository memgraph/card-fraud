<h1 align="center">
 🔍 Credit Card Fraud Demo 🔍
</h1>

<p align="center">
  <a href="https://github.com/g-despot/card-fraud/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/g-despot/card-fraud" alt="license" title="license"/>
  </a>
  <a href="https://github.com/g-despot/card-fraud">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="build" title="build"/>
  </a>
</p>

<p align="center">
  <a href="https://twitter.com/intent/follow?screen_name=memgraphdb">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Follow @memgraphdb"/>
  </a>
  <a href="https://memgr.ph/join-discord">
    <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/>
  </a>
</p>

A web application with backend in Flask and frontend in JavaScript and D3.js
that uses Memgraph to analyze credit card transactions. The dataset is randomly
generated each time the app is started.

## Data model

<p align="left">
  <img width="600px" src="https://public-assets.memgraph.com/how-to-develop-a-credit-card-fraud-detection-application-using-memgraph-flask-and-d3js/graph-schema.png" alt="memgraph-tutorial-credit-card-fraud-data-model">
</p>

## Prerequisites

You will need:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (included with
  Docker Desktop on Windows and macOS)

## Running the app

You can start everything using Docker Compose:

```
docker-compose build
docker-compose up
```
