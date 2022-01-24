<script lang="ts">
  import { CharState } from "./Wordle"

  const example1 = [
    { correct: CharState.Correct, char: "B" },
    { correct: CharState.NotUsed, char: "O" },
    { correct: CharState.NotUsed, char: "A" },
    { correct: CharState.NotUsed, char: "R" },
    { correct: CharState.NotUsed, char: "D" },
  ]

  const example2 = [
    { correct: CharState.NotUsed, char: "G" },
    { correct: CharState.NotUsed, char: "A" },
    { correct: CharState.NotUsed, char: "M" },
    { correct: CharState.OutOfPlace, char: "E" },
    { correct: CharState.NotUsed, char: "S" },
  ]

  const example3 = [
    { correct: CharState.NotUsed, char: "1" },
    { correct: CharState.NotUsed, char: "2" },
    { correct: CharState.NotUsed, char: "3" },
    { correct: CharState.Wrong, char: "A" },
    { correct: CharState.NotUsed, char: "B" },
    { correct: CharState.NotUsed, char: "C" },
  ]

  const colors = {
    [CharState.Correct]: "bg-green-500 border-green-500",
    [CharState.OutOfPlace]: "bg-yellow-500 border-yellow-500",
    [CharState.Wrong]: "bg-gray-500 border-gray-500",
    [CharState.NotUsed]: "bg-white",
  }

  export let onClose = () => {}
</script>

<div
  class="fixed z-10 inset-0 overflow-y-auto"
  aria-labelledby="modal-title"
  role="dialog"
  aria-modal="true"
  on:click={onClose}
>
  <div
    class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
  >
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
      >&#8203;</span
    >

    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div
      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
    >
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <!-- <div
            class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
          >
            Heroicon name: outline/exclamation
            <svg
              class="h-6 w-6 text-red-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div> -->
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-base leading-6 font-medium text-gray-900" id="modal-title">
              Boardle
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Find the board game title!<br />
                (Just like
                <a target="_blank" href="https://www.powerlanguage.co.uk/wordle" class="underline"
                  >Wordle</a
                > , but for board gamers.)
              </p>
            </div>
            <hr class="my-2" />
            <h3 class="text-base leading-6 font-medium text-gray-900" id="modal-title">
              Rules
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                <ul class="list-decimal text-sm text-gray-500">
                  <li>You can enter any strings of letters and numbers as a guess. It doesn't have to be a valid word.</li>
                  <li>The board game is in top 1000 on Board Game Geek, as of January 1, 2022
                  (data taken from <a target="_blank" href="https://gitlab.com/recommend.games/bgg-ranking-historicals" class="underline">Recommend.Games</a>)</li>
                  <li>All special characters are removed (e.g. ',-!?&, so "No, Thanks!" becomes "NOTHANKS" and "Heaven & Ale" becomes "HEAVENALE".)</li>
                  <li>All characters after a colon (:), including the colon itself, is also removed (e.g. "Android: Netrunner" becomes "ANDROID".)</li>
                  <li>All words in parentheses are removed (e.g. "(Second Edition)"). </li>
                  <li>Board games with expansions may appear on the list several times under the same title (e.g. "Dominion", "Dominion: Intruge", "Dominion: Seaside" are all reduced to "Dominion".)</li>
                </ul>
            </div>
            <hr class="my-2" />
            <div class="mt-2">
              <h3 class="text-base font-medium">Examples</h3>
              <div class="flex justify-center my-1">
                {#each example1 as { correct, char }}
                  <div
                    class={`${
                      colors[correct] || "bg-white"
                    } w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`}
                  >
                    {char ?? ""}
                  </div>
                {/each}
              </div>
              <p class="text-sm text-gray-500 mb-4">
                The letter <strong>B</strong> is in the title, and in the correct position.
              </p>
              <div class="flex justify-center my-1">
                {#each example2 as { correct, char }}
                  <div
                    class={`${
                      colors[correct] || "bg-white"
                    } w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`}
                  >
                    {char ?? ""}
                  </div>
                {/each}
              </div>
              <p class="text-sm text-gray-500 mb-4">
                The letter <strong>E</strong> is in the title, but in another position.
              </p>
              <div class="flex justify-center my-1">
                {#each example3 as { correct, char }}
                  <div
                    class={`${
                      colors[correct] || "bg-white"
                    } w-10 h-10 border-solid border-2 flex items-center justify-center mx-0.5 text-base font-bold
                rounded`}
                  >
                    {char ?? ""}
                  </div>
                {/each}
              </div>
              <p class="text-sm text-gray-500 mb-4">
                The letter <strong>A</strong> is not in the title.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
