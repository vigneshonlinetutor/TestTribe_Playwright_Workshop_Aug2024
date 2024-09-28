FROM mcr.microsoft.com/playwright:v1.47.1-noble
WORKDIR /app
COPY . /app
RUN apt-get update && \
    apt-get install -y openjdk-11-jre-headless && \
    npm install && \
    npx playwright install
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
CMD [ "npm","test" ]