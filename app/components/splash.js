import Image from "next/image";

const Splash = ({ fadeOut }) => {
  return (
    <div className={`fixed inset-0 bg-blue-400 z-50 flex flex-col justify-center items-center space-y-4 pb-20 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <Image
        src="/images/nindologo.svg"
        width={120}
        height={120}
        alt="Nindo Task Ninja"
      />
      <div className="flex items-center space-x-2">
        <h1 className="font-irish-grover text-4xl">NINDO TASK</h1>
        <div className="animate-rotate">
          <Image
            src="/images/shuriken.svg"
            width={40}
            height={40}
            alt="Nindo Task Shuriken"
          />
        </div>
      </div>
      <p className="text-white text-center mt-4">
        Please wait, waking up the server...
      </p>
    </div>
  );
};

export default Splash;
