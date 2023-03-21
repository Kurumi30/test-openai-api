import chalk from "chalk"

export function color(text, color) {
    return chalk[color](text)
}