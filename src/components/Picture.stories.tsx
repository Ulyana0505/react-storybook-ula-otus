import Picture from "./Picture";

export default {
    title: 'Picture',
    component: Picture,
}

export const FloatNone = () => <Picture float="none"></Picture>
export const FlatRight = () => <Picture float="right"></Picture>
export const FloatLeft = () => <Picture float="left"></Picture>
export const FloatInherit = () => <Picture float="inherit"></Picture>
