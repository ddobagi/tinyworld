"use client";  // ✅ 클라이언트 컴포넌트로 지정

import { useParams } from "next/navigation";
import Link from "next/link";

// 타입 주석 제거 (순수 자바스크립트 구문)
const pages = {
  nvidia: { name: "NVIDIA", content: "NVIDIA is a technology company specializing in GPUs." },
  wm: { name: "Walmart", content: "Walmart is a multinational retail corporation." },
  visa: { name: "Visa", content: "Visa is a global payments technology company." },
  // 추가 페이지들은 여기에 추가
};

export default function SubPage() {
  const params = useParams();  // ✅ useParams로 slug 가져오기
  const slug = params?.slug;

  const page = pages[slug];

  if (!page) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
        <Link href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{page.name}</h1>
      <p className="mt-4">{page.content}</p>
      <Link href="/" className="text-blue-500 hover:underline mt-4 block">
        Back to Home
      </Link>
    </div>
  );
}
