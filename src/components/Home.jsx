import { Navbar, Carousel } from "flowbite-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		const importTE = async () => {
			await import("tw-elements");
		};
		importTE();
	}, []);
	return (
		<>
			<Navbar
				fluid={true}
				rounded={true}
				// style={{ marginLeft: 10, marginRight: 10 }}
				className="ml-11 mr-11"
			>
				<Navbar.Brand
					// as={{
					// 	$$typeof: Symbol(react.forward_ref),
					// 	render: LinkWithRef,
					// }}
					to="#"
				>
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/>
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						Fresh & Different
					</span>
				</Navbar.Brand>
				{/* <Navbar.Toggle /> */}
				<Navbar.Collapse>
					<Navbar.Link href="#" active={true}>
						Home
					</Navbar.Link>
					<Navbar.Link
						// as={{
						// 	$$typeof: Symbol(react.forward_ref),
						// 	render: LinkWithRef,
						// }}
						to="#"
					>
						About
					</Navbar.Link>
					<Navbar.Link href="#">Collections</Navbar.Link>
					<Navbar.Link href="#">Events</Navbar.Link>
					<Navbar.Link href="#">Contact Us</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
			<div
				id="carouselExampleCrossfade"
				className="relative"
				data-te-carousel-init
				data-te-carousel-slide
			>
				<div
					className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
					data-te-carousel-indicators
				>
					<button
						type="button"
						data-te-target="#carouselExampleCrossfade"
						data-te-slide-to="0"
						data-te-carousel-active
						className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-te-target="#carouselExampleCrossfade"
						data-te-slide-to="1"
						className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-te-target="#carouselExampleCrossfade"
						data-te-slide-to="2"
						className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
						aria-label="Slide 3"
					></button>
				</div>

				<div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
					<div
						className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-te-carousel-fade
						data-te-carousel-item
						data-te-carousel-active
						data-te-interval="2000"
					>
						<img
							src="images/image10.jpg"
							className="block w-full"
							alt="Wild Landscape"
						/>
						{/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
							<h5 className="text-xl">First slide label</h5>
							<p>
								Some representative placeholder content for the first slide.
							</p>
						</div> */}
					</div>

					<div
						className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-te-carousel-fade
						data-te-carousel-item
						data-te-interval="2000"
					>
						<img
							src="images/image8.jpg"
							className="block w-full"
							alt="Camera"
						/>
						{/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
							<h5 className="text-xl">First slide label</h5>
							<p>
								Some representative placeholder content for the first slide.
							</p>
						</div> */}
					</div>

					<div
						className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-te-carousel-fade
						data-te-carousel-item
						data-te-interval="2000"
					>
						<img
							src="images/image9.jpg"
							className="block w-full"
							alt="Exotic Fruits"
						/>
						{/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
							<h5 className="text-xl">First slide label</h5>
							<p>
								Some representative placeholder content for the first slide.
							</p>
						</div> */}
					</div>
				</div>

				<button
					className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
					type="button"
					data-te-target="#carouselExampleCrossfade"
					data-te-slide="prev"
				>
					<span className="inline-block h-8 w-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</span>
					<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
						Previous
					</span>
				</button>

				<button
					className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
					type="button"
					data-te-target="#carouselExampleCrossfade"
					data-te-slide="next"
				>
					<span className="inline-block h-8 w-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</span>
					<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
						Next
					</span>
				</button>
			</div>
			<h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter text-center mt-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Collections</span></h1>

			<div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
				<div className="-m-1 flex flex-wrap md:-m-2">
					<div className="flex w-1/2 flex-wrap transition duration-700">
						<div className="w-full p-1 md:p-2 relative hover:scale-90 text-white group">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
							/>
							<h2 class="absolute text-3xl bottom-4 left-1/2 -translate-x-1/2 group-hover:text-black">
								New
							</h2>
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
							/>
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
							/>
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;