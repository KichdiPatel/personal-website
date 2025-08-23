"use client";

import Header from "../components/Header";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="mt-24 flex flex-col items-center">
        <div className="w-full max-w-4xl px-8 prose prose-lg max-w-none">
          {children}
        </div>
      </main>
    </div>
  );
}
