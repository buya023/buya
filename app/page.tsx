"use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { SiLeetcode, SiGithub, SiLinkedin } from "react-icons/si";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const competitionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800">
      {/* NAVBAR */}
      <nav className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="text-xl font-bold text-teal-600">Buya.dev</span>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-white rounded-lg shadow-md">
                  <div className="flex flex-col gap-2">
                    {[
                      ["Home", homeRef],
                      ["About", aboutRef],
                      ["Projects", projectsRef],
                      ["Courses", coursesRef],
                      ["Competition", competitionRef],
                    ].map(([label, ref], idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          scrollToSection(
                            ref as React.RefObject<HTMLDivElement>
                          )
                        }
                        className="text-left text-gray-700 hover:text-teal-500 transition-colors"
                      >
                        {label}
                      </button>
                    ))}
                    <a
                      href="/blog"
                      className="text-gray-700 hover:text-teal-500 transition-colors"
                    >
                      Blog
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* HERO / ABOUT */}
      <section
        ref={aboutRef}
        className="w-full pt-28 pb-16 text-center max-w-4xl mx-auto px-6"
      >
        <h1 className="text-5xl font-bold mb-4 text-teal-600">Hi, I’m Buya</h1>
        <p className="text-lg text-gray-600 mb-6">
          Software Engineer • Problem Solver • Learner
        </p>
        <p className="text-gray-700 mb-6">
          I’m specialized in mobile and backend development. I build
          user-focused applications, streamline workflows, and solve complex
          problems. I enjoy experimenting with new technologies and continuously
          improving through projects, online courses, and coding challenges.
        </p>
        <Button
          asChild
          variant="default"
          className="bg-teal-500 hover:bg-teal-600 text-white"
        >
          <a href="mailto:buyanjargal023@gmail.com">Contact Me</a>
        </Button>
      </section>

      <Separator className="my-12 max-w-4xl" />

      {/* PROJECTS */}
      <section ref={projectsRef} className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              [
                "Flappy Bird",
                "/img/flappy.png",
                "A Python PyGame project of the classic game.",
              ],
              [
                "Drum Kit",
                "/img/drum.png",
                "Press W A S D J K L to play drum sounds.",
              ],
              [
                "Dice Game",
                "/img/dicee.png",
                "Spacebar triggers the game and shows a result.",
              ],
            ].map(([title, src, desc], idx) => (
              <Card
                key={idx}
                className="shadow-lg hover:shadow-xl transition-shadow rounded-xl"
              >
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={src}
                    alt={title}
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                  <p className="mt-4 text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline">
              <a
                href="https://github.com/Buya023?tab=repositories"
                target="_blank"
              >
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-12 max-w-4xl" />

      {/* COURSES */}
      <section ref={coursesRef} className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-12">
            My Online Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              [
                "Web Development Bootcamp",
                "/img/web-dev.png",
                "HTML, CSS, JS, React, Node basics.",
              ],
              [
                "Python Fundamentals",
                "/img/python.png",
                "Python basics and Pygame projects.",
              ],
              [
                "Data Structures",
                "/img/data-structure.png",
                "Efficient problem solving approaches.",
              ],
            ].map(([title, src, desc], idx) => (
              <Card
                key={idx}
                className="shadow-lg hover:shadow-xl transition-shadow rounded-xl"
              >
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={src}
                    alt={title}
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto"
                  />
                  <p className="mt-4 text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12 max-w-4xl" />

      {/* COMPETITION */}
      <section ref={competitionRef} className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-12">
            Coding Competition Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              ["AtCoder", "/img/at-coder.png", "https://atcoder.jp/users/Buya"],
              [
                "LeetCode",
                "/img/LeetCode_logo_black.png",
                "https://leetcode.com/Buyanjargal/",
              ],
              [
                "Codeforces",
                "/img/codeforce-logo.png",
                "https://codeforces.com/profile/buya4",
              ],
            ].map(([title, src, link], idx) => (
              <Card
                key={idx}
                className="text-center shadow-lg hover:shadow-xl transition-shadow rounded-xl"
              >
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={src}
                    alt={title}
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <Button asChild>
                    <a
                      href={link}
                      target="_blank"
                      className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg px-4 py-2 transition-colors"
                    >
                      View Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-14 border-t text-center bg-gray-50 text-gray-700">
        <p>© {new Date().getFullYear()} Buya — All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://leetcode.com/Buyanjargal/" target="_blank">
            <SiLeetcode className="text-2xl text-teal-600 hover:text-teal-500 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/Buyanjargal-tserendendev-21a495227/"
            target="_blank"
          >
            <SiLinkedin className="text-2xl text-teal-600 hover:text-teal-500 transition-colors" />
          </a>
          <a href="https://github.com/Buya023?tab=repositories" target="_blank">
            <SiGithub className="text-2xl text-teal-600 hover:text-teal-500 transition-colors" />
          </a>
        </div>
      </footer>
    </div>
  );
}
