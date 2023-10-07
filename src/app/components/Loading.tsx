import { Spinner } from "../assets/icons";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-12">
      <Spinner className="w-12 h-12" />
    </div>
  );
}
