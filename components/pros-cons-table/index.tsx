import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
  proscons: {
    pros?: string;
    cons?: string;
  }[];
}

export default function ProsConsTable(props: Props) {
  return (
    <div className="not-prose -mx-5 overflow-auto rounded-md bg-[#fafaf9] p-6 md:mx-0">
      <table className="w-max table-fixed whitespace-nowrap md:w-full md:whitespace-normal">
        <thead>
          <tr>
            <th className="border-b border-r py-5 pl-14 pr-8 text-left text-base font-medium md:pl-20 md:text-xl">
              <span>PROS</span>
            </th>
            <th className="border-b py-5 pl-14 pr-8 text-left text-base font-medium md:pl-20 md:text-xl">
              <span>CONS</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.proscons.map((item, index) => (
            <tr key={index} className="group">
              <td
                data-label="Pros"
                className="border-b border-r py-4 pl-14 pr-8 text-left text-sm last:border-r-0 group-last:border-b-0 md:pl-20 md:text-[15px]"
              >
                {item.pros && (
                  <span className="relative">
                    <CheckIcon
                      className="absolute -left-10 top-1/2 h-5 w-5 -translate-y-1/2 text-[#90d010]"
                      strokeWidth={3}
                    />
                    <span>{item.pros}</span>
                  </span>
                )}
              </td>
              <td
                data-label="Cons"
                className="border-b border-r py-4 pl-14 pr-8 text-left text-sm last:border-r-0 group-last:border-b-0 md:pl-20 md:text-[15px]"
              >
                {item.cons && (
                  <span className="relative">
                    <XMarkIcon
                      className="absolute -left-10 top-1/2 h-5 w-5 -translate-y-1/2 text-[#ff0f0f]"
                      strokeWidth={3}
                    />
                    <span>{item.cons}</span>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
