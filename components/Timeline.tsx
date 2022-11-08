import React from "react";

const days = (d1: Date, d2: Date) => {
	let diff = d1.getTime() - d2.getTime();
	let total = Math.ceil(diff / (1000 * 3600 * 24));
	return total;
};

export default function Timeline() {
	const events = [
		{
			name: "BlairHacks_6",
			startDate: new Date("2023-02-20"),
			endDate: new Date("2023-02-21"),
			date: "Feburary 17th-18th, 2023",
			description:
				"BlairHacks_6 is a in-person 24-hour hackathon hosted by MBHS students in Silver Spring, MD. At BlairHacks, high school students in the DMV area are challenged to bring their innovative ideas to life in the form of websites, apps, and robots. Our hackathon is free and accessible to all high school students thanks to our wonderful sponsors.",
			link: "https://6.blairhacks.com",
			archive: false,
		},
		{
			name: "BlairHacks Mini '22",
			startDate: new Date("2022-12-10"),
			endDate: new Date("2022-12-10"),
			date: "December 10th, 2022",
			description:
				"Introducing BlairHacks' newest event (and first IRL event since 2020)! BlairHacks Mini is a day-long event where high school students around Montgomery County will come together to build apps, games, and hardware. Look forward to a day of hands-on coding + tech workshops, fun activities, and more!",
			link: "https://mini.blairhacks.com",
			archive: false,
		},
		{
			name: "BlairHacks_5",
			startDate: new Date("2022-02-18"),
			endDate: new Date("2022-02-20"),
			date: "Feburary 18th-20th, 2022",
			description:
				"BlairHacks_5 was a virtual 36-hour hackathon hosted by MBHS students in Silver Spring, MD. At BlairHacks_5, high school students in the DMV area were challenged to bring their innovative ideas to life in the form of websites, apps, and robots. Our hackathon was free and accessible to all high school students thanks to our wonderful sponsors.",
			link: "https://5.blairhacks.com",
			archive: true,
		},
		{
			name: "BlairHacks_4",
			startDate: new Date("2020-02-19"),
			endDate: new Date("2021-02-21"),
			date: "Feburary 28th-29th, 2020",
			description:
				"BlairHacks_4 was an in-person hackathon hosted by MBHS students in Silver Spring, MD. BlairHacks_4 featured skill workshops, fun mini-events, and one-on-one assistance from our fantastic mentors. Our hackathon was free and accessible to all high school students thanks to our wonderful sponsors.",
			archive: true,
		},
	];

	return (
		<ol className="relative border-l border-gray-700">
			{events.map(
				({ name, date, description, link, archive, startDate }, i) => (
					<li className="mb-10 ml-6" key={i}>
						<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-900 rounded-full ring-8 ring-gray-900">
							<svg
								aria-hidden="true"
								className="w-3 h-3 text-blue-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"
								></path>
							</svg>
						</span>
						<a href={link} target="blank">
							<h3 className="flex items-center mb-1 text-lg font-semibold text-white">
								{name}
								{archive ? (
									<span className="bg-red-200 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
										Archive
									</span>
								) : (
									<span className="bg-green-200 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
										In {days(startDate, new Date())} days
									</span>
								)}
							</h3>
						</a>
						<time className="block mb-2 text-sm font-normal leading-none text-gray-500">
							{date}
						</time>
						<p className="mb-4 text-base font-normal text-gray-400">
							{description}
						</p>
					</li>
				)
			)}
		</ol>
	);
}