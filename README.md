audran-api-project
🌦️ Weather Checker App

This is a simple weather web app built using HTML, CSS, and JavaScript. It allows users to search for current weather data by city name using the OpenWeatherMap API.

Live Preview
This app can be accessed locally or through a load balancer in a Dockerized multi-container setup.

Features
Search for any city’s weather
Displays temperature, humidity, and weather condition
Uses external API: OpenWeatherMap
Responsive and clean UI
Dockerized for easy deployment
Load-balanced deployment using HAProxy
API Used
OpenWeatherMap API
Docs: https://openweathermap.org/api
API KEY: 91bcf6d03bb3c1ea49c528968e48776b
Project Structure
weather-app/ ├── index.html ├── style.css ├── script.js ├── Dockerfile ├── .dockerignore └── README.md

Docker Build & Run Instructions
Build the Docker image locally:
docker build -t aurdan/weather-app:v1 .

Run the Docker container: bash Copy Edit docker run -p 8080:8080 aurdan/weather-app:v1 Visit the app at: http://localhost:8080

Docker Hub Image Docker Hub: https://hub.docker.com/r/aurdan/weather-app

Tags used: v1, latest

Load Balancer Deployment (Part 2) Web01 and Web02 setup: On each server:

bash Copy Edit docker pull aurdan/weather-app:v1

docker run -d --name app --restart unless-stopped
-p 8080:8080 aurdan/weather-app:v1 Check that they’re running at:

http://web01:8080

http://web02:8080

⚙️ HAProxy (lb-01) Configuration Edit /etc/haproxy/haproxy.cfg:

haproxy Copy Edit backend webapps balance roundrobin server web01 172.20.0.11:8080 check server web02 172.20.0.12:8080 check Then reload HAProxy:

bash Copy Edit docker exec -it lb-01 sh -c 'haproxy -sf $(pidof haproxy) -f /etc/haproxy/haproxy.cfg' Testing Load Balancing From your host machine or inside the load balancer:

curl http://localhost:8080 curl http://localhost:8080 curl http://localhost:8080 Responses should alternate between Web01 and Web02.

Environment Variables (Optional Hardening) To handle secrets like API keys securely:

Use ENV variables or .env file

Mount .env as a volume in Docker

Update script.js to fetch from environment at build or runtime (advanced)

🎥 Demo Video https://youtu.be/gV2z7vD07W8

✍️ Author Aurdan Ndayisenga Bass player & software engineering student @ ALU 📧 a.ndayiseng@alustudent.com

License MIT License
