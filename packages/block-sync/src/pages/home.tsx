import { GqlProvider } from "../components/GqlProvider";
import { CHAIN_CONF } from "../config";

const Page = () => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      {CHAIN_CONF.map((item, index) => (
        <GqlProvider key={index} endpoint={item.subql.endpoint} specName={item.specName} />
      ))}
    </div>
  );
};

export default Page;
