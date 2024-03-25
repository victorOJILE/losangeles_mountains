import History from "@/components/History";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <>
      <header className="relative hero">
				<div className="container mx-auto">
					<nav className="flex items-center justify-between">
						<a href="/">
							<img src="logo.png" alt="Website official logo" />
						</a>
						<ul className="flex oswald italic text-gray-200 text-sm">
							<li className="mx-2">
								<a href="#history">01. HISTORY</a>
							</li>
							<li className="mx-2">
								<a href="#team">02. TEAM</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="container mx-auto py-2 h-5/6">
					<section className="h-full flex items-center justify-center">
						<h1 className="oswald text-center text-3xl md:text-6xl">
							<div className="text-gray-700">LOSANGELES</div>
							<div className="text-gray-900">MOUNTAINS</div>
						</h1>
					</section>
        </div>
      </header>
      <main>
        <section>
          <div className="container mx-auto p-2 flex items-center justify-between">
            <div className="flex items-center">
              <img src="logo.png" alt="" />
              <div className="oswald">
                <div className="text-gray-700 leading-none">LOSANGELES</div>
                <div className="text-gray-900 leading-none">MOUNTAINS</div>
              </div>
            </div>
            <nav>
              <ul className="flex oswald italic text-gray-700 text-sm">
                <li className="mx-2">
                  <a href="#history">01. HISTORY</a>
                </li>
                <li className="mx-2">
                  <a href="#team">02. TEAM</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <History />
        <section id="team">
          <div className="container mx-auto flex items-start py-5 px-3 md:items-center">
            <img className="w-20 md:w-56" src="history02.png" alt="" />
            <div className="ml-3 w-10/12 md:mx-auto font-semibold text-gray-700 text-xs md:text-base">
              Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
              gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
              dignissim tortor nec congue.
            </div>
          </div>
          <Teams />
        </section>
      </main>
			<footer className="relative" style={{ backgroundColor: "#1f2a4b" }}>
				<div className="container mx-auto oswald text-center md:flex items-center justify-between text-white">
					<div className="flex items-center">
						<img src="logo.png" alt="" />
						<div>
							<div className="leading-none">LOSANGELES</div>
							<div className="leading-none">MOUNTAINS</div>
						</div>
					</div>
					<div>COPYRIGHT 2016. ALL RIGHTS RESERVED.</div>
				</div>
				<div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: "#1f2a4be6" }}></div>
			</footer>
    </>
  );
}