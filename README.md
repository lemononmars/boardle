# Boardle

[Wordle](https://www.powerlanguage.co.uk/wordle/) clone, but for boardgamers.

Original repo is https://github.com/narze/thwordle

Data taken from [Recommend.Games](https://gitlab.com/recommend.games/bgg-ranking-historicals)


## Rules
- The title is in the top 1000 on BGG.
- The title has 5 to 8 characters.
- All guesses must either be a valid word (taken from [here](https://www.wordgamedictionary.com/)) or a board game's title at any rank.
- You are awarded up to 3 stars.
* One ⭐ for winning.
* One ⭐ for winning in 6 guesses or fewer.
* One ⭐ for using another board game's title as a guess.

## TODOs

- [ ] Fix bugs

## Setup

- Clone/fork this repository
- `yarn` or `npm install`
- `yarn dev` or `npm run dev`

## What's included

- Svelte (TypeScript), built with [Vite](https://vitejs.dev)
- Tailwind.css using [Twind](https://twind.dev)
- [Jest](https://jestjs.io) & [@testing-library/svelte](https://testing-library.com/docs/svelte-testing-library)
