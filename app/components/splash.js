import Image from "next/image";

const Splash = () => {
  return (
    <div className="fixed inset-0 bg-orange-400 z-50 flex flex-col justify-center items-center space-y-4 pb-20">
      <Image
        src="/images/nindologo.svg"
        width={120}
        height={120}
        alt="Nindo Task Ninja"
        className="mr-2 mb-4"
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
    </div>
  );
};

export default Splash;