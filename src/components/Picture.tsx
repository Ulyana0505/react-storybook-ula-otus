import image from "../images/image.png";

export default function Picture({
  float,
}: {
  float: "left" | "right" | "none" | "inherit";
}) {
  return (
    <img
      src={image}
      alt="Unicorn"
      style={{ float: float, height: "auto", width: "auto", maxWidth: "500px" }}
    />
  );
}
