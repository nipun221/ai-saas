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

export const LandingNavbar2 = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="bg-transparent flex items-center justify-center p-10">
        <div className="flex">
            <Link href={"https://www.instagram.com/v_a_t_s_52/"} className="md:hidden">
                <Button variant="mode" className="rounded-full">
                    <InstagramIcon className="h-5 w-5 mr-2"/>
                    Instagram
                </Button>
            </Link>
            <Link href={"https://github.com/nipun221"} className="md:hidden">
                <Button variant="mode" className="rounded-full">
                    <GithubIcon className="h-5 w-5 mr-2"/>
                    Github
                </Button>
            </Link>
        </div>
    </div>
  );
}