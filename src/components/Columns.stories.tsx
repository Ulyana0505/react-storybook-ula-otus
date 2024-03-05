import Columns from "./Columns";

export default {
    title: 'Columns',
    component: Columns,
}

export const TwoColumns = () => <Columns cols={[<div key="1">Первая колонка</div>, <div key="2">Вторая колонка</div>]} />
export const ThreeColumns = () => <Columns cols={[<div key="1">Первая колонка</div>, <div key="2">Вторая колонка</div>, <div key="3">Третья колонка</div>]} />
export const FiveColumns = () => <Columns cols={[<div key="1">Первая колонка</div>, <div key="2">Вторая колонка</div>, <div key="3">Третья колонка</div>, <div key="4">Четвертая колонка</div>, <div key="5">Пятая колонка</div>]} />
