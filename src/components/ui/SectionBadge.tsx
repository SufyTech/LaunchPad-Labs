import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ children }) => {
  return (
    <div className="bg-[rgba(242,242,242,1)] flex w-fit max-w-full flex-col overflow-hidden items-stretch justify-center p-1 rounded-[31px]">
      <div className="bg-white flex items-stretch gap-[13px] overflow-hidden px-[15px] py-[9px] rounded-[83px]">
        <div className="bg-[rgba(7,100,218,0.2)] flex flex-col items-center justify-center w-[18px] h-[18px] px-[3px] rounded-[50%]">
          <div className="bg-[rgba(7,100,218,0.32)] flex flex-col items-center justify-center w-3 h-3 px-0.5 rounded-[50%]">
            <div className="bg-[rgba(7,100,218,0.66)] flex w-2 shrink-0 h-2 rounded-[50%]" />
          </div>
        </div>
        <div className="text-black text-sm font-medium">
          {children}
        </div>
      </div>
    </div>
  );
};
