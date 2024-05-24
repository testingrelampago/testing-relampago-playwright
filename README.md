# testing-relampago-playwright

## Commands
```console
node -v
npm -v
npm install -g playwright
npx playwright install chromium firefox webkit
playwright --version
mkdir testing-relampago-playwright
npm init -y
npm install playwright
npm install --save-dev @playwright/test
npx playwright test
```

### Docker
```console
docker ps
docker build -t jenkins .
docker run -d -p 8080:8080 --name jenkins myjenkins-blueocean:2.414.2
```
