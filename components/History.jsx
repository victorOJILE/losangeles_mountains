import { useState, useRef } from "react";

export default function History() {
	
	return (
		<section className="relative" id="history">
			<div id="historyHeight" className="h-full flex flex-col justify-between">
				<div className="container mx-auto flex items-start py-5 px-3 mb-10 sm:p-0 sm:block">
					<img className="w-20 sm:w-56" src="history01.png" alt="" />
					<div className="ml-3 w-10/12 sm:mx-auto font-semibold text-gray-700 text-xs sm:text-base">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
						in ante viverra, rutrum erat rutrum, consectetur mi. Proin at
						maximus est. Nullam purus ex, iaculis sed erat sed, blandit
						tincidunt quam. Cras scelerisque id quam sed dignissim
						Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut
						quam. Vivamus suscipit dignissim tortor nec congue.
					</div>
				</div>
				<div style={{ backgroundColor: "#1b1b37ad" }}>
					<div className="container mx-auto p-4">
						<div></div>
						<Carousel />
					</div>
				</div>
			</div>
		</section>
	);
}

function Carousel() {
  const carousel = useRef(null);
  const [active, setActive] = useState(0);

  function updateDots(e) {
    if (e.target.dataset.dot) {
			let dot = e.target;
      setActive(Number(dot.dataset.dot));

      let image = carousel.current.children[Number(dot.dataset.dot)];
      carousel.current.scrollLeft = image.offsetLeft;
    }
  }

  return (
    <div>
      <ul ref={carousel} className="carousel max-w-3xl mx-auto" aria-label="History Images">
        <li>
          <img src="Man_on_rock.png" alt="History Image 1" />
        </li>
        <li>
          <img src="highland.png" alt="History Image 2" />
        </li>
        <li>
          <img src="Man_on_rock.png" alt="History Image 3" />
        </li>
        <li>
          <img src="highland.png" alt="History Image 4" />
        </li>
      </ul>
      <div
        className="carousel_dots max-w-3xl mx-auto pt-3"
        onClick={updateDots}
      >
        {Array.from({ length: 4 }, (a, i) => i).map((dot) => (
          <div
            key={dot}
            data-dot={dot}
            className={dot == active ? "bg-gray-300" : "bg-gray-500"}
          ></div>
        ))}
      </div>
    </div>
  );
}
