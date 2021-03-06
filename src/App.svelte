<script lang="ts">
  import "twind/shim"
  import Head from "./lib/Head.svelte"
  import Menu from "./lib/Menu.svelte"
  import Social from "./lib/Social.svelte"
  import { CharState, validateTitle, getShareResults, layout } from "./lib/Boardle"
  import words5 from "./lib/5letter"
  import words6 from "./lib/6letter"
  import words7 from "./lib/7letter"
  import words8 from "./lib/8letter"
  import titles1000 from "./lib/bgg1000shuffle"
  import titles from "./lib/bgtitles"
  import { tick } from "svelte"
  import { fade, scale } from "svelte/transition";
  import Modal from "./lib/Modal.svelte"
  import { store } from "./lib/store"

  const url = "https://lemononmars.github.io/boardle"
  const title = "Boardle"
  const dict = [words5, words6, words7, words8]

  const menuItems = [
    { name: "Found a bug?", url: "https://twitter.com/SakulbuthE/status/1485680283198562307" },
    { name: "Try Mathdle", url: "https://lemononmars.github.io/mathdle/"},
    { name: "Original (Thwordle)", url: "https://github.com/narze/thwordle"},
    { name: "Github", url: "https://github.com/lemononmars/boardle" },
  ]

  const description = "Wordle clone, but for boardgamers."
  const imageUrl = "https://i.imgur.com/8HKY9O7.png"

  const gtagId = "G-YTV7TZ3EMC"
  const alphabetsRows = groupArr(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    7
  ).map((row) => row.join(""))

  // January 24, 2022 Game Epoch
  const epochMs = 1642957200000
  const now = Date.now()
  const msInDay = 86400000
  const dateIndex = Math.floor((now - epochMs) / msInDay)
  const starSymbols = ['✰', '⭐']

  let input = ""
  // for now, choose one with title length between 5 and 12
  let solutionInfo = titles1000[dateIndex % titles1000.length]
  let solution = solutionInfo.reduced.toUpperCase()
  let attempts: string[] = $store.data[dateIndex]?.attempts || []
  let validations = attempts.map((word)=>validateTitle(word, solution))
  let gameEnded: boolean = $store.data[dateIndex]?.win || false
  let attemptsContainer
  let modal = true
  let copied = false

  $: solutionLength = solution.length
  $: input = input.replace(/[^a-zA-Z]/g, "").toUpperCase()
  $: splittedInput = input.split("")
  $: alphabetsLayoutRows = layout(alphabetsRows, validations.flat())
  $: {
    store.set({ data: { ...$store.data, [`${dateIndex}`]: 
      {attempts, win: gameEnded}
    }})
  }
  $: hasAnotherTitle = attempts.reduce((prev, att, idx) => 
    (idx < attempts.length-1 && titles.some((t)=>t.reduced === att.toLowerCase()))? prev+1:prev, 0
  )
  $: stars = (gameEnded? 1:0) + (gameEnded && attempts.length <= 6? 1:0) + (hasAnotherTitle > 0 || attempts.length == 1? 1:0)
  $: starString = '⭐⭐⭐'.slice(3-stars) + '✰✰✰'.slice(stars)

  const colors = {
    [CharState.Correct]: "bg-green-500 border-green-500",
    [CharState.OutOfPlace]: "bg-yellow-500 border-yellow-500",
    [CharState.Wrong]: "bg-gray-500 border-gray-500",
    [CharState.NotUsed]: "bg-white",
  }

  function onKeypress(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault()
      submit()
    }

    if (splittedInput.length >= solutionLength + 1) {
      e.preventDefault()
      return
    }
  }

  async function submit() {
    if (gameEnded) {
      return
    }

    // Check if the length is valid
    if (input.length != solutionLength) {
      alert("Please match the input length.")
      return
    }

    if (!dict[input.length - 5].includes(input.toLowerCase()) && !titles.some((t)=> t.reduced === input.toLowerCase())) {
      alert("Your guess is not in the dictionary.")
      return
    }

    // Add to solution array
    attempts = [...attempts, input]

    const validation = validateTitle(input, solution)
    validations = [...validations, validation]

    // if all validation is correct
    let win = !validation.some((v) => v.correct !== CharState.Correct)

    if (win) {
      alert("You won!")
      gameEnded = true
    }

    input = ""

    await tick()
    attemptsContainer.scrollTop = attemptsContainer.scrollHeight
  }

  function copyResult() {
    const results = getShareResults(validations)

    navigator.clipboard.writeText(
      `#Boardle Day ${dateIndex + 1} (${results.length} attempts)\n${starString}\n\n ${results.join("\n")}`
    )

    copied = true

    setTimeout(() => {
      copied = false
    }, 2000)
  }

  function groupArr(data, n) {
    var group = []
    for (var i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) j++
      group[j] = group[j] || []
      group[j].push(data[i])
    }
    return group
  }
</script>

<div class="footer-wrapper">
  <Menu items={menuItems} />
  <Social {url} {title} />
</div>
<Head {title} {description} {url} {imageUrl} {gtagId} />

<main class="w-full h-screen py-4 flex flex-col items-center">
  <h1 class="text-6xl text-green-400 flex flex-col mb-4">
     <span>{title}<span class="text-sm text-gray-400 ml-2">Beta</span></span>
  </h1>

  Day {dateIndex + 1}

  <div class="attempts grow overflow-y-auto" bind:this={attemptsContainer}>
    {#each attempts as input}
      <div class="flex justify-center my-1">
        {#each validateTitle(input, solution) as { correct, char }}
          <div in:scale="{{duration: 1000}}" out:fade
            class={`${
              colors[correct] || "bg-white"
            } ${solutionLength > 6? "attempt-box-sm": "attempt-box-lg"} border-solid border-2 ${titles.some((t)=>t.reduced === input.toLowerCase())?"text-gray-300":""} flex items-center justify-center mx-0.5 text-lg font-bold
      rounded`}
          >
            {char ?? ""}
          </div>
        {/each}
      </div>
    {/each}
    {#if !gameEnded}
      <div class="flex justify-center my-1">
        {#each new Array(solutionLength).fill(0) as _, i}
          <div
            class={`animate-pulse bg-gray-200 ${solutionLength > 6? "attempt-box-sm": "attempt-box-lg"} border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded`}
          >
            {splittedInput[i] || ""}
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Word Input -->
  <!-- svelte-ignore a11y-autofocus -->
  {#if !gameEnded}
    <input
      type="text"
      class="border px-4 py-2 text-center w-64"
      on:keypress={onKeypress}
      bind:value={input}
      placeholder="Click here to use keyboard input"
      autofocus
    />
  {:else}
    <span class="text-lg text-blue-400 ml-2"> View <a target="_blank" href={`https://boardgamegeek.com/${solutionInfo.url}`} class="underline"> {solutionInfo.name} ({solutionInfo.year})</a> on Board Game Geek</span>

    <span> {starSymbols[+gameEnded]} - winning </span>
    <span> {starSymbols[+ (gameEnded && attempts.length <= 6)]} - winning in 6 guesses or fewer</span>
    <span> {starSymbols[+ (hasAnotherTitle > 0 || attempts.length == 1)]} - use another board game's title as a guess</span>
  {/if}

  <!-- Layout -->
  <div class="layout my-4 w-full px-2 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
    {#each alphabetsLayoutRows as alphabetsLayout}
      <div class="w-full flex flex-row justify-center">
        {#each Object.entries(alphabetsLayout) as [alphabet, correctState]}
          <button
            on:click={() => (input += alphabet)}
            class={colors[correctState] +
              " " +
              "flex-grow w-10 h-12 border-solid border-2 flex items-center justify-center m-0.5 text-lg font-bold rounded text-black"}
          >
            {alphabet}
          </button>
        {/each}
      </div>
    {/each}
  </div>

  <!-- Input word -->
  <div class="mb-16 text-center">
    {#if gameEnded}
      <button
        on:click={copyResult}
        class="flex text-lg items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"
      >
        {copied ? "Copied" : "Share"}
      </button>
    {:else}
      <div class="flex flex-row justify-center">
        <button
          on:click={submit}
          class="flex text-lg items-center justify-center rounded border mx-2 p-3 bg-green-300 border-green-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"
        >
          Enter</button
        >
        <button
          on:click={() => {
            input = ""
          }}
          class="flex text-lg items-center justify-center rounded border mx-2 p-3 bg-red-300 border-red-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"
        >
          Clear</button
        >
        <button
          on:click={() => {
            modal = true
          }}
          class="flex text-lg items-center justify-center rounded border mx-2 p-3 bg-pink-300 border-pink-300 text-xs font-bold cursor-pointer bg-slate-200 hover:bg-slate-300 active:bg-slate-400"
        >
          Rules</button
        >
      </div>
    {/if}
  </div>

  <!-- Debug -->
  <!-- <div class="flex justify-center my-20">
    <div>DEBUG</div>
    {JSON.stringify(attempts)}
  </div> -->
  {#if modal}
    <Modal
      onClose={() => {
        modal = false
      }}
    />
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
  }

  .attempts {
    min-height: 3.5rem;
  }
  
  .attempt-box-lg{
    width: 3.5rem;
    height: 3.5rem;
  }

  .attempt-box-sm{
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-height: 750px) {
    .footer-wrapper {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .footer-wrapper {
      display: none;
    }

    .attempt-box-lg{
      width: 3.5rem;
      height: 3.5rem;
    }

    .attempt-box-sm{
      width: 2rem;
      height: 2rem;
    }
  }
</style>
