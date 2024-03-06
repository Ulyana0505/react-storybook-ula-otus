import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import BlockLine from "./components/BlockLine";
import CollapseBlock from "./components/CollapseBlock";
import Picture from "./components/Picture";
import Columns from "./components/Columns";

export default function App() {
  return (
    <div>
      <Heading level={1}>Заголовок первый</Heading>
      <Heading level={2}>Заголовок второй</Heading>
      <Paragraph style={"quote"}>Просто цитата.</Paragraph>
      <Paragraph style={"semi-bold"}>А это полужирный текст.</Paragraph>
      <BlockLine></BlockLine>
      <CollapseBlock heading="Схлопывающийся блок">
        Вот такой тут внутри интереснейший контент.
      </CollapseBlock>
      <Picture float="left"></Picture>
      <Columns
        cols={[
          <div key="1">Первая колонка</div>,
          <div key="2">Вторая колонка</div>,
        ]}
      />
    </div>
  );
}
