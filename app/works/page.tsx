import Carousel3D from "@/components/Carousel3D";
import { worksData } from "@/data/works";

export default function Works () {
  return (
    <Carousel3D works={worksData} />
  );
}
