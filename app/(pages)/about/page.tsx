import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image 
        src="/profile.webp" 
        alt="User profile picture" 
        width={500}
        height={500}
      />

    </div>
  );
}
