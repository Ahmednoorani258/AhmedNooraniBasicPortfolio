import Navbar from "./navigationbar";
interface HeaderProps {
    prop:string
   
}

const Header: React.FC<HeaderProps> = ({
   prop,
  
  }) => {
    return (
        <div className="h-14">
      <header className="fixed bg-gray-800 w-full h-14 lg:h-30 flex items-center justify-between ">
        <div  className="text-white font-extrabold text-xl lg:text-2xl ml-4 lg:ml-8">
          M.Ahmed <span style={{color:prop}}>Noorani</span>
        </div>
        <Navbar  />
      </header>
    </div>
    );
  };
  
  export default Header;
