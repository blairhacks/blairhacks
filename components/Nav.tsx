import React from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { useRouter } from "next/router";

export default function Nav() {
	const router = useRouter();

	return (
		<div className="w-fit">
			<div className="flex md:flex-col gap-2 p-2 text-neutral-500 rounded-lg bg-neutral-900">
				<img className="w-12" src="/assets/logo.png" alt="BlairHacks Logo" />
				<Link href="/">
					<HiOutlineHome
						color={router.pathname === "/" ? "white" : undefined}
						className="h-12 w-12 p-2 rounded-lg hover:bg-neutral-800 sm:cursor-pointer"
					/>
				</Link>
				<Link href="/team">
					<AiOutlineTeam
						color={router.pathname === "/team" ? "white" : undefined}
						className="h-12 w-12 p-2 rounded-lg hover:bg-neutral-800 sm:cursor-pointer"
					/>
				</Link>
				<Link href="/donate">
					<BiDonateHeart
						color={router.pathname === "/donate" ? "white" : undefined}
						className="h-12 w-12 p-2 rounded-lg hover:bg-neutral-800 sm:cursor-pointer"
					/>
				</Link>
			</div>
		</div>
	);
}
