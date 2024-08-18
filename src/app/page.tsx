import Button from "./components/button";
import Header from "./components/header";


export default function Page() {
  return (
    <main className=" bg-gradient-to-r from-yellow-700 to-yellow-400 h-screen w-screen ">
      <header>
        <Header prop="#f0be0c" />
      </header>
      <section className="flex flex-col justify-center items-center lg:justify-evenly   h-[91.5%] lg:flex-row ">
        <div className="lg:w-[60%] w-full">
          <h1 className="text-gray-500 text-2xl md:text-4xl ml-3 lg:ml-8 text-glow">
            Hello, My name is{" "}
          </h1>
          <h1 className="text-black text-5xl md:text-6xl ml-3 lg:ml-8 lg:text-6xl text-glow">M.Ahmed Noorani</h1>
          <h3 className="text-yellow-200 text-sm md:text-lg ml-3 lg:ml-8 text-glow">
            I'am web developer
          </h3>
          <p className="text-white text-sm md:text-base mt-4 ml-3 lg:ml-8">
            I specialize in turning creative ideas into functional digital
            experiences, leveraging the latest technologies and best practices
            in web development. Whether it&aposs crafting responsive designs or
            optimizing site performance, I&aposm dedicated to delivering
            high-quality results that exceed expectations.
          </p>
          <div className="flex mt-4 ml-3 lg:ml-4 ">
           <a href="https://github.com/Ahmednoorani258" target="_blank"> <Button color="grey" prop="Github" bordercolor="black"  /></a>
           <a href="https://www.linkedin.com/in/mahmednorani/" target="_blank"> <Button color="" prop="LinkedIn" bordercolor="black" /></a>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/man-sitting-front-laptop-computer_1072138-131276.jpg"
            alt="img"
            className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full mt-6 lg:mt-0 "
            
          />
        </div>
      </section>
    </main>
  );
}
