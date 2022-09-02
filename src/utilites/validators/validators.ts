//@ts-ignore
export const requiredField = (text) => {

    if(text && text.match(/\w\S/)) return undefined
    return 'Field is required'
}
export const maxLength = (max: number) => (text: string) => {
    if(text.length > max) return `text should be no longer then ${max}`
    return undefined
}
export const minLength = (min: number) => (text: string) => {
    if(text.length < min) return `text should be at least ${min} letters`
    return undefined
}