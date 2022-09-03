import { GqlProvider } from "../components/GqlProvider";
import { CHAIN_CONF } from "../config";

const Page = () => {
  return (
    <div className="container mx-auto flex justify-center pt-12 md:pt-[15%]">
      <div className="w-fit flex flex-col">
        <div className="flex justify-end">
          <button className="border py-1 px-4 rounded-lg relative top-0 transition-all hover:border-sky-500 active:top-1">
            Refresh
          </button>
        </div>
        <div className="mt-4 flex flex-col justify-start items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          {CHAIN_CONF.map((item, index) => (
            <GqlProvider key={index} endpoint={item.subql.endpoint} specName={item.specName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
