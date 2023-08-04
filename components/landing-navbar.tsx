"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"],
});

import React from 'react'
import { GithubIcon, InstagramIcon, ListStartIcon } from "lucide-react";

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
        <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-4">
                <Image
                    fill
                    alt="Logo"
                    src="/logo1.png"
                />
            </div>
            <h1 className={cn("text-2xl font-bold text-white hover:text-slate-500", font.className)}>
                OmniAI
            </h1>
        </Link>
        <div className="flex items-center gap-x-2">
            <Link href={"https://www.instagram.com/v_a_t_s_52/"} className="hidden md:block">
                <Button variant="mode" className="rounded-full">
                    <InstagramIcon className="h-5 w-5 mr-2"/>
                    Instagram
                </Button>
            </Link>
            <Link href={"https://github.com/nipun221"} className="hidden md:block">
                <Button variant="mode" className="rounded-full">
                    <GithubIcon className="h-5 w-5 mr-2"/>
                    Github
                </Button>
            </Link>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button variant="mode" className="rounded-full">
                    <ListStartIcon className="h-5 w-5 mr-2"/>
                    Get Started
                </Button>
            </Link>
        </div>
    </nav>
  );
}
