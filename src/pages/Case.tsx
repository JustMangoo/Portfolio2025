import { useParams } from "react-router-dom";
export default function ProjectDetail() {
  const { id } = useParams(); // "42"
  return <div>Project #{id}</div>;
}
