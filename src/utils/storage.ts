export const getLocalStorage = () => {
    const getItem = (keyName: string) => {
        return window.localStorage.getItem(keyName) || ''
    }

    const setItem = (keyName: string, value: string) => {
        window.localStorage.setItem(keyName, value)
    }

    const removeItem = (keyName: string) => {
        window.localStorage.removeItem(keyName)
    }

    return {getItem, setItem, removeItem}
}