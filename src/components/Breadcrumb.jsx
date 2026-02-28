export default function Breadcrumb({ items }) {
  return (
    <div className="flex w-full p-4  items-center text-[12px] uppercase tracking-wider font-medium text-gray-600 mb-6 ">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span
            className={`${index === items.length - 1
                ? "text-gray-600"
                : "hover:text-black cursor-pointer transition-colors duration-200"
              }`}
          >
            {item}
          </span>
          {index !== items.length - 1 && (
            <span className="mx-3 text-gray-400">
              &gt;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}