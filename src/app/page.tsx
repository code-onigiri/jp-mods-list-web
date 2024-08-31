import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="p-4 rounded-xl bg-center">
          <Image src="/jpmlw.svg" width={400} height={400} alt="JapanModsList" />
      </div>
      <p>これはModを一元的に知れるサイトです。</p>
      <p>また、Modを登録することもできます</p>
    </main>
  );
}
