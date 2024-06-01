import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";

export default async function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul>
      {photos.map((photo, index) => (
        <li key={photo.id + index}>
          <Link href={`/photo/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
