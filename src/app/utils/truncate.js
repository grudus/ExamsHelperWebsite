export default () => (input = '', length = 20) => {
    return input.length < length ? input : input.substr(0, length) + "..."
}