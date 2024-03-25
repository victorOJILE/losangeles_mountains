import { useState } from "react"

export default function Teams() {
  const [data, setData] = useState([
    ["MOUNTAIN 1", {
      background: "ice_mountain.png"
    }],
    ["MOUNTAIN 2", {
      background: "tab2.png"
    }]
  ]);
  const [active, setActive] = useState(0);
  
  return (
    <div className="bg-gray-700 oswald">
      <div className="container mx-auto">
        <nav>
          <ul className="text-gray-400">
            {
              data && data.length > 0 && (
                data.map((tab, index) => (
                  <li 
                    key={tab[0]} 
                    data-index={index} 
                    className={ "inline-block px-2 py-1 cursor-pointer" + (index === active ? " active_mountain" : "") }
                    onClick={(e) => setActive(Number(e.currentTarget.dataset.index))}
                    >
                    <div>{tab[0]}</div>
                  </li>
                ))
              )
            }
          </ul>
        </nav>
      </div>
      <div className="team_bg py-10" style={{
        backgroundImage: `url(${data[active][1].background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container mx-auto">
          <div className="mx-5 py-3 px-5 w-10/12 sm:w-56" style={{ backgroundColor: "#f1f1f1ba" }}>
            <h3 className="text-2xl oswald text-gray-700">SCHEDULE</h3>
            <div className="text-gray-500 py-2">
              <small className="flex items-center justify-between">
                <span>25 Nov 2016</span>
                <span>Vestibulum viverra</span>
              </small>
              <small className="flex items-center justify-between">
                <span>28 Nov 2016</span>
                <span>Vestibulum viverra</span>
              </small>
              <br />
              <small className="flex items-center justify-between">
                <span>18 Dev 2016</span>
                <span>Vestibulum viverra</span>
              </small>
              <br />
              <small className="flex items-center justify-between">
                <span>7 Jan 2017</span>
                <span>Vestibulum viverra</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}