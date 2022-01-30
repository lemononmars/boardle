export enum CharState {
  Correct = 0,
  OutOfPlace,
  Wrong,
  NotUsed,
}

const emojiColors = {
  [CharState.Correct]: "🟩",
  [CharState.OutOfPlace]: "🟨",
  [CharState.Wrong]: "⬜",
}

export function validateTitle(word: string, solution: string) {
  const inputSplitted = word.split("")
  const solutionSplitted = solution.split("")

  // Falls back to wrong
  const output = inputSplitted.map((char) => ({ correct: CharState.Wrong, char }))

  // First Pass: Check correct character in correct place
  solutionSplitted.forEach((sChar, idx) => {
    const char = inputSplitted[idx]

    // If matching character or normalized char, and in correct position
    if (char === sChar) {
      solutionSplitted[idx] = null
      inputSplitted[idx] = null

      output[idx] = { correct: CharState.Correct, char: sChar }
    }
  })

  // Second Pass: Check out-of-place characters
  solutionSplitted.forEach((_sChar, idx) => {
    const char = inputSplitted[idx]

    if (!char || !solutionSplitted.includes(char)) return
    
    const idx1 = solutionSplitted.indexOf(char)

    solutionSplitted[idx1] = null
    inputSplitted[idx] = null

    output[idx].correct =  CharState.OutOfPlace
  })

  return output
}

export function layout(
  alphabetRows: string[],
  validations: Array<{ correct: CharState; char: string }> = []
): Array<Record<string, CharState>> {
  const layoutRows = []

  alphabetRows.forEach((alphabets) => {
    const layout: Record<string, CharState> = {}

    alphabets.split("").forEach((a, idx) => {
      layout[a] = CharState.NotUsed
    })

    validations.forEach(({ correct, char }) => {
      char.split("").forEach((c) => {
        if (correct < layout[c]) {
          // Correct < OutOfPlace < Wrong < Unused
          layout[c] = correct
        }
      })
    })

    layoutRows.push(layout)
  })

  return layoutRows
}

export function getShareResults(attempts: Array<Array<Partial<{ correct: CharState }>>>) {
  return attempts.map((attempt) => {
    return attempt
      .map(({ correct }) => {
        return emojiColors[correct]
      })
      .join("")
  })
}
