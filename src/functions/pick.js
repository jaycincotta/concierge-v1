
// Pick a random element from an array
// https://stackoverflow.com/a/5915122/26553
export default function pick(items) {
    return items[Math.floor(Math.random() * items.length)]
}
