interface Props {
  title?: string;
  timestamp?: string;
  loading?: boolean;
}

export const Card = ({ title, timestamp, loading }: Props) => (
  <div className="shadow-xl rounded-lg border w-60 h-32 transition-transform hover:scale-105 relative">
    {loading && (
      <div className="w-10 h-10 border-4 border-t-slate-400 border-r-slate-400 rounded-full animate-spin absolute top-0 bottom-0 left-0 right-0 m-auto z-10" />
    )}
    {title && timestamp ? (
      <>
        <div className={`p-4 border-b ${loading ? "opacity-20" : ""}`}>
          <header className="font-bold">{title}</header>
        </div>
        <div className={`p-4 ${loading ? "opacity-20" : ""}`}>
          <span>{timestamp}</span>
        </div>
      </>
    ) : (
      <div className={`w-full h-full flex justify-center items-center ${loading ? "opacity-20" : ""}`}>
        <span>No Data</span>
      </div>
    )}
  </div>
);
