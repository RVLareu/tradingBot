# (Random) Trading Bot 


### Steps 

```
git clone <repo_url>
```

```
cd tradingBot
```

```
npm install
```

# Running the bot and tests


If last Trading Value is at least 5% greater than current coin value, sells all coins available

If last Trading Value is at least 5% less than current coin value, buys all coins possible

To run main script:

```
node app/main.js
```

To run tests with coverage:

```
npx c8 mocha
```
