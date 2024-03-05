import Paragraph from "./Paragraph";

export default {
    title: 'Paragraph',
    component: Paragraph,
}

export const Normal = () => <Paragraph style={"normal"}>Просто текст.</Paragraph>
export const Quote = () => <Paragraph style={"quote"}>Просто цитата.</Paragraph>
export const SemiBold = () => <Paragraph style={"semi-bold"}>Полу жирный текст.</Paragraph>
