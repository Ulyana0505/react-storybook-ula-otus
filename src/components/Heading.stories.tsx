import Heading from "./Heading";

export default {
    title: 'Heading',
    component: Heading,
}

export const Level1 = () => <Heading level={1}>Заголовок один</Heading>
export const Level2 = () => <Heading level={2}>Заголовок два</Heading>
export const Level3 = () => <Heading level={3}>Заголовок три</Heading>
export const Level4 = () => <Heading level={4}>Заголовок четыре</Heading>
export const Level5 = () => <Heading level={5}>Заголовок пять</Heading>
export const Level6 = () => <Heading level={6}>Заголовок шесть</Heading>
