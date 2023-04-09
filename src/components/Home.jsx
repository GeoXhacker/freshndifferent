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

			{/* <div className="h-[100vh]">

			<div className="h-full">
				<Carousel>
					
					<img src="images/image8.jpg" alt="..." className="block w-full"/>
					<img src="images/image9.jpg" alt="..." className="pt-20"/>
					<img src="images/image10.jpg" alt="..." className="block w-full"/>
			
				</Carousel>
			</div>

</div> */}

			<div
				id="carouselExampleControls"
				class="relative"
				data-te-carousel-init
				data-te-carousel-slide
				data-te-interval="2000"
				data-te-carousel-pause="false"
				data-te-pause="false"
			>
				<div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
					<div
						class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-te-carousel-item
						data-te-carousel-active
					>
						<img
							src="images/image9.jpg"
							class="block w-full"
							alt="Wild Landscape"
						/>
					</div>

					<div
						class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-te-carousel-item
					>
						<img src="images/image10.jpg" class="block w-full" alt="Camera" />
					</div>

					<div
						class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
						data-te-carousel-item
					>
						<img
							src="images/image8.jpg"
							class="block w-full"
							alt="Exotic Fruits"
						/>
					</div>
				</div>

				<button
					class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
					type="button"
					data-te-target="#carouselExampleControls"
					data-te-slide="prev"
				>
					<span class="inline-block h-8 w-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</span>
					<span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
						Previous
					</span>
				</button>

				<button
					class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
					type="button"
					data-te-target="#carouselExampleControls"
					data-te-slide="next"
				>
					<span class="inline-block h-8 w-8">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</span>
					<span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
						Next
					</span>
				</button>
			</div>

			<h1
				className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter text-center mt-4"
				data-aos="zoom-y-out"
			>
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
					Collections
				</span>
			</h1>

			<div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
				<div className="-m-1 flex flex-wrap md:-m-2">
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2 relative text-white">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
							/>
							{/* <h2 class="absolute text-3xl bottom-4 left-1/2 -translate-x-1/2 group-hover:text-black">
								New
							</h2> */}
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
