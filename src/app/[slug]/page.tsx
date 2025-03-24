import { getAndTrackUrl } from "@/actions";

export default async function Slug({ params }: { params: { slug: string } }) {
  await getAndTrackUrl(params.slug);
  return <span>{params.slug}</span>;
}
