"use client";  // ✅ 클라이언트 컴포넌트로 지정

import Link from "next/link";
import { useState } from "react";

const pages = [
  { name: "NVIDIA", slug: "nvidia", content: "NVIDIA is a technology company specializing in GPUs." },
  { name: "Walmart", slug: "wm", content: "Walmart is a multinational retail corporation." },
  { name: "Visa", slug: "visa", content: "Visa is a global payments technology company." },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Searchable Subpages</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredPages.map((page) => (
          <li key={page.slug}>
            <Link href={`/${page.slug}`}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
