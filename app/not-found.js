import Image from "next/image";

export default function NotFound() {
  return (
    <div className={`fixed inset-0 bg-blue-400 z-50 flex flex-col justify-center items-center space-y-4 pb-20 transition-opacity duration-1000`}>
      <Image
        src="/images/nindologo.svg"
        width={120}
        height={120}
        alt="Nindo Task Ninja"
      />
      <div className="flex items-center space-x-2">
        <h1 className="font-irish-grover text-4xl">404</h1>
      </div>
      <p className="text-white text-center mt-4">
        Uh Oh, no page found!
      </p>
    </div>
  );
};