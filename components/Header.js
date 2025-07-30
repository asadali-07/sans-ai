import React from "react";
import Link from "next/link";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton,SignUpButton } from "@clerk/nextjs";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = async() => {
  await checkUser(); //if user in database it return null else insert the user in the db
  return (
    <>
      <header className="fixed top-0 boder-b bg-background/80 backdrop-blur-ms z-50 w-full supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex justify-between h-16 items-center py-4 px-4">
          <Link href="/">
            <Image
              src="/logo.png"
              height={60}
              width={200}
              alt="logo png"
              className="h-12 py-1 w-auto object-contain"
            ></Image>
          </Link>
          <div className="flex items-center space-x-2 md:space-x-4">
            <SignedIn>
              <Link href="/dashboard">
                <Button variant={"outline"}>
                  <LayoutDashboard className="h-6 w-6" />
                  <span className="hidden md:block">Industry Insights</span>
                </Button>
              </Link>
            <DropdownMenu autoCloseDelay={2000}>
              <DropdownMenuTrigger asChild>
              <Button>
                  <StarIcon className="h-6 w-6" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className='h-6 w-6'/>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/resume" className="flex items-center gap-2">
                  <FileText className="h-4 w-4"/>
                  <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href="/ai-cover-letter" className="flex items-center gap-2">
                  <PenBox className="h-4 w-4"/>
                  <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href="/interview" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4"/>
                  <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </SignedIn>
            <SignedOut>
              <SignInButton >
              <Button variant={"outline"}>
                Sign In
              </Button>
              </SignInButton >
            </SignedOut>
            <SignedIn>
              <UserButton appearance={{
                elements: {
                  avatarBox:"w-10 h-10",
                  userButtonPopoverCard:"shadow-xl",
                  userPreviewCard:"font-semibold"
                }
              }} 
              />
            </SignedIn>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
