import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ChartComponent } from "./ChartComponent";
import { HistoryTableComponent } from "./HistoryTableComponent";

export function SideBarComponent({ value }: { value: any }) {
  return (
    <SheetContent className="bg-[#121825] text-white">
      <SheetHeader>
        <SheetTitle className="text-white text-xl mb-8">{value}</SheetTitle>
      </SheetHeader>
      <div>
        <ChartComponent />
      </div>
      <div className="mb-8 mt-8 lg:mb-10">
        <div className="border-[0.1px]" />
        <SheetTitle className="text-white text-xl mb-8 mt-8">
          История операций
        </SheetTitle>
        <HistoryTableComponent />
      </div>
    </SheetContent>
  );
}
