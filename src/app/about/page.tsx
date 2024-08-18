import Header from "../components/header";
export default function About() {
  return (
    <main className="bg-gradient-to-r from-green-400 to-teal-400 h-screen w-screen">
      <Header prop="#0cf0a8" />

      <div className="flex flex-col">
        <div className="ml-4 text-xl">
          <h2 className="text-3xl font-extrabold text-glow mt-8 lg:mt-14 text-center"><u>About Me</u></h2>
          <p className="mt-4 lg:w-[650px] text-center lg:ml-36 text-glow font-light">
            I’m a passionate <b>web developer</b> with a strong dedication to creating
            elegant and functional websites. With a background in Information
            Technology, I’ve honed my skills in front-end and back-end
            development. Whether it’s building responsive designs or optimizing
            performance, I thrive on turning ideas into reality
          </p>
        </div>
        
        <h2 className="text-3xl font-extrabold text-glow mt-8 lg:mt-14 text-center"><u>Skills</u></h2>
        <div className="flex justify-center items-center mt-6 ">
        <div className="flex w-[100%] border-teal-700 border-2xl lg:justify-center">
          <ul className="flex flex-wrap justify-center items-center">
            <li className="card hover:shadow-card-hover hover:scale-102 transform transition duration-400 custom-eas flex justify-center flex-col items-center bg-white rounded-md border-2 border-black m-3 p-3">
              HTML{" "}
              <img
                src="https://img.icons8.com/color/48/000000/html-5.png"
                alt=""
              />
            </li>
            <li  className="card hover:shadow-card-hover hover:scale-102 transform transition duration-400 custom-eas  flex justify-center flex-col items-center bg-white rounded-md border-2 border-black m-3 p-3">
              CSS{" "}
              <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt=""
              />
            </li>
            <li className="card hover:shadow-card-hover hover:scale-102 transform transition duration-400 custom-eas  flex justify-center flex-col items-center bg-white rounded-md border-2 border-black m-3 p-2">
              TypeScript{" "}
              <img
                src="https://img.icons8.com/color/48/000000/typescript.png"
                alt=""
              />
            </li>
            <li className="card hover:shadow-card-hover hover:scale-102 transform transition duration-400 custom-eas  flex justify-center flex-col items-center bg-white rounded-md border-2 border-black m-3 p-3">
              React{" "}
              <img
                src="https://img.icons8.com/color/48/000000/react-native.png"
                alt=""
              />
            </li>
            
            <li className="card hover:shadow-card-hover hover:scale-102 transform transition duration-400 custom-eas  flex justify-center flex-col items-center bg-white rounded-md border-2 border-black m-3 p-3">
              Tailwind{" "}
              <img
                src="https://img.icons8.com/color/48/000000/tailwindcss.png"
                alt=""
              />
            </li>
            <li className="card hover:shadow-card-hover hover:scale-102 transform transition duration-400 custom-eas  flex justify-center flex-col items-center bg-white rounded-md border-2 border-black m-3 p-3">
              Git{" "}
              <img
                src="https://img.icons8.com/color/48/000000/git.png"
                alt=""
              />
            </li>
            <li className="card hover:shadow-card-hover hover:scale-102 transform transition duration-400 custom-eas  flex justify-center flex-col items-center bg-white rounded-md border-2 border-black m-3 p-3">
              GitHub{" "}
              <img
                src="https://img.icons8.com/color/48/000000/github.png"
                alt=""
              />
            </li>
          </ul>
        </div>
        </div>
      </div>
    </main>
  );
}
