import Button from "./button";
import Score from "./score";

const scoresObj = [
  {
    title: "Reaction",
    score: "80",
    bgColor: "bg-red-50",
    colorText: "red-400",
    color: "red",
    icon: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Memory",
    score: "92",
    bgColor: "bg-yellow-50",
    colorText: "yellow-400",
    color: "yellow",
    icon: "m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64",
  },
  {
    title: "Verbal",
    score: "61",
    bgColor: "bg-green-50",
    colorText: "green-400",
    color: "green",
    icon: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z",
  },
  {
    title: "Visual",
    score: "72",
    bgColor: "bg-indigo-50",
    colorText: "indigo-400",
    color: "indigo",
    icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z ",
  },
];

export default function Summary() {
  return (
    <div className="flex flex-col p-8 lg:pt-8 lg:pb-8 gap-12 lg:gap-8 lg:w-1/3 lg:mr-48 lg:mt-8 bg-white lg:h-fit lg:rounded-3xl">
      <h2 className="text-xl font-semibold">Summary</h2>
      <div className="flex flex-col gap-2">
        {scoresObj.map((scoreItem, index) => (
          <Score scoreItem={scoreItem} key={index} />
        ))}
      </div>
      <Button />
    </div>
  );
}
